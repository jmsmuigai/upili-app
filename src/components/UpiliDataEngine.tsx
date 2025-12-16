"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, ArrowRight, ShieldCheck, Cpu, Scan } from "lucide-react";
import { useRouter } from "next/navigation";
import { TALENT_CALIBRATION_QUESTIONS } from "@/data/upili_content";

export default function UpiliDataEngine() {
    const router = useRouter();
    // const [mode, setMode] = useState<"home" | "scan" | "processing" | "result">("home");
    const [step, setStep] = useState(0);
    const [data, setData] = useState({ name: "", age: "", school: "", talent: "", hobby: "", location: "rural" });
    const [deepScanActive, setDeepScanActive] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scanResults, setScanResults] = useState<string[]>([]); // Store 'Yes' answers types
    const [processing, setProcessing] = useState(false);

    // Pick 5 random questions for the demo flow, or iterate all if "Deep" (demo usually shorter)
    // For this implementation, we will ask 3 quick deep scan questions after basic info
    const [randomQuestions] = useState(() =>
        [...TALENT_CALIBRATION_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5)
    );

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setDeepScanActive(true);
        }
    };

    const handleScanAnswer = (answer: boolean) => {
        if (answer) {
            setScanResults([...scanResults, randomQuestions[currentQuestionIndex].type]);
        }

        if (currentQuestionIndex < randomQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            processData();
        }
    };

    const processData = () => {
        setProcessing(true);
        // Simulate complex algorithm
        setTimeout(() => {
            setProcessing(false);
            router.push("/senior-secondary");
        }, 4500); // Slightly longer for "Deep" effect
    };

    if (processing) {
        return (
            <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/80 backdrop-blur-xl p-12 rounded-3xl border border-cyan-500/50 text-center relative overflow-hidden max-w-2xl mx-auto"
            >
                {/* Matrix-like Background Effect */}
                <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-green-500 overflow-hidden leading-none break-all pointer-events-none">
                    {Array(3000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')}
                </div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto mb-8 text-cyan-400"
                >
                    <Cpu size={96} />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-2">Algorithm Running...</h3>
                <p className="text-cyan-400 font-mono mb-6">
                    [INPUTS VALIDATED] [DEEP SCAN COMPLETE]
                </p>

                <div className="space-y-3 max-w-sm mx-auto text-left text-sm font-mono text-green-400">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>✓ Parsing Psychometric Data...</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>✓ Matching against 40+ Career Vectors...</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>✓ Validating Market Demand 2030...</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>✓ Aligning with JSEA Pathways...</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3 }} className="text-cyan-300 font-bold">✓ OPTIMAL PATHWAY FOUND.</motion.div>
                </div>
            </motion.div>
        )
    }

    // DEEP SCAN MODE
    if (deepScanActive) {
        const q = randomQuestions[currentQuestionIndex];
        return (
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900/90 backdrop-blur-md border border-purple-500/30 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center"
            >
                <div className="flex justify-center mb-6">
                    <Scan size={48} className="text-purple-400 animate-pulse" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Deep Talent Scan</h2>
                <p className="text-slate-400 mb-8 text-sm">Question {currentQuestionIndex + 1} of {randomQuestions.length}</p>

                <h3 className="text-3xl font-light text-white mb-12 h-24 flex items-center justify-center">
                    &quot;{q.q}&quot;
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <button onClick={() => handleScanAnswer(false)} className="py-4 rounded-xl bg-slate-800 text-slate-300 font-bold hover:bg-slate-700 transition">
                        NO / NOT REALLY
                    </button>
                    <button onClick={() => handleScanAnswer(true)} className="py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:scale-105 transition shadow-lg shadow-purple-500/30">
                        YES / DEFINITELY
                    </button>
                </div>
            </motion.div>
        )
    }

    // INITIAL MODE
    return (
        <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/30"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                            {step === 0 && <UserIcon />}
                            {step === 1 && <Brain />}
                            {step === 2 && <ShieldCheck />}
                            {step === 3 && <Database />}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">
                                {step === 0 && "Student Profile"}
                                {step === 1 && "Current Schooling"}
                                {step === 2 && "Natural Talents"}
                                {step === 3 && "Interests & Hobbies"}
                            </h2>
                            <p className="text-cyan-400 text-xs">Step {step + 1} of 4</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {step === 0 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Your Name</label>
                                    <input
                                        value={data.name}
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                        className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                        placeholder="Enter your name..."
                                        autoFocus
                                    />
                                </div>
                                <div>
                                    <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Age</label>
                                    <input
                                        type="number"
                                        value={data.age}
                                        onChange={(e) => setData({ ...data, age: e.target.value })}
                                        className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                        placeholder="e.g. 14"
                                    />
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Current School</label>
                                <input
                                    value={data.school}
                                    onChange={(e) => setData({ ...data, school: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                    placeholder="Enter school name..."
                                    autoFocus
                                />
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Strongest Area</label>
                                <select
                                    value={data.talent}
                                    onChange={(e) => setData({ ...data, talent: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none appearance-none"
                                >
                                    <option value="">Select your strength...</option>
                                    <option value="math">Numbers & Logic</option>
                                    <option value="art">Drawing & Creativity</option>
                                    <option value="lead">Leadership & Speaking</option>
                                    <option value="sport">Athletics & Motion</option>
                                    <option value="tech">Computers & Gadgets</option>
                                </select>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Favorite Hobby</label>
                                <input
                                    value={data.hobby}
                                    onChange={(e) => setData({ ...data, hobby: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                    placeholder="e.g. Gaming, Farming, Reading..."
                                    autoFocus
                                />
                            </div>
                        )}

                        <button
                            onClick={handleNext}
                            disabled={
                                (step === 0 && (!data.name || !data.age)) ||
                                (step === 1 && !data.school) ||
                                (step === 2 && !data.talent) ||
                                (step === 3 && !data.hobby)
                            }
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {step === 3 ? "Run Deep Intelligence Scan" : "Next Data Point"} <ArrowRight />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    )
}
