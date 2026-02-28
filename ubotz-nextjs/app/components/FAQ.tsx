"use client";

import { useState } from "react";

const faqs = [
    {
        q: "Does Ubotz support multi-tenancy for large institutions?",
        a: "Yes, Ubotz is built with a native multi-tenant architecture, allowing large institutions to manage multiple campuses or departments under a single master account with isolated data and custom branding for each.",
    },
    {
        q: "How secure is our institutional data?",
        a: "Security is our top priority. We employ enterprise-grade encryption (AES-256), SOC2 Type II compliance, and regular third-party penetration testing to ensure your data remains protected and compliant with educational standards.",
    },
    {
        q: "Can we migrate from our existing LMS?",
        a: "Absolutely. Our expert onboarding team provides a comprehensive migration suite that supports SCORM, xAPI, and bulk data imports from major platforms like Moodle, Canvas, and Blackboard.",
    },
    {
        q: "What custom integrations are available?",
        a: "We offer pre-built connectors for popular SIS, CRM, and ERP systems. Additionally, our robust REST API allows for deep, custom integrations with any proprietary software your institution may use.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600">Everything you need to know about the Ubotz platform.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map(({ q, a }, i) => (
                        <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                            <button
                                id={`faq-${i}`}
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors group cursor-pointer"
                            >
                                <span className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                    {q}
                                </span>
                                <span
                                    className={`material-symbols-outlined text-slate-400 group-hover:text-emerald-600 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                                        }`}
                                >
                                    expand_more
                                </span>
                            </button>
                            {open === i && (
                                <div className="px-6 pb-6 text-slate-600 text-sm">{a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
