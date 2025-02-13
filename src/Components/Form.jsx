import { useRef, useState } from "react"
import { useAI } from "../hooks/useAI"

export const Form = () => {
    const text = useRef(null)
    const { setData, setExtendText } = useAI()
    const [currentCharacters, setCurrentCharacters] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.current) {
            setData(text.current.value)
        }
    }

    const handleChange = (event) => {
        setCurrentCharacters(event.target.value.length)
    }

    const handleClick = () => {
        setExtendText(true)
    }

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                    <div className="px-4 py-2 bg-white/35 dark:bg-white/5 rounded-t-lg">
                        <textarea
                            id="checker"
                            onChange={handleChange}
                            maxLength={3000}
                            spellCheck={false}
                            ref={text}
                            placeholder="Comienza escribiendo algo..."
                            required
                            className="w-full min-h-[150px] sm:min-h-[200px] md:min-h-[300px] resize-none p-2 text-base font-medium text-gray-700 dark:text-gray-100 bg-transparent hover:placeholder:text-gray-900 dark:hover:placeholder:text-gray-50 transition-colors focus:ring-0 focus:border-transparent focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <div className="flex gap-2 mb-2 sm:mb-0">
                            <button
                                type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-2 focus:ring-sky-300 transition-all"
                            >
                                Corregir
                            </button>
                            <button
                                type="button"
                                onClick={handleClick}
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-700 rounded-full hover:bg-sky-800 focus:ring-2 focus:ring-sky-300 transition-all"
                            >
                                Extender texto
                            </button>
                        </div>
                        <span className="text-gray-900 dark:text-white text-sm font-extralight">{`${currentCharacters}/3000`}</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

