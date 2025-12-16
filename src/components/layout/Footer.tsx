"use client";

import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="font-bold text-xl tracking-tight text-white block mb-4">
                            Compass<span className="text-cyan-400">.KE</span>
                        </span>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Empowering Kenyan students to make data-driven decisions for their future.
                            Embrace technology, understand your curriculum, and build a career that lasts.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Compass</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-cyan-400 transition-colors">Analyzer</Link></li>
                            <li><Link href="/jsea" className="hover:text-cyan-400 transition-colors">JSEA Explained</Link></li>
                            <li><Link href="/senior-school" className="hover:text-cyan-400 transition-colors">Senior Pathways</Link></li>
                            <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">AI & Future Work</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Compass Guide. Educational Aid based on KICD Guidelines.
                    </p>
                    <div className="flex gap-4 text-xs text-gray-600">
                        <Link href="/terms" className="hover:text-gray-400">Terms</Link>
                        <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
