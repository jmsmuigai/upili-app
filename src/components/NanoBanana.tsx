"use client"

import { motion } from 'framer-motion';

export function NanoBanana() {
    return (
        <motion.div
            className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-black"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            🍌
        </motion.div>
    );
}
