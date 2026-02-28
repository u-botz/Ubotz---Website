export default function ContactSection() {
    return (
        <section className="py-24 px-6 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Bento Diagram */}
                    <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[500px]">
                        <div className="col-span-2 row-span-2 glass-card rounded-3xl flex flex-col items-center justify-center p-6 bg-white/60 border-[#319A86]/10">
                            <div className="size-12 bg-[#319A86]/10 rounded-full flex items-center justify-center text-[#0C2722] mb-4">
                                <span className="material-symbols-outlined text-3xl">monitoring</span>
                            </div>
                            <span className="font-bold text-slate-800">Analytics</span>
                            <div className="mt-4 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-2/3 h-full bg-[#319A86]"></div>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1 glass-card rounded-3xl flex items-center gap-4 p-6 bg-white/60 border-[#319A86]/10">
                            <div className="size-10 bg-[#319A86]/10 rounded-xl flex items-center justify-center text-[#0C2722]">
                                <span className="material-symbols-outlined">fingerprint</span>
                            </div>
                            <span className="font-bold text-slate-800">Auth</span>
                        </div>
                        <div className="col-span-2 row-span-1 glass-card rounded-3xl flex items-center gap-4 p-6 bg-white/60 border-[#319A86]/10">
                            <div className="size-10 bg-[#319A86]/10 rounded-xl flex items-center justify-center text-[#0C2722]">
                                <span className="material-symbols-outlined">api</span>
                            </div>
                            <span className="font-bold text-slate-800">REST API</span>
                        </div>
                        <div className="col-span-4 row-span-1 glass-card rounded-3xl flex items-center justify-between p-8 bg-white/60 border-[#319A86]/10">
                            <div className="flex items-center gap-4">
                                <div className="size-12 bg-[#319A86]/10 rounded-xl flex items-center justify-center text-[#0C2722]">
                                    <span className="material-symbols-outlined">database</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Database</p>
                                    <p className="text-xs text-slate-500">Enterprise-grade Security</p>
                                </div>
                            </div>
                            <div className="flex -space-x-3">
                                <div className="size-8 rounded-full bg-slate-100 border-2 border-white"></div>
                                <div className="size-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                <div className="size-8 rounded-full bg-[#319A86] border-2 border-white"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Ready to modernize your institution? Our team of specialists is ready to help you
                            navigate the transition.
                        </p>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Full Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#319A86] focus:border-[#319A86] outline-none"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Work Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#319A86] focus:border-[#319A86] outline-none"
                                            placeholder="john@university.edu"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Institution
                                    </label>
                                    <input
                                        id="contact-institution"
                                        className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#319A86] focus:border-[#319A86] outline-none"
                                        placeholder="Stanford University"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#319A86] focus:border-[#319A86] outline-none"
                                        placeholder="Tell us about your requirements..."
                                        rows={4}
                                    />
                                </div>
                                <button
                                    id="contact-submit"
                                    type="submit"
                                    className="w-full py-4 btn-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg cursor-pointer"
                                >
                                    Book My Demo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
