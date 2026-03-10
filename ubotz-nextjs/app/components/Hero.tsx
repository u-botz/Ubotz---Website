export default function Hero() {
    return (
        <main className="pt-32 pb-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 mb-8 bg-white shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-[#16A34A]"></span>
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Now in Enterprise Beta
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] mb-8 leading-[1.1]">
                    The Operating System <br />
                    for Modern <span className="text-[#16A34A]">Learning</span>
                </h1>

                {/* Subhead */}
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
                    Scale your institute with professional-grade governance, not just content. The first
                    all-in-one platform built for institutional authority.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-24 w-full justify-center">
                    <button
                        id="hero-get-started"
                        className="bg-[#064E3B] hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Get Started Free
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button
                        id="hero-schedule-demo"
                        className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-4 px-10 rounded-xl text-lg transition-all flex items-center justify-center gap-2 hover:border-[#16A34A] cursor-pointer"
                    >
                        Schedule a Demo
                    </button>
                </div>

                {/* Dashboard Preview */}
                <div className="relative w-full max-w-5xl mx-auto">

                    {/* Floating Card: Live Attendance */}
                    <div className="absolute -left-12 top-20 z-20 bg-white p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4">
                        <div className="size-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#16A34A]">
                            <span className="material-symbols-outlined text-xl">how_to_reg</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Attendance</p>
                            <p className="text-lg font-bold text-slate-800">98.4%</p>
                        </div>
                    </div>

                    {/* Floating Card: Revenue Stats */}
                    <div className="absolute -right-8 top-10 z-20 bg-white p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4">
                        <div className="size-10 rounded-full bg-slate-900 flex items-center justify-center text-[#16A34A]">
                            <span className="material-symbols-outlined text-xl">payments</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue Stats</p>
                            <p className="text-lg font-bold text-slate-800">+$12.4k</p>
                        </div>
                    </div>

                    {/* Floating Card: Growth */}
                    <div className="absolute -right-16 bottom-20 z-20 bg-white p-5 rounded-2xl shadow-2xl hidden lg:block">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="size-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-lg">trending_up</span>
                            </div>
                            <span className="font-bold text-slate-800">Growth</span>
                        </div>
                        <div className="flex items-end gap-1">
                            <div className="w-2 h-8 bg-slate-100 rounded-full"></div>
                            <div className="w-2 h-12 bg-slate-100 rounded-full"></div>
                            <div className="w-2 h-16 bg-[#16A34A] rounded-full"></div>
                            <div className="w-2 h-10 bg-slate-100 rounded-full"></div>
                        </div>
                    </div>

                    {/* Dashboard Window */}
                    <div className="rounded-3xl border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden bg-slate-900 border-white/10">

                        {/* Window Title Bar */}
                        <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-slate-800/50 backdrop-blur-md">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/80"></div>
                                <div className="size-2.5 rounded-full bg-amber-500/80"></div>
                                <div className="size-2.5 rounded-full bg-emerald-500/80"></div>
                            </div>
                            <div className="mx-auto h-6 w-1/3 bg-white/5 rounded-full border border-white/10 flex items-center justify-center px-3">
                                <span className="text-[10px] text-slate-400 font-mono">admin.ubotz.io/intelligence/dashboard</span>
                            </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="flex h-[500px] bg-slate-950 overflow-hidden">

                            {/* Sidebar */}
                            <div className="w-56 border-r border-white/5 bg-slate-900/50 p-6 flex flex-col gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-[#16A34A]">
                                        <span className="material-symbols-outlined text-lg">dashboard</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">Overview</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">analytics</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">Insights</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">groups</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">Users</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">Finance</span>
                                    </div>
                                </div>
                                {/* System Status */}
                                <div className="mt-auto">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-[10px] text-slate-400 mb-2 font-mono">System Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="size-1.5 rounded-full bg-[#16A34A] animate-pulse"></div>
                                            <span className="text-[10px] font-bold text-white">Operational</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 overflow-y-auto">

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Total Students</p>
                                        <h4 className="text-2xl font-mono text-white">24,892</h4>
                                        <div className="flex items-center gap-1 mt-2 text-[#16A34A]">
                                            <span className="material-symbols-outlined text-sm">trending_up</span>
                                            <span className="text-[10px] font-bold">+12%</span>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Course Completion</p>
                                        <h4 className="text-2xl font-mono text-white">89.4%</h4>
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-4">
                                            <div className="w-[89%] h-full bg-[#16A34A] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Revenue (ARR)</p>
                                        <h4 className="text-2xl font-mono text-white">$1.2M</h4>
                                        <div className="flex items-center gap-1 mt-2 text-[#16A34A]">
                                            <span className="material-symbols-outlined text-sm">north_east</span>
                                            <span className="text-[10px] font-bold">High Perform</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Charts Grid */}
                                <div className="grid grid-cols-12 gap-6">

                                    {/* Learning Activity Chart */}
                                    <div className="col-span-8 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <div className="flex items-center justify-between mb-8">
                                            <h5 className="text-white font-bold">Learning Activity Velocity</h5>
                                            <div className="flex gap-2">
                                                <div className="size-2 rounded-full bg-[#16A34A]"></div>
                                                <div className="size-2 rounded-full bg-slate-700"></div>
                                            </div>
                                        </div>
                                        <div className="h-48 w-full relative">
                                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                <defs>
                                                    <linearGradient id="lineGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#16A34A" stopOpacity="0.3" />
                                                        <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M0,80 C10,75 20,50 30,55 C40,60 50,20 60,30 C70,40 80,10 90,20 C95,25 100,20 100,20 L100,100 L0,100 Z"
                                                    fill="url(#lineGrad)"
                                                />
                                                <path
                                                    d="M0,80 C10,75 20,50 30,55 C40,60 50,20 60,30 C70,40 80,10 90,20 C95,25 100,20 100,20"
                                                    fill="none"
                                                    stroke="#16A34A"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Regional Load */}
                                    <div className="col-span-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                        <h5 className="text-white font-bold mb-6">Regional Load</h5>
                                        <div className="space-y-5">
                                            <div>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] text-slate-400 font-mono">APAC-S1</span>
                                                    <span className="text-[10px] text-white font-bold">92%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="w-[92%] h-full bg-[#16A34A]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] text-slate-400 font-mono">EU-W2</span>
                                                    <span className="text-[10px] text-white font-bold">45%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="w-[45%] h-full bg-white/20"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] text-slate-400 font-mono">US-E1</span>
                                                    <span className="text-[10px] text-white font-bold">78%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="w-[78%] h-full bg-[#16A34A]/60"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
