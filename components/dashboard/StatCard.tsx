import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    change?: {
        value: number;
        type: "increase" | "decrease";
    };
    icon: LucideIcon;
    iconColor?: string;
    iconBgColor?: string;
}

export default function StatCard({
    title,
    value,
    change,
    icon: Icon,
    iconColor = "text-primary",
    iconBgColor = "bg-secondary",
}: StatCardProps) {
    return (
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold text-foreground tracking-tight">
                        {value}
                    </h3>
                    {change && (
                        <div className="flex items-center gap-1 mt-2">
                            <span
                                className={`text-sm font-semibold ${change.type === "increase"
                                        ? "text-green-600"
                                        : "text-red-500"
                                    }`}
                            >
                                {change.type === "increase" ? "↑" : "↓"} {Math.abs(change.value)}%
                            </span>
                            <span className="text-xs text-muted-foreground">vs last month</span>
                        </div>
                    )}
                </div>
                <div
                    className={`w-14 h-14 rounded-2xl ${iconBgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
            </div>
        </div>
    );
}
