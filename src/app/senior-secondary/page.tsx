"use client";

import Link from "next/link";
import { BookOpen, Download, Trophy, Star, Sparkles, ArrowRight } from "lucide-react";
import SmartAdvisor from "@/components/SmartAdvisor";
import GameCenter from "@/components/GameCenter";
import SchoolFinder from "@/components/SchoolFinder";
import MindNoteGenerator from "@/components/MindNoteGenerator";
import { SENIOR_PATHWAYS, COMBINATIONS, ADVICE_TIPS } from "@/data/senior_secondary";
import { motion } from "framer-motion";

export default function SeniorSecondaryPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 overflow-x-hidden">

            {/* Motion Background Elements (Simulating "Motion AI") */}
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
                        Senior Secondary School
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-200 max-w-2xl mx-auto"
                    >
                        Your hub for advanced learning, pathway selection, and career preparation.
                    </motion.p>
                </div>
            </header>

            <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Pathways, Schools, Resources */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Pathways Grid */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 backdrop-blur-sm bg-opacity-90">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Star className="text-yellow-500" /> Available Pathways
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {SENIOR_PATHWAYS.map((path, i) => (
                                <motion.div
                                    key={path.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-l-4 border-indigo-500 hover:shadow-xl transition-all hover:bg-white dark:hover:bg-slate-700 cursor-default"
                                >
                                    <h3 className="font-bold text-lg mb-1">{path.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{path.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* School Finder Integration */}
                    <section>
                        <SchoolFinder />
                    </section>

                    {/* Strategic Advice */}
                    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800">
                        <h2 className="text-2xl font-bold mb-6 text-emerald-800 dark:text-emerald-300">Strategic Advice</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {ADVICE_TIPS.map((tip, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-emerald-600 mb-2">{tip.title}</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">{tip.content}</p>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action:</span>
                                    <p className="text-sm font-medium">{tip.action}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Game Center */}
                    <section>
                        <GameCenter />
                    </section>

                    {/* Resources / Books */}
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

                </div>

                {/* Right Column: Mind Note, Advisor, & Tools */}
                <div className="space-y-8">
                    {/* Mind Note Generator - Prominent placement */}
                    <MindNoteGenerator />

                    <SmartAdvisor />

                    {/* Combinations Cheat Sheet */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Trophy className="text-yellow-400" /> Top Combinations
                        </h3>
                        <div className="space-y-4">
                            {COMBINATIONS.map((combo, i) => (
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    key={i}
                                    className="bg-white/10 p-3 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors"
                                >
                                    <p className="font-bold text-sm text-yellow-200">{combo.name}</p>
                                    <p className="text-xs opacity-90">{combo.careerPotential}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
