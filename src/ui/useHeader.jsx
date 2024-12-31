import { useEffect, useState } from "react"
import useTheme from "../utility/theme/theme"

const useHeader = () => {


    const{ setThemeOnLoad,switchTheme} = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(false); 

useEffect(()=>{
setThemeOnLoad()
setIsDarkMode(document.documentElement.classList.contains("dark"));
},[setThemeOnLoad])

const toggleTheme = () => {
    switchTheme()
    setIsDarkMode((prev) => !prev)
}

  return (
toggleTheme, isDarkMode
  )
}

export default useHeader
