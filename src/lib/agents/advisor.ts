import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export const advisorAgent = {
    analyzeProfile: async (profile: any) => {
        // Schema for structured output
        const AnalysisSchema = z.object({
            summary: z.string().describe("Empathetic summary of the student's profile"),
            recommendedSubjects: z.array(z.object({
                name: z.string(),
                relevance: z.string(),
                matchScore: z.number().min(0).max(100)
            })),
            careerPath: z.object({
                title: z.string(),
                description: z.string(),
                steps: z.array(z.string()),
                aiThreatAnalysis: z.object({
                    threatLevel: z.enum(["LOW", "MEDIUM", "HIGH"]),
                    reasoning: z.string(),
                    resilienceScore: z.number()
                })
            }),
            tvetRecommendation: z.object({
                shouldConsider: z.boolean(),
                reason: z.string().optional(),
                courses: z.array(z.string()).optional()
            }).optional()
        });

        const prompt = `
      You are an Advanced Agentic Advisor for Kenyan JSEA students (approx 14 years old).
      Analyze this student profile:
      ${JSON.stringify(profile)}

      Task:
      1. Map their strengths to the Kenyan CBC (Competency Based Curriculum) for Senior School.
      2. Recommend the best subject combinations (STEM, Arts, Sports Science, etc.).
      3. Draw a career path that is realistic but "future-proof".
      4. CRITICAL: Analyze the threat of AI to their desired career. Be honest but kind. Explain clearly.
      5. If their scores are low or they show practical aptitude, suggest TVET (Technical and Vocational Education and Training) as a prestigious and viable option.

      Tone: Robotic but kind, futuristic, encouraging. Speak like a mentor from the year 2050.
    `;

        try {
            const result = await generateObject({
                model: google("gemini-1.5-pro-latest"),
                schema: AnalysisSchema,
                prompt: prompt,
            });

            return result.object;
        } catch (error) {
            console.error("Agent Analysis Failed:", error);
            throw error;
        }
    }
};
