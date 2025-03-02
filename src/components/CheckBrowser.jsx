// 檢查瀏覽器
function CheckBrowser() {
  const handleBrowserCheck = async () => {
    try {
      const result = await window.Pi.checkUserHasPiBrowser()
      console.log('User has Pi Browser:', result)
    } catch (error) {
      console.error(error)
    }
  }

  return <button onClick={handleBrowserCheck}>Check Browser</button>
}

export default CheckBrowser
