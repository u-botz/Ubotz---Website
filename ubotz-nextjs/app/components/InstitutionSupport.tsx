const institutions = [
    {
        icon: "account_balance",
        title: "Higher Education",
        desc: "Empower universities and colleges with enterprise-grade LMS, student lifecycle management, and advanced analytics.",
        bullets: ["Multi-campus Management", "Research Collaboration", "Alumni Engagement"],
    },
    {
        icon: "corporate_fare",
        title: "Training Institutions",
        desc: "Scale your training programs with automated certifications, batch management, and enterprise CRM tools.",
        bullets: ["Batch Scheduling", "Certificate Automation", "Lead Management"],
    },
    {
        icon: "school",
        title: "K-12 Schools",
        desc: "Keep parents, teachers, and administrators connected with real-time dashboards and smart communication tools.",
        bullets: ["Parent Communication", "Homework Tracker", "Grade Analytics"],
    },
];

export default function InstitutionSupport() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        How Ubotz Supports Your Institution
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Tailored solutions for every educational institution, from K-12 to higher education and corporate training.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {institutions.map(({ icon, title, desc, bullets }) => (
                        <div
                            key={title}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow"
                        >
                            <div className="size-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                                <span className="material-symbols-outlined">{icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed">{desc}</p>
                            <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                                {bullets.map((b) => (
                                    <div key={b} className="flex items-center gap-3">
                                        <span className="size-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                        <span className="text-sm font-medium text-slate-600">{b}</span>
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
