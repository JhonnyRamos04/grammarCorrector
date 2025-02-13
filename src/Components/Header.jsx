import { ThemeButton } from "./ThemeButton"

export const Header = () => {
    return (
        <header className="flex w-full justify-between items-center sticky top-0 py-4 px-4 md:px-7 bg-sky-600/60 backdrop-blur-sm z-10">
            <h1 className="font-bold text-xl md:text-2xl text-yellow-300">
                JRLIA <span className="font-light text-white text-sm md:text-base">Corrector gramatical</span>
            </h1>
            <ThemeButton />
        </header>
    )
}

