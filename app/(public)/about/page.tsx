import type { Metadata } from 'next';
import AboutPageContent from './about-content';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'আমাদের সম্পর্কে | BRGEWA',
    description: 'বাংলাদেশ অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতির ইতিহাস, লক্ষ্য ও উদ্দেশ্য',
};

export default function AboutPage() {
    return (
        <Suspense fallback={
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row gap-8 animate-pulse">
                    <div className="w-full md:w-64 h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
                    <div className="flex-1 h-[600px] bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
                </div>
            </div>
        }>
            <AboutPageContent />
        </Suspense>
    );
}
