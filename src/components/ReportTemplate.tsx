"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Briefcase, Award, Code, Lightbulb, Star } from 'lucide-react';

export function ReportTemplate({ data }: { data: any }) {
    if (!data) return null;

    return (
        <div className="space-y-6 mt-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 text-center mb-6">
                Your Future Validated 🚀
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 1. The Main Mission (Career) */}
                <Card className="bg-gradient-to-br from-violet-900 via-indigo-900 to-black border-violet-500/50 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Briefcase className="h-32 w-32 text-white" /></div>
                    <CardContent className="p-8">
                        <div className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-2">Primary Mission</div>
                        <h3 className="text-4xl font-black text-white mb-4">{data.pathway}</h3>
                        <p className="text-gray-300 leading-relaxed z-10 relative">
                            {data.advice}
                        </p>
                    </CardContent>
                </Card>

                {/* 2. The Side Hustle (Dual Career) */}
                <Card className="bg-gradient-to-br from-pink-900 via-rose-900 to-black border-pink-500/50 relative overflow-hidden group hover:scale-[1.02] transition-transform">
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
