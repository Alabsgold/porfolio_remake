"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-6">
                            Get In <span className="text-cyan-400">Touch</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-md">
                            Whether you have a project in mind, need backend architectural advice, or just want to connect, I&apos;m open to opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email</div>
                                    <div className="font-medium text-white">emmaalabi31@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">GitHub</div>
                                    <div className="font-medium text-white">github.com/Alabsgold</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Name</label>
                                    <Input className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email</label>
                                    <Input className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <Textarea className="min-h-[120px] bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500" placeholder="Your message here..." />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
