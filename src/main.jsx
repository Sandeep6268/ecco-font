import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './component/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
