import Link from "next/link";

const productLinks = ["LMS Core", "Governance Pro", "Analytics Hub", "Integration API"];
const companyLinks = ["About Us", "Careers", "Partners", "Newsroom"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Data Processing", "Security"];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="#" className="flex items-center gap-2 mb-6">
                            <div className="size-8 bg-[#319A86] rounded-lg flex items-center justify-center text-[#0C2722]">
                                <span className="material-symbols-outlined text-xl">token</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Ubotz</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed mb-6">
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
                                    className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#319A86] hover:text-[#0C2722] transition-all"
                                >
                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Products</h4>
                        <ul className="space-y-4 text-sm">
                            {productLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#319A86] transition-colors">
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {companyLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#319A86] transition-colors">
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            {legalLinks.map((l) => (
                                <li key={l}>
                                    <Link href="#" className="hover:text-[#319A86] transition-colors">
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 Ubotz Technologies Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        {["Status", "Sitemap", "Cookies"].map((l) => (
                            <Link key={l} href="#" className="hover:text-white">
                                {l}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
