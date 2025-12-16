"use client";

import { motion } from "framer-motion";
import { jseaContent } from "@/data/jsea-content";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card } from "@/components/ui/card";
import { AlertTriangle, Lightbulb, Brain, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
    const riskData = [
        { name: 'Data Entry', risk: 95, fill: '#ef4444' }, // Red
        { name: 'Accounting', risk: 88, fill: '#ef4444' },
        { name: 'HR Admin', risk: 80, fill: '#f97316' },   // Orange
        { name: 'Design', risk: 30, fill: '#22c55e' },     // Green
        { name: 'Software', risk: 20, fill: '#22c55e' },
    ];

    const skillsData = [
        { subject: 'Tech (STEM)', A: 80, fullMark: 100 },
        { subject: 'Creativity', A: 90, fullMark: 100 },
        { subject: 'Communication', A: 85, fullMark: 100 },
        { subject: 'EQ', A: 95, fullMark: 100 },
        { subject: 'Digital', A: 100, fullMark: 100 },
    ];

    const [showAdvice, setShowAdvice] = useState(false);

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* Hero Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-amber-500/20 text-amber-500 border border-amber-500/50 text-xs font-bold px-3 py-1 rounded mb-6 animate-pulse">
                            CRITICAL ADVISORY
                        </div>
                        <h1 className="text-5xl font-black mb-6 leading-tight">
                            The AI Revolution <br />
                            <span className="text-amber-500">Is Here.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Artificial Intelligence is not science fiction—it is automating routine tasks today.
                            Choosing a career path without considering AI is like buying a ticket for a train that has already left.
                        </p>

                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <AlertTriangle className="text-red-500" /> High Risk Zones
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                {jseaContent.aiFuture.warnings.slice(0, 3).map((warn, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-red-500 mt-1">●</span>
                                        <span>
                                            <strong className="text-white">{warn.role}:</strong> {warn.reason}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Card className="bg-gray-900/50 border-gray-800 p-6 h-[400px]">
                        <h3 className="text-center font-bold text-white mb-6">Automation Potential by 2030</h3>
                        <ResponsiveContainer width="100%" height="85%">
                            <BarChart data={riskData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis dataKey="name" stroke="#666" fontSize={10} />
                                <YAxis stroke="#666" fontSize={10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="risk" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </section>

                {/* Strategy Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-4">How to Survive?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        The goal is not to avoid these fields, but to evolve. An accountant who knows AI is a Strategic Financial Analyst.
                    </p>

                    {!showAdvice ? (
                        <button
                            onClick={() => setShowAdvice(true)}
                            className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-cyan-500/20"
                        >
                            Reveal Survival Strategy
                        </button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="grid md:grid-cols-3 gap-6 text-left"
                        >
                            {jseaContent.aiFuture.advice.map((tip, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-black border border-cyan-900/50 p-6 rounded-2xl hover:border-cyan-500 transition-colors"
                                >
                                    <Lightbulb className="w-8 h-8 text-cyan-400 mb-4" />
                                    <h3 className="font-bold text-white mb-2">{tip.title}</h3>
                                    <p className="text-sm text-gray-400">{tip.content}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </section>

                {/* Skills Radar */}
                <section className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Balanced Profile</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Employers don't just want robots. They want humans who can use robots.
                                The ideal candidate for 2030 balances technical skill with emotional intelligence.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-900/20 border border-green-900/50">
                                    <Brain className="text-green-400 w-6 h-6" />
                                    <div>
                                        <div className="font-bold text-white">Emotional Intelligence (EQ)</div>
                                        <div className="text-xs text-green-400">Hardest to automate</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-cyan-900/20 border border-cyan-900/50">
                                    <div className="font-bold text-cyan-400 text-xl w-6 text-center">AI</div>
                                    <div>
                                        <div className="font-bold text-white">Digital Literacy</div>
                                        <div className="text-xs text-cyan-400">Universal Requirement</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                                    <PolarGrid stroke="#333" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar
                                        name="Ideal Profile"
                                        dataKey="A"
                                        stroke="#0891b2" // Cyan-600
                                        strokeWidth={3}
                                        fill="#06b6d4"   // Cyan-500
                                        fillOpacity={0.3}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
