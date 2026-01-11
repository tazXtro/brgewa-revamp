'use client';

import React from 'react';
import { Target, Building2, Users, Activity } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageContext';

export default function Mission() {
    const { t } = useLanguage();
    const mission = t.about.mission;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">{mission.title}</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            {/* Goals Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{mission.goals.healthcare.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        {mission.goals.healthcare.description}
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{mission.goals.geriatric.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        {mission.goals.geriatric.description}
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{mission.goals.districtOffice.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        {mission.goals.districtOffice.description}
                    </p>
                </div>
            </div>

            {/* Existing Programs */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                    <Activity className="h-6 w-6 text-primary" />
                    {mission.programs.title}
                </h3>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 md:p-8 space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">{mission.programs.healthcare.title}</h4>
                        <p className="text-slate-700 dark:text-slate-300">
                            {mission.programs.healthcare.intro}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
                            {mission.programs.healthcare.services.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary">{mission.programs.financial.title}</h4>
                            <ul className="space-y-3">
                                {mission.programs.financial.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="font-bold text-slate-300">{idx + 2}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary">{mission.programs.other.title}</h4>
                            <ul className="space-y-3">
                                {mission.programs.other.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="font-bold text-slate-300">{idx + 7}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
