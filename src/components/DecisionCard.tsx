"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, CheckCircle, Calculator, School } from 'lucide-react';

export function DecisionCard({
    grade = "EE1",
    pathway = "STEM",
    reasoning = "Your scores meet the criteria.",
    school = "Pending Placement"
}: {
    grade?: string,
    pathway?: string,
    reasoning?: string,
    school?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="bg-gradient-to-br from-green-900/50 to-black border-green-500/30 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Scale className="h-24 w-24 text-white" />
                </div>

                <CardHeader className="pb-2">
                    <CardTitle className="text-green-400 flex items-center gap-2 text-lg uppercase tracking-widest">
                        <CheckCircle className="h-5 w-5" /> Official Verdict
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* The Big Result */}
                    <div className="flex items-end gap-2">
                        <h2 className="text-4xl font-bold text-white">{pathway}</h2>
                        <span className="text-gray-400 text-sm mb-1.5">Pathway</span>
                    </div>

                    {/* The School */}
                    <div className="flex items-center gap-2 text-upili-200">
                        <School className="h-4 w-4" />
                        <span className="font-bold">{school}</span>
                    </div>

                    {/* The Justification (Logic) */}
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                        <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                            <Calculator className="h-3 w-3" />
                            <span>PLACEMENT LOGIC (60/20/20)</span>
                        </div>
                        <p className="text-sm text-gray-200 leading-snug">
                            &quot;{reasoning}&quot;
                        </p>
                    </div>

                    {/* Metadata Tags */}
                    <div className="flex gap-2">
                        <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-1 rounded">Grade: {grade}</span>
                        <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Status: VALIDATED</span>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
