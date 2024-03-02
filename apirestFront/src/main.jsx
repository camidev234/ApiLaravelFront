import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { GeneralContextProvider } from './context/GeneralContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>,
)
