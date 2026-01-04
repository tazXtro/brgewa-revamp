"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: {
        id: string;
        title: string;
        titleBn?: string;
        category?: string;
    }[];
    title?: string;
    titleBn?: string;
    autoPlay?: boolean;
    interval?: number;
}

export default function ImageCarousel({
    images,
    title,
    titleBn,
    autoPlay = true,
    interval = 4000,
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!autoPlay || isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length, isHovered]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    // Generate gradient colors for placeholder images
    const gradients = [
        "from-emerald-500 via-teal-500 to-cyan-500",
        "from-green-500 via-emerald-500 to-teal-500",
        "from-teal-500 via-cyan-500 to-blue-500",
        "from-emerald-600 via-green-500 to-lime-500",
        "from-cyan-500 via-teal-500 to-emerald-500",
    ];

    return (
        <div className="w-full">
            {title && (
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-foreground">{title}</h3>
                        {titleBn && <p className="text-sm text-primary">{titleBn}</p>}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}

            <div
                ref={containerRef}
                className="relative overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="w-full flex-shrink-0 relative aspect-[16/9] md:aspect-[21/9]"
                        >
                            {/* Gradient placeholder */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                {image.category && (
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2">
                                        {image.category}
                                    </span>
                                )}
                                <h4 className="text-xl md:text-2xl font-bold text-white">
                                    {image.title}
                                </h4>
                                {image.titleBn && (
                                    <p className="text-white/80 mt-1">{image.titleBn}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 ${index === currentIndex
                                    ? "w-8 h-2 bg-white rounded-full"
                                    : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
