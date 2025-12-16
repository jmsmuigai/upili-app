"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MshauriChat } from '@/components/MshauriChat';
import { PsychometricCharts } from '@/components/PsychometricCharts';
import { AIFeedback } from '@/components/AIFeedback';
import { KnecSimulator } from '@/components/KnecSimulator';
import { DecisionCard } from '@/components/DecisionCard';
import { ReportTemplate } from '@/components/ReportTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share2, Sparkles, Brain } from 'lucide-react';

export default function ReportPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [profileData, setProfileData] = useState<any>(null);

    const handleDownload = () => {
        window.print();
    };

    if (!profileData) {
        return (
            <div className="min-h-screen bg-black text-white p-4 pt-24 neural-bg">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-white/5 px-4 py-1 rounded-full border border-white/10 mb-4"
                        >
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium">Phase 1: Deep Profiling</span>
                        </motion.div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
                            Let&apos;s Know You First
                        </h1>
                        <p className="text-gray-400 max-w-lg mx-auto">
                            Before we map your future, Mshauri needs to understand your past, your passions, and your hidden talents.
                        </p>
                    </div>

                    <MshauriChat onProfileComplete={setProfileData} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-4 pt-24 neural-bg">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                >
                    <div className="h-24 w-24 mx-auto bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl border border-white/20">
                        <Brain className="h-12 w-12 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-white tracking-tight">
                        {profileData.nickname}&apos;s Blueprint
                    </h1>
                    <p className="text-xl text-upili-300 font-medium">{profileData.personality}</p>
                </motion.div>

                {/* Action Bar */}
                <div className="flex justify-center gap-4">
                    <Button variant="neon" onClick={handleDownload}>
                        <Download className="mr-2 h-4 w-4" /> Download Report PDF
                    </Button>
                    <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                </div>

                {/* KNEC Sandbox */}
                <KnecSimulator />

                {/* Official Decision Card (Justification) */}
                <DecisionCard
                    grade={profileData.grade || "EE1"}
                    pathway={profileData.pathway}
                    reasoning={profileData.reasoning}
                    school={profileData.placement || "Pending"}
                />

                {/* 🎨 NEW: Colorful "Life Coach" Report */}
                <ReportTemplate data={profileData} />

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* 1. Psychometrics */}
                    <PsychometricCharts data={profileData.stats} />

                    {/* 2. Recommended Pathway */}
                    <Card className="bg-gradient-to-br from-violet-900/50 to-black border-upili-500/30">
                        <CardHeader>
                            <CardTitle className="text-upili-300  text-lg">Recommended Pathway</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-white mb-2">{profileData.pathway}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {profileData.advice}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* AI Feedback & Next Steps */}
                <AIFeedback />

            </div>
        </div>
    );
}
