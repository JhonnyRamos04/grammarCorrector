import { createContext, useState } from "react";

export const GrammarContext = createContext()

export function GrammarProvider({ children }) {
    const [correctText, setCorrectText] = useState('')
    const [data, setData] = useState('')
    const [extendText, setExtendText] = useState(false)
    const [summarizeText, setSummarizeText] = useState(false)

    return (
        <GrammarContext.Provider value={{
            correctText,
            setCorrectText,
            data,
            setData,
            extendText,
            setExtendText,
            summarizeText,
            setSummarizeText
        }}>
            {children}
        </GrammarContext.Provider>
    )
}