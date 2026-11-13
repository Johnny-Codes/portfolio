import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const page = root.dataset.page || 'home'
const app = (
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>
)

// Production HTML is prerendered; the dev server serves an empty root.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
