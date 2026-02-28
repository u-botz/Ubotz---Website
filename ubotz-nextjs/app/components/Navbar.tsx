import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="#" className="flex items-center gap-2 text-slate-900">
                        <div className="size-8 bg-[#319A86] rounded-lg flex items-center justify-center text-[#0C2722]">
                            <span className="material-symbols-outlined text-xl">token</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">Ubotz</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        {["Products", "Integrations", "Pricing", "Resources"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm font-medium hover:text-[#0C2722] transition-colors text-slate-900"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-sm font-semibold text-slate-700 hover:text-[#0C2722] text-slate-900"
                    >
                        Login
                    </Link>
                    <button
                        id="nav-get-started"
                        className="bg-[#319A86] hover:bg-[#0C2722] text-[#0C2722] hover:text-white font-bold py-2 px-5 rounded-lg text-sm transition-all shadow-sm cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
