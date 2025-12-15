"use client";

import Link from "next/link";
import { BookOpen, Download, Trophy, Star, Sparkles, ArrowRight } from "lucide-react";
import SmartAdvisor from "@/components/SmartAdvisor";
import GameCenter from "@/components/GameCenter";
import SchoolFinder from "@/components/SchoolFinder";
import MindNoteGenerator from "@/components/MindNoteGenerator";
import DeepContentModules from "@/components/DeepContentModules";
import { SENIOR_PATHWAYS, COMBINATIONS, ADVICE_TIPS } from "@/data/senior_secondary";
import { motion } from "framer-motion";

export default function SeniorSecondaryPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 overflow-x-hidden">

            {/* Motion Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
            </div>

            {/* Header */}
            <header className="relative z-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white pt-24 pb-12 px-4 shadow-lg mb-8">
                <div className="max-w-6xl mx-auto text-center transform hover:scale-[1.01] transition-transform duration-500">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                    >
                        Your Computed Pathway
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-200 max-w-2xl mx-auto"
                    >
                        Data Analysis Complete. Here is your optimal roadmap.
                    </motion.p>
                </div>
            </header>

            <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-1 gap-12">

                {/* Deep Content Modules (The "Meat") */}
                <div className="lg:mb-12">
                    <h2 className="text-center text-3xl font-black mb-8 uppercase tracking-widest text-slate-800 dark:text-white">
                        Detailed Course Analysis
                    </h2>
                    <DeepContentModules />
                </div>

                {/* Existing Widgets Grid in 2 columns */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <SchoolFinder />

                        {/* Resources */}
                        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="text-indigo-500" /> Books & Schemes of Work
                            </h2>
                            <div className="space-y-3">
                                {["Form 4 Mathematics (Advanced)", "Physics: Mechanics & Waves", "Computer Studies: Python Basics", "History of East Africa"].map((book, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                PDF
                                            </div>
                                            <div>
                                                <p className="font-medium">{book}</p>
                                                <p className="text-xs text-slate-500">2.4 MB • Updated yesterday</p>
                                            </div>
                                        </div>
                                        <button className="text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-50 rounded-full transition-colors">
                                            <Download size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <GameCenter />
                    </div>

                    <div className="space-y-8">
                        <MindNoteGenerator />
                        <SmartAdvisor />
                    </div>
                </div>

            </div>
        </main>
    );
}
