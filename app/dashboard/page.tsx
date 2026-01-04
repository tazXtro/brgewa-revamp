import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import DoctorsSection from "@/components/dashboard/DoctorsSection";
import AppointmentsTable from "@/components/dashboard/AppointmentsTable";
import NewsSection from "@/components/dashboard/NewsSection";
import QuickActions from "@/components/dashboard/QuickActions";
import WelfareSection from "@/components/dashboard/WelfareSection";
import {
    Users,
    CalendarCheck,
    Stethoscope,
    Building2,
    TrendingUp,
    Heart,
} from "lucide-react";

export default function Dashboard() {
    return (
        <DashboardLayout>
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                            Welcome to BRGEWA Hospital
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            বাংলাদেশ অবসরপ্রাপ্ত সরকারী কর্মচারী কল্যাণ সমিতি
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium">
                            📅 Saturday, January 4, 2026
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                <StatCard
                    title="Total Members"
                    value="12,458"
                    change={{ value: 8.5, type: "increase" }}
                    icon={Users}
                    iconColor="text-emerald-600"
                    iconBgColor="bg-emerald-100 dark:bg-emerald-900/30"
                />
                <StatCard
                    title="Today's Appointments"
                    value="48"
                    change={{ value: 12, type: "increase" }}
                    icon={CalendarCheck}
                    iconColor="text-blue-600"
                    iconBgColor="bg-blue-100 dark:bg-blue-900/30"
                />
                <StatCard
                    title="Active Doctors"
                    value="24"
                    change={{ value: 4, type: "increase" }}
                    icon={Stethoscope}
                    iconColor="text-purple-600"
                    iconBgColor="bg-purple-100 dark:bg-purple-900/30"
                />
                <StatCard
                    title="Departments"
                    value="12"
                    icon={Building2}
                    iconColor="text-amber-600"
                    iconBgColor="bg-amber-100 dark:bg-amber-900/30"
                />
                <StatCard
                    title="Welfare Beneficiaries"
                    value="1,151"
                    change={{ value: 15, type: "increase" }}
                    icon={Heart}
                    iconColor="text-rose-600"
                    iconBgColor="bg-rose-100 dark:bg-rose-900/30"
                />
                <StatCard
                    title="Monthly Revenue"
                    value="৳ 8.5L"
                    change={{ value: 6.2, type: "increase" }}
                    icon={TrendingUp}
                    iconColor="text-teal-600"
                    iconBgColor="bg-teal-100 dark:bg-teal-900/30"
                />
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
                <QuickActions />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                {/* Appointments Table - Takes 2 columns */}
                <div className="xl:col-span-2">
                    <AppointmentsTable />
                </div>

                {/* News Section - Takes 1 column */}
                <div className="xl:col-span-1">
                    <NewsSection />
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Doctors Section */}
                <DoctorsSection />

                {/* Welfare Section */}
                <WelfareSection />
            </div>

            {/* Footer Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary to-accent text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold">Need Medical Assistance?</h3>
                        <p className="text-white/80 mt-1">
                            Contact our 24/7 helpline or visit our hospital at Obosor Bhaban, Dhanmondi
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:222240189"
                            className="px-6 py-2.5 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
                        >
                            📞 ২২২২৪০১৮৯
                        </a>
                        <a
                            href="mailto:brgewa@gmail.com"
                            className="px-6 py-2.5 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors"
                        >
                            ✉️ Email Us
                        </a>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
