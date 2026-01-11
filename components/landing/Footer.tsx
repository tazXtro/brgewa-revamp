"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Youtube, Clock } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    const quickLinks = [
        { label: t.footer.quickLinks.aboutUs, href: "/about" },
        { label: t.footer.quickLinks.medicalServices, href: "/medical-services" },
        { label: t.footer.quickLinks.ourDoctors, href: "/doctors" },
        { label: t.footer.quickLinks.welfarePrograms, href: "/welfare" },
        { label: t.footer.quickLinks.photoGallery, href: "/gallery" },
        { label: t.footer.quickLinks.contactUs, href: "/contact" },
    ];

    const services = [
        { label: t.footer.services.generalMedicine, href: "/medical-services" },
        { label: t.footer.services.cardiology, href: "/medical-services" },
        { label: t.footer.services.orthopedics, href: "/medical-services" },
        { label: t.footer.services.gynecology, href: "/medical-services" },
        { label: t.footer.services.eyeCare, href: "/medical-services" },
        { label: t.footer.services.dentalCare, href: "/medical-services" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1">
                                <Image
                                    src="/brgewa-logo.jpg"
                                    alt="BRGEWA Logo"
                                    width={48}
                                    height={56}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div>
                                <span className="font-bold text-xl">BRGEWA</span>
                                <p className="text-xs text-gray-400">{t.footer.hospitalWelfare}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t.footer.about_desc}
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.footer.quick_links}</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.footer.services.title}</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.footer.contact_us}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-400">
                                    {t.footer.fullAddress}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <a
                                    href="tel:222240189"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    ২২২২৪০১৮৯, ২২২২৪০১৯০
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <a
                                    href="mailto:brgewa@gmail.com"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    brgewa@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={20} className="text-primary flex-shrink-0" />
                                <span className="text-gray-400">
                                    {t.footer.officeHours}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>{t.footer.rights}</p>
                        <p>
                            {t.footer.developedBy}{" "}
                            <a href="#" className="text-primary hover:text-accent transition-colors">
                                XYZ IT Solution
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
