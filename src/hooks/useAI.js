
import { useContext, useEffect, useRef } from "react"
import { FixGrammar } from "../service/Ai"
import { GrammarContext } from "../context/grammar"



export const useAI = () => {

  const { setCorrectText, data, setData } = useContext(GrammarContext)
  const previusPrompt = useRef(data)

  useEffect(() => {
    if (!data) return
    if (data.length < 3) return
    if (data == previusPrompt.current) return

    FixGrammar(data)
      .then(res => setCorrectText(res))
      .catch(err => console.error('Error with response', err))

  }, [data])

  return { setData }
}




