import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calculator, PenTool, BrainCircuit } from 'lucide-react';

export default function JSEAGuide() {
    return (
        <main className="min-h-screen bg-black text-white p-8 md:p-12 font-sans selection:bg-red-500/30">
            <Link href="/">
                <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
            </Link>

            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                        JSEA EXPLAINED
                    </h1>
                    <p className="text-xl text-gray-300">
                        The <strong>Junior Secondary Education Assessment</strong> is not just an exam. It's the fork in the road where you choose your destiny.
                    </p>
                </div>

                {/* The 3 Pathways */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* STEM */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-500/50 transition-colors group">
                        <div className="h-12 w-12 bg-red-900/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                            <Calculator className="h-6 w-6 text-red-200" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-red-400">STEM Pathway</h3>
                        <p className="text-gray-400 mb-4">
                            Science, Technology, Engineering, and Mathematics.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
                            <li>Pure Sciences</li>
                            <li>Applied Sciences</li>
                            <li><strong>AI & Robotics</strong></li>
                            <li>Technical Engineering</li>
                        </ul>
                    </div>

                    {/* Social Sciences */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-yellow-500/50 transition-colors group">
                        <div className="h-12 w-12 bg-yellow-900/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                            <BookOpen className="h-6 w-6 text-yellow-200" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Social Sciences</h3>
                        <p className="text-gray-400 mb-4">
                            Humanities and Business Studies.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
                            <li>History & Citizenship</li>
                            <li>Religious Education</li>
                            <li>Business Studies</li>
                            <li>Languages</li>
                        </ul>
                    </div>

                    {/* Arts & Sports */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group">
                        <div className="h-12 w-12 bg-orange-900/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                            <PenTool className="h-6 w-6 text-orange-200" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-orange-400">Arts & Sports</h3>
                        <p className="text-gray-400 mb-4">
                            Creative Arts and Sports Science.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
                            <li>Visual Arts</li>
                            <li>Performing Arts</li>
                            <li>Sports Science</li>
                            <li>Music</li>
                        </ul>
                    </div>
                </div>

                {/* AI Overlay Section */}
                <div className="bg-gradient-to-r from-red-900/20 to-black border border-red-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                <BrainCircuit className="h-8 w-8 text-red-500" />
                                Why AI Matters
                            </h2>
                            <p className="text-gray-300">
                                No matter which pathway you choose, Artificial Intelligence will be part of it.
                                Musicians use AI composers. Doctors use AI diagnosis. Engineers use AI design.
                            </p>
                            <p className="text-white font-bold">
                                Career Smart ensures you are ready for the AI Era.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-12">
                    <Link href="/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full font-bold px-12 py-6 text-lg">
                            Get Your Personal AI Advice
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
