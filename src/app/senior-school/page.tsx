"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Layers, Cpu, Palette, Globe, PlayCircle } from "lucide-react";
import { jseaContent } from "@/data/jsea-content";

export default function SeniorSchoolPage() {

    // Icon mapping for pathways
    const getIcon = (id: string) => {
        if (id === 'stem') return Cpu;
        if (id === 'arts') return Palette;
        return Globe;
    };

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">

                <header className="space-y-6">
                    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4 gap-2 text-sm font-bold tracking-wider">
                        <ArrowLeft className="w-4 h-4" /> BACK TO ANALYZER
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                            SENIOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">SCHOOL</span> PATHWAYS
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Three roads divergence. One choice. Your performance in JSEA determines your specialized track for the next 3 years.
                            <span className="block mt-2 text-cyan-400 font-bold italic">Chagua njia yako kwa busara. (Choose wisely.)</span>
                        </p>
                    </motion.div>
                </header>

                {/* Pathways Detail Section */}
                <div className="space-y-24">
                    {jseaContent.pathways.map((pathway, idx) => {
                        const Icon = getIcon(pathway.id);
                        return (
                            <motion.section
                                key={pathway.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-4 border-b border-gray-800 pb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">{pathway.title}</h2>
                                        <p className="text-gray-400 mt-1">{pathway.desc}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-900/20 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-black text-xs uppercase tracking-widest text-gray-500 border-b border-gray-800">
                                                <tr>
                                                    <th className="p-4 w-1/5">Subject</th>
                                                    <th className="p-4 w-1/4">What You Learn</th>
                                                    <th className="p-4 w-1/4">Future Careers (Kazi)</th>
                                                    <th className="p-4 w-1/5 text-right">AI Threat Level</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800/50">
                                                {pathway.subjects.map((sub, i) => (
                                                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                                                        <td className="p-4 font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                            {sub.name}
                                                        </td>
                                                        <td className="p-4 text-gray-400">{sub.learn}</td>
                                                        <td className="p-4 text-gray-300">{sub.career}</td>
                                                        <td className="p-4 text-right font-mono text-xs">
                                                            <span className={`px-2 py-1 rounded border ${sub.threadLevel.includes("Low") ? "bg-green-900/20 border-green-800 text-green-400" :
                                                                    sub.threadLevel.includes("Medium") ? "bg-yellow-900/20 border-yellow-800 text-yellow-400" :
                                                                        "bg-red-900/20 border-red-800 text-red-400"
                                                                }`}>
                                                                {sub.threadLevel}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.section>
                        );
                    })}
                </div>

                {/* Video Placeholder */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-purple-500 transition-all cursor-pointer">
                        <PlayCircle className="w-12 h-12 text-gray-600 group-hover:text-purple-500 mb-4 transition-colors" />
                        <h3 className="font-bold text-lg">Student Testimonials</h3>
                        <p className="text-xs text-gray-500">Hear from Senior School Pioneers</p>
                    </div>
                    <div className="bg-black border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-cyan-500 transition-all cursor-pointer">
                        <PlayCircle className="w-12 h-12 text-gray-600 group-hover:text-cyan-500 mb-4 transition-colors" />
                        <h3 className="font-bold text-lg">Expert Advice</h3>
                        <p className="text-xs text-gray-500">KICD Director on Subject Selection</p>
                    </div>
                </section>

                <div className="flex justify-center pt-8">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
                    >
                        <BookOpen className="w-5 h-5" /> Start Selection Protocol
                    </Link>
                </div>

            </div>
        </main>
    );
}
