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
        <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">

            {/* 1. EMOTIONAL BACKGROUND SLIDER */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0, scale: index === currentSlide ? 1.05 : 1 }}
                        transition={{ duration: 1.5 }} // Smooth crossfade
                        className="absolute inset-0"
                    >
                        {/* Image Layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide})` }}
                        />
                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-black/70" />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-20">

                {/* 2. TEXT CONTENT (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 text-center lg:text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-red-200 text-xs font-medium uppercase tracking-wider">Dire Need: Supported</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">
                        Je, Umeshindwa <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-white">
                            Kuchagua Mwelekeo?
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Don't let the confusion stop you. From humble beginnings to a **Career Smart** future.
                        I am your AI Companion. Let's find your path together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/report">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 gap-2 font-bold text-lg px-8 h-14 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
                                <Zap className="h-5 w-5 fill-current" />
                                ANZA SASA (Start Now)
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white gap-2 h-14 rounded-full backdrop-blur-sm">
                                <Info className="h-5 w-5" />
                                Jinsi Inavyofanya Kazi
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Transition</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">24/7</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Mshauri Online</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">Free</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Kwa Wote</div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. ROBOT VISUAL (Right) - Overlaying the reality */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative w-full aspect-square max-w-[500px] lg:max-w-[600px] flex items-center justify-center group"
                >
                    {/* ... Existing Robot Animation ... */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[100px] animate-pulse" />

                    <motion.div
                        animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(360deg)"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="relative z-10 w-full h-full drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                    >
                        <Image
                            src="/robot_hero.png"
                            alt="Interactive 5D Robot Interface"
                            fill
                            priority
                            className="object-contain hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* Interactive Neurons */}
                    <div className="absolute -top-4 -right-4 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl animate-bounce delay-700 shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 bg-green-500 rounded-full animate-ping" />
                            <span className="text-green-400 font-mono text-xs font-bold">SYSTEM ONLINE</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 4. "LUGHA YETU" (Our Language) & KNEC GUIDE */}
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
