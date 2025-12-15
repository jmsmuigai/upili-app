"use client";

import { motion } from "framer-motion";
import { Users, Activity, TrendingUp, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function LiveCharts() {
    const [participants, setParticipants] = useState(1243);

    // Simulate live user count fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setParticipants(prev => prev + Math.floor(Math.random() * 10) - 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1: Users Online */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={64} className="text-blue-500" />
                </div>
                <h3 className="text-slate-400 text-sm uppercase font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Online Students
                </h3>
                <div className="text-4xl font-black text-white font-mono">
                    {participants.toLocaleString()}
                </div>
                <div className="mt-4 h-10 flex items-end gap-1">
                    {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55].map((h, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [`${h}%`, `${h + Math.random() * 20 - 10}%`, `${h}%`] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            className="w-full bg-blue-500/50 rounded-t-sm"
                        />
                    ))}
                </div>
            </div>

            {/* Card 2: AI Queries */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
                <h3 className="text-slate-400 text-sm uppercase font-bold mb-2 flex items-center gap-2">
                    <Activity size={16} className="text-purple-500" /> AI Queries / Min
                </h3>
                <div className="text-4xl font-black text-white font-mono">
                    842
                </div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-dashed border-purple-500/20 rounded-full"
                />
            </div>

            {/* Card 3: Top Subject */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 to-amber-900/20">
                <h3 className="text-slate-400 text-sm uppercase font-bold mb-2 flex items-center gap-2">
                    <TrendingUp size={16} className="text-amber-500" /> Trending Subject
                </h3>
                <div className="text-3xl font-black text-white">
                    Computer Studies
                </div>
                <p className="text-amber-400 text-xs mt-1">↑ 18.5% this week</p>
            </div>

            {/* Card 4: Global Reach */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                <h3 className="text-slate-400 text-sm uppercase font-bold mb-2 flex items-center gap-2">
                    <Globe size={16} className="text-cyan-500" /> Regions Active
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"].map(city => (
                        <span key={city} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300 border border-white/10">
                            {city}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
