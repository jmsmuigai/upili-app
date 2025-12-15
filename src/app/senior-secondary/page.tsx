import Link from "next/link";
import { BookOpen, Download, Trophy, Star } from "lucide-react";
import SmartAdvisor from "@/components/SmartAdvisor";
import GameCenter from "@/components/GameCenter";
import { SENIOR_PATHWAYS, COMBINATIONS } from "@/data/senior_secondary";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Senior Secondary | Upili',
    description: 'Resources, pathways, and guidance for Senior Secondary education.',
};

export default function SeniorSecondaryPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white pt-24 pb-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Senior Secondary School</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Your hub for advanced learning, pathway selection, and career preparation.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 -mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Pathways & Resources */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Pathways Grid */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Star className="text-yellow-500" /> Available Pathways
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {SENIOR_PATHWAYS.map((path) => (
                                <div key={path.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg mb-1">{path.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{path.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Resources / Books */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <BookOpen className="text-indigo-500" /> Books & Schemes of Work
                        </h2>
                        <div className="space-y-3">
                            {["Form 4 Mathematics (Advanced)", "Physics: Mechanics & Waves", "Computer Studies: Python Basics", "History of East Africa"].map((book, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                                            PDF
                                        </div>
                                        <div>
                                            <p className="font-medium">{book}</p>
                                            <p className="text-xs text-slate-500">2.4 MB • Updated yesterday</p>
                                        </div>
                                    </div>
                                    <button className="text-indigo-600 hover:text-indigo-800 p-2">
                                        <Download size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Game Center */}
                    <section>
                        <GameCenter />
                    </section>

                </div>

                {/* Right Column: Smart Advisor & Tools */}
                <div className="space-y-8">
                    <SmartAdvisor />

                    {/* Combinations Cheat Sheet */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Trophy className="text-yellow-400" /> Top Combinations
                        </h3>
                        <div className="space-y-4">
                            {COMBINATIONS.map((combo, i) => (
                                <div key={i} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    <p className="font-bold text-sm text-yellow-200">{combo.name}</p>
                                    <p className="text-xs opacity-90">{combo.careerPotential}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
