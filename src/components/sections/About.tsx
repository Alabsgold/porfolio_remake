"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                            About <span className="text-cyan-400">Me</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                My name is <strong className="text-white">{portfolioData.personal.name}</strong>. I am a {portfolioData.personal.role}, driven by the challenge of building systems that are not just functional, but {portfolioData.personal.tagline.toLowerCase()}
                            </p>
                            <p>
                                Starting with curiosity, I&apos;ve transitioned into a real-world system builder. My academic background in Computer Science at Joseph Ayo Babalola University provides the theoretical foundation, while my hands-on experience in hackathons and leadership roles drives my practical application.
                            </p>
                            <p>
                                I am passionate about secure systems, automation, AI-assisted tools, and leveraging technology for educational and faith-based communities. I believe in clean logic, security-first thinking, and long-term scalability.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-xl" />
                        <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Core Philosophy</h3>
                            <ul className="space-y-3">
                                {[
                                    "Security First Mindset",
                                    "Scalable System Architecture",
                                    "Automation & Efficiency",
                                    "Community Impact via Tech"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
