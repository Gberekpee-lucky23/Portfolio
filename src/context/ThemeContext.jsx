import { createContext } from "react"

// Create context with default values
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

export default ThemeContext