export const jseaContent = {
    intro: {
        title: "The Ultimate Guide to CBC",
        subtitle: "Navigating the JSEA Transition & AI Era",
        description: "Imagine if school wasn't just about memorizing facts but about learning how to solve real problems - that's CBC! It's like switching from just learning football rules to actually playing on the field. The government introduced CBC to prepare you for the real world (Ulimwengu wa Kazi), not just exams."
    },
    cbcJourney: [
        { stage: "Pre-Primary", duration: "2 Years", desc: "Foundation" },
        { stage: "Lower Primary", duration: "Grades 1-3", desc: "Early Years" },
        { stage: "Upper Primary", duration: "Grades 4-6", desc: "Middle School Start" },
        { stage: "Junior School", duration: "Grades 7-9", desc: "Core Competencies" },
        { stage: "JSEA Exam", duration: "End of Gr 9", desc: "The Big Transition Audit" },
        { stage: "Senior School", duration: "3 Pathways", desc: "Specialization (STEM, Arts, Social)" },
        { stage: "University/TVET", duration: "Higher Ed", desc: "Career Preparation" },
        { stage: "World of Work", duration: "Life", desc: "AI-Ready Skills (Kazi)" }
    ],
    gradingSystem: [
        { subject: "Mathematics", code: "MAT", areas: "Problem Solving, Calculations", levels: "EE, AE, BE, ME, SE" },
        { subject: "English", code: "ENG", areas: "Communication, Writing, Reading", levels: "EE, AE, BE, ME, SE" },
        { subject: "Kiswahili", code: "KIS", areas: "Lugha, Kusoma, Kuandika", levels: "EE, AE, BE, ME, SE" },
        { subject: "Integrated Science", code: "SCI", areas: "Experiments, Science Concepts", levels: "EE, AE, BE, ME, SE" },
        { subject: "Social Studies", code: "SOC", areas: "Community, History, Citizenship", levels: "EE, AE, BE, ME, SE" },
        { subject: "Creative Arts", code: "ART", areas: "Music, Art, Drama Skills", levels: "EE, AE, BE, ME, SE" },
        { subject: "Business Studies", code: "BUS", areas: "Money, Business Basics", levels: "EE, AE, BE, ME, SE" },
        { subject: "Agriculture", code: "AGR", areas: "Farming, Food Security", levels: "EE, AE, BE, ME, SE" },
        { subject: "Physical Education", code: "PE", areas: "Sports, Health, Fitness", levels: "EE, AE, BE, ME, SE" },
        { subject: "Religious Education", code: "REL", areas: "Ethics, Values, Morals", levels: "EE, AE, BE, ME, SE" }
    ],
    gradingScale: [
        { code: "SE", level: "Surpassing Expectations", points: 5, description: "Excellent! Going beyond requirements 🌟" },
        { code: "ME", level: "Meeting Expectations", points: 4, description: "Right on target! ✅" },
        { code: "AE", level: "Approaching Expectations", points: 3, description: "Getting there but needs practice" },
        { code: "BE", level: "Beginning Expectations", points: 2, description: "Starting to meet requirements" },
        { code: "EE", level: "Emerging Expectations", points: 1, description: "Just beginning to understand" }
    ],
    pathways: [
        {
            id: "stem",
            title: "STEM Pathway",
            desc: "Science, Technology, Engineering & Mathematics. Best for: Solving problems, experiments, math.",
            subjects: [
                { name: "Physics", learn: "Forces, energy, universe", career: "Engineer, Astronomer", threadLevel: "Low 🤖✅" },
                { name: "Chemistry", learn: "Elements, reactions", career: "Pharmacist, Researcher", threadLevel: "Medium-Low 🤖⚠️" },
                { name: "Biology", learn: "Life, cells, genetics", career: "Doctor, Environmentalist", threadLevel: "Medium 🤖⚠️" },
                { name: "Pure Math", learn: "Advanced theories", career: "Data Scientist, Actuary", threadLevel: "Very Low 🤖✅" },
                { name: "Applied Math", learn: "Real-world math", career: "Financial Analyst", threadLevel: "Low 🤖✅" }
            ]
        },
        {
            id: "social",
            title: "Social Sciences",
            desc: "Study of society. Best for: Leaders, readers, social change.",
            subjects: [
                { name: "History & Gov", learn: "Past events, leadership", career: "Lawyer, Politician", threadLevel: "Medium 🤖⚠️" },
                { name: "Geography", learn: "Earth, environments", career: "Urban Planner", threadLevel: "Medium 🤖⚠️" },
                { name: "Business", learn: "Management, entrepreneurship", career: "Manager, Consultant", threadLevel: "High 🤖🔥" },
                { name: "Economics", learn: "Money, markets", career: "Economist", threadLevel: "Medium-High 🤖🔥" },
                { name: "Computer Studies", learn: "Programming, IT", career: "Software Dev", threadLevel: "Low 🤖✅" }
            ]
        },
        {
            id: "arts",
            title: "Arts & Sports Science",
            desc: "Creativity & Physiology. Best for: Artists, Athletes, Performers.",
            subjects: [
                { name: "Music", learn: "Composition, performance", career: "Musician, Sound Engineer", threadLevel: "Low 🤖✅" },
                { name: "Art & Design", learn: "Drawing, digital art", career: "Graphic Designer", threadLevel: "Medium 🤖⚠️" },
                { name: "French/Arabic", learn: "Languages, culture", career: "Translator, Diplomat", threadLevel: "High 🤖🔥" },
                { name: "Sports Science", learn: "Body mechanics", career: "Athlete, Coach", threadLevel: "Very Low 🤖✅" },
                { name: "Home Science", learn: "Nutrition, care", career: "Nutritionist, Chef", threadLevel: "Medium 🤖⚠️" }
            ]
        }
    ],
    aiImpact: {
        stats: [
            { name: "High Risk (60-90%)", value: 35, fill: "#ef4444" },
            { name: "Medium Risk (30-60%)", value: 40, fill: "#f97316" },
            { name: "Low Risk (0-30%)", value: 25, fill: "#22c55e" }
        ],
        highRisk: [
            "Data Entry Clerks 🤖🔥", "Accounting Bookkeepers 🤖🔥", "Basic Customer Service 🤖🔥", "Procurement Assistants 🤖🔥"
        ],
        mediumRisk: [
            "Bank Tellers 🤖⚠️", "HR Recruiters 🤖⚠️", "Journalists (basic) 🤖⚠️"
        ],
        safe: [
            "Healthcare Workers 🤖✅", "Teachers/Trainers 🤖✅", "AI Specialists 🤖✅", "Creative Pros 🤖✅", "Skilled Trades 🤖✅"
        ]
    }
};
