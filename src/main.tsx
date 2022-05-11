import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'

import 'assets/scss/main.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
