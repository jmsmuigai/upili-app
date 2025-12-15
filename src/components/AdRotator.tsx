"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ADS_DATA } from "@/data/upili_content";
import { ExternalLink } from "lucide-react";

export default function AdRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % ADS_DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const ad = ADS_DATA[index];

    return (
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">

            {/* "Advertise Here" subtle link */}
            <div className="absolute top-2 right-4 z-20">
                <a href="mailto:jmsmuigai@gmail.com" className="text-[10px] text-slate-500 hover:text-cyan-400 uppercase tracking-widest transition-colors">
                    Advertise Here
                </a>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={ad.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 flex-shrink-0">
                        <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">{ad.title}</h3>
                        <p className="text-slate-300 text-sm mb-4">{ad.desc}</p>
                        <div className={`inline-block h-1 w-20 rounded bg-gradient-to-r ${ad.color} mb-4`} />
                    </div>

                    <button className={`
                bg-gradient-to-r ${ad.color}
                px-8 py-3 rounded-full font-bold text-white shadow-lg 
                hover:scale-105 transition-transform flex items-center gap-2
            `}>
                        {ad.cta} <ExternalLink size={16} />
                    </button>
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {ADS_DATA.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-white" : "w-2 bg-white/20"}`}
                    />
                ))}
            </div>
        </div>
    );
}
