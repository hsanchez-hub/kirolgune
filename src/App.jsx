import { Route, Routes } from 'react-router-dom'
import Goiburua from './components/Goiburua.jsx'
import Hasiera from './pages/Hasiera.jsx'
import OrriHutsa from './pages/OrriHutsa.jsx'

function App() {
  return (
    <>
      <Goiburua />
      <main>
        <Routes>
          <Route path="/" element={<Hasiera />} />
          <Route path="/instalazioak" element={<OrriHutsa izenburua="Instalazioak" />} />
          <Route path="/jarduerak" element={<OrriHutsa izenburua="Jarduerak" />} />
          <Route path="/erreserbak" element={<OrriHutsa izenburua="Erreserbak" />} />
          <Route path="/kontaktua" element={<OrriHutsa izenburua="Kontaktua" />} />
          <Route path="/saioa-hasi" element={<OrriHutsa izenburua="Saioa hasi" />} />
          <Route path="/erregistratu" element={<OrriHutsa izenburua="Erregistratu" />} />
          <Route path="*" element={<OrriHutsa izenburua="Orria ez da aurkitu" />} />
        </Routes>
      </main>
    </>
  )
}

export default App
