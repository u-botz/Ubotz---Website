export default function Hero() {
    return (
        <main
            className="pt-32 pb-20 px-6 relative overflow-hidden"
            style={{ background: "radial-gradient(circle at center, #DCFCE7 0%, #FFFFFF 70%)" }}
        >
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#319A86]/20 mb-8 bg-white">
                    <span className="flex h-2 w-2 rounded-full bg-[#319A86] animate-pulse"></span>
                    <span className="text-[10px] font-bold tracking-widest text-[#0C2722] uppercase">
                        Now in Enterprise Beta
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    The Operating System <br />
                    <span>for Modern</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C2722] to-[#319A86]">
                        Learning
                    </span>
                </h1>

                {/* Subhead */}
                <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-slate-600">
                    Scale your institute with professional-grade governance, not just content. The first
                    all-in-one platform built for institutional authority.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full justify-center">
                    <button
                        id="hero-get-started"
                        className="btn-gradient text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer"
                    >
                        Get Started Free
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button
                        id="hero-schedule-demo"
                        className="bg-white border-2 border-slate-200 hover:border-[#319A86] text-slate-700 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1 cursor-pointer"
                    >
                        Schedule a Demo
                    </button>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative w-full max-w-6xl mx-auto -mt-10">
                    {/* Floating Card 1 */}
                    <div className="absolute -left-12 top-20 z-20 glass-card p-4 rounded-2xl hidden lg:flex items-center gap-4 animate-bounce [animation-duration:3s]">
                        <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#0C2722] shadow-[0_0_15px_rgba(22,163,74,0.2)]">
                            <span className="material-symbols-outlined text-xl">how_to_reg</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                Live Attendance
                            </p>
                            <p className="text-lg font-bold text-slate-800">98.4%</p>
                        </div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute -right-16 bottom-32 z-20 glass-card p-5 rounded-2xl hidden lg:block animate-pulse">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="size-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                                <span className="material-symbols-outlined text-lg">trending_up</span>
                            </div>
                            <span className="font-bold text-slate-800">Growth</span>
                        </div>
                        <div className="flex items-end gap-1">
                            <div className="w-2 h-8 bg-slate-100 rounded-full"></div>
                            <div className="w-2 h-12 bg-slate-100 rounded-full"></div>
                            <div className="w-2 h-16 bg-[#319A86] rounded-full"></div>
                            <div className="w-2 h-10 bg-slate-100 rounded-full"></div>
                        </div>
                    </div>

                    {/* Floating Card 3 */}
                    <div className="absolute -right-8 top-10 z-20 glass-card p-4 rounded-2xl hidden lg:flex items-center gap-4 animate-bounce [animation-duration:4s]">
                        <div className="size-10 rounded-full bg-slate-900 flex items-center justify-center text-[#319A86]">
                            <span className="material-symbols-outlined text-xl">payments</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                Revenue Stats
                            </p>
                            <p className="text-lg font-bold text-slate-800">+$12.4k</p>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0C2722] to-[#319A86] rounded-2xl blur-3xl opacity-30 -z-10"></div>

                    {/* Dashboard Preview */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden dashboard-glow">
                        {/* Header bar */}
                        <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-slate-300"></div>
                                <div className="size-2.5 rounded-full bg-slate-300"></div>
                                <div className="size-2.5 rounded-full bg-slate-300"></div>
                            </div>
                            <div className="h-6 w-1/3 bg-slate-200/50 rounded-full"></div>
                            <div className="size-6 bg-slate-200 rounded-full"></div>
                        </div>
                        {/* Content */}
                        <div className="p-6 grid grid-cols-12 gap-6 bg-white min-h-[400px]">
                            {/* Sidebar */}
                            <div className="col-span-3 space-y-4">
                                <div className="h-8 w-full bg-[#319A86]/10 rounded-lg"></div>
                                <div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
                                <div className="h-8 w-5/6 bg-slate-100 rounded-lg"></div>
                                <div className="h-8 w-2/3 bg-slate-100 rounded-lg"></div>
                                <div className="pt-10">
                                    <div className="h-24 w-full bg-slate-50 border border-dashed border-slate-200 rounded-xl"></div>
                                </div>
                            </div>
                            {/* Main Panel */}
                            <div className="col-span-9 space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-2">
                                        <div className="h-6 w-48 bg-slate-200 rounded-md"></div>
                                        <div className="h-4 w-32 bg-slate-100 rounded-md"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-10 w-24 bg-[#319A86]/20 rounded-lg"></div>
                                        <div className="h-10 w-24 bg-[#319A86] rounded-lg"></div>
                                    </div>
                                </div>
                                {/* Stat Cards */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: "groups" },
                                        { icon: "monitoring" },
                                        { icon: "account_balance" },
                                    ].map(({ icon }, i) => (
                                        <div
                                            key={i}
                                            className="h-32 bg-white border border-slate-100 rounded-xl shadow-sm p-4 flex flex-col justify-between"
                                        >
                                            <div className="size-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <span className="material-symbols-outlined text-lg">{icon}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-3 w-16 bg-slate-100 rounded"></div>
                                                <div className="h-6 w-24 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Chart Mockup */}
                                <div className="h-48 w-full bg-slate-50 rounded-2xl relative overflow-hidden border border-slate-100">
                                    <svg
                                        className="absolute bottom-0 w-full"
                                        viewBox="0 0 400 100"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,10 L400,100 L0,100 Z"
                                            fill="rgba(6, 78, 59, 0.1)"
                                        />
                                        <path
                                            d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,10"
                                            fill="none"
                                            stroke="#059669"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
