import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'

export default function App() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ color: 'red', fontSize: '40px', textAlign: 'center', marginBottom: '50px' }}>
        🚀 LE MOTEUR REACT FONCTIONNE ! 🚀
      </h1>
      
      {/* Le reste de votre site qui est actuellement invisible : */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}
