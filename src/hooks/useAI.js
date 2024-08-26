
import { useContext, useEffect, useRef } from "react"
import { FixGrammar, ExtendText } from "../service/Ai"
import { GrammarContext } from "../context/grammar"



export const useAI = () => {

  const { setCorrectText, extendText, setExtendText, data, setData } = useContext(GrammarContext)
  const previusPrompt = useRef(data)
  console.log(extendText)

  useEffect(() => {
    if (!data) return
    if (data.length < 3) return
    if (data == previusPrompt.current) return

    if (extendText) {
      ExtendText(data)
        .then(res => setCorrectText(res))
        .catch(err => console.error('Error with response', err))
      setExtendText(false)
    } else {

      FixGrammar(data)
        .then(res => setCorrectText(res))
        .catch(err => console.error('Error with response', err))
    }


  }, [data])



  return { setData, setExtendText }
}




