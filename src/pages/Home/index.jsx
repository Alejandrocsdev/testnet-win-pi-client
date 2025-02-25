// 樣式模組 (css module)
import S from './style.module.css'
// 組件
import CheckBrowser from '../../components/CheckBrowser'

// 首頁
function Home() {
  return (
    <main className={S.main}>
      <span>Home</span>
      <a href="/test">Go to Test</a>
      <CheckBrowser/>
    </main>
  )
}

export default Home
