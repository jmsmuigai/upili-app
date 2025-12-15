"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Terminal, Zap } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden neural-bg pt-16 flex items-center justify-center relative">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">

                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-2">
                        <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium tracking-wide text-gray-300">POWERED BY GEMINI PRO</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Your AI <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
                            Life Coach
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        UPILI isn't just a career guide. It's a sentient agent that helps you pick a path, learn High-Income Skills, and dominate the future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/report">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-all font-bold group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <MessageSquare className="mr-2 h-5 w-5 text-violet-600 group-hover:scale-110 transition-transform" />
                                Consult Mshauri
                                <ArrowRight className="ml-2 h-5 w-5 opacity-50 group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <Link href="/admin">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 group backdrop-blur-md">
                                <Terminal className="mr-2 h-5 w-5 text-red-500" />
                                Run Simulation
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right: The 5D Robot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
                        {/* Holographic Ring */}
                        <motion.div
                            className="absolute inset-0 border border-violet-500/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        />

                        {/* The Robot Image (Color Breathing) */}
                        <motion.div
                            className="relative w-full h-full"
                            animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(360deg)"] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        >
                            <Image
                                src="/robot_hero.png"
                                alt="Mshauri AI Robot"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                                priority
                            />
                        </motion.div>

                        {/* Floating 'Neural' Nodes */}
                        <motion.div
                            className="absolute top-1/4 right-0 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-mono text-green-400"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            STATUS: ONLINE
                        </motion.div>

                        <motion.div
                            className="absolute bottom-1/4 left-0 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-mono text-blue-400"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                        >
                            IQ: 180+
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
