// Comprehensive Data Source for Upili

export const APP_CONFIG = {
    name: "Upili",
    slogan: "Make the Ultimate Decision from Data!",
    description: "Advanced algorithms powering your transition to Senior Secondary.",
};

export const WELLNESS_ADVICE = [
    {
        topic: "Adolescence & You",
        content: "Growing up means your brain is rewiring. It's normal to feel emotional changes. Use this energy to fuel your creativity, not conflict.",
        icon: "Brain",
    },
    {
        topic: "Responsible Living",
        content: "Avoid high-risk behaviors like early sexual activity or substance abuse. They can derail your data-driven path to success. Protect your future.",
        icon: "Shield",
    },
    {
        topic: "Mental Strength",
        content: "Intelligence isn't just grades. It's knowing when to say NO to peer pressure and YES to your goals. Report violence or harassment immediately.",
        icon: "Heart",
    },
];

export const JSEA_GRADING = {
    title: "Understanding Your JSEA Results",
    levels: [
        { code: "EE", name: "Exceeding Expectations", desc: "Top Tier Performance (80-100%). Ready for Pure Sciences & Complex Arts.", color: "text-green-400" },
        { code: "ME", name: "Meeting Expectations", desc: "Solid Foundation (50-79%). Good fit for Humanities, Technical Skills.", color: "text-yellow-400" },
        { code: "AE", name: "Approaching Expectations", desc: "Developing (30-49%). Focus on vocational training and hands-on skills.", color: "text-orange-400" },
        { code: "BE", name: "Below Expectations", desc: "Needs Support (0-29%). Requires remedial attention.", color: "text-red-400" },
    ]
};

export const TEXTBOOK_RECOMMENDATIONS = [
    { subject: "Mathematics", title: "Comprehensive Secondary Maths", publisher: "KLB / Oxford", image: "https://textbookcentre.com/media/products/2020205000628.jpg" },
    { subject: "Physics", title: "Secondary Physics Book 4", publisher: "Kenya Literature Bureau", image: "https://textbookcentre.com/media/products/2020205000574.jpg" },
    { subject: "Biology", title: "Explore Biology", publisher: "Longhorn", image: "https://textbookcentre.com/media/products/2020205000994.jpg" },
    { subject: "History", title: "Evolving World", publisher: "Oxford", image: "https://textbookcentre.com/media/products/1005000000030.jpg" },
];

export const AGENT_DIALOGUES = [
    { text: "Niko hapa kukusaidia kuchagua!", lang: "Swahili", delay: 0 },
    { text: "Mundu wa nyumba, ukwenda atia?", lang: "Kikuyu", delay: 2 },
    { text: "Tubonge hapa nikusaidie!", lang: "Sheng", delay: 4 },
    { text: "Make Informed Decisions with AI", lang: "English", delay: 6 },
    { text: "Uria Kiuria Haha!", lang: "Kikuyu", delay: 8 },
    { text: "Usijali, Agent Upili ako rada.", lang: "Sheng", delay: 10 },
];

export const ADS_DATA = [
    {
        id: "tbc",
        title: "Textbook Centre Online",
        desc: "Get all Senior Secondary Books delivered to your doorstep.",
        cta: "Shop Now",
        color: "from-orange-600 to-red-600",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800"
    },
    {
        id: "girls_school",
        title: "Precious Blood Riruta",
        desc: "Excellence in STEM for the Girl Child. Admissions Open.",
        cta: "Apply",
        color: "from-purple-600 to-pink-600",
        image: "https://images.unsplash.com/photo-1594537672205-d0c265e6406e?w=800"
    },
    {
        id: "boys_school",
        title: "Mangu High School",
        desc: "Aviation & Engineering Giants. Join the League of Champions.",
        cta: "Visit",
        color: "from-blue-600 to-cyan-600",
        image: "https://images.unsplash.com/photo-1549646467-ee6e40d8de8e?w=800"
    }
];

export const EXAM_FORMAT = {
    title: "Senior School Assessment Model",
    desc: "Assessment is no longer just one exam. It is a mix of continuous cats and practicals.",
    points: [
        "70% Formative Assessment (School Based Projects)",
        "30% Summative Assessment (KNEC Final Exam)",
        "Mandatory Community Service Learning (CSL)",
        "Practical competencies in chosen pathway"
    ]
};

export const STEM_DEEP_DIVE = {
    title: "The STEM Pathway (Science, Technology, Engineering, Mathematics)",
    description: "The engine of the future world.",
    aiContext: "In the next 5 years, AI will automate 40% of routine coding and analysis jobs. The new gold rush is 'Vibe Coding' - using AI to build apps without writing every line of code.",
    subjects: [
        {
            name: "Computer Science & AI",
            details: "Not just typing. You learn logic, algorithms, and how to train neural networks. Essential for the Digital Age.",
            careers: "AI Prompt Engineer, Robotics Tech, Systems Architect.",
        },
        {
            name: "Physics (The Laws of Nature)",
            details: "Understanding how the universe works. Applying forces to machines.",
            careers: "Mechanical Engineer, Aviation, Energy Analyst.",
        },
        {
            name: "Biology & Chemistry",
            details: "The study of life and matter. Critical for medicine and bio-tech.",
            careers: "Doctor, Pharmacist, Geneticist, Agricultural Researcher.",
        },
        {
            name: "Mathematics (The Language of Data)",
            details: "Data Science is the highest paying job globally. Math is your ticket there.",
            careers: "Data Scientist, Actuary, Financial Analyst.",
        }
    ],
    action: "Join Google Skills Africa freely available online to start learning Python and Generative AI today.",
};

export const SOCIAL_SCIENCES_DEEP_DIVE = {
    title: "Social Sciences (Humanities)",
    description: "Elewa jamii, ongoza taifa. (Understand society, lead the nation.)",
    localContext: "Katika Kenya, tunahitaji viongozi na wafanyabiashara wenye maadili. (In Kenya, we need ethical leaders and business people.)",
    subjects: [
        {
            name: "Business Studies",
            details: "Biashara na Ujasiriamali. Learn how to start a company, manage money, and invest in the Nairobi Securities Exchange (NSE).",
            successStory: "Like Equity Bank founders who started small and built an empire.",
        },
        {
            name: "History & Citizenship",
            details: "Historia yetu. Know where we came from to build the future. Government structure and rights.",
            successStory: "Great lawyers and politicians started here.",
        },
        {
            name: "Religious Education",
            details: "Maadili na Kiroho. Building a strong moral foundation is key to trusted leadership.",
        },
        {
            name: "Languages (English/Kiswahili/Foreign)",
            details: "Communication is power. Global diplomacy requires multilingual skills.",
        }
    ]
};

export const ARTS_SPORTS_MEGA = {
    title: "Creative Arts & Sports Science",
    description: "Monetize your talent. The Creator Economy is worth Billions.",
    subjects: [
        {
            name: "Performing Arts",
            details: "Music, Film, Theatre. With Netflix and YouTube, Kenyan content is going global.",
            successSlogan: "From TikTok to Hollywood.",
        },
        {
            name: "Visual Arts",
            details: "Graphic Design, Painting, Fashion. AI generates images, but YOU provide the taste and style.",
        },
        {
            name: "Sports Science",
            details: "It's not just running. It's anatomy, nutrition, and sports psychology. Managing athletes is a big business.",
            successSlogan: "Like Eliud Kipchoge - Science meets Discipline.",
        }
    ]
};

export const MARKET_ANALYSIS = {
    text: "The Kenyan market is shifting. Traditional office clerks are being replaced by AI automation. The demand is high for: 1. Creative Problem Solvers 2. Tech-Savvy Farmers 3. Data Analysts 4. Ethical Leaders.",
    chartData: [
        { label: "Routine Jobs (Declining)", value: 30, color: "bg-red-500" },
        { label: "AI & Tech (Booming)", value: 90, color: "bg-green-500" },
        { label: "Creative Arts (Rising)", value: 70, color: "bg-purple-500" },
        { label: "Manual Trades (Stable)", value: 50, color: "bg-yellow-500" },
    ]
};
