"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, ArrowRight, ShieldCheck, Cpu, Scan, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { TALENT_CALIBRATION_QUESTIONS } from "@/data/upili_content";

export default function UpiliDataEngine() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [data, setData] = useState({ age: "", school: "", talent: "", hobby: "" });
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
                    "{q.q}"
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
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">

                <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
                >
                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-8">
                        {[0, 1, 2, 3].map((i) => (
                            <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-cyan-400" : "bg-white/20"}`} />
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-6">
                        {step === 0 && "Let's calibrate your profile."}
                        {step === 1 && "Where is your foundation?"}
                        {step === 2 && "Uncover your hidden variables."}
                        {step === 3 && "What fuels your engine?"}
                    </h2>

                    <div className="space-y-6">
                        {step === 0 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Your Age</label>
                                <input
                                    type="number"
                                    value={data.age}
                                    onChange={(e) => setData({ ...data, age: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                    placeholder="e.g. 14"
                                    autoFocus
                                />
                            </div>
                        )}

                        {step === 1 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Previous School</label>
                                <input
                                    value={data.school}
                                    onChange={(e) => setData({ ...data, school: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                    placeholder="e.g. Milimani Primary"
                                    autoFocus
                                />
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <label className="text-cyan-200 text-sm font-bold uppercase tracking-wider mb-2 block">Your Superpower (Talent)</label>
                                <select
                                    value={data.talent}
                                    onChange={(e) => setData({ ...data, talent: e.target.value })}
                                    className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none bg-slate-900"
                                >
                                    <option value="">Select Talent...</option>
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
                                (step === 0 && !data.age) ||
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
