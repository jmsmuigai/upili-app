"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, Info, Award } from 'lucide-react';
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
        </main>
    );
}
