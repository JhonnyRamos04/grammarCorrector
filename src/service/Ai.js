import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI("AIzaSyBp37VmfHh8LwebGa1Oztzn4LvPj2rTUTM")

export async function FixGrammar(prompt) {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro-latest" })
  const result = await model.generateContent(`Me puedes corregir la gramática del siguiente texto, sin mostrar las equivocaciones solo el texto corregido, el texto en cuestión es este:${prompt}`);
  const response = result.response;
  return response.text()

}