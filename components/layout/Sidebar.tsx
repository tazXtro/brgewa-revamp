"use client";

import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    CalendarDays,
    Stethoscope,
    Building2,
    UserCog,
    FileText,
    Settings,
    ChevronLeft,
    ChevronRight,
    Heart,
    GraduationCap,
    HandCoins,
    ImageIcon,
} from "lucide-react";

interface NavItem {
    label: string;
    labelBn?: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
}

const navItems: NavItem[] = [
    {
        label: "Dashboard",
        labelBn: "ড্যাশবোর্ড",
        icon: <LayoutDashboard size={20} />,
        href: "/",
        active: true,
    },
    {
        label: "About Us",
        labelBn: "আমদের বিষয়",
        icon: <Building2 size={20} />,
        href: "/about",
    },
    {
        label: "Medical Services",
        labelBn: "চিকিৎসা সেবা",
        icon: <Stethoscope size={20} />,
        href: "/medical-services",
    },
    {
        label: "Doctors",
        labelBn: "চিকিৎসকগণ",
        icon: <UserCog size={20} />,
        href: "/doctors",
    },
    {
        label: "Appointments",
        labelBn: "অ্যাপয়েন্টমেন্ট",
        icon: <CalendarDays size={20} />,
        href: "/appointments",
    },
    {
        label: "Welfare Programs",
        labelBn: "কল্যাণ কার্যক্রম",
        icon: <Heart size={20} />,
        href: "/welfare",
    },
    {
        label: "Scholarships",
        labelBn: "শিক্ষাবৃত্তি",
        icon: <GraduationCap size={20} />,
        href: "/scholarships",
    },
    {
        label: "Donations",
        labelBn: "অনুদান",
        icon: <HandCoins size={20} />,
        href: "/donations",
    },
    {
        label: "Members",
        labelBn: "সদস্যবৃন্দ",
        icon: <Users size={20} />,
        href: "/members",
    },
    {
        label: "Photo Gallery",
        labelBn: "ফটোগ্যালারী",
        icon: <ImageIcon size={20} />,
        href: "/gallery",
    },
    {
        label: "Reports",
        labelBn: "রিপোর্ট",
        icon: <FileText size={20} />,
        href: "/reports",
    },
    {
        label: "Settings",
        labelBn: "সেটিংস",
        icon: <Settings size={20} />,
        href: "/settings",
    },
];

interface SidebarProps {
    collapsed?: boolean;
    onToggle?: () => void;
}

export default function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-card border-r border-border flex flex-col z-50 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[280px]"
                }`}
        >
            {/* Logo Section */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-border">
                <Link href="/" className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">B</span>
                    </div>
                    {!collapsed && (
                        <div className="flex flex-col">
                            <span className="font-bold text-primary text-lg leading-tight">
                                BRGEWA
                            </span>
                            <span className="text-xs text-muted-foreground leading-tight">
                                Hospital
                            </span>
                        </div>
                    )}
                </Link>
                <button
                    onClick={onToggle}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                onMouseEnter={() => setHoveredItem(item.label)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${item.active
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                                    }`}
                            >
                                <span className={`flex-shrink-0 ${item.active ? "" : "group-hover:scale-110"} transition-transform`}>
                                    {item.icon}
                                </span>
                                {!collapsed && (
                                    <span className="font-medium truncate">{item.label}</span>
                                )}
                                {collapsed && hoveredItem === item.label && (
                                    <div className="absolute left-full ml-2 px-3 py-1.5 bg-foreground text-background rounded-lg text-sm font-medium whitespace-nowrap shadow-lg z-50">
                                        {item.label}
                                    </div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
                {!collapsed && (
                    <div className="text-xs text-center text-muted-foreground">
                        <p>© 2026 BRGEWA</p>
                        <p className="mt-1">অবসর ভবন, ধানমন্ডি</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
