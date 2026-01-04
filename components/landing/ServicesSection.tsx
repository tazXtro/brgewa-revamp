import { Stethoscope, Heart, GraduationCap, Building, Users, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Stethoscope,
        title: "Medical Consultation",
        titleBn: "চিকিৎসা পরামর্শ",
        description: "Expert consultation from specialized doctors across various departments.",
        color: "text-emerald-600",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
        hoverBg: "group-hover:bg-emerald-600",
    },
    {
        icon: Heart,
        title: "Medical Aid",
        titleBn: "চিকিৎসা সহায়তা",
        description: "Financial assistance for surgeries and medical treatments.",
        color: "text-rose-600",
        bgColor: "bg-rose-100 dark:bg-rose-900/30",
        hoverBg: "group-hover:bg-rose-600",
    },
    {
        icon: GraduationCap,
        title: "Scholarships",
        titleBn: "শিক্ষাবৃত্তি",
        description: "Educational scholarships for children of retired employees.",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        hoverBg: "group-hover:bg-blue-600",
    },
    {
        icon: Building,
        title: "Modern Facilities",
        titleBn: "আধুনিক সুবিধা",
        description: "State-of-the-art medical equipment and comfortable environment.",
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        hoverBg: "group-hover:bg-purple-600",
    },
    {
        icon: Users,
        title: "Member Benefits",
        titleBn: "সদস্য সুবিধা",
        description: "Exclusive benefits and discounts for registered members.",
        color: "text-amber-600",
        bgColor: "bg-amber-100 dark:bg-amber-900/30",
        hoverBg: "group-hover:bg-amber-600",
    },
    {
        icon: ClipboardList,
        title: "Health Checkups",
        titleBn: "স্বাস্থ্য পরীক্ষা",
        description: "Regular health screening and preventive care programs.",
        color: "text-teal-600",
        bgColor: "bg-teal-100 dark:bg-teal-900/30",
        hoverBg: "group-hover:bg-teal-600",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comprehensive Healthcare Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        আমাদের সদস্যদের জন্য সর্বোত্তম স্বাস্থ্যসেবা এবং কল্যাণ কার্যক্রম
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.hoverBg} flex items-center justify-center mb-5 transition-colors duration-300`}
                            >
                                <service.icon
                                    className={`w-7 h-7 ${service.color} group-hover:text-white transition-colors duration-300`}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-3">
                                {service.titleBn}
                            </p>
                            <p className="text-muted-foreground">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/medical-services"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                    >
                        View All Services
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
