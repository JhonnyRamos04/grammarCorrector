import { Form } from "./Components/Form"
import { GrammarProvider } from "./context/grammar"
import { Paragraph } from "./Components/Paragraph";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";



function App() {

  return (
    <GrammarProvider>
      <div className="absolute dark:bg-gray-800 h-screen w-screen -z-10"></div>
      <Header />
      <main className="w-full h-full flex-wrap flex justify-start items-center md:justify-center flex-col mt-10  ">
        <section className="flex flex-col md:flex-row gap-y-2 gap-x-5 max-w-screen-lg">
          <Form />
          <Paragraph />
        </section>
      </main>
      <Footer />
    </GrammarProvider>
  )
}

export default App
