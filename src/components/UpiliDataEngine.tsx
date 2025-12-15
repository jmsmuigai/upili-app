"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UpiliDataEngine() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [data, setData] = useState({ age: "", school: "", talent: "", hobby: "" });
    const [processing, setProcessing] = useState(false);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
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
        }, 3500);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {!processing ? (
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
                                        className="w-full bg-black/40 border border-cyan-500/30 text-white rounded-xl px-4 py-4 text-xl focus:ring-2 focus:ring-cyan-400 outline-none"
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
                                {step === 3 ? "Run Algorithm" : "Next Data Point"} <ArrowRight />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="processing"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-black/80 backdrop-blur-xl p-12 rounded-3xl border border-cyan-500/50 text-center relative overflow-hidden"
                    >
                        {/* Matrix-like Background Effect */}
                        <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-green-500 overflow-hidden leading-none break-all pointer-events-none">
                            {Array(2000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')}
                        </div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-24 h-24 mx-auto mb-8 text-cyan-400"
                        >
                            <Cpu size={96} />
                        </motion.div>

                        <h3 className="text-3xl font-bold text-white mb-2">Analyzing Inputs...</h3>
                        <p className="text-cyan-400 font-mono mb-6">
                            [AGE: {data.age}] [TALENT: {data.talent?.toUpperCase()}] [SCHOOL: {data.school}]
                        </p>

                        <div className="space-y-2 max-w-xs mx-auto text-left text-sm font-mono text-green-400">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>✓ Calculating STEM aptitude...</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>✓ Mapping Market Trends 2030...</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>✓ Checking AI Replacement Risk...</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>✓ Optimizing Career Path...</motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
