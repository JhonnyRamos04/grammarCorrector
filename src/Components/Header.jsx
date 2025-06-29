import { ThemeButton } from "./ThemeButton"

export const Header = () => {
    return (
        <header className="flex w-full justify-between items-center sticky top-0 py-4 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-sky-700 dark:from-sky-800 dark:to-sky-900 backdrop-blur-sm z-10 shadow-lg">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-300 rounded-lg flex items-center justify-center shadow-md">
                    <span className="font-bold text-sky-700 text-lg">J</span>
                </div>
                <div>
                    <h1 className="font-bold text-xl md:text-2xl text-white">
                        JRLIA
                    </h1>
                    <p className="font-light text-sky-100 text-sm md:text-base">
                        Corrector Gramatical Inteligente
                    </p>
                </div>
            </div>
            <ThemeButton />
        </header>
    )
}

