"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Send, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

export default function FeedbackPage() {
    const [sent, setSent] = useState(false);

    if (sent) {
        return (
            <div className="min-h-screen bg-black text-white pt-32 text-center">
                <div className="text-green-400 text-4xl mb-4">✅</div>
                <h2 className="text-2xl font-bold">Asante! Report Received.</h2>
                <p className="text-gray-400 mt-2">We will improve UPILI based on your thoughts.</p>
                <Button onClick={() => setSent(false)} className="mt-6" variant="outline">Send Another</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-6 pt-24 neural-bg">
            <div className="max-w-md mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="h-6 w-6 text-upili-400" />
                    <h1 className="text-2xl font-bold">Feedback</h1>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">How is your experience?</label>
                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1 hover:bg-green-500/20 hover:text-green-400">
                                <ThumbsUp className="mr-2 h-4 w-4" /> Great
                            </Button>
                            <Button variant="outline" className="flex-1 hover:bg-red-500/20 hover:text-red-400">
                                <ThumbsDown className="mr-2 h-4 w-4" /> Needs Work
                            </Button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Tell us more</label>
                        <textarea
                            className="w-full h-32 bg-black/50 border border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-upili-500 outline-none text-white placeholder:text-gray-600"
                            placeholder="I noticed a bug in..."
                        />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500" onClick={() => setSent(true)}>
                        <Send className="mr-2 h-4 w-4" /> Submit Feedback
                    </Button>
                </div>
            </div>
        </div>
    );
}
