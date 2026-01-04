"use client";

import { Search, Bell, User, Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
    onMenuClick?: () => void;
    sidebarCollapsed?: boolean;
}

export default function Header({ onMenuClick, sidebarCollapsed }: HeaderProps) {
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <header
            className={`fixed top-0 right-0 h-16 bg-card/80 backdrop-blur-xl border-b border-border z-40 transition-all duration-300 ${sidebarCollapsed ? "left-[72px]" : "left-[280px]"
                }`}
        >
            <div className="h-full px-6 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Search Bar */}
                    <div
                        className={`relative transition-all duration-300 ${searchFocused ? "w-96" : "w-72"
                            }`}
                    >
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <input
                            type="text"
                            placeholder="Search patients, doctors, appointments..."
                            className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/50 border border-transparent focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm placeholder:text-muted-foreground"
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    {/* Notification */}
                    <button className="relative p-2.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors group">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </button>

                    {/* Divider */}
                    <div className="w-px h-8 bg-border mx-2" />

                    {/* User Profile */}
                    <button className="flex items-center gap-3 p-1.5 pr-4 rounded-xl hover:bg-muted transition-colors group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <User size={18} className="text-white" />
                        </div>
                        <div className="hidden md:flex flex-col items-start">
                            <span className="text-sm font-semibold text-foreground">
                                Admin User
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Administrator
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
