"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, AlertTriangle, Briefcase, GitMerge, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface GeminiSubjectViewProps {
    subject: string;
}

export default function GeminiSubjectView({ subject }: GeminiSubjectViewProps) {
    const { messages, append, isLoading } = useChat({
        api: "/api/chat",
    });

    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current && subject) {
            hasFetched.current = true;
            // Trigger the specialized prompt
            append({
                role: "user",
                content: `Generate a comprehensive, deep-dive guide for the Senior Secondary subject: "${subject}". 
        
        Format the response as a structured JSON-like object (but valid markdown text) with these Sections:
        1. **Deep Definition**: What is it really? (Philosophical & Practical)
        2. **Real World Jobs**: List 5 specific, modern jobs (include AI-related ones).
        3. **Winning Combinations**: What other subjects go well with this?
        4. **What to Avoid**: Common mistakes or misconceptions.
        5. **Future Outlook**: How AI affects this field in 2030.
        
        Tone: Professional, Inspiring, "Google-Deep", Intelligent. Use Kenya context where applicable.`
            });
        }
    }, [subject, append]);

    // Extract the latest AI message
    const latestMessage = messages.filter(m => m.role === 'assistant').pop()?.content || "";

    return (
        <div className="min-h-screen bg-[#05050a] text-white p-4 md:p-8 relative overflow-hidden">

            {/* Neural Network Background Effect */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="neural-net" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#4285F4" />
                        <line x1="2" y1="2" x2="40" y2="40" stroke="#34A853" strokeWidth="0.5" opacity="0.5" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-net)" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <Link href="/subjects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <ChevronLeft /> Back to Subject Matrix
                </Link>

                <header className="text-center mb-12">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mb-6">
                        <div className="bg-black rounded-full p-4 border border-white/10">
                            <Sparkles size={48} className="text-white animate-pulse" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                        {subject.toUpperCase()}
                    </h1>
                    <p className="text-xl text-slate-400 uppercase tracking-widest font-bold">
                        AI-GENERATED DEEP DIVE
                    </p>
                </header>

                {isLoading && !latestMessage ? (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-8"></div>
                        <h2 className="text-2xl font-bold animate-pulse">Gemini is analyzing {subject}...</h2>
                        <p className="text-slate-500 mt-2">Connecting to Knowledge Graph...</p>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* We render the raw markdown for now, or styled blocks if we parse it. 
                    Given the dynamic nature, rendering it as a "Smart Document" is best. */}

                        <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
                            {/* 
                      Note: In a production app, we would use a markdown parser (react-markdown). 
                      For this prototype, we'll display the text with whitespace preservation. 
                    */}
                            <div className="whitespace-pre-wrap font-sans text-slate-200 leading-relaxed">
                                {latestMessage}
                            </div>
                        </div>

                        {/* Simulated "Visual" widgets that would be extracted from data */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl">
                                <h3 className="flex items-center gap-2 font-bold text-blue-400 mb-4"><Briefcase /> Top Careers</h3>
                                <div className="h-2 bg-blue-500/20 rounded-full w-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} className="h-full bg-blue-500" transition={{ delay: 1 }} />
                                </div>
                                <p className="text-xs mt-2 text-slate-400">High Demand Projected</p>
                            </div>

                            <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-2xl">
                                <h3 className="flex items-center gap-2 font-bold text-green-400 mb-4"><GitMerge /> Synergy</h3>
                                <div className="h-2 bg-green-500/20 rounded-full w-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} className="h-full bg-green-500" transition={{ delay: 1.2 }} />
                                </div>
                                <p className="text-xs mt-2 text-slate-400">Highly Compatible</p>
                            </div>

                            <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-2xl">
                                <h3 className="flex items-center gap-2 font-bold text-red-400 mb-4"><AlertTriangle /> AI Risk</h3>
                                <div className="h-2 bg-red-500/20 rounded-full w-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-full bg-red-500" transition={{ delay: 1.4 }} />
                                </div>
                                <p className="text-xs mt-2 text-slate-400">Moderate Automation Risk</p>
                            </div>
                        </div>

                        <div className="text-center pt-12 text-slate-600 font-mono text-xs">
                            GENERATED BY GEMINI PRO • UPILI INTELLIGENCE NETWORK
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
