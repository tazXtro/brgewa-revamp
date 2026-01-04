"use client";

import { useEffect, useRef } from "react";

interface MarqueeProps {
    items: string[];
    speed?: number;
    className?: string;
}

export default function Marquee({ items, speed = 40, className = "" }: MarqueeProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        let animationId: number;
        let position = 0;
        const contentWidth = scrollElement.scrollWidth / 2;

        const animate = () => {
            position -= 1;
            if (Math.abs(position) >= contentWidth) {
                position = 0;
            }
            scrollElement.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(animate);
        };

        // Start animation after a short delay
        const timeout = setTimeout(() => {
            animationId = requestAnimationFrame(animate);
        }, 100);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animationId);
        };
    }, [items]);

    return (
        <div className={`overflow-hidden bg-gradient-to-r from-primary via-emerald-600 to-primary py-3 ${className}`}>
            <div
                ref={scrollRef}
                className="flex whitespace-nowrap"
                style={{ willChange: "transform" }}
            >
                {/* First set */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 mx-8 shrink-0"
                    >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <span className="text-white font-medium">
                            {item}
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {items.map((item, index) => (
                    <div
                        key={`dup-${index}`}
                        className="flex items-center gap-3 mx-8 shrink-0"
                    >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <span className="text-white font-medium">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
