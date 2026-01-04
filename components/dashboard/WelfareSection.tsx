import { Heart, GraduationCap, HandCoins, AlertTriangle } from "lucide-react";

interface WelfareProgram {
    id: string;
    title: string;
    titleBn: string;
    description: string;
    icon: React.ReactNode;
    beneficiaries: number;
    totalAmount: string;
    color: string;
    bgColor: string;
}

const programs: WelfareProgram[] = [
    {
        id: "1",
        title: "Medical Aid",
        titleBn: "চিকিৎসা সহায়তা",
        description: "Financial assistance for medical treatment and surgeries",
        icon: <Heart size={24} />,
        beneficiaries: 342,
        totalAmount: "৳ 45,00,000",
        color: "text-rose-600",
        bgColor: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
        id: "2",
        title: "Education Scholarship",
        titleBn: "শিক্ষাবৃত্তি",
        description: "Scholarships for children of retired employees",
        icon: <GraduationCap size={24} />,
        beneficiaries: 528,
        totalAmount: "৳ 32,50,000",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        id: "3",
        title: "One-time Grant",
        titleBn: "এককালীন অনুদান",
        description: "Financial support for marriage and special occasions",
        icon: <HandCoins size={24} />,
        beneficiaries: 186,
        totalAmount: "৳ 18,60,000",
        color: "text-emerald-600",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
        id: "4",
        title: "Emergency Relief",
        titleBn: "জরুরী সহায়তা",
        description: "Disaster relief and emergency financial support",
        icon: <AlertTriangle size={24} />,
        beneficiaries: 95,
        totalAmount: "৳ 12,35,000",
        color: "text-amber-600",
        bgColor: "bg-amber-100 dark:bg-amber-900/30",
    },
];

export default function WelfareSection() {
    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-foreground">Welfare Programs</h2>
                    <p className="text-sm text-muted-foreground">কল্যাণ কার্যক্রম</p>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                    View All →
                </button>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="p-4 rounded-xl bg-muted/30 hover:bg-secondary/30 transition-all duration-200 cursor-pointer group"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl ${program.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                                    <span className={program.color}>{program.icon}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-foreground">
                                        {program.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                        {program.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-3">
                                        <div>
                                            <p className="text-lg font-bold text-foreground">
                                                {program.beneficiaries}
                                            </p>
                                            <p className="text-xs text-muted-foreground">Beneficiaries</p>
                                        </div>
                                        <div className="w-px h-8 bg-border" />
                                        <div>
                                            <p className="text-lg font-bold text-primary">
                                                {program.totalAmount}
                                            </p>
                                            <p className="text-xs text-muted-foreground">Disbursed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
