"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { doctors } from "@/lib/doctorsData";
import { Search, MapPin, Clock, Phone, Stethoscope, GraduationCap } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function DoctorsPage() {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");

    // Extract unique specialties
    const specialties = ["All", ...Array.from(new Set(doctors.map(d => language === 'en' ? d.specialty : d.specialtyBn)))];

    const filteredDoctors = doctors.filter(doctor => {
        const name = language === 'en' ? doctor.name : doctor.nameBn;
        const specialty = language === 'en' ? doctor.specialty : doctor.specialtyBn;

        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === "All" || specialty === selectedSpecialty;

        return matchesSearch && matchesSpecialty;
    });

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="bg-primary/10 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-primary">
                        {language === 'en' ? "Our Medical Specialists" : "আমাদের বিশেষজ্ঞ চিকিৎসকবৃন্দ"}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {language === 'en'
                            ? "Meet our team of experienced doctors dedicated to providing the best healthcare services."
                            : "আমাদের অভিজ্ঞ ডাক্তারদের সাথে পরিচিত হোন যারা সর্বোত্তম স্বাস্থ্যসেবা প্রদানে নিবেদিত।"}
                    </p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur z-20 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                                type="text"
                                placeholder={language === 'en' ? "Search doctor name or specialty..." : "ডাক্তারের নাম বা বিশেষত্ব খুঁজুন..."}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-card shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            {specialties.slice(0, 5).map(spec => (
                                <button
                                    key={spec}
                                    onClick={() => setSelectedSpecialty(spec)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${selectedSpecialty === spec
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                                        }`}
                                >
                                    {spec}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors List */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Avatar / Initials */}
                                    <div className="shrink-0 flex justify-center sm:justify-start">
                                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-4 border-background shadow-inner">
                                            {language === 'en'
                                                ? doctor.name.split(" ").slice(1, 3).map(n => n[0]).join("")
                                                : doctor.nameBn.slice(0, 2)}
                                        </div>
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-foreground mb-1">
                                            {language === 'en' ? doctor.name : doctor.nameBn}
                                        </h3>
                                        <p className="text-primary font-medium mb-2">
                                            {language === 'en' ? doctor.designation : doctor.designationBn}
                                        </p>

                                        {(doctor.qualifications || doctor.qualificationsBn) && (
                                            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3 justify-center sm:justify-start">
                                                <GraduationCap size={16} className="mt-0.5 shrink-0" />
                                                <p>{language === 'en' ? doctor.qualifications : doctor.qualificationsBn}</p>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 pt-4 border-t border-border">
                                            <div className="flex items-center gap-2 text-sm text-foreground/80 justify-center sm:justify-start">
                                                <Stethoscope size={16} className="text-primary" />
                                                <span>{language === 'en' ? doctor.specialty : doctor.specialtyBn}</span>
                                            </div>

                                            {(doctor.room || doctor.roomBn) && (
                                                <div className="flex items-center gap-2 text-sm text-foreground/80 justify-center sm:justify-start">
                                                    <MapPin size={16} className="text-primary" />
                                                    <span>{language === 'en' ? `Room: ${doctor.room}` : `রুম নং: ${doctor.roomBn}`}</span>
                                                </div>
                                            )}

                                            {(doctor.mobile) && (
                                                <div className="flex items-center gap-2 text-sm text-foreground/80 justify-center sm:justify-start">
                                                    <Phone size={16} className="text-primary" />
                                                    <a href={`tel:${doctor.mobile}`} className="hover:underline">{doctor.mobile}</a>
                                                </div>
                                            )}

                                            <div className="flex items-start gap-2 text-sm text-foreground/80 sm:col-span-2 justify-center sm:justify-start">
                                                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                                                <span>{language === 'en' ? doctor.schedule : doctor.scheduleBn}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredDoctors.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">
                                {language === 'en' ? "No doctors found matching your criteria." : "আপনার অনুসন্ধানের সাথে কোনো ডাক্তার পাওয়া যায়নি।"}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
