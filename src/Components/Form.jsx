import { useRef, useState } from "react"
import { useAI } from "../hooks/useAI"



export const Form = () => {

    const text = useRef(null)
    const { setData, setExtendText } = useAI()
    const [currentCharacters, setCurrentCharacters] = useState(0)


    const handleSubmit = (event) => {

        event.preventDefault()
        setData(text.current.value)
        setData(text.current.value)

    }

    const handleChange = (event) => {
        setCurrentCharacters(event.target.value.length)
    }
    const handleClick = () => {
        setExtendText(true)
    }





    return (

        <div className=" flex content-center items-center flex-col">
            <form onSubmit={handleSubmit}>
                <div className="w-full mb-4 border border-gray-400 rounded-lg bg-gray-100 dark:border-black dark:bg-gray-700 ">
                    <div className="px-4 py-2 bg-white/35 dark:bg-white/5 rounded-t-lg">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="checker" onChange={handleChange} maxLength={3000} spellCheck={false} ref={text} className="w-[220px] overflow-scroll md:overflow-auto min-w-[100px] max-h-[200px] md:max-h-[500px] h-[150px] md:h-[500px] md:w-[400px] resize-none p-2 text-base font-medium text-gray-700 dark:text-gray-100 bg-transparent hover:placeholder:text-gray-900 dark:hover:placeholder:text-gray-50 transition-colors ring-0 border-0 focus:outline-none" placeholder="Comienza escribiendo algo..." required ></textarea>
                    </div>
                    <div className="flex dark:border-none border items-center justify-between px-3 py-2 border-t ">
                        <div className="flex gap-2">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-700 transition-all hover:scale-110 rounded-lg focus:ring-1g-2 focus:ring-sky-200 hover:bg-sky-800">
                                Corregir
                            </button>
                            <button type="submit" onClick={handleClick} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-700 transition-all hover:scale-110 rounded-full focus:ring-1g-2 focus:ring-sky-200 hover:bg-sky-800">Extender texto
                            </button>
                        </div>
                        <span className=" text-gray-900 dark:text-white text-sm font-extralight">
                            {`${currentCharacters}/3000`}
                        </span>
                    </div>
                </div>
            </form>
        </div>


    )
}