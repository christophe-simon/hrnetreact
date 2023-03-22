import React from 'react'
import ReactDOM from 'react-dom/client'
import { EmployeeProvider } from './contexts/EmployeeContext'
import App from './components/App'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>
)
