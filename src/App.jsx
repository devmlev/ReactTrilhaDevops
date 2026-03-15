import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Download from './pages/Download'
import Privacidade from './pages/Privacidade'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
      <Route path="/privacidade" element={<Privacidade />} />
    </Routes>
  )
}

export default App
