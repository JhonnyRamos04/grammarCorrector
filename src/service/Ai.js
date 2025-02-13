import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)

export async function FixGrammar(prompt) {
  const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash" })
  const result = await model.generateContent(`Me puedes corregir la gramática del siguiente texto, sin mostrar las equivocaciones solo el texto corregido, el texto en cuestión es este:${prompt}`);
  const response = result.response;
  return response.text()
}

export async function ExtendText(prompt) {
  const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash" })
  const result = await model.generateContent(`Me puedes alargar y corregir la gramática del siguiente texto, sin mostrar las equivocaciones solo el texto corregido, el texto en cuestión es este:${prompt}`);
  const response = result.response;
  return response.text()
}