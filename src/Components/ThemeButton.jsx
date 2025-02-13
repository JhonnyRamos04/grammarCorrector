
import { useEffect, useState } from "react"
import { Moon } from "./Icons/Moon"
import { Sun } from "./Icons/Sun"

export const ThemeButton = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    return (
        <button
            onClick={handleChangeTheme}
            className="relative w-14 h-8 rounded-full bg-gray-700/50 p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
            <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full transform transition-transform duration-300 ease-in-out flex items-center justify-center ${theme === "dark" ? "translate-x-6 bg-gray-800" : "bg-white"
                    }`}
            >
                {theme === "dark" ? <Moon className="w-4 h-4 text-gray-100" /> : <Sun className="w-4 h-4 text-gray-800" />}
            </div>
        </button>
    )
}

