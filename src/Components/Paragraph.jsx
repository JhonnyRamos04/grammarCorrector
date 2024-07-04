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
            {
                correctText.length > 3 &&
                <div className="bg-gray-50 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100 relative flex border rounded-lg w-[250px] min-h-[150px] overflow-scroll md:overflow-auto max-h-[200px] md:max-h-[600px] md:min-w-[300px] md:h-[570px]">
                    <div>
                        <p className="p-4 text-base md:text-lg font-bold size-full dark:bg-gray-800/50 bg-gray-100/20 rounded-md">
                            {correctText}
                        </p>
                    </div>
                    <div className="p-2" onClick={handleClick}>
                        <button className=" bg-sky-600 hover:scale-110 hover:bg-sky-700 transition-all rounded-full text-white size-10 flex items-center justify-center"><Copy /></button>
                    </div>

                    <span className={`absolute text-white font-medium text-sm bg-sky-600/70 rounded-xl right-2 top-14 p-2 z-10 transition-opacity duration-200 delay-75 ${modal == true ? 'opacity-100' : 'opacity-0'}`}>Copiado</span>

                </div>

            }
        </>
    )
}
