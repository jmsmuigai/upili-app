"use server";

import { advisorAgent } from "@/lib/agents/advisor";

export async function analyzeStudentProfile(profile: unknown) {
    try {
        const analysis = await advisorAgent.analyzeProfile(profile);
        return { success: true, data: analysis };
    } catch (error) {
        console.error("Analysis Error:", error);
        return { success: false, error: "Failed to generate analysis. Please try again." };
    }
}
