
import { useEffect, useState } from 'react'
import { Moon } from './Icons/Moon'
import { Sun } from './Icons/Sun'

export const ThemeButton = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)")) return 'dark'
        else return 'light'
    })

    useEffect(() => {
        if (theme == 'dark') {
            document.querySelector('body').classList.add('dark')
        } else {
            document.querySelector('body').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <button onClick={handleChangeTheme} className='bg-sky-600 text-gray-100 rounded-full size-8 flex items-center justify-center p-1'>
            {
                theme == 'dark' ?
                    <Moon /> : <Sun />
            }

        </button>
    )
}
