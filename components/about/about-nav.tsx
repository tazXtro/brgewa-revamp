import React from 'react';
import { History, Target, Users, Book, UserCheck, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
    id: string;
    label: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { id: 'history', label: 'সমিতির ইতিহাস', icon: History },
    { id: 'mission', label: 'লক্ষ্য ও উদ্দেশ্য', icon: Target },
    { id: 'committee', label: 'কমিটি', icon: Users },
    { id: 'constitution', label: 'সমিতির গঠনতন্ত্র', icon: Book },
    { id: 'presidents', label: 'সভাপতি ও প্রশাসকগণ', icon: UserCheck },
    { id: 'secretaries', label: 'মহাসচিবগণ', icon: UserCheck },
];

interface AboutNavProps {
    activeSection: string;
    onSectionChange: (id: string) => void;
}

export default function AboutNav({ activeSection, onSectionChange }: AboutNavProps) {
    return (
        <nav className="space-y-1">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group text-left",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <Icon className={cn(
                                "h-5 w-5 transition-colors",
                                isActive ? "text-primary-foreground" : "text-slate-400 group-hover:text-primary"
                            )} />
                            <span className={cn(
                                "font-medium",
                                isActive ? "font-semibold" : ""
                            )}>
                                {item.label}
                            </span>
                        </div>

                        {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary-foreground animate-in slide-in-from-left-2 fade-in duration-300" />
                        )}
                    </button>
                );
            })}
        </nav>
    );
}
