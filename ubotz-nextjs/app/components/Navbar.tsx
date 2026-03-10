import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-100 bg-white/80">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
                <Link href="#" className="flex items-center gap-2">
                    <div className="size-8 bg-[#16A34A] rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">token</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">Ubotz</span>
                </Link>
            </div>
        </nav>
    );
}
