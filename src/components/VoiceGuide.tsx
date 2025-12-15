"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VoiceGuide() {
    const [speaking, setSpeaking] = useState(false);
    const pathname = usePathname();

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop valid running speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1.1; // Friendly pitch
            utterance.onend = () => setSpeaking(false);

            setSpeaking(true);
            window.speechSynthesis.speak(utterance);
        }
    };

    const stop = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
        }
    };

    const handleGuide = () => {
        if (speaking) {
            stop();
            return;
        }

        let text = "Welcome to Upili.";

        if (pathname === '/transition') {
            text = "This is the Transition Page. Here you can see the roadmap from C B E to Senior Secondary. Scroll down to see the timeline.";
        } else if (pathname === '/senior-secondary') {
            text = "Welcome to Senior Secondary. Here you can explore pathways like Science, Technology, and Arts. Use the Smart Advisor to chat with our A I, or play games in the Brain Break Arcade.";
        } else if (pathname === '/') {
            text = "You are on the home page. Explore our resources for C B E, JSEA and Senior School.";
        }

        speak(text);
    };

    // Stop speaking when navigating away
    useEffect(() => {
        stop();
    }, [pathname]);

    return (
        <button
            onClick={handleGuide}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 ${speaking ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
            aria-label="Toggle Voice Guide"
        >
            {speaking ? <VolumeX size={24} /> : <Volume2 size={24} />}
            <span className="font-bold hidden md:inline">{speaking ? "Stop Voice" : "Voice Guide"}</span>
        </button>
    );
}
