import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar';
import { ConnectivityMonitor } from '@/components/ConnectivityMonitor';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Career Smart | Intelligent Guidance',
    description: 'AI-Powered Career Pathways & Market Intelligence for JSEA',
    manifest: '/manifest.json',
    icons: {
        apple: '/icon-192x192.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <ConnectivityMonitor />
                <Navbar />
                {children}
            </body>
        </html>
    )
}
