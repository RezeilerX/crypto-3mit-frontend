import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import normalizeViteEnv from 'utils/normalizeViteEnv'

import 'assets/scss/main.scss'

normalizeViteEnv()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
