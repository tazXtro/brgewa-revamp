'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageContext';

export default function History() {
    const { t } = useLanguage();
    const history = t.about.history;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">{history.title}</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                <p>
                    <strong>{history.introduction.heading}</strong> {history.introduction.content}
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">{history.establishment.heading}</h3>
                <p>{history.establishment.content1}</p>
                <p>{history.establishment.content2}</p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">{history.renaming.heading}</h3>
                <p>{history.renaming.content1}</p>
                <p>{history.renaming.content2}</p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">{history.office.heading}</h3>
                <p>{history.office.content1}</p>
                <p>{history.office.content2}</p>
                <p>{history.office.content3}</p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mt-8">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{history.futurePlans.heading}</h3>
                    <p className="mb-4">{history.futurePlans.content1}</p>
                    <p>{history.futurePlans.content2}</p>
                </div>
            </div>
        </div>
    );
}
