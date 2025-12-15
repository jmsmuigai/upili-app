
// Simulation Logic & Data Generator

export type Learner = {
    id: string;
    name: string;
    region: string;
    gender: "Male" | "Female";
    scores: {
        math: number;
        english: number;
        kiswahili: number;
        science: number;
        tech: number;
        arts: number;
    };
    kpsea: number; // Out of 60
    cba: number;   // Out of 60
    talents: string[];
    // Computed Fields
    kjseaGrade?: string;
    finalScore?: number;
    placement?: string;
    pathway?: string;
};

const REGIONS = ["Nairobi", "Mombasa", "Kisumu", "Garissa", "Nakuru", "Eldoret"];
const NAMES_MALE = ["Hassan", "Otieno", "Kamau", "Kiptoo", "Omondi", "Juma", "Abdi", "Mwangi", "Mutua", "Wekesa"];
const NAMES_FEMALE = ["Aisha", "Atieno", "Wanjiku", "Chebet", "Akoth", "Halima", "Fatuma", "Njeri", "Mumbua", "Nafula"];
const TALENTS = ["Coding", "Robotics", "Football", "Music", "Poetry", "Agriculture", "Debate", "Chess"];

// Official KJSEA 8-Level Grading
const getGrade = (score: number) => {
    if (score >= 90) return "EE1"; // Exceeding 1
    if (score >= 75) return "EE2";
    if (score >= 58) return "ME1"; // Meeting 1
    if (score >= 41) return "ME2";
    if (score >= 31) return "AE1"; // Approaching 1
    if (score >= 21) return "AE2";
    if (score >= 11) return "BE1"; // Below 1
    return "BE2";
};

// Regional Schools Database (Mock)
const SCHOOLS: Record<string, { stem: string[], arts: string[], social: string[] }> = {
    "Nairobi": { stem: ["Kenya High", "Lenana School"], arts: ["Nairobi School", "State House Girls"], social: ["Pangani Girls", "Jamhuri High"] },
    "Mombasa": { stem: ["Shimo La Tewa", "Aga Khan High"], arts: ["Alladina Visram", "Coast Girls"], social: ["Mama Ngina", "Sheikh Khalifa"] },
    "Kisumu": { stem: ["Maseno School", "Kisumu Girls"], arts: ["Kisumu Day", "Lwak Girls"], social: ["Kisumu Boys", "Ngiya Girls"] },
    "Garissa": { stem: ["Garissa High", "NEP Girls"], arts: ["County High", "Umu Salama"], social: ["Hyder Girls", "Iftin High"] },
    "Nakuru": { stem: ["Nakuru High", "Moi High Kabarak"], arts: ["Afraha High", "Menengai High"], social: ["Bahati Girls", "Njoro Boys"] },
    "Eldoret": { stem: ["Moi Girls Eldoret", "Kapsabet Boys"], arts: ["Wareng High", "Uasin Gishu"], social: ["Hill School", "64 Secondary"] }
};

export const generateDummyLearners = (count: number): Learner[] => {
    return Array.from({ length: count }).map((_, i) => {
        const gender = Math.random() > 0.5 ? "Male" : "Female";
        const fname = gender === "Male"
            ? NAMES_MALE[Math.floor(Math.random() * NAMES_MALE.length)]
            : NAMES_FEMALE[Math.floor(Math.random() * NAMES_FEMALE.length)];
        const lname = NAMES_MALE[Math.floor(Math.random() * NAMES_MALE.length)]; // Use male names as surnames
        const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];

        return {
            id: `L-${2025000 + i}`,
            name: `${fname} ${lname}`,
            region,
            gender,
            scores: {
                math: Math.floor(Math.random() * 60) + 40, // Bias towards passing
                english: Math.floor(Math.random() * 50) + 50,
                kiswahili: Math.floor(Math.random() * 50) + 50,
                science: Math.floor(Math.random() * 60) + 40,
                tech: Math.floor(Math.random() * 70) + 30,
                arts: Math.floor(Math.random() * 70) + 30,
            },
            kpsea: Math.floor(Math.random() * 20) + 40, // Out of 60
            cba: Math.floor(Math.random() * 20) + 40, // Out of 60
            talents: [TALENTS[Math.floor(Math.random() * TALENTS.length)]]
        };
    });
};

export const processLearner = (learner: Learner): Learner => {
    // 1. Calculate Average KJSEA Score (%)
    const totalScore = Object.values(learner.scores).reduce((a, b) => a + b, 0);
    const avgScore = totalScore / 6;
    const kjseaGrade = getGrade(avgScore);

    // 2. Calculate Final Placement Score (60/20/20 Formula)
    // Formula: (KJSEA_Avg% * 0.6) + (KPSEA_Score/60 * 20) + (CBA_Score/60 * 20)
    const weightedKJSEA = avgScore * 0.6;
    const weightedKPSEA = (learner.kpsea / 60) * 100 * 0.2; // Normalize to % then weight
    const weightedCBA = (learner.cba / 60) * 100 * 0.2;
    const finalScore = weightedKJSEA + weightedKPSEA + weightedCBA;

    // 3. Determine Pathway
    // Logic: If Math + Sci + Tech > Arts + Eng + Kisw -> STEM
    const stemScore = learner.scores.math + learner.scores.science + learner.scores.tech;
    const artsScore = learner.scores.arts + learner.scores.english + learner.scores.kiswahili;

    let pathway = "Social Sciences";
    if (stemScore > artsScore * 1.1) pathway = "STEM";
    else if (artsScore > stemScore * 1.1) pathway = "Arts & Sports";

    // 4. Assign School
    // Logic: Pick region school based on Pathway + Random pick from available
    const regionSchools = SCHOOLS[learner.region] || SCHOOLS["Nairobi"];
    let schoolOptions = regionSchools.social;
    if (pathway === "STEM") schoolOptions = regionSchools.stem;
    if (pathway === "Arts & Sports") schoolOptions = regionSchools.arts;

    const assignedSchool = schoolOptions[Math.floor(Math.random() * schoolOptions.length)];

    return {
        ...learner,
        kjseaGrade,
        finalScore: Math.round(finalScore),
        pathway,
        placement: assignedSchool
    };
};
