import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "UPILI AI | JSEA Transition Advisor",
    description: "Advanced Agentic AI platform for Kenyan JSEA students transitioning to Senior School. Powered by Gemini 3.",
    icons: {
        icon: "/assets/favicon.ico",
    },
    openGraph: {
        title: "UPILI AI - Future-Proof Your Career",
        description: "Discover your path in the new CBC curriculum with AI-driven analysis.",
        type: "website",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`antialiased bg-black text-white`}>
                <Navbar />
                <div className="pt-16">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
