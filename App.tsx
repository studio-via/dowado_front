import { Routes, Route } from 'react-router-dom'
import MHScreen from './components/MH/MHScreen'
import GMScreen from './components/GM/GMScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MHScreen/>} />
      <Route path="/gm" element={<GMScreen/>} />
    </Routes>
  )
}
