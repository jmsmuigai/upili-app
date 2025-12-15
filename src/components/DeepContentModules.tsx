"use client";

import { Info, Brain, Globe, Palette, Shield, TrendingUp } from "lucide-react";
import { STEM_DEEP_DIVE, SOCIAL_SCIENCES_DEEP_DIVE, ARTS_SPORTS_MEGA, WELLNESS_ADVICE, MARKET_ANALYSIS } from "@/data/upili_content";

export default function DeepContentModules() {
    return (
        <div className="space-y-16 py-12">

            {/* STEM Module */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 overflow-hidden relative border border-cyan-500/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                    <Cpu className="animate-pulse" /> {STEM_DEEP_DIVE.title}
                </h2>
                <p className="text-xl mb-6 text-slate-300">{STEM_DEEP_DIVE.description}</p>

                <div className="bg-white/5 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
                    <h3 className="font-bold text-yellow-400 mb-2">⚠ AI REALITY CHECK</h3>
                    <p>{STEM_DEEP_DIVE.aiContext}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {STEM_DEEP_DIVE.subjects.map((sub, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors">
                            <h4 className="font-bold text-lg text-cyan-200">{sub.name}</h4>
                            <p className="text-sm opacity-80 mb-2">{sub.details}</p>
                            <p className="text-xs text-cyan-400 font-mono">> CAREERS: {sub.careers}</p>
                        </div>
                    ))}
                </div>

                <a href="https://grow.google/intl/ke" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
                    <Globe size={18} /> {STEM_DEEP_DIVE.action}
                </a>
            </section>

            {/* Social Sciences (Localized) */}
            <section className="bg-amber-50 dark:bg-amber-950/30 rounded-3xl p-8 border-2 border-amber-200 dark:border-amber-900">
                <h2 className="text-3xl font-bold mb-2 text-amber-800 dark:text-amber-500">{SOCIAL_SCIENCES_DEEP_DIVE.title}</h2>
                <p className="italic text-lg text-slate-600 dark:text-slate-400 mb-6">"{SOCIAL_SCIENCES_DEEP_DIVE.description}"</p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <h3 className="font-bold text-amber-600 mb-4">Kenya Focus 🇰🇪</h3>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{SOCIAL_SCIENCES_DEEP_DIVE.localContext}</p>
                    </div>
                    <div className="space-y-4">
                        {SOCIAL_SCIENCES_DEEP_DIVE.subjects.map((sub, i) => (
                            <div key={i} className="border-b border-amber-200 pb-2">
                                <h4 className="font-bold text-slate-800 dark:text-white">{sub.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{sub.details}</p>
                                {/* @ts-ignore */}
                                {sub.successStory && <p className="text-xs text-green-600 font-bold mt-1">💡 {sub.successStory}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Arts & Sports Mega Theme */}
            <section className="bg-gradient-to-br from-fuchsia-900 to-purple-900 text-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-black mb-6 uppercase tracking-widest flex items-center gap-3">
                    <Palette size={40} /> {ARTS_SPORTS_MEGA.title}
                </h2>
                <p className="text-2xl text-fuchsia-200 font-light mb-8">{ARTS_SPORTS_MEGA.description}</p>

                <div className="grid md:grid-cols-3 gap-4">
                    {ARTS_SPORTS_MEGA.subjects.map((sub, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-black/40 p-6 hover:bg-black/60 transition-all cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">{sub.name}</h4>
                                <p className="text-sm opacity-90">{sub.details}</p>
                                {/* @ts-ignore */}
                                {sub.successSlogan && <div className="mt-4 inline-block px-3 py-1 bg-white text-purple-900 font-bold text-xs rounded-full transform group-hover:scale-110 transition-transform">{sub.successSlogan}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Market Analysis Chart */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="text-green-500" /> 2030 Market Analysis (Data Driven)
                </h2>
                <p className="mb-8 text-slate-600 dark:text-slate-400">{MARKET_ANALYSIS.text}</p>

                <div className="space-y-4">
                    {MARKET_ANALYSIS.chartData.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-1">
                                <span>{item.label}</span>
                                <span>{item.value}% Growth</span>
                            </div>
                            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${item.color}`}
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wellness & Responsibility */}
            <section className="bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
                    <Shield className="text-indigo-600" /> Responsible Living
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {WELLNESS_ADVICE.map((advice, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                {advice.icon === "Brain" && <Brain size={20} className="text-pink-500" />}
                                {advice.icon === "Shield" && <Shield size={20} className="text-blue-500" />}
                                {advice.icon === "Heart" && <Brain size={20} className="text-red-500" />} {/* Reuse brain as placeholder if needed or import Heart */}
                                {advice.topic}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{advice.content}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
