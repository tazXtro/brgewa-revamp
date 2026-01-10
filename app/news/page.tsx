"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageContext";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Calendar, Tag, ArrowRight, Newspaper, PartyPopper, HeartPulse, Megaphone } from "lucide-react";

type Category = "all" | "news" | "event" | "healthCamp" | "announcement";

interface NewsItem {
    id: string;
    titleEn: string;
    titleBn: string;
    descriptionEn: string;
    descriptionBn: string;
    category: Exclude<Category, "all">;
    date: string;
    image?: string;
}

export default function NewsEventsPage() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    const newsItems: NewsItem[] = [
        {
            id: "1",
            titleEn: "Free Health Camp - January 2026",
            titleBn: "বিনামূল্যে স্বাস্থ্য ক্যাম্প - জানুয়ারি ২০২৬",
            descriptionEn: "Join us for a comprehensive free health camp offering medical checkups, consultations, and basic treatments for retired government employees and their families.",
            descriptionBn: "অবসরপ্রাপ্ত সরকারী কর্মচারী এবং তাদের পরিবারের জন্য চিকিৎসা পরীক্ষা, পরামর্শ এবং মৌলিক চিকিৎসা প্রদানকারী একটি বিস্তৃত বিনামূল্যে স্বাস্থ্য ক্যাম্পে যোগ দিন।",
            category: "healthCamp",
            date: "2026-01-15",
        },
        {
            id: "2",
            titleEn: "New Cardiology Unit Inaugurated",
            titleBn: "নতুন হৃদরোগ বিভাগ উদ্বোধন",
            descriptionEn: "We are proud to announce the opening of our state-of-the-art Cardiology Unit, equipped with the latest diagnostic and treatment facilities.",
            descriptionBn: "আমরা গর্বিত যে আমাদের অত্যাধুনিক হৃদরোগ বিভাগ চালু হয়েছে, যা সর্বশেষ ডায়াগনস্টিক এবং চিকিৎসা সুবিধা দিয়ে সজ্জিত।",
            category: "news",
            date: "2026-01-08",
        },
        {
            id: "3",
            titleEn: "Annual General Meeting 2026",
            titleBn: "বার্ষিক সাধারণ সভা ২০২৬",
            descriptionEn: "All members are cordially invited to attend the Annual General Meeting on January 20, 2026, at 10:00 AM at our main office.",
            descriptionBn: "সকল সদস্যদের ২০ জানুয়ারি ২০২৬, সকাল ১০:০০ টায় আমাদের প্রধান কার্যালয়ে বার্ষিক সাধারণ সভায় উপস্থিত থাকার জন্য আন্তরিকভাবে আমন্ত্রণ জানানো হচ্ছে।",
            category: "event",
            date: "2026-01-20",
        },
        {
            id: "4",
            titleEn: "Scholarship Program 2026 - Applications Open",
            titleBn: "শিক্ষাবৃত্তি কর্মসূচি ২০২৬ - আবেদন গ্রহণ চলছে",
            descriptionEn: "Applications are now open for the 2026 Scholarship Program for children of retired government employees. Deadline: January 31, 2026.",
            descriptionBn: "অবসরপ্রাপ্ত সরকারী কর্মচারীদের সন্তানদের জন্য ২০২৬ শিক্ষাবৃত্তি কর্মসূচির আবেদন এখন খোলা। শেষ তারিখ: ৩১ জানুয়ারি ২০২৬।",
            category: "announcement",
            date: "2026-01-05",
        },
        {
            id: "5",
            titleEn: "Blood Donation Camp Success",
            titleBn: "রক্তদান ক্যাম্প সফল",
            descriptionEn: "Our recent blood donation camp was a huge success with over 150 donors participating. Thank you to all volunteers and donors!",
            descriptionBn: "আমাদের সাম্প্রতিক রক্তদান ক্যাম্প ১৫০ জনেরও বেশি দাতার অংশগ্রহণে একটি বিশাল সাফল্য ছিল। সকল স্বেচ্ছাসেবক এবং দাতাদের ধন্যবাদ!",
            category: "healthCamp",
            date: "2026-01-03",
        },
        {
            id: "6",
            titleEn: "Cultural Program - Victory Day Celebration",
            titleBn: "সাংস্কৃতিক অনুষ্ঠান - বিজয় দিবস উদযাপন",
            descriptionEn: "Join us for a special cultural program celebrating Victory Day with music, dance, and traditional performances.",
            descriptionBn: "সঙ্গীত, নৃত্য এবং ঐতিহ্যবাহী পরিবেশনা সহ বিজয় দিবস উদযাপনের জন্য একটি বিশেষ সাংস্কৃতিক অনুষ্ঠানে আমাদের সাথে যোগ দিন।",
            category: "event",
            date: "2025-12-16",
        },
        {
            id: "7",
            titleEn: "Updated Consultation Hours",
            titleBn: "আপডেট পরামর্শ সময়",
            descriptionEn: "Please note that our consultation hours have been updated. New timings: Saturday to Thursday, 9:00 AM - 5:00 PM.",
            descriptionBn: "অনুগ্রহ করে মনে রাখবেন যে আমাদের পরামর্শের সময় আপডেট করা হয়েছে। নতুন সময়: শনিবার থেকে বৃহস্পতিবার, সকাল ৯:০০ - বিকাল ৫:০০।",
            category: "announcement",
            date: "2025-12-28",
        },
        {
            id: "8",
            titleEn: "Eye Care Camp - February 2026",
            titleBn: "চক্ষু পরিচর্যা ক্যাম্প - ফেব্রুয়ারি ২০২৬",
            descriptionEn: "Free eye checkups and consultations will be available at our upcoming Eye Care Camp on February 5, 2026.",
            descriptionBn: "৫ ফেব্রুয়ারি ২০২৬ তারিখে আমাদের আпредстоящী চক্ষু পরিচর্যা ক্যাম্পে বিনামূল্যে চোখের পরীক্ষা এবং পরামর্শ পাওয়া যাবে।",
            category: "healthCamp",
            date: "2026-02-05",
        },
        {
            id: "9",
            titleEn: "New Membership Benefits Announced",
            titleBn: "নতুন সদস্যপদ সুবিধা ঘোষণা",
            descriptionEn: "We are pleased to announce enhanced membership benefits including additional discounts on medical services and priority appointments.",
            descriptionBn: "আমরা চিকিৎসা সেবায় অতিরিক্ত ছাড় এবং অগ্রাধিকার অ্যাপয়েন্টমেন্ট সহ উন্নত সদস্যপদ সুবিধা ঘোষণা করতে পেরে আনন্দিত।",
            category: "news",
            date: "2025-12-20",
        },
        {
            id: "10",
            titleEn: "Eid Reunion 2026",
            titleBn: "ঈদ মিলনমেলা ২০২৬",
            descriptionEn: "Save the date for our annual Eid Reunion event where members and their families can celebrate together.",
            descriptionBn: "আমাদের বার্ষিক ঈদ মিলনমেলা অনুষ্ঠানের জন্য তারিখ সংরক্ষণ করুন যেখানে সদস্য এবং তাদের পরিবার একসাথে উদযাপন করতে পারবেন।",
            category: "event",
            date: "2026-04-12",
        },
    ];

    const filteredItems = activeFilter === "all"
        ? newsItems
        : newsItems.filter(item => item.category === activeFilter);

    const getCategoryColor = (category: Exclude<Category, "all">) => {
        const colors = {
            news: "from-blue-500 to-blue-600",
            event: "from-purple-500 to-purple-600",
            healthCamp: "from-green-500 to-green-600",
            announcement: "from-orange-500 to-orange-600",
        };
        return colors[category];
    };

    const getCategoryIcon = (category: Exclude<Category, "all">) => {
        const icons = {
            news: Newspaper,
            event: PartyPopper,
            healthCamp: HeartPulse,
            announcement: Megaphone,
        };
        return icons[category];
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        if (language === "bn") {
            const bnMonths = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
            const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
            const day = date.getDate().toString().split("").map(d => bnDigits[parseInt(d)]).join("");
            const month = bnMonths[date.getMonth()];
            const year = date.getFullYear().toString().split("").map(d => bnDigits[parseInt(d)]).join("");
            return `${day} ${month} ${year}`;
        }
        return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    };

    const filters: { key: Category; labelEn: string; labelBn: string }[] = [
        { key: "all", labelEn: t.newsEvents.filterAll, labelBn: t.newsEvents.filterAll },
        { key: "news", labelEn: t.newsEvents.filterNews, labelBn: t.newsEvents.filterNews },
        { key: "event", labelEn: t.newsEvents.filterEvents, labelBn: t.newsEvents.filterEvents },
        { key: "healthCamp", labelEn: t.newsEvents.filterHealthCamps, labelBn: t.newsEvents.filterHealthCamps },
        { key: "announcement", labelEn: t.newsEvents.filterAnnouncements, labelBn: t.newsEvents.filterAnnouncements },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
                            {t.newsEvents.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                            {t.newsEvents.subtitle}
                        </p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </section>

            {/* Filter Tabs */}
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg shadow-md border-b border-border">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.key
                                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 scale-105"
                                        : "bg-muted text-foreground hover:bg-secondary hover:text-primary"
                                    }`}
                            >
                                {language === "en" ? filter.labelEn : filter.labelBn}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">{t.newsEvents.noItems}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, index) => {
                                const CategoryIcon = getCategoryIcon(item.category);
                                return (
                                    <div
                                        key={item.id}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:scale-105 animate-fadeInUp"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Image/Gradient Header */}
                                        <div className={`h-48 bg-gradient-to-br ${getCategoryColor(item.category)} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <CategoryIcon size={64} className="text-white/30" />
                                            </div>
                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground shadow-lg">
                                                    <CategoryIcon size={14} />
                                                    {language === "en" ? t.newsEvents.categories[item.category] : t.newsEvents.categories[item.category]}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Date */}
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                <Calendar size={16} />
                                                <span>{formatDate(item.date)}</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                {language === "en" ? item.titleEn : item.titleBn}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {language === "en" ? item.descriptionEn : item.descriptionBn}
                                            </p>

                                            {/* Read More Button */}
                                            <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300">
                                                {t.newsEvents.readMore}
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
