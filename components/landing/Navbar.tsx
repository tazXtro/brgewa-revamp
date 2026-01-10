"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            label: t.navbar.home,
            href: "/",
        },
        {
            label: t.navbar.about,
            href: "/about",
            children: [
                { label: language === 'en' ? "History" : "সমিতির ইতিহাস", href: "/about?section=history" },
                { label: language === 'en' ? "Mission & Vision" : "লক্ষ্য ও উদ্দেশ্য", href: "/about?section=mission" },
                { label: language === 'en' ? "Executive Committee" : "কার্যনির্বাহী কমিটি", href: "/about?section=committee" },
                { label: language === 'en' ? "Constitution" : "সমিতির গঠনতন্ত্র", href: "/about?section=constitution" },
            ],
        },
        {
            label: t.navbar.services,
            href: "/medical-services",
            children: [
                { label: language === 'en' ? "Fees and Tests" : "ফি ও পরীক্ষা", href: "/medical-services" },
                { label: language === 'en' ? "Doctors List" : "চিকিৎসক তালিকা", href: "/doctors" },
            ],
        },
        {
            label: t.navbar.doctors,
            href: "/doctors",
        },
        {
            label: t.navbar.news,
            href: "/news",
        },
        {
            label: t.navbar.contact,
            href: "/contact",
        },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 hidden md:block">
                <div className="container mx-auto px-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:222240189" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Phone size={14} />
                            <span>২২২২৪০১৮৯, ২২২২৪০১৯০</span>
                        </a>
                        <a href="mailto:brgewa@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Mail size={14} />
                            <span>brgewa@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>৭৫/এ, রোড নং ৫/এ, ধানমন্ডি, ঢাকা-১২০৯</span>
                        </div>
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded text-xs font-medium transition-colors"
                        >
                            <Globe size={12} />
                            <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-lg"
                    : "bg-white"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-bold text-primary text-xl leading-tight">
                                    BRGEWA
                                </span>
                                <span className="text-xs text-muted-foreground leading-tight">
                                    অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতি
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${activeDropdown === item.label
                                            ? "text-primary bg-secondary"
                                            : "text-foreground hover:text-primary hover:bg-secondary/50"
                                            }`}
                                    >
                                        {item.label}
                                        {item.children && <ChevronDown size={16} className="opacity-60" />}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.children && activeDropdown === item.label && (
                                        <div className="absolute top-full left-0 pt-2 w-56">
                                            <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden py-2">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href="/dashboard"
                                className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                            >
                                Member Portal
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-border">
                        <div className="container mx-auto px-6 py-4 space-y-2">
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-lg text-sm font-medium text-primary"
                                >
                                    <Globe size={16} />
                                    <span>{language === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}</span>
                                </button>
                            </div>
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 rounded-lg font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/dashboard"
                                className="block px-4 py-3 rounded-xl bg-primary text-white font-semibold text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Member Portal
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
