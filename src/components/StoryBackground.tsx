"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const IMAGES = [
    // Confused/Studying Students
    "https://images.unsplash.com/photo-1427504743055-b71787ea27c0?w=1600&q=80",
    // Classroom context
    "https://images.unsplash.com/photo-1577896335477-023c53014438?w=1600&q=80",
    // Old notice board / Results
    "https://images.unsplash.com/photo-1596496356935-c3f2d2b568be?w=1600&q=80",
    // Students walking/thinking
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
];

export default function StoryBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 6000); // Switch every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 z-10" />
                    <Image
                        src={IMAGES[index]}
                        alt="Education Story"
                        fill
                        unoptimized
                        priority
                        className="object-cover opacity-60"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
