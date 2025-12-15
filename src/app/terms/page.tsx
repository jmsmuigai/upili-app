export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white pt-24 pb-12 px-8">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-8 border-b border-white/10 pb-4">
                    Terms & Conditions
                </h1>

                <div className="text-slate-300 space-y-6 leading-relaxed">
                    <p className="flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Updated</span>
                        Dec 2025
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Privacy & Data</h2>
                        <p>
                            Upili respects your privacy. While using the <strong>Smart Advisor</strong>, your queries are processed by Gemini Pro to provide personalized guidance.
                            No personal identification data is permanently stored in this demo version.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Educational Guidance</h2>
                        <p>
                            Tools like the <strong>Career Quiz</strong> and <strong>Roadmap</strong> are designed to support decision making.
                            Users should consult with official school administrators for final KNEC registration and placement in Senior Secondary School.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Content Accuracy</h2>
                        <p>
                            Schemes of work, book lists, and expectations are based on the latest Competency Based Education (CBE) frameworks.
                            We strive for accuracy but curriculum updates happen frequently.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. User Conduct</h2>
                        <p>
                            Be kind and ready to learn! The games and community features are for educational growth.
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-slate-400">© 2025 Upili Education Platform. Empowering Futures.</p>
                </div>
            </div>
        </div>
    );
}
