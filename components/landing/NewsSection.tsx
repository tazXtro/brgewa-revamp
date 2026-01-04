"use client";

import { Calendar, ArrowRight, Tag, Clock, Eye } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface NewsItem {
    id: string;
    title: string;
    titleBn?: string;
    excerpt: string;
    date: string;
    category: string;
    featured?: boolean;
    views?: number;
}

const newsItems: NewsItem[] = [
    {
        id: "1",
        title: "Free Health Camp for Retired Employees",
        titleBn: "অবসরপ্রাপ্তদের জন্য বিনামূল্যে স্বাস্থ্য ক্যাম্প",
        excerpt:
            "BRGEWA is organizing a free health checkup camp for all retired government employees and their families. The camp will include basic health screening, blood tests, and specialist consultations.",
        date: "2026-01-03",
        category: "Health Camp",
        featured: true,
        views: 1250,
    },
    {
        id: "2",
        title: "Scholarship Applications Now Open for 2026",
        titleBn: "২০২৬ সালের শিক্ষাবৃত্তির আবেদন গ্রহণ শুরু",
        excerpt:
            "Applications for the 2026 scholarship program for children of retired government employees are now open. Eligible students can apply through our online portal.",
        date: "2026-01-02",
        category: "Scholarship",
        featured: true,
        views: 980,
    },
    {
        id: "3",
        title: "New Cardiology Wing Inauguration",
        titleBn: "নতুন হৃদরোগ বিভাগ উদ্বোধন",
        excerpt:
            "We are pleased to announce the opening of our new cardiology department equipped with state-of-the-art diagnostic equipment.",
        date: "2025-12-28",
        category: "Facility",
        featured: false,
        views: 756,
    },
    {
        id: "4",
        title: "Annual General Meeting Notice",
        titleBn: "বার্ষিক সাধারণ সভার নোটিশ",
        excerpt:
            "The Annual General Meeting of BRGEWA will be held on January 15, 2026 at Obosor Bhaban, Dhanmondi.",
        date: "2025-12-25",
        category: "Notice",
        featured: false,
        views: 1532,
    },
    {
        id: "5",
        title: "Senior Citizen's Eye Care Program",
        titleBn: "প্রবীণ নাগরিক চক্ষু সেবা কার্যক্রম",
        excerpt:
            "Free eye checkup and discounted cataract surgery for senior members above 60 years of age.",
        date: "2025-12-20",
        category: "Health Camp",
        featured: false,
        views: 645,
    },
    {
        id: "6",
        title: "Medical Aid Distribution Report 2025",
        titleBn: "চিকিৎসা সহায়তা বিতরণ প্রতিবেদন ২০২৫",
        excerpt:
            "Annual report on medical aid distribution to members in need during 2025.",
        date: "2025-12-18",
        category: "Report",
        featured: false,
        views: 423,
    },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
    "Health Camp": { bg: "bg-green-100", text: "text-green-700" },
    Scholarship: { bg: "bg-blue-100", text: "text-blue-700" },
    Facility: { bg: "bg-purple-100", text: "text-purple-700" },
    Notice: { bg: "bg-amber-100", text: "text-amber-700" },
    Report: { bg: "bg-rose-100", text: "text-rose-700" },
};

const gradients = [
    "from-emerald-500 to-teal-600",
    "from-blue-500 to-cyan-600",
    "from-purple-500 to-pink-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-red-600",
];

export default function NewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const featuredNews = newsItems.filter((item) => item.featured);
    const regularNews = newsItems.filter((item) => !item.featured);

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                            Latest News
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            News & Announcements
                        </h2>
                        <p className="text-muted-foreground">
                            সর্বশেষ খবর এবং ঘোষণা
                        </p>
                    </div>
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                    >
                        View All News
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Featured News Cards - Horizontal Scroll */}
                <div className="mb-8 -mx-6 px-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Featured Stories
                    </h3>
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {featuredNews.map((news, index) => (
                            <article
                                key={news.id}
                                className="flex-shrink-0 w-[400px] snap-start group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Image placeholder */}
                                <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                                                <span className="text-2xl font-bold">{news.title.charAt(0)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[news.category]?.bg || "bg-gray-100"} ${categoryColors[news.category]?.text || "text-gray-700"}`}>
                                            <Tag size={12} />
                                            {news.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/80 text-xs">
                                        <Eye size={14} />
                                        <span>{news.views?.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                        <Calendar size={14} />
                                        <span>
                                            {new Date(news.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-sm text-primary font-medium mb-2">
                                        {news.titleBn}
                                    </p>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {news.excerpt}
                                    </p>
                                    <Link
                                        href={`/news/${news.id}`}
                                        className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm hover:text-accent transition-colors"
                                    >
                                        Read More
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Regular News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularNews.map((news) => (
                        <article
                            key={news.id}
                            className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span
                                    className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold ${categoryColors[news.category]?.bg || "bg-gray-100"
                                        } ${categoryColors[news.category]?.text || "text-gray-700"}`}
                                >
                                    {news.category}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock size={12} />
                                    {new Date(news.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {news.title}
                            </h4>
                            <p className="text-xs text-primary mt-1">{news.titleBn}</p>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                {news.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Eye size={12} />
                                    {news.views?.toLocaleString()} views
                                </span>
                                <Link
                                    href={`/news/${news.id}`}
                                    className="text-primary text-sm font-semibold hover:text-accent transition-colors"
                                >
                                    Read →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
