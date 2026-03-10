export default function CTASection() {
    return (
        <section className="py-24 px-6 bg-[#F0FDF4]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-slate-600 mb-12 text-lg max-w-2xl mx-auto">
                    Ready to modernize your institution? Our team of specialists is ready to help you navigate the
                    transition.
                </p>
                <button
                    id="cta-book-demo"
                    className="bg-[#064E3B] hover:bg-opacity-90 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all shadow-xl flex items-center gap-2 mx-auto cursor-pointer hover:-translate-y-1"
                >
                    Book a Demo
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}
