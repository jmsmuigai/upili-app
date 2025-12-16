"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2, FileText, Globe, GraduationCap } from "lucide-react";

const apps = [
    {
        name: "KNEC Portal",
        desc: "Official Assessment Registration",
        icon: Building2,
        url: "https://www.knec.ac.ke", // Genuine link
        color: "cyan"
    },
    {
        name: "Ministry of Education",
        desc: "Policy & Guidelines",
        icon: Globe,
        url: "https://education.go.ke", // Genuine link
        color: "blue"
    },
    {
        name: "JSEA Guidelines",
        desc: "Curriculum Framework",
        icon: FileText,
        url: "https://kicd.ac.ke", // Genuine link
        color: "green"
    },
    {
        name: "KUCCPS",
        desc: "University Placement",
        icon: GraduationCap,
        url: "https://kuccps.net", // Genuine link
        color: "purple"
    }
];

export function ResourceHub() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {apps.map((app, i) => (
                <motion.a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        relative overflow-hidden rounded-2xl p-6 bg-black/60 border backdrop-blur-md group
                        ${app.color === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]' : ''}
                        ${app.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]' : ''}
                        ${app.color === 'green' ? 'border-green-500/30 hover:border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]' : ''}
                        ${app.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]' : ''}
                    `}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl bg-${app.color}-500/20`}>
                            <app.icon className={`w-6 h-6 text-${app.color}-400`} />
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-bold text-white text-lg mb-1">{app.name}</h3>
                    <p className="text-gray-400 text-xs">{app.desc}</p>
                </motion.a>
            ))}
        </div>
    );
}
