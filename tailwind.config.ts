import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                cyber: {
                    DEFAULT: '#00f3ff', // Neon Cyan
                    dark: '#00a3aa',
                    light: '#80f9ff'
                },
                neon: {
                    purple: '#bc13fe', // Neon Purple
                    pink: '#ff00ff',
                    green: '#0aff00'
                },
                robotic: {
                    gray: '#1a1a2e',
                    metal: '#2d3436',
                    silver: '#b2bec3'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scanline': 'scanline 8s linear infinite'
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 5px #00f3ff)' },
                    '50%': { opacity: '.5', filter: 'drop-shadow(0 0 1px #00f3ff)' }
                },
                'scanline': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
