"use client";

import { motion } from "framer-motion";

export default function TransitionRoadmap() {
    const steps = [
        {
            id: "cbe",
            title: "CBE Foundation",
            subtitle: "Competency Based Education",
            desc: "Laying the groundwork with core competencies and values.",
            color: "from-yellow-400 to-orange-500",
        },
        {
            id: "jsea",
            title: "JSEA Journey",
            subtitle: "Junior Secondary",
            desc: "Exploration of pathways and broad curriculum exposure.",
            color: "from-red-500 to-pink-600",
        },
        {
            id: "senior",
            title: "Senior Secondary",
            subtitle: "Specialization",
            desc: "Deep diving into your chosen career pathway: STEM, Arts, or Social Sciences.",
            color: "from-blue-500 to-indigo-600",
        },
    ];

    return (
        <div className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
                Your Path to Success
            </h2>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 ml-[-2px] h-full w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded hidden md:block" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 1, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Card */}
                            <div className="flex-1 w-full md:w-1/2 p-6 rounded-2xl shadow-xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:scale-105 transition-transform duration-300">
                                <div className={`h-2 w-full mb-4 rounded bg-gradient-to-r ${step.color}`} />
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <h4 className="text-lg text-slate-500 dark:text-slate-400 mb-4">{step.subtitle}</h4>
                                <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                                        Grade {index * 3 + 6}-{index * 3 + 9}
                                    </span>
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 shadow-lg">
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color}`} />
                            </div>

                            {/* Spacer for layout balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
