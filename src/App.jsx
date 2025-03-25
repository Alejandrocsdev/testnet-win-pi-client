// 樣式 (css)
import './assets/css/global.css'
// 函式庫 (library)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 公開頁面 (public pages)
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
