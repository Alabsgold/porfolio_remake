"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-4">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        Selected works demonstrating backend logic, API integration, and full-stack capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel rounded-xl overflow-hidden flex flex-col group hover:border-cyan-500/50 transition-all duration-300"
                        >
                            {/* Project Image Placeholder - can be replaced with real images later */}
                            <div className="h-48 bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                                <div className="absolute inset-0 bg-cyan-500/5 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className="text-xs font-bold text-cyan-400 mb-1">{project.role}</div>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-slate-400 text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-slate-300 px-2 py-1 bg-slate-800 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button size="sm" variant="outline" className="w-full">
                                        <Github className="w-4 h-4 mr-2" /> Code
                                    </Button>
                                    <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
