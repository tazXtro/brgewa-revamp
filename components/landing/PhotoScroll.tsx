"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Photo {
    id: string;
    title: string;
    titleBn?: string;
    category?: string;
}

interface PhotoScrollProps {
    photos: Photo[];
    title?: string;
    titleBn?: string;
}

export default function PhotoScroll({ photos, title, titleBn }: PhotoScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const gradients = [
        "from-emerald-500 to-teal-600",
        "from-teal-500 to-cyan-600",
        "from-green-500 to-emerald-600",
        "from-cyan-500 to-blue-600",
        "from-emerald-600 to-green-500",
        "from-teal-600 to-emerald-500",
    ];

    return (
        <div className="w-full">
            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-4 px-1">
                    <div>
                        <h3 className="text-xl font-bold text-foreground">{title}</h3>
                        {titleBn && <p className="text-sm text-primary">{titleBn}</p>}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="flex-shrink-0 w-72 snap-start group cursor-pointer"
                    >
                        <div className="relative h-48 rounded-xl overflow-hidden">
                            {/* Gradient placeholder */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                            {/* Content */}
                            <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                {photo.category && (
                                    <span className="inline-block w-fit px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md mb-2">
                                        {photo.category}
                                    </span>
                                )}
                                <h4 className="text-white font-semibold text-sm line-clamp-1">
                                    {photo.title}
                                </h4>
                                {photo.titleBn && (
                                    <p className="text-white/70 text-xs mt-0.5 line-clamp-1">
                                        {photo.titleBn}
                                    </p>
                                )}
                            </div>
                            {/* Hover effect */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
