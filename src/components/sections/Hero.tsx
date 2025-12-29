"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 z-10 grid gap-8 md:grid-cols-2 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-sm font-medium w-fit">
                        Backend-Focused Full-Stack Developer
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Secure</span> & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Intelligent</span> Systems.
                    </h1>

                    <p className="text-lg text-slate-400 max-w-lg">
                        I build scalable APIs, secure backends, and modular digital products.
                        Bridging the gap between complex logic and seamless user experience.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="premium" size="lg" className="rounded-full">
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-slate-700 hover:bg-slate-800">
                            Download Resume <Download className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] w-full flex items-center justify-center"
                >
                    {/* Placeholder for 3D Canvas - keeping it simple for now to avoid WebGL crashes if environment is unstable */}
                    <div className="w-full h-full glass-panel rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="z-10 text-center space-y-2">
                            <div className="text-6xl font-bold text-white/10 group-hover:text-cyan-400/50 transition-colors">3D</div>
                            <div className="text-sm text-slate-500">Interactive Element Loading...</div>
                        </div>

                        {/* Simple CSS animation acting as placeholder */}
                        <div className="absolute w-32 h-32 bg-cyan-500/30 rounded-full blur-xl top-1/4 left-1/4 animate-pulse" />
                        <div className="absolute w-40 h-40 bg-purple-500/30 rounded-full blur-xl bottom-1/4 right-1/4 animate-pulse delay-75" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
