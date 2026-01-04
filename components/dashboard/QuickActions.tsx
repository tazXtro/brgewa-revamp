import { UserPlus, CalendarPlus, Stethoscope, FileText } from "lucide-react";

interface QuickAction {
    label: string;
    labelBn?: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

const quickActions: QuickAction[] = [
    {
        label: "Add Patient",
        labelBn: "রোগী যোগ করুন",
        icon: <UserPlus size={24} />,
        color: "text-emerald-600",
        bgColor: "bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50",
    },
    {
        label: "New Appointment",
        labelBn: "নতুন অ্যাপয়েন্টমেন্ট",
        icon: <CalendarPlus size={24} />,
        color: "text-blue-600",
        bgColor: "bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50",
    },
    {
        label: "Add Doctor",
        labelBn: "ডাক্তার যোগ করুন",
        icon: <Stethoscope size={24} />,
        color: "text-purple-600",
        bgColor: "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/50",
    },
    {
        label: "Generate Report",
        labelBn: "রিপোর্ট তৈরি করুন",
        icon: <FileText size={24} />,
        color: "text-amber-600",
        bgColor: "bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/30 dark:hover:bg-amber-900/50",
    },
];

export default function QuickActions() {
    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                    <button
                        key={action.label}
                        className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl ${action.bgColor} transition-all duration-200 group`}
                    >
                        <span className={`${action.color} group-hover:scale-110 transition-transform`}>
                            {action.icon}
                        </span>
                        <span className={`text-sm font-semibold ${action.color}`}>
                            {action.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
