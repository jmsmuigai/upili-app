"use client";

import LiveCharts from "@/components/LiveCharts";
import { ArrowLeft, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function LiveStatsPage() {
    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-8">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft /> Back Home
            </Link>

            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black mb-2 flex items-center gap-3">
                        <BarChart2 className="text-blue-500" /> UPILI LIVE DASHBOARD
                    </h1>
                    <p className="text-slate-400">Real-time intelligence and market tracking.</p>
                </div>
                <div className="hidden md:block">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30 animate-pulse">
                        ● LIVE SYSTEM
                    </span>
                </div>
            </header>

            <LiveCharts />

            {/* Additional Graph Placeholders */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl h-96 flex items-center justify-center relative">
                    <h3 className="absolute top-6 left-6 font-bold text-slate-500 uppercase tracking-widest text-sm">Skills Gap Analysis</h3>
                    <div className="text-slate-600 text-center">
                        [ Advanced D3.js Visualization Loading... ]
                    </div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl h-96 flex items-center justify-center relative">
                    <h3 className="absolute top-6 left-6 font-bold text-slate-500 uppercase tracking-widest text-sm">Regional Talent Heatmap</h3>
                    <div className="text-slate-600 text-center">
                        [ Geospatial Data Loading... ]
                    </div>
                </div>
            </div>

        </main>
    );
}
