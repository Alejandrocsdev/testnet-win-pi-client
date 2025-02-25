// 函式庫 (library)
import { useEffect } from 'react'

// 載入腳本
function useScript(src, onLoad) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    // 當腳本載入完成後，執行指定的函式
    script.onload = onLoad
    document.head.appendChild(script)
    return () => {
      // 卸載時應該移除腳本，避免記憶體洩漏及重複加載相同的腳本
      document.head.removeChild(script)
    }
  }, [src, onLoad])
}

export default useScript
