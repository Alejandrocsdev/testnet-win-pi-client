// 函式庫 (library)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 自訂函式 (custom function)
import useScript from './hooks/useScript'
// 公開頁面 (public pages)
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  const { VITE_SDK, MODE } = import.meta.env
  useScript(VITE_SDK, () => {
    window.Pi.init({ version: '2.0', sandbox: MODE !== 'production' })
      .then(() => {
        console.info('Pi SDK initialized:', window.Pi.initialized)
      })
      .catch(error => {
        console.error('Pi SDK initialization failed:', error)
      })
  })
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
