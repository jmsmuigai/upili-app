"use client"

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Mic, Volume2, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MshauriChat({ onProfileComplete }: { onProfileComplete?: (data: any) => void }) {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
        onFinish: (message) => {
            // Check for JSON block in the message
            if (message.content.includes("```json")) {
                try {
                    const jsonStr = message.content.split("```json")[1].split("```")[0];
                    const data = JSON.parse(jsonStr);
                    if (onProfileComplete) {
                        setTimeout(() => onProfileComplete(data), 2000); // Delay for effect
                    }
                } catch (e) {
                    console.error("Failed to parse profile JSON", e);
                }
            }
        }
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Card className="w-full max-w-3xl mx-auto h-[600px] flex flex-col bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center animate-pulse">
                        <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Mshauri AI</h3>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" /> Online
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Volume2 className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Chat Area */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-20">
                        <p className="mb-2">Jambo! 👋 I am Mshauri.</p>
                        <p className="text-sm">I can help you find your perfect career path.</p>
                        <Button
                            variant="outline"
                            className="mt-4 border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                            onClick={() => {
                                const event = { target: { value: "Hello Mshauri!" } } as any;
                                handleInputChange(event);
                            }}
                        >
                            Start Interview
                        </Button>
                    </div>
                )}

                <AnimatePresence>
                    {messages.map(m => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user'
                                    ? 'bg-violet-600 text-white rounded-br-none'
                                    : 'bg-white/10 text-gray-100 rounded-bl-none border border-white/5'
                                }`}>
                                <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] uppercase tracking-wider font-bold">
                                    {m.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                                    {m.role === 'user' ? 'You' : 'Mshauri'}
                                </div>
                                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                    {m.content.split("```json")[0]} {/* Hide JSON from chat bubble */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-2 text-gray-400 text-sm">
                            <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </CardContent>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Mic className="h-5 w-5" />
                    </Button>
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your answer..."
                        className="bg-black/30 border-white/10 focus-visible:ring-violet-500 text-white"
                        autoFocus
                    />
                    <Button type="submit" variant="neon" disabled={isLoading || !input.trim()}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </Card>
    );
}
