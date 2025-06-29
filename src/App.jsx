import { Form } from "./Components/Form"
import { GrammarProvider } from "./context/grammar"
import { Paragraph } from "./Components/Paragraph";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";



function App() {

  return (
    <GrammarProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            <div className="w-full lg:w-1/2">
              <Form />
            </div>
            <div className="w-full lg:w-1/2">
              <Paragraph />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </GrammarProvider>
  )
}

export default App
