import Link from "next/link";
import { Cpu, Shield, Bot } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black mb-8">How to use Upili Senior Mind</h1>

                <div className="space-y-8">
                    <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center rounded-xl">
                                <Cpu size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">1. The Data Engine</h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Start on the home page. Enter your details and let our &quot;Deep Scan&quot; algorithm ask you a few questions. This calibrates your profile based on 40+ psychological factors to suggest the best path for you.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center rounded-xl">
                                <Bot size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">2. Engage Mshauri (The Agent)</h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Use the chat bubbles or the &quot;Activate Gemini&quot; buttons on the Subjects page to talk to our AI. Ask deep questions like &quot;Is Physics hard?&quot; or &quot;Does Art pay well in Kenya?&quot;. The agent is trained to be kind, humble, and detailed.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center rounded-xl">
                                <Shield size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">3. Wellness & Responsibility</h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Success isn&apos;t just grades. Read our &quot;Responsible Living&quot; guides to stay safe, healthy, and focused. Avoid distractions and make smart life choices.
                        </p>
                    </section>

                    <div className="flex justify-center mt-12">
                        <Link href="/" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition">
                            Start Your Scan Now
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
