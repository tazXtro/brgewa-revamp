import React from 'react';
import { User, Download } from 'lucide-react';

export default function Presidents() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">সভাপতি ও প্রশাসকগণ</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
                সমিতির প্রতিষ্ঠাকালীন সময় থেকে বর্তমান পর্যন্ত যারা সভাপতি এবং প্রশাসক হিসেবে দায়িত্ব পালন করেছেন, তাঁদের তালিকা নিচে দেওয়া হলো।
            </p>

            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm max-w-2xl">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-8 flex flex-col items-center border-b border-slate-100 dark:border-slate-800">
                    <div className="h-20 w-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <User className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">সভাপতি ও প্রশাসকগণ</h3>
                    <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full mt-3">
                        তালিকা
                    </span>
                </div>

                <div className="p-8 flex flex-col items-center">
                    <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-lg">
                        সমিতির প্রতিষ্ঠাকালীন থেকে বর্তমান পর্যন্ত সকল সভাপতি ও প্রশাসকগণের নামের তালিকা পিডিএফ আকারে ডাউনলোড করতে নিচের বাটনে ক্লিক করুন।
                    </p>
                    <a
                        href="https://brgewa.com/wp-content/uploads/2025/07/Former-President-All.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        <Download className="h-5 w-5" />
                        ডাউনলোড করুন (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}
