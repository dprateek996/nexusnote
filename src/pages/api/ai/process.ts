import { GoogleGenerativeAI } from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from 'next';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

    const { prompt, task } = req.body; // task: 'summarize' | 'acronym' | 'tips'

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Context-aware prompting based on the task
        let finalPrompt = prompt;
        if (task === 'summarize') finalPrompt = `Summarize this text into key takeaways and action items: ${prompt}`;
        if (task === 'acronym') finalPrompt = `Create a catchy acronym and memory trick for these terms: ${prompt}`;
        if (task === 'tips') finalPrompt = `Give me 3 creative study tips or mnemonics for: ${prompt}`;

        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ text });
    } catch (error) {
        res.status(500).json({ error: "AI Processing Failed" });
    }
}
