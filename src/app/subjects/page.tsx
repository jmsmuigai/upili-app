"use client";

import { ALL_SUBJECTS_DETAILS } from "@/data/upili_content";
import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SubjectsPage() {

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
                    Deep dive into every single subject. Click &quot;Activate Chat&quot; to ask Gemini specific questions about that subject.
                </p>

                <div className="space-y-16">
                    {["STEM", "Social", "Arts", "Technical", "Sports"].map((category) => {
                        const categorySubjects = ALL_SUBJECTS_DETAILS.filter(s => s.category === category);
                        if (categorySubjects.length === 0) return null;

                        return (
                            <div key={category} className="relative">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`h-8 w-2 rounded-full ${category === "STEM" ? "bg-blue-500" :
                                        category === "Social" ? "bg-amber-500" :
                                            category === "Arts" ? "bg-fuchsia-500" :
                                                "bg-green-500"
                                        }`} />
                                    <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                                        {category} <span className="text-slate-500 text-lg font-normal capitalize">pathways</span>
                                    </h2>
                                    {category === "STEM" && (
                                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                                            High Demand
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categorySubjects.map((sub, i) => (
                                        <motion.div
                                            key={sub.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className={`
                                                p-6 rounded-2xl border border-white/5 relative overflow-hidden group
                                                ${category === "STEM" ? "bg-gradient-to-br from-blue-900/10 to-cyan-900/10 hover:border-blue-500/50" : ""}
                                                ${category === "Social" ? "bg-gradient-to-br from-amber-900/10 to-orange-900/10 hover:border-amber-500/50" : ""}
                                                ${category === "Arts" ? "bg-gradient-to-br from-fuchsia-900/10 to-purple-900/10 hover:border-fuchsia-500/50" : ""}
                                                ${category === "Technical" ? "bg-gradient-to-br from-slate-800/20 to-gray-800/20 hover:border-gray-500/50" : ""}
                                                ${category === "Sports" ? "bg-gradient-to-br from-green-900/10 to-emerald-900/10 hover:border-green-500/50" : ""}
                                            `}
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                                <Sparkles
                                                    size={16}
                                                    className={
                                                        category === "STEM" ? "text-blue-500" :
                                                            category === "Social" ? "text-amber-500" :
                                                                "text-slate-500"
                                                    }
                                                />
                                            </div>

                                            <h3 className="text-2xl font-bold mb-2 text-white">{sub.name}</h3>
                                            <p className="text-slate-400 mb-6 text-sm h-10 leading-relaxed line-clamp-2">{sub.desc}</p>

                                            <div className="mb-6 bg-black/20 p-3 rounded-lg border border-white/5">
                                                <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Career Horizon</span>
                                                <p className="text-xs font-bold text-slate-200">{sub.career}</p>
                                            </div>

                                            <Link
                                                href={`/subjects/${encodeURIComponent(sub.name)}`}
                                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 font-bold text-xs group-hover:bg-white group-hover:text-black hover:scale-[1.02]"
                                            >
                                                <Bot size={16} /> ASK AI AGENT
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </main >
    );
}
