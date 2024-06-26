import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RoomContextProvider} from './pages/main/create-room/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomContextProvider>
     <App />
    </RoomContextProvider>
  </React.StrictMode>,
)
