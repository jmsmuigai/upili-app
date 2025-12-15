export type Pathway = "STM" | "Social Sciences" | "Arts & Sports";

export interface Subject {
    id: string;
    name: string;
    category: "Core" | "Elective" | "Optional";
    pathways: Pathway[];
}

export interface Combination {
    name: string;
    description: string;
    subjects: string[]; // Subject IDs
    careerPotential: string;
}

export const SENIOR_PATHWAYS: { id: Pathway; name: string; description: string; color: string }[] = [
    {
        id: "STM",
        name: "Science, Technology & Mathematics",
        description: "For future engineers, doctors, scientists, and tech innovators.",
        color: "bg-blue-600",
    },
    {
        id: "Social Sciences",
        name: "Social Sciences",
        description: "Focus on humanities, business, languages, and social studies.",
        color: "bg-green-600",
    },
    {
        id: "Arts & Sports",
        name: "Arts & Sports Science",
        description: "Nurturing creative talent in performing arts, visual arts, and athletics.",
        color: "bg-purple-600",
    },
];

export const SUBJECTS: Subject[] = [
    { id: "math", name: "Advanced Mathematics", category: "Core", pathways: ["STM", "Social Sciences"] },
    { id: "phys", name: "Physics", category: "Core", pathways: ["STM"] },
    { id: "chem", name: "Chemistry", category: "Core", pathways: ["STM"] },
    { id: "bio", name: "Biology", category: "Core", pathways: ["STM"] },
    { id: "cs", name: "Computer Science", category: "Elective", pathways: ["STM", "Arts & Sports"] },
    { id: "hist", name: "History", category: "Elective", pathways: ["Social Sciences"] },
    { id: "geo", name: "Geography", category: "Elective", pathways: ["Social Sciences", "STM"] },
    { id: "bus", name: "Business Studies", category: "Elective", pathways: ["Social Sciences"] },
    { id: "art", name: "Visual Arts", category: "Elective", pathways: ["Arts & Sports"] },
    { id: "music", name: "Music", category: "Elective", pathways: ["Arts & Sports"] },
];

export const COMBINATIONS: Combination[] = [
    {
        name: "Pure Sciences",
        description: "The classic combination for medical and rigorous engineering paths.",
        subjects: ["math", "phys", "chem", "bio"],
        careerPotential: "Medicine, Pharmacy, Chemical Engineering, Research",
    },
    {
        name: "Technology & CS",
        description: "Focused on the digital future and systems.",
        subjects: ["math", "phys", "cs", "geo"],
        careerPotential: "Software Engineering, Data Science, AI Specialist, Systems Architect",
    },
    {
        name: "Computer & Arts",
        description: "Blending creativity with technology.",
        subjects: ["math", "cs", "art", "bus"],
        careerPotential: "UX/UI Design, Game Development, Digital Marketing, Animation",
    },
];

export const EXPECTATIONS = {
    exceeded: "Excellent mastery of content. Ready for advanced placement.",
    meeting: "Solid understanding of curriculum. Transition ready.",
    approaching: "Need focused revision in specific areas before Senior Secondary.",
};
