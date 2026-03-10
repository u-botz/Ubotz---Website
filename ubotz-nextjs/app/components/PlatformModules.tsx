const features = [
    {
        icon: "school",
        title: "LMS Core",
        desc: "High-performance learning infrastructure designed for institutional scale.",
        bullets: ["SCORM/xAPI support", "AI Course Builder", "Automated Proctoring"],
    },
    {
        icon: "account_tree",
        title: "ERP System",
        desc: "Streamline operations with automated resource and personnel management.",
        bullets: ["Automated Attendance", "Resource Scheduling", "Multi-campus Governance"],
    },
    {
        icon: "groups_3",
        title: "CRM Engine",
        desc: "Optimize the student lifecycle from initial inquiry to alumni relations.",
        bullets: ["Lead Scoring", "Enrollment Funnels", "Parent Engagement"],
    },
    {
        icon: "payments",
        title: "Finance Hub",
        desc: "Full-cycle financial management with automated reconciliations.",
        bullets: ["Automated Invoicing", "Fee Reconciliation", "Multi-currency Support"],
    },
];

export default function PlatformModules() {
    return (
        <section className="py-24 px-6 bg-[#F0FDF4]" id="platform-modules">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Comprehensive Institutional Governance
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Four specialized engines working in perfect synchronization to power your entire
                        educational ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ icon, title, desc, bullets }) => (
                        <div
                            key={title}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 flex flex-col"
                        >
                            <div className="size-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                                <span className="material-symbols-outlined">{icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">{desc}</p>
                            <div className="mt-auto space-y-4 pt-6 border-t border-slate-50">
                                {bullets.map((b) => (
                                    <div key={b} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <span className="size-1.5 rounded-full bg-[#16A34A] shrink-0"></span>
                                        {b}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
