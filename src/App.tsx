import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { MarketPerspectives } from './pages/MarketPerspectives'
import { Contact } from './pages/Contact'
import './App.css'

export function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/market-perspectives" element={<MarketPerspectives />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
