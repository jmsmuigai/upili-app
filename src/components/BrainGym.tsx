"use client"

import { motion } from 'framer-motion';
import { Gamepad2, Brain, Puzzle, Dices, Layers } from 'lucide-react';

export function BrainGym() {
    const games = [
        { name: "Sudoku Daily", icon: Puzzle, url: "https://sudoku.com", type: "Logic" },
        { name: "Chess Online", icon: Brain, url: "https://chess.com", type: "Strategy" },
        { name: "Wordle", icon: Dices, url: "https://www.nytimes.com/games/wordle", type: "Vocabulary" },
        { name: "2048", icon: Layers, url: "https://play2048.co/", type: "Math" }
    ];

    return (
        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-900/40 to-black border border-white/10">
            <div className="flex items-center gap-2 mb-4 text-white">
                <Gamepad2 className="h-5 w-5 text-yellow-400 animate-pulse" />
                <h3 className="font-bold">Brain Gym 🧠</h3>
            </div>
            <p className="text-xs text-gray-400 mb-4">Sharpen your mind with free links.</p>

            <div className="space-y-2">
                {games.map((game, i) => (
                    <motion.a
                        key={i}
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                        <div className="flex items-center gap-2">
                            <game.icon className="h-4 w-4 text-upili-300 group-hover:text-yellow-400" />
                            <span className="text-sm text-gray-200">{game.name}</span>
                        </div>
                        <span className="text-[10px] bg-upili-500/20 text-upili-300 px-1.5 py-0.5 rounded">{game.type}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
