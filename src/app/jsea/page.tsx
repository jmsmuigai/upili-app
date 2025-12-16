"use client";

import { motion } from "framer-motion";
import { jseaContent } from "@/data/jsea-content";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Info, ChevronRight, PlayCircle } from "lucide-react";

export default function JseaPage() {
    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Header */}
                <header className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-sm font-medium"
                    >
                        <Info className="w-4 h-4" /> The Ultimate Guide
                    </motion.div>
                    <h1 className="text-5xl font-black tracking-tight mb-4">
                        {jseaContent.intro.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {jseaContent.intro.description}
                    </p>
                </header>

                {/* CBC Journey Roadmap */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center"><span className="text-cyan-400">Safari ya CBC</span> (The Journey)</h2>
                    <div className="relative border-l-4 border-cyan-900 ml-4 md:ml-12 space-y-12 py-4">
                        {jseaContent.cbcJourney.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[14px] top-1 w-6 h-6 bg-black border-4 border-cyan-500 rounded-full" />
                                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white">{step.stage}</h3>
                                        <span className="text-xs font-mono text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded">{step.duration}</span>
                                    </div>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Grading System Table */}
                <section className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">JSEA Grading Decoded</h2>
                        <p className="text-gray-400">Understanding your <span className="text-cyan-400 italic">Matokeo</span> (Results)</p>
                    </div>

                    <div className="bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-black/50 text-cyan-400 uppercase font-bold border-b border-gray-800">
                                    <tr>
                                        <th className="p-4">Subject</th>
                                        <th className="p-4">Code</th>
                                        <th className="p-4">Assessment Areas</th>
                                        <th className="p-4">Levels</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {jseaContent.gradingSystem.map((sub, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-bold text-white">{sub.subject}</td>
                                            <td className="p-4 font-mono text-gray-500">{sub.code}</td>
                                            <td className="p-4 text-gray-300">{sub.areas}</td>
                                            <td className="p-4 text-xs font-mono text-cyan-500">{sub.levels}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {jseaContent.gradingScale.map((grade) => (
                            <div key={grade.code} className="bg-black border border-gray-800 p-4 rounded-xl text-center hover:border-cyan-500 transition-all">
                                <div className="text-2xl font-black text-white mb-1">{grade.code}</div>
                                <div className="text-xs font-bold text-cyan-400 mb-2">{grade.level}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Placeholder */}
                <section className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-1 mb-8">
                    <div className="bg-black/80 backdrop-blur rounded-[20px] p-8 text-center border border-gray-800 relative overflow-hidden group cursor-pointer hover:border-cyan-500 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <PlayCircle className="w-16 h-16 text-white/80 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-white mb-2">Watch: Understanding JSEA Scoring</h3>
                        <p className="text-cyan-400 text-sm">Coming Soon | Video Resource</p>
                    </div>
                </section>

            </div>
        </main>
    );
}
