'use client';

import React from 'react';
import { Book, FileText } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageContext';

export default function Constitution() {
    const { t } = useLanguage();
    const constitution = t.about.constitution;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">{constitution.title}</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto mt-8 shadow-sm">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Book className="h-10 w-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{constitution.cardTitle}</h3>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {constitution.description}
                </p>

                <a
                    href="https://brgewa.com/wp-content/uploads/2025/08/BRGEWA-Final-Constitution-Final-Correction-24-Nikosh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg font-semibold text-lg"
                >
                    <FileText className="h-5 w-5" />
                    {constitution.button}
                </a>
            </div>
        </div>
    );
}
