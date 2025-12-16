"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Database, Play, CheckCircle, Smartphone } from 'lucide-react';

export function KnecSimulator() {
    const [status, setStatus] = useState<"idle" | "mining" | "success">("idle");
    const [log, setLog] = useState<string[]>([]);

    const addLog = (msg: string) => setLog(prev => [...prev, msg]);

    const runSimulation = () => {
        setStatus("mining");
        setLog([]);
        addLog("Initializing KNEC Protocol...");

        setTimeout(() => addLog("Connecting to cba.knec.ac.ke..."), 800);
        setTimeout(() => addLog("Authenticating School ID: 407001..."), 1600);
        setTimeout(() => addLog("Fetching KJSEA Results for Student..."), 2400);
        setTimeout(() => {
            addLog("Data Retrieved: { Math: 'EE1', Sci: 'ME2', Arts: 'EE2' }");
            setStatus("success");
        }, 3500);
    };

    return (
        <Card className="bg-black/80 border-white/10 mt-8 backdrop-blur-xl mb-10 overflow-hidden relative">
            {/* Holographic Header */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />

            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Database className="h-5 w-5 text-upili-400" /> KNEC Sandbox
                    </h3>
                    <div className="flex gap-2">
                        <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400 uppercase tracking-widest">Dev Mode</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Controls */}
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400">
                            Simulate automated data retrieval from KNEC portals without a real session.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10" onClick={runSimulation} disabled={status === "mining"}>
                                <Play className="mr-2 h-4 w-4" /> Run Auto-Mine
                            </Button>
                            <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                                <Download className="mr-2 h-4 w-4" /> Download CSV
                            </Button>
                            <Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 col-span-2">
                                <Smartphone className="mr-2 h-4 w-4" /> Simulate SMS Result
                            </Button>
                        </div>
                    </div>

                    {/* Console Output */}
                    <div className="bg-black rounded-lg p-4 font-mono text-xs h-40 overflow-y-auto border border-white/10 shadow-inner">
                        <div className="text-gray-500 mb-2">{`// System Logs`}</div>
                        {log.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-green-500 mb-1"
                            >
                                {">"} {line}
                            </motion.div>
                        ))}
                        {status === "mining" && (
                            <div className="animate-pulse text-upili-500 mt-2">_ Mining...</div>
                        )}
                        {status === "success" && (
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className="text-yellow-400 mt-2 font-bold flex items-center gap-2"
                            >
                                <CheckCircle className="h-3 w-3" /> Process Complete
                            </motion.div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
