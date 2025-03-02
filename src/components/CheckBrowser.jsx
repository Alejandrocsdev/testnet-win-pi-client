import { useState } from 'react'

// 檢查瀏覽器
function CheckBrowser() {
  const [piBrowser, setPiBrowser] = useState(null)
  const [miningApp, setMiningApp] = useState(null)
  const [systemBrowser, setSystemBrowser] = useState(null)
  const handleBrowserCheck = async () => {
    if (!window.Pi) {
      console.error('Pi SDK is not available')
      return
    }

    try {
      const result1 = await window.Pi.checkUserHasPiBrowser()
      const result2 = await window.Pi.checkUserHasMiningApp()
      const result3 = await window.Pi.openUrlInSystemBrowser()

      // Extracting correct values
      setPiBrowser(result1)
      setMiningApp(result2)
      setSystemBrowser(result3)

      console.log('User has Pi Browser:', result1)
      console.log('User has Mining App:', result2)
      console.log('User has Mining App:', result3)
    } catch (error) {
      console.error('Error checking browser or mining app:', error)
    }
  }

  return (
    <>
      <button onClick={handleBrowserCheck}>Check Browser</button>
      <p>Pi Browser: {piBrowser !== null ? piBrowser.toString() : 'Checking...'}</p>
      <p>Mining App: {miningApp !== null ? miningApp.toString() : 'Checking...'}</p>
      <p>Mining App: {systemBrowser !== null ? systemBrowser.toString() : 'Checking...'}</p>
    </>
  )
}

export default CheckBrowser
