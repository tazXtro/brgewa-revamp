import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, Clock } from "lucide-react";

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Medical Services", href: "/medical-services" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Welfare Programs", href: "/welfare" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
];

const services = [
    { label: "General Medicine", href: "/medical-services" },
    { label: "Cardiology", href: "/medical-services" },
    { label: "Orthopedics", href: "/medical-services" },
    { label: "Gynecology", href: "/medical-services" },
    { label: "Eye Care", href: "/medical-services" },
    { label: "Dental Care", href: "/medical-services" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div>
                                <span className="font-bold text-xl">BRGEWA</span>
                                <p className="text-xs text-gray-400">Hospital & Welfare</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            বাংলাদেশ অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতি - অবসরপ্রাপ্ত সরকারী কর্মচারী এবং তাদের পরিবারের সেবায় নিয়োজিত।
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
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
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
                        <h3 className="font-bold text-lg mb-6">Medical Services</h3>
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
                        <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-400">
                                    ৭৫/এ, রোড নং ৫/এ, ধানমন্ডি আ/এ, ঢাকা-১২০৯
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
                                    Sun-Thu: 9AM - 5PM
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
                        <p>© 2026 BRGEWA. All rights reserved.</p>
                        <p>
                            Developed by{" "}
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
