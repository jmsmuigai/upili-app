import { APP_CONFIG } from "@/data/upili_content";
import UpiliDataEngine from "@/components/UpiliDataEngine";
import AgenticBackground from "@/components/AgenticBackground";
import StoryBackground from "@/components/StoryBackground";
import AgenticMemes from "@/components/AgenticMemes";
import AdRotator from "@/components/AdRotator";
import StoryBackground from "@/components/StoryBackground"; // Added import for StoryBackground
import { Sparkles, Bot } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#020205] text-white selection:bg-cyan-500 selection:text-black overflow-hidden relative">

            {/* 1. VISUAL STORYTELLING LAYER (Reality) */}
            <StoryBackground />

            {/* 2. DIGITAL OVERLAY LAYER (The Solution) */}
            <AgenticBackground />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">

                {/* Hero Content */}
                <div className="w-full max-w-5xl mx-auto text-center relative mt-12 mb-12">

                    {/* 2. FLOATING AGENTIC MEMES */}
                    <AgenticMemes />

                    {/* Glowing Robot/AI Placeholder (CSS only for now) */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-[60px] opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Bot className="text-cyan-400 animate-pulse" size={20} />
                        <span className="text-sm font-bold tracking-widest text-cyan-200 uppercase">AI Agentic Informed Decision Tool</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white drop-shadow-2xl">
                        UPILI SENIOR MIND
                    </h1>

                    <p className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        "Niko hapa kukusaidia kuchagua subjects zinazofaa! Engage me via data."
                    </p>

                    {/* 3. THE DATA ENGINE (Central Interactive Element) */}
                    <div className="relative z-20">
                        <UpiliDataEngine />
                    </div>

                </div>

                {/* 4. ADVERTISING SECTION */}
                <div className="w-full max-w-4xl mx-auto mt-12 mb-20">
                    <AdRotator />
                </div>

            </div>

            {/* Footer Info */}
            <footer className="relative z-10 py-8 border-t border-white/5 text-center text-slate-600 bg-black/80 backdrop-blur-md">
                <p className="text-sm font-mono">POWERED BY GEMINI PRO • CODED FOR KENYA 🇰🇪</p>
            </footer>
        </main>
    );
}
