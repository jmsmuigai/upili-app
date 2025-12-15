"use client";

import { useChat } from "ai/react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function SmartAdvisor() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

    return (
        <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto border rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <div>
                    <h3 className="font-bold text-lg">Gemini Smart Advisor</h3>
                    <p className="text-xs text-indigo-100">AI-powered career & subject guidance</p>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                {messages.length === 0 && (
                    <div className="text-center text-slate-400 mt-20">
                        <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Tell me about your favorite subjects or dream career!</p>
                        <p className="text-sm mt-2">Example: "I love coding and math, what pathway should I take?"</p>
                    </div>
                )}

                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user"
                                    ? "bg-slate-200 text-slate-700"
                                    : "bg-indigo-100 text-indigo-600"
                                }`}
                        >
                            {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-bl-none shadow-sm"
                                }`}
                        >
                            {m.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-2 text-slate-400 text-sm ml-12">
                        <span className="animate-bounce">•</span>
                        <span className="animate-bounce delay-100">•</span>
                        <span className="animate-bounce delay-200">•</span>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <input
                    className="flex-1 px-4 py-2 border rounded-full bg-slate-100 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about subjects, careers, or senior school..."
                />
                <button
                    className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50"
                    type="submit"
                    disabled={isLoading || !input.trim()}
                >
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}
