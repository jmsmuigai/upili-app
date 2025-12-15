"use client";

import { AGENT_DIALOGUES } from "@/data/upili_content";
import { motion } from "framer-motion";
import { Bot, MessageCircle } from "lucide-react";

export default function AgenticMemes() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {AGENT_DIALOGUES.map((dialogue, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0.5],
                        y: [0, -20, -40, -60]
                    }}
                    transition={{
                        duration: 6,
                        delay: dialogue.delay,
                        repeat: Infinity,
                        repeatDelay: 10
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="relative">
                        <div className={`
                bg-white/10 backdrop-blur-md border border-cyan-500/50 
                text-white px-6 py-3 rounded-full rounded-bl-none 
                shadow-[0_0_15px_rgba(6,182,212,0.5)] 
                font-bold text-sm md:text-lg whitespace-nowrap
                flex items-center gap-2
            `}>
                            <Bot className="w-5 h-5 text-cyan-400" />
                            <span>{dialogue.text}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
