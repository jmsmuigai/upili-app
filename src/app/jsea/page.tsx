"use client";

import { motion } from "framer-motion";
import { jseaContent } from "@/data/jsea-content";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, XCircle, Info } from "lucide-react";

export default function JseaPage() {
    const data = [
        { name: 'Formative (Projects)', value: 40, color: '#06b6d4' }, // Cyan-500
        { name: 'Summative (Exam)', value: 60, color: '#8b5cf6' },    // Purple-500
    ];

    const gradeColors = {
        EE: "bg-green-500/10 border-green-500 text-green-400",
        ME: "bg-blue-500/10 border-blue-500 text-blue-400",
        AE: "bg-yellow-500/10 border-yellow-500 text-yellow-400",
        BE: "bg-red-500/10 border-red-500 text-red-400",
    };

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <header className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-sm font-medium"
                    >
                        <Info className="w-4 h-4" /> Comprehensive Guide
                    </motion.div>
                    <h1 className="text-5xl font-black tracking-tight mb-4">
                        Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">JSEA</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {jseaContent.intro.description}
                    </p>
                </header>

                {/* Assessment Structure Chart */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <Card className="bg-gray-900/50 border-gray-800 p-8 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Assessment Weighting
                        </h2>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
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
                        <div className="grid grid-cols-2 gap-4 mt-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-cyan-400">40%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">School Based</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-400">60%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">National Exam</div>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">How You Are Graded</h3>
                        <p className="text-gray-400 leading-relaxed">
                            JSEA moves away from raw marks (e.g. 350/500) towards <strong>Performance Levels</strong>.
                            The goal is to measure competency, not just memory.
                        </p>

                        <div className="space-y-4">
                            {jseaContent.jsea.grading.map((grade) => (
                                <motion.div
                                    key={grade.code}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-4 rounded-xl border ${gradeColors[grade.code as keyof typeof gradeColors]} transition-all`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl font-black">{grade.code}</span>
                                            <span className="font-bold text-lg">{grade.level}</span>
                                        </div>
                                        <span className="text-sm font-mono opacity-70">{grade.range}</span>
                                    </div>
                                    <p className="text-sm opacity-90">{grade.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Transition Process Visual */}
                <section className="bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-12">The Transition Timeline</h2>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-900 to-purple-900 -translate-y-1/2 hidden md:block" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "1", title: "Registration", desc: "Grade 9 Term 1", icon: CheckCircle2 },
                                { step: "2", title: "Assessment", desc: "Oct-Nov Exam", icon: AlertCircle },
                                { step: "3", title: "Grading", desc: "Calculated Score", icon: Info },
                                { step: "4", title: "Selection", desc: "Choose Pathway", icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} className="bg-black border border-gray-800 p-6 rounded-2xl text-center group hover:border-cyan-500 transition-colors">
                                    <div className="w-12 h-12 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-900 transition-colors">
                                        <item.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
