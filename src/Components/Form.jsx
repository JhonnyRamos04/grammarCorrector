import { useRef, useState } from "react"
import { useAI } from "../hooks/useAI"

export const Form = () => {
    const text = useRef(null)
    const { setData, setExtendText, setSummarizeText } = useAI()
    const [currentCharacters, setCurrentCharacters] = useState(0)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.current && text.current.value.trim()) {
            setIsProcessing(true)
            setData(text.current.value)
            setTimeout(() => setIsProcessing(false), 2000) // Reset after processing
        }
    }

    const handleChange = (event) => {
        setCurrentCharacters(event.target.value.length)
    }

    const handleClick = () => {
        if (text.current && text.current.value.trim()) {
            setIsProcessing(true)
            setExtendText(true)
            setTimeout(() => setIsProcessing(false), 2000)
        }
    }

    const handleSummarize = () => {
        if (text.current && text.current.value.trim()) {
            setIsProcessing(true)
            setSummarizeText(true)
            setTimeout(() => setIsProcessing(false), 2000)
        }
    }

    const getCharacterColor = () => {
        if (currentCharacters > 2800) return "text-red-500"
        if (currentCharacters > 2000) return "text-yellow-500"
        return "text-gray-500 dark:text-gray-400"
    }

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full mb-6 border border-gray-200 rounded-xl bg-gray-50 dark:border-gray-600 dark:bg-gray-700 shadow-lg">
                    <div className="px-4 py-3 bg-white/35 dark:bg-white/5 rounded-t-xl">
                        <textarea
                            id="checker"
                            onChange={handleChange}
                            maxLength={3000}
                            spellCheck={false}
                            ref={text}
                            placeholder="Escribe aquí tu texto... (máximo 3000 caracteres)"
                            required
                            disabled={isProcessing}
                            className="w-full min-h-[180px] sm:min-h-[220px] md:min-h-[280px] resize-none p-3 text-base font-medium text-gray-700 dark:text-gray-100 bg-transparent hover:placeholder:text-gray-900 dark:hover:placeholder:text-gray-50 transition-colors focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:outline-none rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        ></textarea>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-t dark:border-gray-600 bg-gray-100/50 dark:bg-gray-800/30 rounded-b-xl">
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-0">
                            <button
                                type="submit"
                                disabled={isProcessing || !text.current?.value.trim()}
                                className="inline-flex items-center py-2.5 px-5 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105"
                                title="Corregir gramática y ortografía"
                            >
                                {isProcessing ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Procesando...
                                    </div>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Corregir
                                    </>
                                )}
                            </button>
                            
                            <button
                                type="button"
                                onClick={handleClick}
                                disabled={isProcessing || !text.current?.value.trim()}
                                className="inline-flex items-center py-2.5 px-5 text-sm font-medium text-center text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105"
                                title="Extender y mejorar el texto"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                Extender
                            </button>
                            
                            <button
                                type="button"
                                onClick={handleSummarize}
                                disabled={isProcessing || !text.current?.value.trim()}
                                className="inline-flex items-center py-2.5 px-5 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105"
                                title="Crear un resumen del texto"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Resumir
                            </button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div 
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentCharacters > 2800 ? 'bg-red-500' : 
                                        currentCharacters > 2000 ? 'bg-yellow-500' : 'bg-sky-500'
                                    }`}
                                    style={{ width: `${(currentCharacters / 3000) * 100}%` }}
                                ></div>
                            </div>
                            <span className={`text-sm font-medium ${getCharacterColor()}`}>
                                {currentCharacters}/3000
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

