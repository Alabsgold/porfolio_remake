export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-slate-950">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Alabi Emmanuel. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
                    <a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
