
import React from 'react';
import { Target, Heart, Building2, BookOpen, Users, Activity } from 'lucide-react';

export default function Mission() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary">লক্ষ্য ও উদ্দেশ্য</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
            </div>

            {/* Goals Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">চিকিৎসা সেবা বৃদ্ধি</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        কেন্দ্রীয় সমিতিতে চিকিৎসা সেবার মান ও পরিধি ক্রমান্বয়ে বৃদ্ধি করার প্রচেষ্টা অব্যাহত আছে এবং যথাশীঘ্র সম্ভব সমিতি ভবনে একটি ২০ শয্যার একটি হাসপাতাল স্থাপনের কার্যক্রম হাতে নেয়া হয়েছে।
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">জেরিয়াট্রিক হাসপাতাল</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        উত্তরায় রাজউক থেকে এক বিঘা জমি বরাদ্দ পাওয়া গেছে। এ জমিতে একটি জেরিয়াট্রিক হাসপাতালসহ একটি বৃদ্ধাশ্রম করার পরিকল্পনা রয়েছে।
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                    <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">জেলা অফিস স্থাপন</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        ৬৪ জেলার মধ্যে যে সকল জেলায় নিজস্ব অফিস ঘর নেই সে সকল জেলায় অফিস স্থাপনের পরিকল্পনা রয়েছে।
                    </p>
                </div>
            </div>

            {/* Existing Programs */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                    <Activity className="h-6 w-6 text-primary" />
                    সমিতির বিদ্যমান কর্মসূচী
                </h3>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 md:p-8 space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">১। চিকিৎসাসেবা কার্যক্রম</h4>
                        <p className="text-slate-700 dark:text-slate-300">
                            ঢাকাস্থ সমিতির কেন্দ্রীয় কার্যালয়ে একটি চিকিৎসা কেন্দ্র চালু রয়েছে, যার মাধ্যমে সমিতির সদস্য ও তাদের স্বামী এবং স্ত্রীদের সাশ্রয়ী মূল্যে নিম্নোক্ত চিকিৎসা সুবিধা প্রদান করা হয়।
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
                            {[
                                "বছরে একবার বিনামূল্যে দম্পতিসহ স্বাস্থ্য পরীক্ষা",
                                "হ্রাসকৃত হারে সকল প্রকার প্যাথলজিক্যাল পরীক্ষা",
                                "স্বল্প খরচে আল্ট্রাসনোগ্রাম, ই সি জি ও ইকো",
                                "সাধারণ চিকিৎসা ব্যবস্থা",
                                "গাইনী চিকিৎসা",
                                "চক্ষুরোগ চিকিৎসা",
                                "হৃদরোগ চিকিৎসা",
                                "দন্তরোগ চিকিৎসা",
                                "ফিজিক্যাল মেডিসিন ও ফিজিও থেরাপি",
                                "নাক-কান-গলার চিকিৎসা",
                                "ডায়াবেটিস এর চিকিৎসা",
                                "হোমিওপ্যাথ চিকিৎসা"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary">আর্থিক ও কল্যাণমূলক কার্যক্রম</h4>
                            <ul className="space-y-3">
                                {[
                                    "কেন্দ্র ও জেলা পর্যায়ে স্বল্প আয়ের পেনশনকারীদের মেধাবী সন্তানদের শিক্ষাবৃত্তি প্রদান।",
                                    "স্বল্প আয়ের ও আর্থিকভাবে অস্বচ্ছল পেনশনারদের আর্থিক অনুদান প্রদান।",
                                    "দুস্থ পেনশনারদের রোগ-ব্যাধি, দুর্ঘটনা, কন্যার বিয়ে এবং প্রাকৃতিক দুর্যোগ ইত্যাদি কারণে আর্থিক সাহায্য প্রদান।",
                                    "জেলা সমিতির অফিস পরিচালনার জন্য আর্থিক মঞ্জুরী প্রদান।",
                                    "অবসরপ্রাপ্তদের কল্যাণার্থে 'পেনশন ফাউন্ডেশন' ট্রাস্ট গঠন।"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="font-bold text-slate-300">{idx + 2}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-primary">অন্যান্য কার্যক্রম</h4>
                            <ul className="space-y-3">
                                {[
                                    "বিভিন্ন প্রকার বিনোদনমূলক অনুষ্ঠান (বনভোজন, ঈদ-পুনর্মিলনী, বার্ষিক ক্রীড়া)।",
                                    "‘অবসর জীবন’ (ষান্মাসিক) ও ‘অবসর বার্তা’ (ত্রৈমাসিক) পত্রিকা প্রকাশ।",
                                    "সমিতি ভবনে সমৃদ্ধ পাঠাগার পরিচালনা।",
                                    "জেলা থেকে আগত সদস্যদের জন্য গেস্ট হাউস সুবিধা।",
                                    "пенশন ও সুযোগ-সুবিধা বৃদ্ধির জন্য সরকারের সাথে যোগাযোগ।"
                                ].map((item, idx) => (
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
