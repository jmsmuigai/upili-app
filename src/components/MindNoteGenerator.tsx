"use client";

import { useState } from "react";
import { Download, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function MindNoteGenerator() {
    const [name, setName] = useState("");
    const [career, setCareer] = useState("");
    const [generated, setGenerated] = useState(false);

    // Mock download function - in production would use html2canvas or jsPDF
    const handleDownload = () => {
        alert("Downloading your awesome Mind Note! (This is a demo)");
    };

    return (
        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-1 shadow-2xl overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="bg-black/20 backdrop-blur-sm rounded-[20px] p-6 h-full flex flex-col items-center text-center text-white">
                <div className="mb-4 bg-white/20 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
                </div>

                <h2 className="text-2xl font-bold mb-2">Create Your Vision</h2>
                <p className="text-white/80 text-sm mb-6">Commit to your future. Generate a colorful Mind Note to remind you of your "Why".</p>

                {!generated ? (
                    <div className="w-full space-y-4">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            value={career}
                            onChange={(e) => setCareer(e.target.value)}
                            placeholder="Dream Career (e.g. Pilot)"
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            onClick={() => setGenerated(true)}
                            disabled={!name || !career}
                            className="w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                        >
                            Generate Note
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-full"
                    >
                        {/* The "Note" Card Preview */}
                        <div className="bg-white text-slate-900 p-6 rounded-xl shadow-lg transform rotate-[-2deg] mb-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                            <h3 className="font-black text-2xl uppercase tracking-wider text-violet-600 mb-1">FUTURE {career}</h3>
                            <p className="font-handwriting text-lg text-slate-600">I, <span className="font-bold text-slate-900 border-b-2 border-yellow-400">{name}</span>, commit to excellence.</p>
                            <div className="mt-4 flex gap-2 justify-center">
                                <span className="text-xs font-bold px-2 py-1 bg-violet-100 text-violet-700 rounded">#Unstoppable</span>
                                <span className="text-xs font-bold px-2 py-1 bg-fuchsia-100 text-fuchsia-700 rounded">#ClassOf2026</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={handleDownload} className="flex-1 bg-white hover:bg-slate-50 text-violet-700 font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-colors">
                                <Download size={18} /> Download
                            </button>
                            <button onClick={() => setGenerated(false)} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors">
                                Reset
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
