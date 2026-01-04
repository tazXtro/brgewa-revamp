import { Star, Clock } from "lucide-react";

interface Doctor {
    id: string;
    name: string;
    nameBn?: string;
    specialty: string;
    specialtyBn?: string;
    rating: number;
    patients: number;
    availability: string;
    image?: string;
}

const doctors: Doctor[] = [
    {
        id: "1",
        name: "Dr. Mohammad Ismail Hossain",
        nameBn: "ডা. মোহাম্মদ ইসমাইল হোসেন",
        specialty: "General Medicine",
        specialtyBn: "জেনারেল মেডিসিন",
        rating: 4.9,
        patients: 1250,
        availability: "Mon-Fri, 9AM-5PM",
    },
    {
        id: "2",
        name: "Dr. Suratuzzaman",
        nameBn: "ডা. সুরাতুজ্জামান",
        specialty: "Cardiology",
        specialtyBn: "হৃদরোগ",
        rating: 4.8,
        patients: 980,
        availability: "Mon-Sat, 10AM-4PM",
    },
    {
        id: "3",
        name: "Dr. Mohammad Ali",
        nameBn: "ডা. মোহাম্মদ আলী",
        specialty: "Orthopedics",
        specialtyBn: "অর্থোপেডিক্স",
        rating: 4.7,
        patients: 850,
        availability: "Tue-Sat, 9AM-3PM",
    },
    {
        id: "4",
        name: "Dr. Fatema Begum",
        nameBn: "ডা. ফাতেমা বেগম",
        specialty: "Gynecology",
        specialtyBn: "স্ত্রীরোগ",
        rating: 4.9,
        patients: 1100,
        availability: "Sun-Thu, 10AM-6PM",
    },
];

export default function DoctorsSection() {
    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-foreground">Featured Doctors</h2>
                    <p className="text-sm text-muted-foreground">Our top-rated medical professionals</p>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                    View All →
                </button>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-secondary/50 transition-all duration-200 group cursor-pointer"
                        >
                            {/* Avatar */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-lg">
                                    {doctor.name.split(" ").slice(1, 3).map(n => n[0]).join("")}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-foreground truncate">
                                    {doctor.name}
                                </h3>
                                <p className="text-sm text-primary font-medium">
                                    {doctor.specialty}
                                </p>
                                <div className="flex items-center gap-3 mt-1.5">
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="text-amber-500 fill-amber-500" />
                                        <span className="text-sm font-semibold text-foreground">
                                            {doctor.rating}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Clock size={14} />
                                        <span className="text-xs">{doctor.availability}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Patients count */}
                            <div className="text-right hidden sm:block">
                                <p className="text-lg font-bold text-foreground">{doctor.patients}</p>
                                <p className="text-xs text-muted-foreground">patients</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
