import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const doctors = [
    {
        id: "1",
        name: "Dr. Mohammad Ismail Hossain",
        nameBn: "ডা. মোহাম্মদ ইসমাইল হোসেন",
        specialty: "General Medicine",
        specialtyBn: "জেনারেল মেডিসিন",
        experience: "25+ years",
        rating: 4.9,
        patients: "1,250+",
        schedule: "Sun-Thu, 9AM-5PM",
    },
    {
        id: "2",
        name: "Dr. Suratuzzaman",
        nameBn: "ডা. সুরাতুজ্জামান",
        specialty: "Cardiology",
        specialtyBn: "হৃদরোগ বিশেষজ্ঞ",
        experience: "20+ years",
        rating: 4.8,
        patients: "980+",
        schedule: "Mon-Sat, 10AM-4PM",
    },
    {
        id: "3",
        name: "Dr. Mohammad Ali",
        nameBn: "ডা. মোহাম্মদ আলী",
        specialty: "Orthopedics",
        specialtyBn: "হাড় বিশেষজ্ঞ",
        experience: "18+ years",
        rating: 4.7,
        patients: "850+",
        schedule: "Tue-Sat, 9AM-3PM",
    },
    {
        id: "4",
        name: "Dr. Fatema Begum",
        nameBn: "ডা. ফাতেমা বেগম",
        specialty: "Gynecology",
        specialtyBn: "স্ত্রীরোগ বিশেষজ্ঞ",
        experience: "22+ years",
        rating: 4.9,
        patients: "1,100+",
        schedule: "Sun-Thu, 10AM-6PM",
    },
];

export default function DoctorsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                            Our Doctors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Meet Our Specialists
                        </h2>
                        <p className="text-muted-foreground">
                            অভিজ্ঞ এবং নিবেদিতপ্রাণ চিকিৎসকগণ
                        </p>
                    </div>
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                    >
                        View All Doctors
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Avatar Area */}
                            <div className="h-48 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl" />
                                    <div className="absolute bottom-4 left-4 w-32 h-32 bg-white rounded-full blur-2xl" />
                                </div>
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                                    <span className="text-white font-bold text-3xl">
                                        {doctor.name.split(" ").slice(1, 3).map((n) => n[0]).join("")}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                                    {doctor.name}
                                </h3>
                                <p className="text-primary font-medium text-sm mt-1">
                                    {doctor.specialty}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {doctor.specialtyBn}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="text-amber-500 fill-amber-500" />
                                        <span className="text-sm font-semibold text-foreground">
                                            {doctor.rating}
                                        </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {doctor.experience}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {doctor.patients} patients
                                    </div>
                                </div>

                                {/* Schedule */}
                                <div className="mt-3">
                                    <span className="inline-block px-3 py-1 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground">
                                        📅 {doctor.schedule}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
