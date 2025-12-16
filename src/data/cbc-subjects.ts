export interface CBCSubject {
    id: string;
    name: string;
    category: "STEM" | "Humanities" | "Technical" | "Arts" | "Sports";
    description: string;
    futureRelevance: "Critical" | "High" | "Stable" | "Declining";
    threatLevel: "Low" | "Medium" | "High";
    examFormat: {
        theory: number; // Percentage
        project: number; // Percentage
        description: string;
    };
    careerPaths: Array<{
        title: string;
        description: string;
    }>;
}

export const cbcSubjects: CBCSubject[] = [
    {
        id: "STEM_01",
        name: "Pure Mathematics",
        category: "STEM",
        description: "The universal language. Essential for AI logic, Financial Modelling, and Engineering.",
        futureRelevance: "Critical",
        threatLevel: "Medium",
        examFormat: {
            theory: 70,
            project: 30,
            description: "Heavy emphasis on problem-solving logic. Project involves applying math to real-world scenarios (e.g., traffic flow)."
        },
        careerPaths: [
            { title: "AI Research Scientist", description: "Design the algorithms that power future intelligence." },
            { title: "Quantum Cryptographer", description: "Secure the post-quantum internet." }
        ]
    },
    {
        id: "STEM_02",
        name: "Computer Science",
        category: "STEM",
        description: "The architect of the digital age. Coding, systems design, and algorithmic thinking.",
        futureRelevance: "Critical",
        threatLevel: "High",
        examFormat: {
            theory: 50,
            project: 50,
            description: "Balanced assessment. You must build a working software solution as your capstone project."
        },
        careerPaths: [
            { title: "Full-Stack Neuro-Developer", description: "Build interfaces that connect brains to computers." },
            { title: "Ethical Hacker", description: "Defend critical infrastructure from cyber warfare." }
        ]
    },
    {
        id: "HUM_01",
        name: "History",
        category: "Humanities",
        description: "Analyzing the past to strategize for the future. Context is King.",
        futureRelevance: "Stable",
        threatLevel: "Low",
        examFormat: {
            theory: 60,
            project: 40,
            description: "Research-heavy. Projects involve documenting local oral histories or analyzing political trends."
        },
        careerPaths: [
            { title: "International Diplomat", description: "Negotiate peace in a complex, multipolar world." },
            { title: "UX Anthropologist", description: "Help tech companies understand human behavior." }
        ]
    },
    {
        id: "TECH_01",
        name: "Pre-Technical Studies",
        category: "Technical",
        description: "Engineering foundations. Design, fabrication, and material science.",
        futureRelevance: "High",
        threatLevel: "Low",
        examFormat: {
            theory: 30,
            project: 70,
            description: "Hands-on mastery. Your final grade depends heavily on a physical prototype you build."
        },
        careerPaths: [
            { title: "Robotics Engineer", description: "Build and maintain the automated workforce." },
            { title: "Sustainable Architect", description: "Design green cities for a changing climate." }
        ]
    },
    {
        id: "ART_01",
        name: "Performing Arts",
        category: "Arts",
        description: "Human expression, culture, and storytelling. The soul of civilization.",
        futureRelevance: "High",
        threatLevel: "Low",
        examFormat: {
            theory: 40,
            project: 60,
            description: "Performance-based. You are graded on live execution and creative composition."
        },
        careerPaths: [
            { title: "Virtual Reality Director", description: "Craft immersive experiences for the metaverse." },
            { title: "Cultural Brand Strategist", description: "Tell authentic stories for global brands." }
        ]
    }
];
