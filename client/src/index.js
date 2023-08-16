import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App/App.jsx'
import { GlobalStyles } from '~/components/common'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
)
