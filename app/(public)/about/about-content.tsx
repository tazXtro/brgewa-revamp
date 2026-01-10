'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import AboutNav from '@/components/about/about-nav';
import History from '@/components/about/history';
import Mission from '@/components/about/mission';
import Committee from '@/components/about/committee';
import Constitution from '@/components/about/constitution';
import Presidents from '@/components/about/presidents';
import Secretaries from '@/components/about/secretaries';

export default function AboutPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentSection = searchParams.get('section') || 'history';

    const handleSectionChange = (id: string) => {
        router.push(`/about?section=${id}`, { scroll: false });
    };

    const renderContent = () => {
        switch (currentSection) {
            case 'history':
                return <History />;
            case 'mission':
                return <Mission />;
            case 'committee':
                return <Committee />;
            case 'constitution':
                return <Constitution />;
            case 'presidents':
                return <Presidents />;
            case 'secretaries':
                return <Secretaries />;
            default:
                return <History />;
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 lg:w-72 shrink-0">
                    <div className="sticky top-24 bg-white dark:bg-slate-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="mb-4 px-2">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">সমিতি পরিচিতি</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">তথ্য ও ইতিহাস</p>
                        </div>
                        <AboutNav 
                            activeSection={currentSection} 
                            onSectionChange={handleSectionChange} 
                        />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[600px]">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
}
