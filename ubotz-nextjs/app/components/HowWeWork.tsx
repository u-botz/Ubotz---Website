const steps = [
    {
        icon: "settings_suggest",
        title: "1. Strategic Setup",
        desc: "Define your governance structure and institutional requirements with our expert onboarding team.",
    },
    {
        icon: "sync_alt",
        title: "2. Deep Integration",
        desc: "Connect your existing SIS, CRM, and financial ecosystems through our pre-built enterprise connectors.",
    },
    {
        icon: "auto_graph",
        title: "3. Scale Learning",
        desc: "Launch across your entire institution with real-time analytics and automated compliance monitoring.",
    },
];

export default function HowWeWork() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Get up and running with Ubotz in days, not months. Our streamlined process is built for
                        institutional speed.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-100 -z-0"></div>
                    {steps.map(({ icon, title, desc }) => (
                        <div key={title} className="relative z-10 text-center">
                            <div className="size-16 bg-[#319A86]/10 rounded-2xl flex items-center justify-center text-[#0C2722] mx-auto mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-3xl">{icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{title}</h3>
                            <p className="text-slate-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
