import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import './index.css'
import { getStructuredData } from './structuredData.js'
import { pages } from './pages.js'

export function render(page) {
  return renderToString(
    <React.StrictMode>
      <App page={page} />
    </React.StrictMode>,
  )
}

export { getStructuredData, pages }
