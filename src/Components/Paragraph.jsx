import { useState, useContext } from "react"
import { useText } from "../hooks/useText"
import { Copy } from "./Icons/Copy"
import { GrammarContext } from "../context/grammar"

export const Paragraph = () => {
    const { correctText } = useText()
    const { extendText, summarizeText } = useContext(GrammarContext)
    const [modal, setModal] = useState(false)

    const handleClick = () => {
        if (!navigator.clipboard) {
            return
        }
        navigator.clipboard.writeText(correctText)
        setModal(true)
        setTimeout(() => setModal(false), 1500)
    }

    const getResultType = () => {
        if (extendText) return { type: "extend", label: "Texto Extendido", color: "emerald" }
        if (summarizeText) return { type: "summarize", label: "Resumen", color: "purple" }
        return { type: "correct", label: "Texto Corregido", color: "sky" }
    }

    const resultInfo = getResultType()

    return (
        <>
            {correctText.length > 3 && (
                <div className="relative flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto min-h-[200px] max-h-[70vh] overflow-hidden shadow-xl">
                    {/* Header with result type */}
                    <div className={`bg-${resultInfo.color}-600 text-white px-4 py-3 rounded-t-xl`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                {resultInfo.type === "correct" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                                {resultInfo.type === "extend" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                    </svg>
                                )}
                                {resultInfo.type === "summarize" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                )}
                                <span className="font-semibold text-sm">{resultInfo.label}</span>
                            </div>
                            <button 
                                onClick={handleClick}
                                className="bg-white/20 hover:bg-white/30 transition-all rounded-lg text-white w-8 h-8 flex items-center justify-center hover:scale-110"
                                title="Copiar al portapapeles"
                            >
                                <Copy />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow p-4 overflow-auto">
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 h-full">
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-wrap">
                                {correctText}
                            </p>
                        </div>
                    </div>

                    {/* Success message */}
                    <div
                        className={`absolute top-16 right-4 text-white font-medium text-sm bg-${resultInfo.color}-600 rounded-lg px-3 py-2 z-10 transition-all duration-300 transform ${
                            modal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copiado al portapapeles</span>
                        </div>
                    </div>

                    {/* Footer with character count */}
                    <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 rounded-b-xl">
                        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                            <span>Caracteres: {correctText.length}</span>
                            <span>Palabras: {correctText.split(/\s+/).filter(word => word.length > 0).length}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

