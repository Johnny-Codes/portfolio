import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const serverDir = path.join(root, 'dist-ssr')
const serverEntry = fs
  .readdirSync(serverDir)
  .find((file) => /^entry-server.*\.m?js$/.test(file))

if (!serverEntry) throw new Error('SSR bundle not found in dist-ssr')

const { render, structuredData } = await import(
  pathToFileURL(path.join(serverDir, serverEntry)).href
)

let html = fs.readFileSync(htmlPath, 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Expected empty <div id="root"></div> in dist/index.html')
}

const jsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c')

html = html
  .replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
  .replace(
    '</head>',
    () => `<script type="application/ld+json">${jsonLd}</script>\n  </head>`,
  )

fs.writeFileSync(htmlPath, html)
fs.rmSync(serverDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')
