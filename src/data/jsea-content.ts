export const jseaContent = {
    intro: {
        title: "The Great Transition",
        subtitle: "A Comprehensive Analysis of the Kenya Junior School Education Assessment (JSEA) and the AI-Driven Future",
        description: "The transformation from 8-4-4 to CBC is a fundamental philosophical restructuring. JSEA is the diagnostic capstone of Grade 9, guiding learners into specialized Senior School pathways."
    },
    jsea: {
        title: "Decoding JSEA",
        structure: {
            formative: {
                percentage: 40,
                title: "School-Based Assessments (SBA)",
                description: "Cumulative projects and portfolios from Grades 7 & 8."
            },
            summative: {
                percentage: 60,
                title: "National Examination",
                description: "Standardized KNEC assessment at the end of Grade 9."
            }
        },
        grading: [
            { code: "EE", level: "Exceeding Expectations", range: "80-100%", points: 4, description: "Demonstrates superior analysis and synthesis. Ready for challenging STEM or specialized Arts tracks." },
            { code: "ME", level: "Meeting Expectations", range: "60-79%", points: 3, description: "Solid understanding of concepts. Good fit for most pathways with focus." },
            { code: "AE", level: "Approaching Expectations", range: "40-59%", points: 2, description: "Basic understanding but needs support. Vocational training or stronger focus on talents advised." },
            { code: "BE", level: "Below Expectations", range: "0-39%", points: 1, description: "Needs remedial support. Focus on practical skills and vocational training (TVET)." }
        ]
    },
    pathways: [
        {
            id: "stem",
            title: "STEM Pathway",
            description: "Science, Technology, Engineering & Mathematics. The cornerstone of Vision 2030.",
            tracks: [
                { name: "Pure Sciences", focus: "Biology, Chemistry, Physics", careers: "Medicine, Engineering, Actuarial Science" },
                { name: "Applied Sciences", focus: "Agriculture, Computer Studies", careers: "Agribusiness, Software Dev, Nutrition" },
                { name: "Technical & Engineering", focus: "Building, Power Mechanics, Aviation", careers: "Pilot, Architect, Civil Engineer" },
                { name: "Career & Technology", focus: "Plumbing, Welding, Hairdressing", careers: "Entrepreneurship, Technical Trades" }
            ]
        },
        {
            id: "social",
            title: "Social Sciences",
            description: "Study of human society, relationships, and institutions. Breeding ground for leaders.",
            tracks: [
                { name: "Humanities", focus: "History, Geography, Religious Education", careers: "Law, Diplomacy, Public Admin" },
                { name: "Business Studies", focus: "Commerce, Entrepreneurship", careers: "Accounting, HR, Banking (Requires Tech Skills)" },
                { name: "Languages", focus: "English, Kiswahili, Foreign Languages", careers: "International Relations, Journalism" }
            ]
        },
        {
            id: "arts",
            title: "Arts & Sports Science",
            description: "The Orange Economy. Visual arts, performance, and sports mechanics.",
            tracks: [
                { name: "The Arts", focus: "Visual and Performing Arts", careers: "Film Production, Graphic Design, Animation" },
                { name: "Sports Science", focus: "Physical Education, Kinesiology", careers: "Sports Management, Physiotherapy, Coaching" }
            ]
        }
    ],
    aiFuture: {
        title: "The AI Reality Check",
        warnings: [
            { role: "Accounting", risk: "High", reason: "Routine bookkeeping and tax compliance are automated by AI." },
            { role: "Human Resources (Admin)", risk: "High", reason: "Resume screening and onboarding are handled by AI agents." },
            { role: "Procurement", risk: "Medium", reason: "PO automation and spend analysis are becoming autonomous." },
            { role: "Creative Design", risk: "Low", reason: "AI assists but cannot replace true human vision and empathy." }
        ],
        advice: [
            { title: "Learn the Language of AI", content: "Don't just use ChatGPT to write essays. Use it as a tutor. Learn Prompt Engineering." },
            { title: "Double Down on 'Human' Skills", content: "Critical thinking, Emotional Intelligence (EQ), and unique Creativity cannot be automated." },
            { title: "Hybridize Your Skills", content: "Love Business? Learn Coding. Love Arts? Learn Generative AI tools." }
        ]
    }
};
