import { GoogleGenerativeAI } from "@google/generative-ai";
import { QUESTIONS } from "../constants";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Missing Gemini API Key in .env.local");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

export interface StudyProfile {
    identity_label: string;
    title: string;
    description: string;
    traits: string[];
}

export const generateStudyProfile = async (answers: Record<number, string | number>): Promise<StudyProfile> => {
    console.log("generateStudyProfile called with:", answers); // Debug log

    if (!answers || Object.keys(answers).length === 0) {
        console.warn("Answers object is empty or undefined");
        // Return a fallback immediately if no answers
        return {
            identity_label: "Mystery Student",
            title: "The Uncharted Territory",
            description: "We couldn't capture enough data to analyze your profile. Please try retaking the quiz.",
            traits: ["Unknown", "Mystery", "Enigma"]
        };
    }

    try {
        // Use gemini-1.5-flash for speed and reliability
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Convert answers to readable format
        let userContext = "";
        Object.entries(answers).forEach(([questionId, answerId]) => {
            const question = QUESTIONS.find(q => q.id === Number(questionId));
            if (question) {
                let answerLabel = answerId;
                if (question.options) {
                    const selectedOption = question.options.find(opt => opt.id.toString() === answerId.toString());
                    if (selectedOption) answerLabel = selectedOption.label;
                }
                userContext += `Q: ${question.question}\nA: ${answerLabel}\n\n`;
            }
        });

        const prompt = `
      You are a "Study Therapist" who can see right through a student's excuses.
      Your goal is to provoke an immediate "How did they know that?" reaction.

      DATA POINTS:
      ${userContext}

      TASK:
      Write a profile that mirrors their specific struggle back to them.
      
      GUIDELINES FOR DESCRIPTION:
      1. **Connect the Dots**: If they say they are "Night Owl" + "Procrastinator", explain WHY (e.g., "You stay up late not because you're productive, but because it feels like the only time the world leaves you alone.").
      2. **Call Out Their Contradictions**: If they say "High Confidence" but "Low Study Hours", call it "Overconfidence Trap".
      3. **Use Their Words**: If they said "Burnout", use that word.
      4. **No Fluff**: Don't say "You can do it". Say "You are currently failing because..."

      OUTPUT FORMAT (JSON):
      - identity_label: A 2-3 word archetype (e.g., "Anxious Night-Watchman", "Burned-Out Spark").
      - title: Empowering but real title (e.g., "The 3 AM Warrior").
      - description: A 3-sentence psychological read. Start with "Let's be real." or "Here is the pattern."
      - traits: [Trait1, Trait2, Trait3] (e.g. "Revenge Bedtime Procrastinator")
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("Gemini Raw Response:", text); // Debug log

        // Improved JSON extraction: Find first '{' and last '}'
        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}');

        if (startIndex === -1 || endIndex === -1) {
            throw new Error("No JSON found in response");
        }

        const jsonString = text.substring(startIndex, endIndex + 1);
        return JSON.parse(jsonString);

    } catch (error: any) {
        console.error("Gemini API Error:", error);
        throw new Error(error.message || "Failed to connect to Gemini API");
    }
};
