"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { serviceCategories } from "@/lib/servicesData";
import { Search } from "lucide-react";
import { useState } from "react";

export default function MedicalServicesPage() {
    const { language, t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = serviceCategories.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <section className="bg-primary/5 py-16 dark:bg-primary/10">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        {language === 'en' ? "Medical Services & Fees" : "চিকিৎসা সেবা এবং খরচ"}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                        {language === 'en'
                            ? "Transparent pricing for all our medical tests and services. We offer special subsidized rates for BRGEWA members."
                            : "আমাদের সমস্ত চিকিৎসা পরীক্ষা এবং পরিষেবার জন্য স্বচ্ছ মূল্য নির্ধারণ। আমরা বিআরজিইডাব্লিউএ সদস্যদের জন্য বিশেষ ভর্তুকি মূল্যে সেবা প্রদান করি।"
                        }
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder={language === 'en' ? "Search for a test..." : "একটি পরীক্ষা খুঁজুন..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-12 container mx-auto px-6">
                <div className="space-y-12">
                    {filteredCategories.map((category, idx) => (
                        <div key={idx} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                            <div className="bg-muted/50 px-6 py-4 border-b border-border">
                                <h2 className="text-xl font-semibold text-foreground">
                                    {language === 'en' ? category.title : category.titleBn}
                                </h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-muted/30 text-left">
                                            <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                                                {language === 'en' ? "Test Name" : "পরীক্ষার নাম"}
                                            </th>
                                            <th className="px-6 py-4 text-sm font-semibold text-muted-foreground text-right">
                                                {language === 'en' ? "Member Rate" : "সদস্য রেট"} (Tk)
                                            </th>
                                            <th className="px-6 py-4 text-sm font-semibold text-muted-foreground text-right border-l border-border/50">
                                                {language === 'en' ? "Private Rate" : "প্রাইভেট রেট"} (Tk)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {category.items.map((item) => (
                                            <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                                                <td className="px-6 py-4 font-medium text-foreground">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 text-right text-emerald-600 font-semibold bg-emerald-50/50 dark:bg-emerald-900/10">
                                                    ৳ {item.memberRate.toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 text-right text-muted-foreground border-l border-border/50">
                                                    ৳ {item.privateRate.toFixed(2)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            {language === 'en' ? "No services found matching your search." : "উদ্ধৃত অনুসন্ধানের সাথে কোন সেবা পাওয়া যায়নি।"}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
