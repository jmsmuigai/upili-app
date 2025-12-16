"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrainCircuit, Compass, GraduationCap, Briefcase, Info, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home", icon: BrainCircuit },
        { href: "/jsea", label: "JSEA Guide", icon: Info },
        { href: "/senior-school", label: "Senior School", icon: GraduationCap },
        { href: "/careers", label: "Future Careers", icon: Briefcase },
        { href: "/about", label: "About", icon: Compass },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-black font-bold group-hover:bg-cyan-400 transition-colors">
                            C
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">
                            Compass<span className="text-cyan-400">.KE</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${isActive
                                                ? "bg-cyan-900/50 text-cyan-400 border border-cyan-700/50"
                                                : "text-gray-300 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4" />
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-gray-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${pathname === link.href
                                            ? "bg-cyan-900/20 text-cyan-400"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
