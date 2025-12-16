import type { Metadata } from "next";
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
            <body className="bg-black text-white antialiased min-h-screen">
                {children}
            </body>
        </html>
    );
}
