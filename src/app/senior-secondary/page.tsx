"use client";

import { BookOpen, Trophy } from "lucide-react";
import SmartAdvisor from "@/components/SmartAdvisor";
import GameCenter from "@/components/GameCenter";
import SchoolFinder from "@/components/SchoolFinder";
import MindNoteGenerator from "@/components/MindNoteGenerator";
import DeepContentModules from "@/components/DeepContentModules";

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

                {/* NEW: JSEA Grading & Exam Structure */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-indigo-500/30">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Trophy className="text-yellow-400" /> JSEA Results & Expectations
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white/10 p-4 rounded-xl border-l-4 border-green-500">
                            <h3 className="text-xl font-black text-green-400">EE</h3>
                            <p className="text-xs uppercase font-bold opacity-70">Exceeding</p>
                            <p className="text-sm mt-1">Ready for pure sciences & complex arts.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border-l-4 border-yellow-500">
                            <h3 className="text-xl font-black text-yellow-400">ME</h3>
                            <p className="text-xs uppercase font-bold opacity-70">Meeting</p>
                            <p className="text-sm mt-1">Solid foundation for Humanities.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border-l-4 border-orange-500">
                            <h3 className="text-xl font-black text-orange-400">AE</h3>
                            <p className="text-xs uppercase font-bold opacity-70">Approaching</p>
                            <p className="text-sm mt-1">Focus on technical & vocational skills.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border-l-4 border-red-500">
                            <h3 className="text-xl font-black text-red-400">BE</h3>
                            <p className="text-xs uppercase font-bold opacity-70">Below</p>
                            <p className="text-sm mt-1">Requires remedial support.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Senior School Assessment Model</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center font-bold">70%</div>
                            <span>Formative Assessment (School Projects)</span>
                        </li>
                        <li className="flex items-center gap-3 bg-black/20 p-3 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">30%</div>
                            <span>Summative Assessment (KNEC Exam)</span>
                        </li>
                    </ul>
                </div>

                {/* Existing Widgets Grid in 2 columns */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <SchoolFinder />

                        {/* Resources / Textbooks */}
                        <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="text-indigo-500" /> Recommended Textbooks (KICD Approved)
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Secondary Physics Book 4", pub: "KLB", img: "https://textbookcentre.com/media/products/2020205000574.jpg" },
                                    { title: "Evolving World (History)", pub: "Oxford", img: "https://textbookcentre.com/media/products/1005000000030.jpg" },
                                    { title: "Explore Biology", pub: "Longhorn", img: "https://textbookcentre.com/media/products/2020205000994.jpg" },
                                    { title: "Comprehensive Maths", pub: "KLB", img: "https://textbookcentre.com/media/products/2020205000628.jpg" }
                                ].map((book, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:shadow-lg transition-all items-center">
                                        <div className="w-16 h-20 bg-slate-200 rounded overflow-hidden flex-shrink-0">
                                            <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm leading-tight">{book.title}</h4>
                                            <p className="text-xs text-slate-500 mb-2">{book.pub}</p>
                                            <button className="text-[10px] bg-red-600 text-white px-3 py-1 rounded-full font-bold">BUY NOW</button>
                                        </div>
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
