"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageContext";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const { language, t } = useLanguage();

    const slides = [
        {
            id: 1,
            title: language === 'en' ? "Welcome to BRGEWA" : "বিআরজিইডাব্লিউএ-তে স্বাগতম",
            subtitle: language === 'en' ? "Bangladesh Retired Government Employee Welfare Association" : "বাংলাদেশ অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতি",
            description: language === 'en' ? "Dedicated to serving retired government employees and their families with quality healthcare and welfare programs." : "অবসরপ্রাপ্ত সরকারী কর্মচারী এবং তাদের পরিবারের জন্য মানসম্মত স্বাস্থ্যসেবা এবং কল্যাণ কার্যক্রমে নিবেদিত।",
            cta: language === 'en' ? "Learn More" : "আরও জানুন",
            ctaLink: "/about",
            bgGradient: "from-emerald-600 via-emerald-500 to-teal-500",
        },
        {
            id: 2,
            title: language === 'en' ? "Quality Healthcare" : "মানসম্মত স্বাস্থ্যসেবা",
            subtitle: language === 'en' ? "Expert Doctors & Modern Facilities" : "বিশেষজ্ঞ ডাক্তার এবং আধুনিক সুবিধা",
            description: language === 'en' ? "Access quality medical care from experienced specialists in our well-equipped hospital." : "আমাদের আধুনিক হাসপাতালে অভিজ্ঞ বিশেষজ্ঞ ডাক্তারদের কাছ থেকে মানসম্মত চিকিৎসা সেবা নিন।",
            cta: language === 'en' ? "Our Services" : "আমাদের সেবাসমূহ",
            ctaLink: "/medical-services",
            bgGradient: "from-teal-600 via-emerald-600 to-green-500",
        },
        {
            id: 3,
            title: language === 'en' ? "Welfare Programs" : "কল্যাণ কার্যক্রম",
            subtitle: language === 'en' ? "Supporting Our Members" : "আমাদের সদস্যদের সহায়তা",
            description: language === 'en' ? "Scholarships, medical aid, emergency support, and more for our valued members." : "আমাদের সম্মানিত সদস্যদের জন্য শিক্ষাবৃত্তি, চিকিৎসা সহায়তা, জরুরি সহায়তা এবং আরও অনেক কিছু।",
            cta: language === 'en' ? "View Programs" : "কার্যক্রম দেখুন",
            ctaLink: "/welfare",
            bgGradient: "from-green-600 via-emerald-500 to-teal-600",
        },
        {
            id: 4,
            title: language === 'en' ? "Join Our Community" : "আমাদের সাথে যুক্ত হোন",
            subtitle: language === 'en' ? "Become a Member Today" : "আজই সদস্য হোন",
            description: language === 'en' ? "Join over 12,000 members benefiting from our healthcare and welfare services." : "আমাদের স্বাস্থ্যসেবা এবং কল্যাণ কার্যক্রম থেকে উপকৃত ১২,০০০+ সদস্যের সাথে যোগ দিন।",
            cta: language === 'en' ? "Register Now" : "রেজিস্ট্রেশন করুন",
            ctaLink: "/register",
            bgGradient: "from-cyan-600 via-teal-500 to-emerald-600",
        },
    ];

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide, isPaused]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <section
            className="relative h-[550px] md:h-[650px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                        }`}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />

                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Large circles */}
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

                        {/* Small floating circles */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse" />
                        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-300" />
                        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-white/25 rounded-full animate-pulse delay-500" />

                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                            }}
                        />
                    </div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                    {/* Left content */}
                    <div className="max-w-xl">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ${index === currentSlide
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                                    }`}
                            >
                                {index === currentSlide && (
                                    <>
                                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4 animate-fadeInUp">
                                            {slide.subtitle}
                                        </span>
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-base md:text-lg text-white/80 mb-8 max-w-lg">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href={slide.ctaLink}
                                                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transition-all shadow-xl shadow-black/10"
                                            >
                                                {slide.cta}
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm border border-white/20"
                                            >
                                                {language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side - Slide preview cards */}
                    <div className="hidden lg:block">
                        <div className="flex flex-col gap-3">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className={`text-left p-4 rounded-xl transition-all duration-300 ${index === currentSlide
                                        ? "bg-white/30 backdrop-blur-md scale-105 shadow-lg"
                                        : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${index === currentSlide ? "bg-white text-primary" : "bg-white/20 text-white"
                                            }`}>
                                            <span className="font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{slide.title}</p>
                                            <p className="text-white/70 text-xs">{slide.subtitle}</p>
                                        </div>
                                        {index === currentSlide && (
                                            <div className="ml-auto">
                                                <Play size={16} className="text-white fill-white" />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="relative"
                    >
                        <span className={`block transition-all duration-300 ${index === currentSlide
                            ? "w-12 h-3 bg-white rounded-full"
                            : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
                            }`} />
                        {index === currentSlide && (
                            <span className="absolute inset-0 bg-white/50 rounded-full animate-ping" />
                        )}
                    </button>
                ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div
                    className="h-full bg-white transition-all duration-300"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    }}
                />
            </div>
        </section>
    );
}
