import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGeminiTroubleshooter = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful technical support assistant for Google AI Studio. 
      The user is asking a question about using AI Studio, specifically regarding GitHub integration, account management, or error messages.
      
      User Query: "${userQuery}"
      
      Provide a concise, step-by-step solution. If the question is about "Something went wrong" when uploading to GitHub, explain that it's usually an auth token issue or repo permission issue.
      Format the response with clear paragraphs and bullet points where necessary. Keep it under 200 words if possible.`,
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while contacting the troubleshooting assistant. Please try again later.";
  }
};