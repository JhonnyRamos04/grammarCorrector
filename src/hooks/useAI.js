import { useContext, useEffect, useRef } from "react"
import { FixGrammar, ExtendText, SummarizeText } from "../service/Ai"
import { GrammarContext } from "../context/grammar"



export const useAI = () => {

  const { setCorrectText, extendText, setExtendText, summarizeText, setSummarizeText, data, setData } = useContext(GrammarContext)
  const previusPrompt = useRef(data)


  useEffect(() => {
    if (!data) return
    if (data.length < 3) return
    if (data == previusPrompt.current && !extendText && !summarizeText) return

    if (extendText) {
      ExtendText(data)
        .then(res => setCorrectText(res))
        .catch(err => console.error('Error with response', err))
      setExtendText(false)
    } else if (summarizeText) {
      SummarizeText(data)
        .then(res => setCorrectText(res))
        .catch(err => console.error('Error with response', err))
      setSummarizeText(false)
    } else {
      FixGrammar(data)
        .then(res => setCorrectText(res))
        .catch(err => console.error('Error with response', err))
    }

    previusPrompt.current = data

  }, [data, extendText, summarizeText])



  return { setData, setExtendText, setSummarizeText }
}




