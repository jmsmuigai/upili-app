"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GameCenter() {
    const [activeGame, setActiveGame] = useState<"quiz" | "memory">("quiz");

    return (
        <div className="p-6 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl border-4 border-orange-300 dark:border-orange-900 shadow-[0_10px_0_rgb(0,0,0,0.1)]">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-black text-orange-600 uppercase tracking-wider drop-shadow-sm">
                    Brain Break Arcade
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium mt-2">
                    Play to learn! Unlock your potential.
                </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setActiveGame("quiz")}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${activeGame === "quiz"
                            ? "bg-orange-500 text-white shadow-lg scale-105"
                            : "bg-white text-orange-500 hover:bg-orange-50"
                        }`}
                >
                    Career Quiz
                </button>
                <button
                    onClick={() => setActiveGame("memory")}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${activeGame === "memory"
                            ? "bg-green-500 text-white shadow-lg scale-105"
                            : "bg-white text-green-500 hover:bg-green-50"
                        }`}
                >
                    Memory Match
                </button>
            </div>

            <div className="min-h-[300px] flex items-center justify-center bg-white dark:bg-slate-950 rounded-2xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700">
                {activeGame === "quiz" ? (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Quick Career Match</h3>
                        <p className="mb-6 text-slate-500">Do you prefer working with machines or people?</p>
                        <div className="flex gap-4 justify-center">
                            <button className="p-4 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold transition-colors">
                                🤖 Machines & Code
                            </button>
                            <button className="p-4 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold transition-colors">
                                👥 People & Teams
                            </button>
                        </div>
                        <p className="mt-8 text-xs text-slate-400 italic">More questions coming soon!</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Subject Icon Match</h3>
                        <div className="grid grid-cols-4 gap-2 w-64 mx-auto">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-2xl cursor-pointer hover:bg-slate-200">
                                    ?
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-xs text-slate-400 italic">Game logic loading...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
