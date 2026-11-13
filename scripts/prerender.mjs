import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const serverDir = path.join(root, 'dist-ssr')
const serverEntry = fs
  .readdirSync(serverDir)
  .find((file) => /^entry-server.*\.m?js$/.test(file))

if (!serverEntry) throw new Error('SSR bundle not found in dist-ssr')

const { render, getStructuredData, pages } = await import(
  pathToFileURL(path.join(serverDir, serverEntry)).href
)

const ROOT_RE = /<div id="root"( data-page="([\w-]+)")?><\/div>/

for (const page of pages) {
  const htmlPath = path.join(root, 'dist', page.html)
  let html = fs.readFileSync(htmlPath, 'utf8')

  const match = html.match(ROOT_RE)
  if (!match) {
    throw new Error(`Expected empty <div id="root"> in dist/${page.html}`)
  }
  const declaredPage = match[2] ?? 'home'
  if (declaredPage !== page.id) {
    throw new Error(`dist/${page.html} has data-page="${declaredPage}", expected "${page.id}"`)
  }

  const jsonLd = JSON.stringify(getStructuredData(page.id)).replace(/</g, '\\u003c')

  html = html
    .replace(ROOT_RE, (whole) => whole.replace('></div>', `>${render(page.id)}</div>`))
    .replace(
      '</head>',
      () => `<script type="application/ld+json">${jsonLd}</script>\n  </head>`,
    )

  fs.writeFileSync(htmlPath, html)
  console.log(`Prerendered dist/${page.html}`)
}

fs.rmSync(serverDir, { recursive: true, force: true })
