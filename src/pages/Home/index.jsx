// 樣式模組 (css module)
import S from './style.module.css'

// 首頁
function Home() {
  return (
    <main className={S.main}>
      <div>Home</div>
      <a href="/test">Go to Test</a>
    </main>
  )
}

export default Home
