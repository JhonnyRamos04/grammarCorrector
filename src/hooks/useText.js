import { useContext } from 'react'
import { GrammarContext } from '../context/grammar'


export const useText = () => {
    const context = useContext(GrammarContext)

    if (context === undefined) {
        throw new Error('useText must be used within a CartProvider')
    }

    return context
}