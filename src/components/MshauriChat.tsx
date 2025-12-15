"use client"

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Bot, User, RefreshCcw, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReportTemplate } from './ReportTemplate';

export function MshauriChat() {
    // 1. Profiling State
    const [profilingDone, setProfilingDone] = useState(false);
    const [bioData, setBioData] = useState({
        name: '',
        dob: '',
        school: '',
        location: 'Rural'
    });

    // 2. Chat Hook
    const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
        api: '/api/chat',
        body: { bioData } // Pass bioData to the AI
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle Bio Submission
    const submitBio = () => {
        if (bioData.name && bioData.school) {
            setProfilingDone(true);
            // Optional: Trigger initial greeting? 
            // For now, let user type first or let AI say "Jambo [Name]" if we trigger it manually
        }
    };

    // If not done profiling, show Form
    if (!profilingDone) {
        return (
            <Card className="max-w-md mx-auto bg-black/50 border-white/20 backdrop-blur-md">
                <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                            <Bot className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Tujuane (Introduction)</h2>
                        <p className="text-gray-400">Before we start, tell me about yourself.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Jina Lako (Your Name)</label>
                            <Input
                                placeholder="e.g. Kamau Otieno"
                                value={bioData.name}
                                onChange={(e) => setBioData({ ...bioData, name: e.target.value })}
                                className="bg-black/50 border-white/20 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Tarehe ya Kuzaliwa (DOB)</label>
                            <Input
                                type="date"
                                value={bioData.dob}
                                onChange={(e) => setBioData({ ...bioData, dob: e.target.value })}
                                className="bg-black/50 border-white/20 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Shule Yako (School Name)</label>
                            <Input
                                placeholder="e.g. Usalama Primary"
                                value={bioData.school}
                                onChange={(e) => setBioData({ ...bioData, school: e.target.value })}
                                className="bg-black/50 border-white/20 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Location (D.O.B)</label>
                            <select
                                value={bioData.location}
                                onChange={(e) => setBioData({ ...bioData, location: e.target.value })}
                                className="w-full bg-black/50 border border-white/20 text-white rounded-md h-10 px-3"
                            >
                                <option value="Rural">Rural (Kijijini)</option>
                                <option value="Urban">Urban (Mjini)</option>
                                <option value="Peri-Urban">Peri-Urban</option>
                            </select>
                        </div>
                    </div>

                    <Button
                        onClick={submitBio}
                        disabled={!bioData.name || !bioData.school}
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold h-12"
                    >
                        ANZA CHAT (Start)
                    </Button>
                </CardContent>
            </Card>
        )
    }

    // 3. Find the Last JSON Message (The Report)
    // We look for a message that contains ```json ... ```
    const lastAssistantMessage = messages.filter(m => m.role === 'assistant').pop();
    let reportData = null;
    if (lastAssistantMessage?.content.includes('```json')) {
        try {
            const jsonString = lastAssistantMessage.content.match(/```json\n([\s\S]*?)\n```/)?.[1];
            if (jsonString) {
                reportData = JSON.parse(jsonString);
            }
        } catch (e) {
            console.error("Failed to parse Report JSON", e);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[700px]">

            {/* LEFT: THE CHAT INTERFACE */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-md flex flex-col h-full overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-4 border-b border-white/10 bg-black/20 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-sm text-green-400">MSHAURI AI_ONLINE</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => reload()} title="Restart Chat">
                        <RefreshCcw className="h-4 w-4 text-gray-400" />
                    </Button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {messages.length === 0 && (
                        <div className="text-center text-gray-500 mt-20">
                            <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p>Habari {bioData.name}! 👋</p>
                            <p className="text-sm">Uliza swali lolote kuhusu Grade 10.</p>
                            <p className="text-xs italic mt-2">"Je, nifanye Engineering au Sanaa?"</p>
                        </div>
                    )}

                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className={cn(
                                "flex gap-3 max-w-[90%]",
                                m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                m.role === 'user' ? "bg-white text-black" : "bg-violet-600 text-white"
                            )}>
                                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                            </div>

                            <div className={cn(
                                "p-3 rounded-2xl text-sm leading-relaxed",
                                m.role === 'user'
                                    ? "bg-white text-black font-medium"
                                    : "bg-white/10 text-gray-100 border border-white/10"
                            )}>
                                {m.content.includes('```json') ? (
                                    <span>Creating your report... Check the right panel! 🚀</span>
                                ) : (
                                    m.content
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-2 items-center text-gray-500 text-sm ml-4">
                            <Loader2 className="h-4 w-4 animate-spin" /> Mshauri is thinking...
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/20 flex gap-2">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder={isLoading ? "Please wait..." : "Andika hapa... (Type here)"}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-violet-500"
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-violet-600 hover:bg-violet-700 text-white"
                    >
                        <Send size={18} />
                    </Button>
                </form>
            </Card>

            {/* RIGHT: THE LIVE REPORT (Visual Feedback) */}
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
                {reportData ? (
                    <ReportTemplate data={reportData} />
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-500 border border-dashed border-white/10 rounded-xl bg-black/20 p-8 text-center space-y-4">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                            <Bot className="h-10 w-10 opacity-30" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-300">Live Report Status</h3>
                            <p className="text-sm">Chat with Mshauri to unlock your Career Smart Roadmap.</p>
                        </div>
                        <div className="flex gap-2 text-xs opacity-50">
                            <span>Waiting for data...</span>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
