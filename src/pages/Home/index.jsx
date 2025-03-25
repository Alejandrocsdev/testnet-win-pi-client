// 樣式模組 (css module)
import S from './style.module.css'

// 首頁
function Home() {
  return (
    <main className={S.main}>
      <p>This is home page.</p>
    </main>
  )
}

export default Home
