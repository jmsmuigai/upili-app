"use client";

import { ALL_SUBJECTS_DETAILS } from "@/data/upili_content";
import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SubjectsPage() {
    const [activeSubject, setActiveSubject] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-slate-950 text-white p-4 pb-20">
            <Link href="/senior-secondary" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
                <ArrowLeft /> Back to Dashboard
            </Link>

            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    ALL SUBJECTS DECODED
                </h1>
                <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                    Deep dive into every single subject. Click "Activate Chat" to ask Gemini specific questions about that subject.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ALL_SUBJECTS_DETAILS.map((sub, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className={`
                        p-6 rounded-2xl border border-white/10 relative overflow-hidden group
                        ${sub.category === "STEM" ? "bg-blue-900/20 hover:bg-blue-900/40 hover:border-blue-500" : ""}
                        ${sub.category === "Social" ? "bg-amber-900/20 hover:bg-amber-900/40 hover:border-amber-500" : ""}
                        ${sub.category === "Arts" ? "bg-fuchsia-900/20 hover:bg-fuchsia-900/40 hover:border-fuchsia-500" : ""}
                        ${sub.category === "Sports" ? "bg-green-900/20 hover:bg-green-900/40 hover:border-green-500" : ""}
                    `}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold uppercase tracking-widest">{sub.category}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white">{sub.name}</h3>
                            <p className="text-slate-400 mb-4 h-12">{sub.desc}</p>

                            <div className="mb-6">
                                <span className="text-xs text-slate-500 uppercase font-bold">Possible Careers:</span>
                                <p className="text-sm font-medium text-slate-200">{sub.career}</p>
                            </div>

                            <button
                                onClick={() => setActiveSubject(sub.name)}
                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 font-bold text-sm group-hover:bg-cyan-600 group-hover:text-white group-hover:border-transparent"
                            >
                                <Bot size={18} /> ACTIVATE GEMINI CHAT
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Simplified Modal for "Chat" (In a real app, this would open the main chat context) */}
            {activeSubject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-slate-900 border border-cyan-500/50 p-8 rounded-3xl max-w-md w-full text-center relative">
                        <button onClick={() => setActiveSubject(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white">✕</button>
                        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400">
                            <Sparkles size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Analyzing {activeSubject}...</h2>
                        <p className="text-slate-400 mb-6">
                            "I am ready to explain everything about {activeSubject}. What would you like to know?"
                        </p>
                        <div className="space-y-3">
                            <Link href="/senior-secondary" className="block w-full py-3 bg-cyan-600 rounded-xl font-bold hover:bg-cyan-500">
                                Ask Mshauri Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main >
    );
}
