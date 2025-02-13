
import { useState } from "react"
import { useText } from "../hooks/useText"
import { Copy } from "./Icons/Copy"

export const Paragraph = () => {
    const { correctText } = useText()
    const [modal, setModal] = useState(false)

    const handleClick = () => {
        if (!navigator.clipboard) {
            return
        }
        navigator.clipboard.writeText(correctText)
        setModal(true)
        setTimeout(() => setModal(false), 600)
    }

    return (
        <>
            {correctText.length > 3 && (
                <div className="relative flex flex-col bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border dark:border-gray-800 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto min-h-[150px] max-h-[70vh] overflow-auto">
                    <div className="flex-grow p-4">
                        <p className="text-base md:text-lg font-bold w-full h-full dark:bg-gray-800/30 bg-gray-100/20 rounded-md p-4 mr-4">
                            {correctText}
                        </p>
                    </div>
                    <div className="absolute top-6 right-6" onClick={handleClick}>
                        <button className="bg-sky-600 hover:bg-sky-700 transition-all rounded-full text-white w-9 h-9 flex items-center justify-center hover:scale-110">
                            <Copy />
                        </button>
                    </div>
                    <span
                        className={`absolute text-white font-medium text-sm bg-sky-600/70 rounded-xl right-2 top-14 p-2 z-10 transition-opacity duration-200 delay-75 ${modal ? "opacity-100" : "opacity-0"}`}
                    >
                        Copiado
                    </span>
                </div>
            )}
        </>
    )
}

