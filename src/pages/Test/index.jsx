// 樣式模組 (css module)
import S from './style.module.css'

// 測試頁面
function Test() {
  return (
    <main className={S.main}>
      <span>Test</span>
      <a href="/">Go to Home</a>
    </main>
  )
}

export default Test
