const institutions = [
    { icon: "school", name: "Stanford" },
    { icon: "account_balance", name: "Berkeley" },
    { icon: "history_edu", name: "Oxford" },
    { icon: "architecture", name: "MIT" },
    { icon: "auto_stories", name: "Harvard" },
];

export default function TrustBar() {
    return (
        <section className="py-16 border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
                    Trusted by 500+ Institutions Worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {institutions.map(({ icon, name }) => (
                        <div key={name} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">{icon}</span>
                            <span className="text-xl font-bold text-slate-700">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
