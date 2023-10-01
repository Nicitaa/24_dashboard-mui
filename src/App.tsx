/* react */
import { Route, Routes } from "react-router-dom"

/* dependencies */

/* pages/hooks/components */
import { HomePage } from "./pages"
import { Navbar } from "./components/Navbar"
import { Dashboard } from "./pages/DashboardPage"
import useDarkMode from "./store/darkModeStore"
import { useEffect } from "react"

function App() {
  const darkMode = useDarkMode()

  useEffect(() => {
    if (darkMode.isDarkMode) {
      document.getElementsByTagName("html")[0].classList.remove("light")
      document.getElementsByTagName("html")[0].classList.add("dark")
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark")
      document.getElementsByTagName("html")[0].classList.add("light")
    }
  }, [darkMode])

  return (
      <div
        style={{
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--title))",
          minHeight: "100vh",
          overflow: "hidden",
          transition: "all",
          transitionDuration: "300ms",
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
  )
}

export default App
