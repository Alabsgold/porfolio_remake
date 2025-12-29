"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
    const categories = [
        { name: "Core Languages", items: portfolioData.skills.core, color: "from-blue-500 to-indigo-500" },
        { name: "Frontend", items: portfolioData.skills.frontend, color: "from-purple-500 to-pink-500" },
        { name: "Backend & Systems", items: portfolioData.skills.backend, color: "from-cyan-500 to-teal-500" },
        { name: "DevOps & Tools", items: portfolioData.skills.tools, color: "from-orange-500 to-red-500" },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-4">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for full-stack development and system engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-6 rounded-xl hover:border-cyan-500/30 transition-colors"
                        >
                            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color} mb-4`} />
                            <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
