"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, ChevronRight, User, BookOpen, Heart, Activity, Sparkles, AlertTriangle } from "lucide-react";
import { generateId } from "ai";
import { analyzeStudentProfile } from "@/app/actions";
import { ThreatRadar } from "../visuals/ThreatRadar";

type Step = "intro" | "personal" | "academics" | "interests" | "analysis" | "results";



interface AnalysisResult {
    summary: string;
    recommendedSubjects: { name: string; relevance: string; matchScore: number }[];
    careerPath: {
        title: string;
        description: string;
        steps: string[];
        aiThreatAnalysis: {
            threatLevel: "LOW" | "MEDIUM" | "HIGH";
            reasoning: string;
            resilienceScore: number;
        };
    };
    tvetRecommendation?: {
        shouldConsider: boolean;
        reason?: string;
        courses?: string[];
    };
}

interface StudentProfile {
    name: string;
    age: number;
    religion: string;
    hobbies: string[];
    passions: string[];
    kcse: { subject: string; grade: string }[];
    jseaPerf: { subject: string; score: number }[];
    analysis?: AnalysisResult;
}


export function InterviewOrchestrator() {
    const [step, setStep] = useState<Step>("intro");
    const [profile, setProfile] = useState<StudentProfile>({
        name: "",
        age: 14,
        religion: "",
        hobbies: [],
        passions: [],
        kcse: [],
        jseaPerf: []
    });

    const nextStep = () => {
        const steps: Step[] = ["intro", "infographic", "personal", "academics", "interests", "analysis", "results"];
        const currentIndex = steps.indexOf(step);
        if (currentIndex < steps.length - 1) {
            setStep(steps[currentIndex + 1]);
        }
    };

    const handleRestart = () => {
        setProfile({
            name: "",
            age: 14,
            religion: "",
            hobbies: [],
            passions: [],
            kcse: [],
            jseaPerf: []
        });
        setStep("intro");
    };

    return (
        <div className="min-h-screen bg-black text-cyber-DEFAULT font-mono p-8 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Dynamic Background based on Step */}
            <AnimatePresence>
                {step === "intro" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
                        <img src="/assets/jsea-students.png" alt="Students" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    </motion.div>
                )}
                {(step === "results" || step === "analysis") && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
                        <img src="/assets/ai-city.png" alt="Future City" className="w-full h-full object-cover opacity-50 mix-blend-soft-light" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

            {/* Main Content Container */}
            <div className="max-w-5xl w-full mx-auto relative z-10 border border-cyber-dark/30 bg-black/80 backdrop-blur-xl rounded-xl p-8 shadow-[0_0_80px_-20px_rgba(0,243,255,0.2)]">

                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyber-dark/30">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyber-dark/20 border border-cyber-DEFAULT animate-pulse-glow">
                            <BrainCircuit className="w-8 h-8 text-cyber-DEFAULT" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tighter text-white">UPILI <span className="text-cyber-DEFAULT">AI</span></h1>
                            <p className="text-xs text-cyber-dark uppercase tracking-widest">JSEA Transition Protocol // v2.0</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        <span className="text-xs text-neon-green font-bold">SYSTEM ONLINE</span>
                    </div>
                </div>

                {/* Dynamic Form Area */}
                <AnimatePresence mode="wait">
                    {step === "intro" && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                                        Your Future, <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-DEFAULT to-neon-purple">Decoded by AI.</span>
                                    </h2>
                                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                        The transition from JSEA to Senior School is critical.
                                        Don't just guess. Use our military-grade AI to analyze your strengths against the automated future.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={nextStep}
                                        className="flex items-center gap-4 px-8 py-5 bg-cyber-DEFAULT text-black text-lg font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                                    >
                                        INITIALIZE PROTOCOL <ChevronRight className="w-6 h-6" />
                                    </motion.button>
                                </div>
                                <div className="relative group">
                                    {/* Floating Hologram Effect */}
                                    <div className="absolute inset-0 bg-cyber-DEFAULT/20 blur-3xl animate-pulse-glow" />
                                    <img src="/assets/jsea-students.png" className="relative rounded-lg border-2 border-cyber-dark/50 shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-700 opacity-90" alt="Students" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === "infographic" && (
                        <motion.div
                            key="infographic"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <h3 className="text-2xl text-white font-bold mb-6">Understand the Path</h3>
                            <div className="bg-black/50 p-4 rounded-xl border border-cyber-dark mb-8 inline-block">
                                <img src="/assets/cbc-flow.png" alt="Education Path" className="max-h-[400px] w-auto mx-auto rounded" />
                            </div>
                            <div className="flex justify-center">
                                <button onClick={nextStep} className="px-8 py-3 bg-neon-purple text-white font-bold rounded hover:bg-neon-purple/80 transition-all flex items-center gap-2">
                                    I Understand - Proceed <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "personal" && (
                        <motion.div
                            key="personal"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 max-w-2xl mx-auto"
                        >
                            <h3 className="text-2xl text-cyber-DEFAULT flex items-center gap-2 border-b border-cyber-dark pb-2">
                                <User className="w-6 h-6" /> Identity Matrix
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-cyber-dark font-bold">First Name</label>
                                    <input
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                        className="w-full bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT focus:ring-1 focus:ring-cyber-DEFAULT outline-none transition-all"
                                        placeholder="Enter your name..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-cyber-dark font-bold">Age</label>
                                    <input
                                        type="number"
                                        value={profile.age}
                                        onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
                                        className="w-full bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT focus:ring-1 focus:ring-cyber-DEFAULT outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-cyber-dark font-bold">Religion</label>
                                    <select
                                        value={profile.religion}
                                        onChange={(e) => setProfile({ ...profile, religion: e.target.value })}
                                        className="w-full bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT outline-none"
                                    >
                                        <option value="">Select Religion...</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end pt-8">
                                <button onClick={nextStep} className="px-6 py-3 border border-cyber-DEFAULT text-cyber-DEFAULT rounded hover:bg-cyber-DEFAULT hover:text-black font-bold transition-all">
                                    Next: Academic Data &gt;
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "academics" && (
                        <motion.div
                            key="academics"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 max-w-2xl mx-auto"
                        >
                            <h3 className="text-2xl text-cyber-DEFAULT flex items-center gap-2 border-b border-cyber-dark pb-2">
                                <BookOpen className="w-6 h-6" /> Academic Performance
                            </h3>
                            <div className="bg-cyber-dark/20 p-4 rounded border-l-2 border-yellow-500 mb-4">
                                <p className="text-sm text-yellow-300">Be honest. The AI can process failure, but it cannot process lies.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-cyber-dark font-bold">Overall JSEA Score (Mock/Actual)</label>
                                    <input type="text" className="w-full bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT outline-none" placeholder="e.g. 350" />
                                </div>
                                {/* Simplified subject inputs for demo */}
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-cyber-dark font-bold">Best Subject</label>
                                    <input type="text" className="w-full bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT outline-none" placeholder="e.g. Mathematics" />
                                </div>
                            </div>
                            <div className="flex justify-end pt-8">
                                <button onClick={nextStep} className="px-6 py-3 border border-cyber-DEFAULT text-cyber-DEFAULT rounded hover:bg-cyber-DEFAULT hover:text-black font-bold transition-all">
                                    Next: Personal Interests &gt;
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "interests" && (
                        <motion.div
                            key="interests"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 max-w-2xl mx-auto"
                        >
                            <h3 className="text-2xl text-cyber-DEFAULT flex items-center gap-2 border-b border-cyber-dark pb-2">
                                <Heart className="w-6 h-6" /> Passions & Hobbies
                            </h3>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-cyber-dark font-bold">What drives you?</label>
                                <textarea
                                    className="w-full h-40 bg-black/50 border border-cyber-dark p-4 rounded text-white focus:border-cyber-DEFAULT outline-none resize-none"
                                    placeholder="e.g., I love fixing electronics, I enjoy arguing in debate club, I draw comics in my free time..."
                                    onChange={(e) => setProfile({ ...profile, passions: [e.target.value] })}
                                />
                            </div>
                            <div className="flex justify-end pt-8">
                                <button onClick={() => setStep('analysis')} className="px-8 py-4 bg-gradient-to-r from-neon-purple to-pink-600 text-white font-bold rounded-lg hover:to-pink-500 transition-all shadow-[0_0_20px_rgba(188,19,254,0.4)] flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 fill-current" /> Initialize AI Analysis
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "analysis" && (
                        <motion.div
                            key="analysis"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 relative z-20"
                            onAnimationComplete={async () => {
                                const result = await analyzeStudentProfile(profile);
                                if (result.success) {
                                    setProfile({ ...profile, analysis: result.data as AnalysisResult });
                                    setStep("results");
                                }
                            }}
                        >
                            <div className="inline-block relative">
                                <div className="w-32 h-32 border-4 border-t-cyber-DEFAULT border-r-neon-purple border-b-cyber-DEFAULT border-l-neon-purple rounded-full animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Activity className="w-12 h-12 text-white animate-pulse" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mt-8 mb-2 tracking-widest animate-pulse">PROCESSING</h3>
                            <p className="text-cyber-DEFAULT font-mono">Gemini 3 Neural Core Active...</p>
                        </motion.div>
                    )}

                    {step === "results" && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-neon-purple shadow-[0_0_30px_rgba(188,19,254,0.1)]">
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Sparkles className="text-neon-purple" /> Analysis Complete
                                </h2>
                                <p className="text-gray-200 text-lg leading-relaxed border-l-4 border-neon-purple pl-4">
                                    {profile.analysis?.summary}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-cyber-DEFAULT uppercase tracking-wider flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" /> Recommended Subjects
                                    </h3>
                                    <div className="space-y-3">
                                        {profile.analysis?.recommendedSubjects.map((sub, i) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={i}
                                                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded hover:border-cyber-dark transition-colors"
                                            >
                                                <span className="text-white font-bold">{sub.name}</span>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-neon-green font-mono font-bold text-sm">{sub.matchScore}% MATCH</span>
                                                    <span className="text-[10px] text-gray-500 uppercase">{sub.relevance}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" /> AI Threat Assessment
                                    </h3>
                                    <ThreatRadar
                                        threatLevel={profile.analysis?.careerPath.aiThreatAnalysis.threatLevel!}
                                        resilienceScore={profile.analysis?.careerPath.aiThreatAnalysis.resilienceScore!}
                                        reasoning={profile.analysis?.careerPath.aiThreatAnalysis.reasoning!}
                                    />

                                    {/* Career Path Snapshot */}
                                    <div className="bg-gray-900/50 p-4 rounded border border-gray-700 mt-4">
                                        <h4 className="text-white font-bold mb-2">Target Career: {profile.analysis?.careerPath.title}</h4>
                                        <p className="text-sm text-gray-400">{profile.analysis?.careerPath.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-12 flex justify-center pb-8">
                                <button
                                    onClick={handleRestart}
                                    className="px-8 py-4 border border-cyber-dark text-gray-400 rounded-full hover:text-white hover:border-white hover:bg-white/5 transition-all flex items-center gap-2"
                                >
                                    <Activity className="w-4 h-4" /> Restart Protocol
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Branding */}
            <div className="fixed bottom-4 right-4 text-xs text-cyber-dark opacity-50">
                POWERED BY GOOGLE GEMINI 3.0 // DEEPMIND PROTOCOL
            </div>
        </div>
    );
}
