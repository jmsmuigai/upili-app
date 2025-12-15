import { Brain, Code, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24 neural-bg">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400 mb-6">
                    About UPILI
                </h1>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                    <p>
                        **UPILI** (Swahili for "Secondary" or "Next Level") is an AI-powered Career Guidance Platform designed for the modern Kenyan learner under the **Competency-Based Curriculum (CBC)**.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Brain className="h-8 w-8 text-upili-400 mb-4" />
                            <h3 className="font-bold text-white mb-2">Intelligent</h3>
                            <p className="text-sm text-gray-400">Powered by Google Gemini Pro, providing deep psychometric profiling.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Code className="h-8 w-8 text-blue-400 mb-4" />
                            <h3 className="font-bold text-white mb-2">Data-Driven</h3>
                            <p className="text-sm text-gray-400">Uses official KNEC grading (EE1-BE2) and placement formulas.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <Globe className="h-8 w-8 text-green-400 mb-4" />
                            <h3 className="font-bold text-white mb-2">Agentic</h3>
                            <p className="text-sm text-gray-400">Capable of autonomous simulation and decision making in 'God Mode'.</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 pt-8 border-t border-white/10">
                        Version 1.0.0 (Agentic Prototype) | Built with Next.js 14, Tailwind, & Vercel AI SDK.
                    </p>
                </div>
            </div>
        </div>
    );
}
