"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

interface AgentAnalysis {
    agent: string;
    icon: React.ElementType;
    color: string;
    analysis: string;
    confidence: number;
    recommendation: string;
}

interface MultiAgentPanelProps {
    subject: string;
    analyses: AgentAnalysis[];
}

export default function MultiAgentPanel({ subject, analyses }: MultiAgentPanelProps) {
    const [activeAgent, setActiveAgent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveAgent((prev) => (prev + 1) % analyses.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [analyses.length]);

    if (analyses.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-yellow-400" />
                Multi-Agent Analysis
            </h2>
            <p className="text-slate-400 mb-6 text-sm">
                Four specialized AI agents are analyzing {subject} from different perspectives...
            </p>

            {/* Agent Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {analyses.map((agent, index) => {
                    const Icon = agent.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveAgent(index)}
                            className={`p-4 rounded-xl border transition-all ${activeAgent === index
                                ? `${agent.color} border-opacity-100 shadow-lg`
                                : "bg-slate-800/50 border-slate-700 hover:bg-slate-800"
                                }`}
                        >
                            <Icon className={activeAgent === index ? "text-white" : "text-slate-400"} size={24} />
                            <p className={`text-xs mt-2 font-bold ${activeAgent === index ? "text-white" : "text-slate-400"}`}>
                                {agent.agent}
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* Active Agent Display */}
            <motion.div
                key={activeAgent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${analyses[activeAgent].color} border border-white/20 rounded-2xl p-6`}
            >
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {(() => {
                            const Icon = analyses[activeAgent].icon;
                            return <Icon className="text-white" size={24} />;
                        })()}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{analyses[activeAgent].agent} Agent</h3>
                        <p className="text-white/90 mb-4">{analyses[activeAgent].analysis}</p>

                        <div className="bg-black/20 rounded-lg p-4 mb-4">
                            <p className="text-sm font-bold text-white mb-1">Recommendation:</p>
                            <p className="text-white/80">{analyses[activeAgent].recommendation}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm text-white/70">Confidence:</span>
                            <div className="flex-1 h-2 bg-black/30 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${analyses[activeAgent].confidence}%` }}
                                    className="h-full bg-white"
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span className="text-sm font-bold text-white">{analyses[activeAgent].confidence}%</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Export agent configurations
export const AGENT_CONFIGS = {
    career: { icon: Briefcase, color: "bg-blue-900/40" },
    academic: { icon: GraduationCap, color: "bg-purple-900/40" },
    wellness: { icon: Heart, color: "bg-pink-900/40" },
    future: { icon: TrendingUp, color: "bg-green-900/40" },
};
