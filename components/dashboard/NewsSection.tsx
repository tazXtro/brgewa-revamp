import { Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
    id: string;
    title: string;
    titleBn?: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
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
    },
    {
        id: "2",
        title: "Scholarship Applications Now Open",
        titleBn: "শিক্ষাবৃত্তির আবেদন গ্রহণ শুরু",
        excerpt:
            "Applications for the 2026 scholarship program for children of retired government employees are now open. Eligible students can apply through our online portal.",
        date: "2026-01-02",
        category: "Scholarship",
    },
    {
        id: "3",
        title: "New Cardiology Wing Inauguration",
        titleBn: "নতুন হৃদরোগ বিভাগ উদ্বোধন",
        excerpt:
            "We are pleased to announce the opening of our new cardiology department equipped with state-of-the-art diagnostic equipment and experienced specialists.",
        date: "2025-12-28",
        category: "Facility",
    },
    {
        id: "4",
        title: "Annual General Meeting Notice",
        titleBn: "বার্ষিক সাধারণ সভার নোটিশ",
        excerpt:
            "The Annual General Meeting of BRGEWA will be held on January 15, 2026 at Obosor Bhaban, Dhanmondi. All members are requested to attend.",
        date: "2025-12-25",
        category: "Notice",
    },
];

const categoryColors: Record<string, string> = {
    "Health Camp": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Scholarship: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Facility: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    Notice: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

export default function NewsSection() {
    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-foreground">Latest News</h2>
                    <p className="text-sm text-muted-foreground">Updates and announcements</p>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                    View All →
                </button>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {newsItems.map((news) => (
                        <article
                            key={news.id}
                            className="group p-4 rounded-xl bg-muted/30 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className={`inline-flex px-2 py-0.5 rounded-md text-xs font-semibold ${categoryColors[news.category] || "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {news.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Calendar size={12} />
                                            <span>{new Date(news.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                            })}</span>
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                        {news.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                        {news.excerpt}
                                    </p>
                                </div>
                                <button className="p-2 rounded-lg bg-secondary/50 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
