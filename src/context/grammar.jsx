import { createContext, useState } from "react";

export const GrammarContext = createContext()

export function GrammarProvider({ children }) {
    const [correctText, setCorrectText] = useState('')
    const [data, setData] = useState('')

    return (
        <GrammarContext.Provider value={{
            correctText,
            setCorrectText,
            data,
            setData
        }}>
            {children}
        </GrammarContext.Provider>
    )
}