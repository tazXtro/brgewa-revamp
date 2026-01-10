"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function MapSection() {
    const { language } = useLanguage();

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                        {language === 'en' ? "Find Us" : "আমাদের খুঁজুন"}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {language === 'en' ? "Our Location" : "আমাদের অবস্থান"}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {language === 'en'
                            ? "Visit us at our hospital for quality healthcare services"
                            : "মানসম্মত স্বাস্থ্যসেবার জন্য আমাদের হাসপাতালে আসুন"}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Address Card */}
                        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">
                                        {language === 'en' ? "Address" : "ঠিকানা"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {language === 'en'
                                            ? "75/A Rd No. 5/A, Dhanmondi, Dhaka-1209, Bangladesh"
                                            : "৭৫/এ রোড নং ৫/এ, ধানমন্ডি, ঢাকা-১২০৯, বাংলাদেশ"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">
                                        {language === 'en' ? "Phone" : "ফোন"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        <a href="tel:+88022224-0189" className="hover:text-primary transition-colors">22224-0189</a>
                                        <br />
                                        <a href="tel:+88022224-0190" className="hover:text-primary transition-colors">22224-0190</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">
                                        {language === 'en' ? "Working Hours" : "কর্মঘন্টা"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {language === 'en'
                                            ? "Saturday - Thursday"
                                            : "শনিবার - বৃহস্পতিবার"}
                                        <br />
                                        {language === 'en'
                                            ? "8:00 AM - 5:00 PM"
                                            : "সকাল ৮:০০ - বিকাল ৫:০০"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Directions Button */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=75/A+Rd+No.+5/A,+Dhaka+1209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                        >
                            {language === 'en' ? "Get Directions" : "দিকনির্দেশনা পান"}
                            <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902347936666!2d90.3756883!3d23.7375753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a4c5ce7587%3A0xe542617f6540608!2s75%2FA%20Rd%20No.%205%2FA%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1704481000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="BRGEWA Hospital Location"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
