"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface ThreatRadarProps {
    threatLevel: "LOW" | "MEDIUM" | "HIGH";
    resilienceScore: number;
    reasoning: string;
}

export function ThreatRadar({ threatLevel, resilienceScore, reasoning }: ThreatRadarProps) {
    const getColor = () => {
        switch (threatLevel) {
            case "LOW": return "text-neon-green";
            case "MEDIUM": return "text-yellow-400";
            case "HIGH": return "text-red-500";
            default: return "text-gray-400";
        }
    };

    return (
        <div className="bg-black/80 border border-cyber-dark p-6 rounded-xl relative overflow-hidden">
            {/* Animated Background Scan */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-DEFAULT/5 to-transparent animate-scanline pointer-events-none" />

            <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Bot className="w-6 h-6 text-cyber-DEFAULT" /> AI DISRUPTION THREAT
                </h3>
                <span className={`px-3 py-1 rounded border ${getColor()} border-current font-bold`}>
                    {threatLevel} RISK
                </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Visual Gauge */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="60" stroke="#1a1a2e" strokeWidth="8" fill="transparent" />
                        <motion.circle
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: resilienceScore / 100 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            cx="64" cy="64" r="60"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className={getColor()}
                            strokeDasharray="1 1"
                        />
                    </svg>
                    <div className="absolute text-center">
                        <span className={`text-2xl font-bold ${getColor()}`}>{resilienceScore}%</span>
                        <p className="text-[10px] text-gray-500 uppercase">Resilience</p>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        {reasoning}
                    </p>

                    <div className="bg-cyber-dark/20 p-3 rounded border-l-2 border-cyber-DEFAULT">
                        <h4 className="text-xs font-bold text-cyber-DEFAULT uppercase mb-1">Agent Advice</h4>
                        <p className="text-xs text-gray-400">
                            Focus on human-centric skills: Creativity, Empathy, and Complex Strategy.
                            AI cannot easily replicate these traits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
