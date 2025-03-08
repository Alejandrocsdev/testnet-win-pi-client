// 函式庫 (library)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 公開頁面 (public pages)
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
