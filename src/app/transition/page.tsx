import TransitionRoadmap from "@/components/TransitionRoadmap";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Transition Story | Upili',
    description: 'The journey from CBE to Senior Secondary.',
};

export default function TransitionPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 C 50 100 80 100 100 0 Z" fill="url(#grad1)" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#ef4444", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 mb-6 drop-shadow-sm">
                        The Great Transition
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        From the foundational roots of CBE to the specialized heights of Senior Secondary.
                        Discover how your learning journey evolves into career mastery.
                    </p>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="bg-white dark:bg-slate-900 shadow-inner">
                <TransitionRoadmap />
            </section>

            {/* Why This Stage Matters */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                            alt="Students collaborating"
                            className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-indigo-900 dark:text-indigo-300">Why Senior Secondary?</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                            This is the pivotal moment where general knowledge transforms into specialized expertise.
                            Whether you choose <strong>Pure Sciences</strong>, <strong>Technology</strong>, or <strong>Arts</strong>,
                            Senior Secondary is designed to align your innate talents with global market demands.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                                <span>Tailored Career Pathways</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">✓</span>
                                <span>Global University Readiness</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">✓</span>
                                <span>Hands-on Technical Skills</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
