import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Card */}
                    <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Need Medical Assistance?
                            </h3>
                            <p className="text-white/80 mb-8 max-w-md">
                                আমাদের বিশেষজ্ঞ চিকিৎসকগণ আপনার সেবায় সদা প্রস্তুত। এখনই যোগাযোগ করুন।
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Call us at</p>
                                        <a href="tel:222240189" className="text-xl font-bold hover:underline">
                                            ২২২২৪০১৮৯
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Visit us at</p>
                                        <p className="font-semibold">অবসর ভবন, ধানমন্ডি, ঢাকা</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm">Working Hours</p>
                                        <p className="font-semibold">Sun - Thu: 9AM - 5PM</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Quick Appointment Form */}
                    <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            Book an Appointment
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            অ্যাপয়েন্টমেন্ট বুক করতে নিচের ফর্মটি পূরণ করুন
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="আপনার নাম"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="মোবাইল নম্বর"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Select Department
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                    <option value="">বিভাগ নির্বাচন করুন</option>
                                    <option value="general">General Medicine</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="gynecology">Gynecology</option>
                                    <option value="eye">Eye Care</option>
                                    <option value="dental">Dental Care</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="কোন বিশেষ তথ্য থাকলে লিখুন..."
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
