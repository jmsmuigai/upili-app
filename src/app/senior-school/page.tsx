"use client";

import { motion } from "framer-motion";
import { SubjectCard } from "@/components/curriculum/SubjectCard";
import { cbcSubjects } from "@/data/cbc-subjects";
import { Sparkles, Brain, GraduationCap } from "lucide-react";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SeniorSchoolPage() {
    return (
        <div className="min-h-screen bg-black text-white font-mono selection:bg-cyan-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />

            <div className="relative z-10 container mx-auto px-4 py-12">

                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" /> Back to Advisor
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
                    >
                        SENIOR SCHOOL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CURRICULUM</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        The CBC transition is not just about grades. It is about Competence.
                        Explore the subjects below to see how you will be assessed and what future you are building.
                    </p>
                </div>

                {/* Exam explanation Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500 transition-colors">
                        <div className="absolute -right-4 -top-4 bg-cyan-500/10 w-32 h-32 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
                        <Brain className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">30% Theory</h3>
                        <p className="text-gray-400 text-sm">
                            Traditional written exams. Focuses on core knowledge retention and logic.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500 transition-colors md:col-span-2">
                        <div className="absolute -right-4 -top-4 bg-purple-500/10 w-32 h-32 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
                        <div className="flex items-start justify-between">
                            <div>
                                <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">70% Project Competence</h3>
                                <p className="text-gray-400 text-sm max-w-lg">
                                    This is the game changer. You build, create, and solve real problems.
                                    Grades are earned by doing, not just memorizing.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-5xl font-black text-white/10">REAL WORLD</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Subject Matrix */}
                <div className="mb-8 flex items-center gap-2">
                    <GraduationCap className="text-cyan-500" />
                    <h2 className="text-2xl font-bold text-white">Subject Matrix</h2>
                    <span className="text-xs text-gray-500 uppercase tracking-widest ml-4">Tap cards to flip</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cbcSubjects.map((subject, index) => (
                        <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SubjectCard subject={subject} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
