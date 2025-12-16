"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateDummyLearners, processLearner, Learner } from '@/lib/simulator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, RotateCw, Database, Server, Cpu } from 'lucide-react';

export default function AdminPage() {
    const [learners, setLearners] = useState<Learner[]>([]);
    const [processed, setProcessed] = useState<Learner[]>([]);
    const [isSimulating, setIsSimulating] = useState(false);
    const [progress, setProgress] = useState(0);

    // Initial Generator
    useEffect(() => {
        setLearners(generateDummyLearners(100)); // Generate 100 on load
    }, []);

    const runSimulation = () => {
        setIsSimulating(true);
        setProcessed([]);
        setProgress(0);

        let current = 0;
        const interval = setInterval(() => {
            if (current >= learners.length) {
                clearInterval(interval);
                setIsSimulating(false);
                return;
            }

            const learner = learners[current];
            const result = processLearner(learner);
            setProcessed(prev => [result, ...prev]); // Add to top
            setProgress(((current + 1) / learners.length) * 100);
            current++;
        }, 50); // Speed: 50ms per student
    };

    const stats = {
        stem: processed.filter(l => l.pathway === "STEM").length,
        arts: processed.filter(l => l.pathway === "Arts & Sports").length,
        social: processed.filter(l => l.pathway === "Social Sciences").length,
        avgScore: processed.length > 0 ? (processed.reduce((a, b) => a + (b.finalScore || 0), 0) / processed.length).toFixed(1) : 0
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 pt-4 neural-bg font-mono">

            {/* Header */}
            <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                    <Server className="h-6 w-6 text-red-500 animate-pulse" />
                    <h1 className="text-2xl font-bold tracking-widest text-red-500">GOD_MODE // ADMIN</h1>
                </div>
                <div className="flex gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1"><Database className="h-3 w-3" /> BUFFER: 100</div>
                    <div className="flex items-center gap-1"><Cpu className="h-3 w-3" /> LATENCY: 50ms</div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Control Panel */}
                <Card className="bg-black/50 border-red-500/30 lg:col-span-1 h-fit">
                    <CardHeader>
                        <CardTitle className="text-red-400 text-sm uppercase">Simulation Control</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col gap-3">
                            <Button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest"
                            >
                                <Play className="mr-2 h-4 w-4" /> INITIATE SEQUENCE
                            </Button>
                            <Button variant="outline" onClick={() => setLearners(generateDummyLearners(100))} disabled={isSimulating}>
                                <RotateCw className="mr-2 h-4 w-4" /> REGENERATE DATA
                            </Button>
                        </div>

                        {/* Live Metrics */}
                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between text-gray-400"><span>PROGRESS</span><span>{Math.round(progress)}%</span></div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-red-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                            <div className="bg-white/5 p-2 rounded text-center">
                                <div className="text-blue-400 font-bold text-lg">{stats.stem}</div>
                                <div className="text-[10px] text-gray-500">STEM</div>
                            </div>
                            <div className="bg-white/5 p-2 rounded text-center">
                                <div className="text-yellow-400 font-bold text-lg">{stats.arts}</div>
                                <div className="text-[10px] text-gray-500">ARTS</div>
                            </div>
                            <div className="bg-white/5 p-2 rounded text-center">
                                <div className="text-green-400 font-bold text-lg">{stats.social}</div>
                                <div className="text-[10px] text-gray-500">SOCIAL</div>
                            </div>
                            <div className="bg-white/5 p-2 rounded text-center">
                                <div className="text-white font-bold text-lg">{stats.avgScore}%</div>
                                <div className="text-[10px] text-gray-500">AVG SCORE</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Live Data Feed */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex justify-between items-center text-xs text-gray-400 px-2">
                        <span>LIVE FEED PROTOCOL</span>
                        <span>{processed.length} / {learners.length} PROCESSED</span>
                    </div>

                    <div className="h-[600px] overflow-y-auto space-y-1 pr-2 relative scrollbar-thin scrollbar-thumb-white/20">
                        <AnimatePresence>
                            {processed.map((l) => (
                                <motion.div
                                    key={l.id}
                                    initial={{ opacity: 0, x: 20, height: 0 }}
                                    animate={{ opacity: 1, x: 0, height: "auto" }}
                                    className="bg-white/5 border border-white/5 rounded p-3 text-xs flex items-center justify-between hover:bg-white/10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`h-2 w-2 rounded-full ${l.pathway === "STEM" ? "bg-blue-500" : l.pathway === "Arts & Sports" ? "bg-yellow-500" : "bg-green-500"}`} />
                                        <div>
                                            <div className="font-bold text-white mb-0.5">{l.name} <span className="text-gray-500 font-normal">({l.region})</span></div>
                                            <div className="text-gray-400 text-[10px]">GRADE: {l.kjseaGrade} | SCORE: {l.finalScore}%</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-upili-300 font-bold">{l.placement}</div>
                                        <div className="text-gray-500 text-[10px] uppercase">{l.pathway}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {processed.length === 0 && (
                            <div className="h-full flex items-center justify-center text-gray-600 text-sm">
                                WAITING FOR INITIATION...
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
