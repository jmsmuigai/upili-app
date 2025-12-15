// Simulated Vector Store / Knowledge Base
// In a real app, this would be Pinecone, Supabase pgvector, or Firebase Vector Search

export const KNEC_DATA = {
    sms_code: "20076",
    website: "https://www.knec.ac.ke/category/exams/kjsea/",
    grading: {
        "Exemplary": "80-100",
        "Meeting Expectation": "65-79",
        "Approaching Expectation": "50-64",
        "Below Expectation": "0-49"
    }
};

const KNOWLEDGE_BASE = [
    // ... Previous KNEC Data ...
    {
        id: "grading_system_kjsea",
        tags: ["grade", "jsea", "score", "level", "kjsea", "8-level"],
        content: "OFFICIAL KJSEA 2025 Grading (8 Levels):\n- **EE1** (Exceeding Expectations 1): 90-100% (8 Points)\n- **EE2**: 75-89% (7 Points)\n- **ME1** (Meeting Expectations 1): 58-74% (6 Points)\n- **ME2**: 41-57% (5 Points)\n- **AE1** (Approaching Expectations 1): 31-40% (4 Points)\n- **AE2**: 21-30% (3 Points)\n- **BE1** (Below Expectations 1): 11-20% (2 Points)\n- **BE2**: 1-10% (1 Point)\n\nNote: 'E' is not failure, but indicates 'Below Expectations' requiring support."
    },
    {
        id: "labor_market_stats",
        tags: ["market", "demand", "jobs", "statistics", "growth", "salary", "pay"],
        content: "**CREDIBLE MARKET STATISTICS (2025-2030):**\n1. **Tech Shortage**: Kenya has a shortage of 10,000+ Cybersecurity & Data professionals. Earning potential: KES 150k+ entry level.\n2. **Blue Collar Gold**: Certified Welders and Plumbers (TVET) are earning 3x more than general degree holders due to construction boom.\n3. **Agriculture 2.0**: Agritech specialists are in high demand as farming digitizes.\n4. **Creative Economy**: Content Creation contributes 5% to GDP. It is a viable career, not just a hobby."
    },
    {
        id: "placement_formula",
        tags: ["placement", "selection", "form 1", "grade 10", "formula"],
        content: "Senior School Placement Formula (100% Total):\n1. **KJSEA (Grade 9 Assessment)**: 60%\n2. **KPSEA (Grade 6)**: 20%\n3. **School-Based Assessments (Grade 7 & 8)**: 20%\n\nPlacement also considers: Learner's Choice (Pathways) and School Infrastructure (e.g. Science Labs)."
    },
    {
        id: "tvet_advocacy",
        tags: ["tvet", "plumbing", "masonry", "welding", "technical", "polytechnic", "diploma"],
        content: "**TVET IS THE FUTURE**: Technical skills like Plumbing, Welding, and Electrical Engineering are highly paid and 'AI-Resistant'. A certified welder can earn more than a desk manager. We encourage TVET for grades ME2 and below, or for anyone with strong hands-on talent. 'Blue Collar is the new Gold Collar'."
    },
    {
        id: "tech_skills",
        tags: ["google", "kaggle", "ai", "coding", "machine learning", "future", "hackathon"],
        content: "**FUTURE PROOFING**: Every student, regardless of pathway, MUST learn Tech. \n1. **Google AI Essentials**: Learn Generative AI at [aistudio.google.com](https://aistudio.google.com).\n2. **Kaggle**: Join data science competitions at [kaggle.com](https://kaggle.com) to win cash prizes and global recognition.\n3. **Hackathons**: Join local coding meetups."
    },
    {
        id: "dual_career",
        tags: ["football", "music", "sport", "art", "talent", "side hustle"],
        content: "**THE DUAL CAREER STRATEGY**: You don't have to choose only one. \n- **Math + Football**: Become a Statistician/Actuary AND play professional football.\n- **Biology + Art**: Become a Medical Illustrator.\n- **Physics + Music**: Become a Sound Engineer.\nAlways have a 'Main Hustle' (Academic) and a 'Side Hustle' (Talent)."
    },
    {
        id: "jsea_timeline",
        tags: ["timeline", "dates", "when", "schedule", "calendar", "next", "after exam"],
        content: "**POST-JSEA TIMELINE (What Happens Next):**\n1.  **Nov/Dec**: Exams Marking & Compilation.\n2.  **January**: Results Released by KNEC.\n3.  **Late Jan**: Senior School Placement (Selection) results announced.\n4.  **February**: Grade 10 Admission/Reporting to Senior Schools.\n\n*Note: The government ensures 100% Transition. Every child gets a slot.*"
    },
    {
        id: "parent_guide",
        tags: ["parent", "confused", "help", "boarding", "fees", "fail"],
        content: "**PARENT SURVIVAL GUIDE:**\n- **Confusion?**: Don't panic. The process is digital and automated.\n- **100% Transition**: No child is left behind. Even if scores are low, they will be placed in a Day or Sub-County school.\n- **Boarding vs Day**: Grade 10 allows both. New 'Senior Schools' are being built.\n- **What to do now?**: While waiting, enroll your child in a computer short course (Coding/AI). Keep them busy!"
    },
    {
        id: "selection_rules",
        tags: ["rules", "cutoff", "criteria", "stem criteria", "arts criteria"],
        content: "PLACEMENT CRITERIA:\n1. **STEM Pathway**: Requires 'ME1' or higher in Math AND Science. Preferred for Engineering, Medicine, CS.\n2. **Arts & Sports**: Requires 'ME1' or higher in Creative Arts or PE. Preferred for Media, Music, Athletics.\n3. **Social Sciences**: Flexible, requires strong Humanities/Languages.\n\n**National Schools Cutoff**: Generally requires an aggregate score of 80% or higher."
    },
    // ... Portals and School Lists (kept same) ...
    {
        id: "portals",
        tags: ["portal", "link", "register", "results", "download", "knec"],
        content: "OFFICIAL KNEC PORTALS:\n- **KJSEA Results & Placement**: [kjsea.knec.ac.ke](https://kjsea.knec.ac.ke)\n- **CBA/School Login**: [cba.knec.ac.ke](https://cba.knec.ac.ke) (For Headteachers to download slips)\n- **KPSEA Results**: [knec-portal.ac.ke](https://www.knec-portal.ac.ke)\n- **General Info**: [www.knec.ac.ke](https://www.knec.ac.ke)"
    },
    {
        id: "pathways",
        tags: ["stem", "arts", "social", "science", "track"],
        content: "Senior School has 3 Main Pathways: 1. STEM (Science, Technology, Engineering, Math) - for future Engineers, Doctors, IT. 2. Social Sciences - for Law, Business, Humanities. 3. Arts & Sports Science - for Musicians, Athletes, Actors, Media."
    },
    {
        id: "garissa_schools",
        tags: ["garissa", "north eastern", "nep"],
        content: "Top Schools in Garissa Region: 1. Garissa High School (STEM & Social). 2. NEP Girls High School (STEM Focus). 3. Umu Salama Girls. 4. County High School Garissa."
    },
    {
        id: "mombasa_schools",
        tags: ["mombasa", "coast", "wani"],
        content: "Top Schools in Mombasa Region: 1. Shimo La Tewa (STEM & Sports). 2. Mama Ngina Girls. 3. Aga Khan High School. 4. Alladina Visram."
    },
    {
        id: "kisumu_schools",
        tags: ["kisumu", "nyanza", "lake"],
        content: "Top Schools in Kisumu Region: 1. Maseno School (Strong STEM/Math). 2. Kisumu Girls. 3. Kisumu Day (Arts/Sports)."
    },
    {
        id: "nairobi_schools",
        tags: ["nairobi", "city", "capital"],
        content: "Top Schools in Nairobi: 1. Alliance (nearby Kiambu). 2. Kenya High. 3. Lenana School. 4. Moi Forces Academy. 5. Pangani Girls."
    }
];

export function searchBrain(query: string): string {
    const lowerQuery = query.toLowerCase();

    // Simple Keyword Match Simulation
    const results = KNOWLEDGE_BASE.filter(item =>
        item.tags.some(tag => lowerQuery.includes(tag))
    );

    if (results.length === 0) {
        // Fallback: If query is related to "next" or "exams", show timeline
        if (lowerQuery.includes('next') || lowerQuery.includes('after') || lowerQuery.includes('finish')) {
            return KNOWLEDGE_BASE.find(k => k.id === "jsea_timeline")?.content || "";
        }

        // If query is about demand/jobs, return stats
        if (lowerQuery.includes('job') || lowerQuery.includes('money') || lowerQuery.includes('demand')) {
            return KNOWLEDGE_BASE.find(k => k.id === "labor_market_stats")?.content || "";
        }

        return KNOWLEDGE_BASE.find(k => k.id === "tech_skills")?.content +
            "\n" +
            KNOWLEDGE_BASE.find(k => k.id === "tvet_advocacy")?.content +
            "\n" +
            KNOWLEDGE_BASE.find(k => k.id === "labor_market_stats")?.content;
    }

    return results.map(r => `[SOURCE: ${r.id}]: ${r.content} `).join("\n\n");
}
