"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileCode, Terminal } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-cyan-50 font-mono p-4 md:p-12 relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 border border-cyan-900 bg-black/90 p-8 md:p-12 shadow-[0_0_50px_rgba(0,243,255,0.1)]">

                <header className="mb-12 border-b border-cyan-800 pb-8">
                    <div className="flex items-center gap-4 mb-4 text-cyan-400">
                        <Terminal className="w-8 h-8" />
                        <h1 className="text-3xl font-bold tracking-tighter">DIGITAL PROTOCOL AGREEMENT (<span className="text-white">TERMS</span>)</h1>
                    </div>
                    <p className="text-gray-400 text-sm">
                        SYSTEM TIMESTAMP: {new Date().toISOString()}
                    </p>
                </header>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" /> 1. SYSTEM INTELLIGENCE DISCLAIMER
                        </h2>
                        <div className="pl-4 border-l-2 border-cyan-900 space-y-4 text-gray-300">
                            <p>
                                UPILI (Compass) utilizes standard Artificial Intelligence (Gemini Models) to process user inputs and generate recommendations.
                                While our algorithms are calibrated for high accuracy, the results are <strong className="text-white">PREDICTIVE SIMULATIONS</strong> only.
                            </p>
                            <p className="text-xs uppercase tracking-widest text-red-400">
                                WARNING: THIS APPLICATION DOES NOT REPLACE OFFICIAL KNEC SUBMISSIONS.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <Scale className="w-5 h-5" /> 2. DATA SOVEREIGNTY
                        </h2>
                        <div className="pl-4 border-l-2 border-cyan-900 space-y-4 text-gray-300">
                            <p>
                                We define strictly to the Data Protection Act, 2019 of Kenya.
                                Your student profile data is processed ephemerally for the purpose of generating JSEA guidance.
                            </p>
                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                                <li>No personally identifiable data is sold to third parties.</li>
                                <li>Session data is stored locally in your browser when possible.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <FileCode className="w-5 h-5" /> 3. USAGE LICENSE
                        </h2>
                        <div className="pl-4 border-l-2 border-cyan-900 space-y-4 text-gray-300">
                            <p>
                                Compass.KE grants you a revocable, non-exclusive license to strictly use this interface for educational planning.
                                Reverse engineering of the <span className="text-cyan-400">Interview/Analysis Protocol</span> is strictly prohibited.
                            </p>
                        </div>
                    </section>
                </div>

                <footer className="mt-16 pt-8 border-t border-cyan-900 text-center text-xs text-gray-500">
                    <p>END OF LINE_</p>
                    <p>AGREEMENT ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                </footer>

            </div>
        </div>
    );
}
