import Link from "next/link";

const productLinks = ["LMS Core", "Governance Pro", "Analytics Hub", "Integration API"];
const companyLinks = ["About Us", "Careers", "Partners", "Newsroom"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Data Processing", "Security"];

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-400 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="#" className="flex items-center gap-2 mb-8">
                            <div className="size-8 bg-[#16A34A] rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-xl">token</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Ubotz</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed mb-8">
                            The institutional operating system for modern learning. Empowering educators with
                            governance-first infrastructure.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: "public", id: "footer-web" },
                                { icon: "campaign", id: "footer-social" },
                                { icon: "alternate_email", id: "footer-email" },
                            ].map(({ icon, id }) => (
                                <Link
                                    key={id}
                                    href="#"
                                    id={id}
                                    className="size-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-all"
                                >
                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-8">Products</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {productLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#16A34A] transition-colors">{l}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-8">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {companyLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#16A34A] transition-colors">{l}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-8">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {legalLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#16A34A] transition-colors">{l}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
                    <p>© 2024 Ubotz Technologies Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        {["Status", "Sitemap", "Cookies"].map((l) => (
                            <Link key={l} href="#" className="hover:text-white">{l}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
