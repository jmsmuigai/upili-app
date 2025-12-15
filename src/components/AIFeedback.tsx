"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, BookOpen, ChevronRight, Check } from 'lucide-react';

export function AIFeedback() {
    const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);
    const [showResources, setShowResources] = useState(false);

    return (
        <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-upili-300" />
                Mshauri's Learning Loop
            </h3>

            <p className="text-gray-400 mb-4 text-sm">
                Did this career analysis feel accurate to you? Your feedback helps Mshauri get smarter.
            </p>

            <div className="flex gap-4 mb-4">
                <Button
                    variant={feedback === 'positive' ? "neon" : "outline"}
                    className="flex-1"
                    onClick={() => { setFeedback('positive'); setShowResources(true); }}
                >
                    <ThumbsUp className="mr-2 h-4 w-4" /> Accurate
                </Button>
                <Button
                    variant={feedback === 'negative' ? "destructive" : "outline"}
                    className="flex-1"
                    onClick={() => setFeedback('negative')}
                >
                    <ThumbsDown className="mr-2 h-4 w-4" /> Missed the Mark
                </Button>
            </div>

            <AnimatePresence>
                {showResources && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="overflow-hidden"
                    >
                        <div className="bg-upili-500/20 p-4 rounded-lg border border-upili-500/30">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-400" /> Recommended Action
                            </h4>
                            <p className="text-sm text-gray-300 mb-3">
                                Since you plan to pursue this path, start learning the tools of the future now.
                            </p>
                            <a href="https://aistudio.google.com" target="_blank" rel="noreferrer">
                                <Button size="sm" variant="secondary" className="w-full justify-between group">
                                    Learn Generative AI
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
