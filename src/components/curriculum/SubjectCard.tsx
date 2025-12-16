"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CBCSubject } from "@/data/cbc-subjects";
import { BookOpen, Trophy, ArrowRight, BrainCircuit } from "lucide-react";

export function SubjectCard({ subject }: { subject: CBCSubject }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-80 cursor-pointer perspective-1000 group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500 transition-colors shadow-[0_0_15px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,243,255,0.3)]">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${subject.category === 'STEM' ? 'bg-blue-900/50 text-blue-400' :
                                subject.category === 'Arts' ? 'bg-pink-900/50 text-pink-400' :
                                    'bg-green-900/50 text-green-400'
                                }`}>
                                {subject.category}
                            </span>
                            <BrainCircuit className="w-6 h-6 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{subject.description}</p>
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                        <span>Tap to Reveal Assessment</span> <ArrowRight className="w-4 h-4 animate-pulse-x" />
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 to-black border border-purple-500/50 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> Assessment Model
                        </h4>
                        <div className="flex gap-2 mb-4">
                            <div className="flex-1 bg-white/5 rounded p-2 text-center border border-white/10">
                                <span className="block text-xl font-bold text-white">{subject.examFormat.project}%</span>
                                <span className="text-[10px] uppercase text-gray-500">Project</span>
                            </div>
                            <div className="flex-1 bg-white/5 rounded p-2 text-center border border-white/10">
                                <span className="block text-xl font-bold text-white">{subject.examFormat.theory}%</span>
                                <span className="text-[10px] uppercase text-gray-500">Theory</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mb-4 border-l-2 border-purple-500 pl-2">
                            &quot;{subject.examFormat.description}&quot;
                        </p>
                    </div>

                    <div>
                        <h4 className="text-green-400 font-bold mb-2 text-xs uppercase">Career Trajectory</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                            {subject.careerPaths.map((path, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-green-500" />
                                    {path.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
