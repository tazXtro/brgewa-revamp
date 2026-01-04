import { Users, Award, Building, Heart } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "12,500+",
        label: "Registered Members",
        labelBn: "নিবন্ধিত সদস্য",
    },
    {
        icon: Award,
        value: "45+",
        label: "Years of Service",
        labelBn: "বছরের সেবা",
    },
    {
        icon: Building,
        value: "12",
        label: "Medical Departments",
        labelBn: "চিকিৎসা বিভাগ",
    },
    {
        icon: Heart,
        value: "50,000+",
        label: "Patients Served",
        labelBn: "সেবা প্রদানকৃত রোগী",
    },
];

export default function StatsSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-primary via-emerald-600 to-accent relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/90 font-medium">{stat.label}</div>
                            <div className="text-white/70 text-sm">{stat.labelBn}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
