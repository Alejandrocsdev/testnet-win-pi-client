// 樣式模組 (css module)
import S from './style.module.css'
// 組件
import CheckBrowser from '../../components/CheckBrowser'

import { useEffect, useState } from 'react' // test browser

// 首頁
function Home() {
  const [userAgent, setUserAgent] = useState('') // test browser

  useEffect(() => { // test browser
    setUserAgent(navigator.userAgent) // test browser
  }, []) // test browser

  return (
    <main className={S.main}>
      <span>Home</span>
      <a href="/test">Go to Test</a>
      <CheckBrowser/>
      <p>{userAgent}</p> // test browser
    </main>
  )
}

export default Home
