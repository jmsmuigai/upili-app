"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, CheckCircle, Loader2 } from "lucide-react";

interface ReasoningStep {
    id: string;
    text: string;
    status: "thinking" | "complete";
    confidence?: number;
}

interface AgenticReasoningProps {
    steps: ReasoningStep[];
    isActive: boolean;
}

export default function AgenticReasoning({ steps, isActive }: AgenticReasoningProps) {
    if (!isActive || steps.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Brain className="text-purple-400 animate-pulse" size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-white">AI Reasoning Process</h3>
                    <p className="text-xs text-purple-300">Watch how I analyze this subject...</p>
                </div>
            </div>

            <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 }}
                            className="flex items-start gap-3 bg-black/30 rounded-lg p-3"
                        >
                            <div className="mt-1">
                                {step.status === "thinking" ? (
                                    <Loader2 className="text-yellow-400 animate-spin" size={16} />
                                ) : (
                                    <CheckCircle className="text-green-400" size={16} />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-slate-200">{step.text}</p>
                                {step.confidence && (
                                    <div className="mt-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <span>Confidence:</span>
                                            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${step.confidence}%` }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                    className={`h-full ${step.confidence > 80
                                                            ? "bg-green-500"
                                                            : step.confidence > 60
                                                                ? "bg-yellow-500"
                                                                : "bg-orange-500"
                                                        }`}
                                                />
                                            </div>
                                            <span className="font-mono font-bold">{step.confidence}%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
