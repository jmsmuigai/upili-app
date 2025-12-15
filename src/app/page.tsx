import { APP_CONFIG } from "@/data/upili_content";
import UpiliDataEngine from "@/components/UpiliDataEngine";
import { Sparkles } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050510] text-white selection:bg-cyan-500 selection:text-black">
            {/* Hero Section */}
            <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
                        <Sparkles size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium tracking-wide text-cyan-300">POWERED BY GEMINI PRO & ADVANCED ALGORITHMS</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                        {APP_CONFIG.name}
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
                        {APP_CONFIG.slogan}
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
                        Stop guessing. Start calculating. Input your data points to reveal your optimal future path using our decision matrix.
                    </p>

                    {/* THE DATA ENGINE */}
                    <UpiliDataEngine />
                </div>
            </div>

            {/* Footer Info */}
            <footer className="py-12 border-t border-white/10 text-center text-slate-500">
                <p>Decisions are data. Your future is the result.</p>
                <div className="flex justify-center gap-6 mt-4 text-sm">
                    <span>Entrepreneurship</span>
                    <span>TVET & Skills</span>
                    <span>Online Universities</span>
                </div>
            </footer>
        </main>
    );
}
