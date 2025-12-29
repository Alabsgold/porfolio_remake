"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-4">
                        Experience & <span className="text-cyan-400">Leadership</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {portfolioData.experience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-8 border-l border-cyan-500/20"
                        >
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                            <div className="glass-panel p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-slate-800 rounded-lg">
                                        <Briefcase className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                        <p className="text-cyan-400 font-medium">{item.company}</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
