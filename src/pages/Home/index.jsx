// 樣式模組 (css module)
import S from './style.module.css'
// 組件
import CheckBrowser from '../../components/CheckBrowser'

import { useState, useEffect } from 'react'

// 首頁
function Home() {
  const [userAgent, setUserAgent] = useState('')
  const [userAgentData, setUserAgentData] = useState(null)

  useEffect(() => {
    setUserAgent(navigator.userAgent)
    setUserAgentData(navigator.userAgentData || null)
  }, [])

  return (
    <main className={S.main}>
      <span>Home</span>
      <a href="/test">Go to Test</a>
      <CheckBrowser />
      <div>
        <h3>UserAgent:</h3>
        <p>{userAgent}</p>
      </div>

      <div>
        <h3>UserAgentData:</h3>
        <pre>{JSON.stringify(userAgentData, null, 2)}</pre>
      </div>
    </main>
  )
}

export default Home
