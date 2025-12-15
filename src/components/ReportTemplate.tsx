"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Briefcase, Award, Code, Lightbulb, Star, Download } from 'lucide-react';

export function ReportTemplate({ data }: { data: any }) {
    if (!data) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="space-y-6 mt-8 print:mt-0">
            <div className="flex justify-between items-center print:hidden">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                    Your Career Smart Roadmap 🚀
                </h2>
                <button onClick={handlePrint} className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200">
                    <Download className="h-4 w-4" /> Download Advising
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:block print:space-y-4">

                {/* 1. The Main Mission (Career) */}
                <Card className="bg-gradient-to-br from-violet-900 via-indigo-900 to-black border-violet-500/50 relative overflow-hidden group hover:scale-[1.02] transition-transform print:break-inside-avoid print:border-2 print:border-black print:bg-none">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Briefcase className="h-32 w-32 text-white print:text-black" /></div>
                    <CardContent className="p-8">
                        <div className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-2 print:text-black">Primary Mission</div>
                        <h3 className="text-4xl font-black text-white mb-4 print:text-black">{data.pathway}</h3>
                        <p className="text-gray-300 leading-relaxed z-10 relative print:text-black">
                            {data.advice}
                        </p>
                        {data.market_reason && (
                            <div className="mt-4 p-3 bg-green-900/40 border border-green-500/30 rounded-lg print:border-black print:bg-gray-100">
                                <p className="text-green-300 text-sm font-bold flex items-center gap-2 print:text-green-700">
                                    <Lightbulb className="h-4 w-4" /> Market Intelligence:
                                </p>
                                <p className="text-gray-200 text-sm italic print:text-black">"{data.market_reason}"</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* 2. The Side Hustle (Dual Career) */}
                <Card className="bg-gradient-to-br from-pink-900 via-rose-900 to-black border-pink-500/50 relative overflow-hidden group hover:scale-[1.02] transition-transform print:break-inside-avoid print:border-2 print:border-black print:bg-none">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Star className="h-32 w-32 text-white" /></div>
                    <CardContent className="p-8">
                        <div className="text-xs font-bold text-pink-300 uppercase tracking-widest mb-2">Your Side Hustle</div>
                        <h3 className="text-3xl font-black text-white mb-4">{data.side_hustle || "Content Creation"}</h3>
                        <p className="text-gray-300 leading-relaxed z-10 relative">
                            Don't limit yourself. Use your {data.stats?.creativity > 70 ? "creative" : "analytical"} talents to build a secondary income stream.
                        </p>
                    </CardContent>
                </Card>

                {/* 3. Tech Future Proofing */}
                <Card className="bg-gradient-to-br from-cyan-900 via-blue-900 to-black border-cyan-500/50 relative overflow-hidden md:col-span-2">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Code className="h-32 w-32 text-white" /></div>
                    <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="p-4 bg-cyan-500/20 rounded-full">
                            <Zap className="h-10 w-10 text-cyan-400 animate-pulse" />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-2">Future Proofing Protocol</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{data.tech_tip || "Learn Generative AI"}</h3>
                            <p className="text-gray-300">
                                AI won't replace you, but a person using AI will. Start learning at <a href="https://kaggle.com" className="text-cyan-400 underline">Kaggle</a> or <a href="https://aistudio.google.com" className="text-cyan-400 underline">Google AI Studio</a> today.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
