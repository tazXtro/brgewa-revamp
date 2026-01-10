"use client";

import { ArrowRight, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageContext";
import { doctors } from "@/lib/doctorsData";
import { useEffect, useRef, useState } from "react";

export default function DoctorsSection() {
    const { language } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Use more doctors for the carousel
    const featuredDoctors = doctors.slice(0, 10);

    // Auto-scroll effect
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || isPaused) return;

        const scrollSpeed = 1; // pixels per frame
        let animationFrameId: number;

        const scroll = () => {
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0; // Reset to start for infinite loop
            } else {
                container.scrollLeft += scrollSpeed;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const scrollByAmount = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = 320; // Approximate card width + gap
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                            {language === 'en' ? "Our Doctors" : "আমাদের ডাক্তারগণ"}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            {language === 'en' ? "Meet Our Specialists" : "আমাদের বিশেষজ্ঞ ডাক্তারদের সাথে পরিচিত হোন"}
                        </h2>
                        <p className="text-muted-foreground">
                            {language === 'en'
                                ? "Experienced and dedicated physicians"
                                : "অভিজ্ঞ এবং নিবেদিতপ্রাণ চিকিৎসকগণ"}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Navigation Arrows */}
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={() => scrollByAmount('left')}
                                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scrollByAmount('right')}
                                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <Link
                            href="/doctors"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                        >
                            {language === 'en' ? "View All" : "সকল দেখুন"}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Doctors Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Duplicate doctors for seamless loop */}
                    {[...featuredDoctors, ...featuredDoctors].map((doctor, index) => (
                        <Link
                            href="/doctors"
                            key={`${doctor.id}-${index}`}
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block flex-shrink-0 w-[280px]"
                        >
                            {/* Avatar Area */}
                            <div className="h-36 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full blur-2xl" />
                                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-2xl" />
                                </div>
                                <div className="w-18 h-18 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 text-white font-bold text-xl p-4">
                                    {language === 'en'
                                        ? doctor.name.split(" ").slice(1, 3).map(n => n[0]).join("")
                                        : doctor.nameBn.slice(0, 2)}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1" title={language === 'en' ? doctor.name : doctor.nameBn}>
                                    {language === 'en' ? doctor.name : doctor.nameBn}
                                </h3>
                                <p className="text-primary font-medium text-sm mt-1 mb-2 line-clamp-1">
                                    {language === 'en' ? doctor.specialty : doctor.specialtyBn}
                                </p>

                                {/* Schedule & Room */}
                                <div className="space-y-1.5 mt-3 pt-3 border-t border-border">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock size={12} className="shrink-0" />
                                        <span className="line-clamp-1">
                                            {language === 'en' ? doctor.schedule : doctor.scheduleBn}
                                        </span>
                                    </div>
                                    {(doctor.room || doctor.roomBn) && (
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <MapPin size={12} className="shrink-0" />
                                            <span>
                                                {language === 'en' ? `Room: ${doctor.room}` : `রুম: ${doctor.roomBn}`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
