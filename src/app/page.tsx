"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, Info, Award, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
    // Story Mode Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/img_school.png',   // The Reality
        '/img_noticeboard.png', // The Struggle
        '/img_students.png'    // The Hope
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black selection:bg-red-500/30">

            {/* 1. EMOTIONAL BACKGROUND SLIDER */}
            <div className="absolute inset-0 z-0 select-none opacity-40">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0, scale: index === currentSlide ? 1.05 : 1 }}
                        transition={{ duration: 1.5 }} // Smooth crossfade
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-red-900/20" />
                    </motion.div>
                ))}
            </div>

            {/* HIVE MIND PARTICLES */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-700" />
                <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-20">

                {/* 2. TEXT CONTENT (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 text-center lg:text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/50 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-red-200 text-xs font-bold uppercase tracking-wider">Hive Mind: Active</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-loose text-white drop-shadow-2xl">
                        JSEA <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                            AUTHORITY
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        The Ultimate Guide for Grade 9. <br />
                        **STEM • Sports • Arts • Social Sciences** <br />
                        We use AI to decode your future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/report">
                            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white gap-2 font-bold text-lg px-8 h-14 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all border border-red-400/20">
                                <Zap className="h-5 w-5 fill-current" />
                                ANZA SASA (Start Now)
                            </Button>
                        </Link>
                        <Link href="/jsea-guide">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white gap-2 h-14 rounded-full backdrop-blur-sm">
                                <Info className="h-5 w-5" />
                                JSEA Guide (New)
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-2xl font-bold text-red-500">100+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Top Schools</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-orange-500">AI</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Powered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-yellow-500">Free</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Forever</div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. HIVE MIND VISUAL (Right) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative w-full aspect-square max-w-[600px] flex items-center justify-center"
                >
                    {/* Central Core */}
                    <div className="absolute w-64 h-64 bg-gradient-to-br from-red-600 to-orange-600 rounded-full blur-[80px] animate-pulse opacity-50" />

                    <motion.div
                        className="relative z-20 w-80 h-80 drop-shadow-[0_0_60px_rgba(220,38,38,0.6)]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                        <Image
                            src="/robot_hero.png" // We keep the main face but tinted red via CSS or keep as is for contrast
                            alt="Central Intelligence"
                            fill
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Floating Scout Bots (The Hive) */}
                    <motion.div
                        className="absolute -top-10 left-0 w-24 h-24 z-30 drop-shadow-lg"
                        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <Image src="/img_scout_bot_1.png" alt="Scout 1" fill className="object-contain" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-10 -right-4 w-28 h-28 z-30 drop-shadow-lg"
                        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    >
                        <Image src="/img_scout_bot_2.png" alt="Scout 2" fill className="object-contain" />
                    </motion.div>

                    <motion.div
                        className="absolute top-1/2 -right-10 w-20 h-20 z-10 opacity-80 blur-[1px]"
                        animate={{ y: [0, -30, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                    >
                        <Image src="/img_scout_bot_3.png" alt="Scout 3" fill className="object-contain" />
                    </motion.div>

                    {/* Nodes */}
                    <div className="absolute top-0 right-10 p-2 bg-black/60 rounded-lg border border-red-500/30 text-[10px] text-red-400 font-mono">
                        SCANNING SCHOOLS...
                    </div>
                </motion.div>
            </div>

            {/* 4. "LUGHA YETU" & KNEC GUIDE */}

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 space-y-24">

                {/* A. Cultural Robot Greetings */}
                <div className="text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20"
                    >
                        <span className="text-violet-300 text-sm font-bold uppercase tracking-widest">Cultural Intelligence</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Mshauri Speaks <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Your Language</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kikuyu Robot */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md text-center space-y-4"
                        >
                            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                <Image src="/img_robot_kikuyu.png" alt="Kikuyu Robot" fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-green-400">"Atiriri urageire cigana?"</h3>
                            <p className="text-gray-400 italic">"How much did you get?"</p>
                        </motion.div>

                        {/* Sheng Robot */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md text-center space-y-4"
                        >
                            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                                <Image src="/img_robot_sheng.png" alt="Sheng Robot" fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-400">"Umeangukia aje?"</h3>
                            <p className="text-gray-400 italic">"What's the score?"</p>
                        </motion.div>

                        {/* Swahili Robot (Default) */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md text-center space-y-4"
                        >
                            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                <Image src="/robot_hero.png" alt="Swahili Robot" fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-400">"Je, umepata ngapi?"</h3>
                            <p className="text-gray-400 italic">"What did you get?"</p>
                        </motion.div>
                    </div>
                </div>

                {/* B. KNEC CHECKER GUIDE */}
                <div className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Checking Results is <br />
                                <span className="text-yellow-400">Easy & Fast</span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                Don't panic. Use the official KNEC SMS service or the Online Portal.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-200">
                                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">1</div>
                                    <span>Send Index Number to <strong className="text-white">20076</strong> (SMS)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">2</div>
                                    <span>Visit the <a href="https://www.knec.ac.ke/category/exams/kjsea/" target="_blank" className="text-blue-400 underline decoration-blue-400/30 hover:decoration-blue-400">KNEC Portal</a></span>
                                </li>
                            </ul>

                            <Link href="https://www.knec.ac.ke/category/exams/kjsea/" target="_blank">
                                <Button size="lg" className="mt-6 bg-yellow-500 text-black hover:bg-yellow-400 font-bold gap-2">
                                    Check Results Online <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <Image src="/img_result_guide.png" alt="How to check JSEA Results" width={600} height={400} className="w-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
