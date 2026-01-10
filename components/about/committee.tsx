
import React from 'react';
import { Users, FileText, Download, UserCheck } from 'lucide-react';

export default function Committee() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">কমিটি</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            <p className="text-slate-600 dark:text-slate-400">
                বাংলাদেশ অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতির বর্তমান কার্যনির্বাহী কমিটি এবং বিভিন্ন উপ-কমিটির তালিকা নিচে প্রদান করা হলো। বিস্তারিত দেখতে বা ডাউনলোড করতে লিংকে ক্লিক করুন।
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Executive Committee Card */}
                <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <FileText className="h-24 w-24 text-slate-100 dark:text-slate-800 -rotate-12" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Users className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-bold mb-2">কার্যনির্বাহী কমিটি</h3>
                        <p className="text-slate-500 text-sm mb-6 flex-grow">
                            বর্তমান কার্যনির্বাহী কমিটির পূর্ণাঙ্গ তালিকা এবং পদবীবিন্যাস।
                        </p>

                        <a
                            href="https://brgewa.com/wp-content/uploads/2025/07/New-Committee-Ad-2024-82.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm self-start"
                        >
                            <Download className="h-4 w-4" />
                            তালিকা দেখুন
                        </a>
                    </div>
                </div>

                {/* Sub Committee Card */}
                <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <FileText className="h-24 w-24 text-slate-100 dark:text-slate-800 -rotate-12" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <UserCheck className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-bold mb-2">উপ-কমিটি</h3>
                        <p className="text-slate-500 text-sm mb-6 flex-grow">
                            বিভিন্ন বিভাগীয় ও কর্মভিত্তিক উপ-কমিটির সদস্যদের তালিকা।
                        </p>

                        <a
                            href="https://brgewa.com/wp-content/uploads/2025/07/New-Sub-Committee-With-Address-2025-2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm self-start"
                        >
                            <Download className="h-4 w-4" />
                            তালিকা দেখুন
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
