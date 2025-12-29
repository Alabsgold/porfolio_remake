import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Alabi Emmanuel | Backend-Focused Full-Stack Engineer",
    description: "Portfolio of Alabi Emmanuel, a software engineer building secure, scalable, and intelligent digital systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.variable, "bg-background text-foreground antialiased font-sans")}>
                {children}
            </body>
        </html>
    );
}
