const plans = [
    {
        name: "Starter",
        price: "$499",
        period: "/month",
        features: ["Up to 500 Students", "Basic Governance Tools", "Standard Integrations"],
        cta: "Start Free Trial",
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$1,299",
        period: "/month",
        features: [
            "Up to 5,000 Students",
            "Advanced RBAC & Audits",
            "Priority API Access",
            "Custom Reporting",
        ],
        cta: "Get Started Now",
        highlighted: true,
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        features: [
            "Unlimited Students",
            "White-label Option",
            "Dedicated Success Manager",
            "24/7 Phone Support",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 px-6 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-slate-600">Choose the plan that fits your institution&apos;s scale.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map(({ name, price, period, features, cta, highlighted, badge }) => (
                        <div
                            key={name}
                            className={`p-8 bg-white rounded-2xl flex flex-col relative ${highlighted
                                    ? "border-2 border-[#319A86] shadow-xl scale-105 z-10"
                                    : "border border-slate-200"
                                }`}
                        >
                            {badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#319A86] text-[#0C2722] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                                    {badge}
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{price}</span>
                                {period && <span className="text-slate-500">{period}</span>}
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-[#0C2722] text-lg">
                                            check_circle
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                id={`pricing-${name.toLowerCase().replace(" ", "-")}`}
                                className={`w-full py-3 px-6 rounded-xl font-bold transition-colors cursor-pointer ${highlighted
                                        ? "btn-gradient text-white"
                                        : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                                    }`}
                            >
                                {cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
