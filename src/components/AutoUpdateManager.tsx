"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Clock } from "lucide-react";

interface AutoUpdateManagerProps {
    lastUpdated: Date;
    onRefresh: () => void;
    isRefreshing: boolean;
}

export default function AutoUpdateManager({ lastUpdated, onRefresh, isRefreshing }: AutoUpdateManagerProps) {
    const [timeAgo, setTimeAgo] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(() => {
        const updateTimeAgo = () => {
            const seconds = Math.floor((Date.now() - lastUpdated.getTime()) / 1000);
            if (seconds < 60) setTimeAgo(`${seconds}s ago`);
            else if (seconds < 3600) setTimeAgo(`${Math.floor(seconds / 60)}m ago`);
            else setTimeAgo(`${Math.floor(seconds / 3600)}h ago`);

            // Auto-suggest update after 5 minutes
            if (seconds > 300 && !showUpdate) {
                setShowUpdate(true);
            }
        };

        updateTimeAgo();
        const interval = setInterval(updateTimeAgo, 10000);
        return () => clearInterval(interval);
    }, [lastUpdated, showUpdate]);

    return (
        <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
                <Clock size={14} />
                <span>Updated {timeAgo}</span>
            </div>

            <AnimatePresence>
                {showUpdate && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => {
                            onRefresh();
                            setShowUpdate(false);
                        }}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all disabled:opacity-50"
                    >
                        <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
                        {isRefreshing ? "Refreshing..." : "Get Latest Insights"}
                    </motion.button>
                )}
            </AnimatePresence>

            {!showUpdate && !isRefreshing && (
                <button
                    onClick={onRefresh}
                    className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                >
                    <RefreshCw size={14} />
                    <span>Refresh</span>
                </button>
            )}
        </div>
    );
}
