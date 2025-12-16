"use client";

import { motion } from "framer-motion";
import { jseaContent } from "@/data/jsea-content";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from "@/components/ui/card";
import { AlertTriangle, ShieldCheck, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
    const [showAdvice, setShowAdvice] = useState(false);

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <div className="inline-block bg-red-500/10 text-red-500 border border-red-500/50 text-xs font-bold px-4 py-2 rounded-full animate-pulse">
                        <AlertTriangle className="w-3 h-3 inline mr-2" />
                        WARNING: The Job Market Has Changed
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">AI Revolution</span> <br />
                        What Your Parents Don't Know
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Artificial Intelligence is automating routine tasks. Choosing a career path without considering AI is like buying a ticket for a train that has already left.
                        <span className="block mt-2 text-white font-bold">Usichague kazi ya jana. (Don't choose yesterday's job.)</span>
                    </p>
                </section>

                {/* AI Impact Chart Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center bg-gray-900/20 p-8 rounded-3xl border border-gray-800">
                    <div className="h-[400px] w-full">
                        <h3 className="text-center font-bold text-white mb-4">AI Impact on Future Careers (2030+)</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={jseaContent.aiImpact.stats}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {jseaContent.aiImpact.stats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> HIGH RISK (60-90% Automation)
                            </h3>
                            <ul className="space-y-2">
                                {jseaContent.aiImpact.highRisk.map((job, i) => (
                                    <li key={i} className="text-gray-300 border-l-2 border-red-900 pl-3 text-sm">{job}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> MEDIUM RISK (30-60% Automation)
                            </h3>
                            <ul className="space-y-2">
                                {jseaContent.aiImpact.mediumRisk.map((job, i) => (
                                    <li key={i} className="text-gray-300 border-l-2 border-orange-900 pl-3 text-sm">{job}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Safe Careers */}
                <section className="bg-green-900/10 border border-green-900/30 p-8 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-green-500" /> SAFE CAREERS (AI-Resistant)
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {jseaContent.aiImpact.safe.map((job, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 bg-green-900/20 border border-green-800 text-green-400 rounded-full font-bold shadow-[0_0_15px_rgba(22,163,74,0.1)]"
                            >
                                {job}
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
                        These jobs require <span className="text-white font-bold">human empathy, complex creativity, and physical dexterity</span>—things robots still suck at.
                    </p>
                </section>

                {/* Video Placeholder */}
                <section className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-1">
                    <div className="bg-black/80 backdrop-blur rounded-[20px] p-12 text-center border border-gray-800 relative overflow-hidden group cursor-pointer hover:border-red-500 transition-all">
                        <PlayCircle className="w-20 h-20 text-red-500/80 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-bold text-white mb-2">Documentary: The Future of Work</h3>
                        <p className="text-gray-500">Watch how AI is changing jobs in Nairobi today.</p>
                    </div>
                </section>

            </div>
        </main>
    );
}
