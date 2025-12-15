"use client";

import { useState } from "react";
import { SENIOR_SCHOOLS } from "@/data/senior_secondary";
import { Search, MapPin, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function SchoolFinder() {
    const [term, setTerm] = useState("");

    const filtered = SENIOR_SCHOOLS.filter(s =>
        s.name.toLowerCase().includes(term.toLowerCase()) ||
        s.location.toLowerCase().includes(term.toLowerCase())
    );

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="bg-indigo-600 -mx-6 -mt-6 p-6 rounded-t-3xl mb-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Find Your Dream School</h2>
                <p className="text-indigo-200 text-sm">Explore top-performing centers of excellence</p>
            </div>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                <input
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Search by name, location..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filtered.map((school, i) => (
                    <motion.div
                        key={school.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 transition-all group cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                            <img src={school.image} alt={school.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                {school.name}
                                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-bold uppercase">{school.type}</span>
                            </h3>
                            <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><MapPin size={12} /> {school.location}</span>
                                <span className="flex items-center gap-1"><Trophy size={12} /> Top in {school.bestFor.join(", ")}</span>
                            </div>
                        </div>
                        <button className="self-center px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">
                            View
                        </button>
                    </motion.div>
                ))}
                {filtered.length === 0 && (
                    <p className="text-center text-slate-400 py-8">No schools found matching "{term}"</p>
                )}
            </div>
        </div>
    );
}
