"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function VideoSection() {
    const { language } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);

    // Autoplay on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was blocked, user needs to interact
                setIsPlaying(false);
            });
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                        {language === 'en' ? "About Our Hospital" : "আমাদের হাসপাতাল সম্পর্কে"}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {language === 'en' ? "Take a Virtual Tour" : "ভার্চুয়াল ট্যুর করুন"}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {language === 'en'
                            ? "Experience our modern facilities and dedicated healthcare services"
                            : "আমাদের আধুনিক সুবিধা এবং নিবেদিত স্বাস্থ্যসেবা অভিজ্ঞতা নিন"}
                    </p>
                </div>

                {/* Video Player */}
                <div
                    className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black group"
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => isPlaying && setShowControls(false)}
                >
                    <video
                        ref={videoRef}
                        className="w-full aspect-video object-cover"
                        src="/videos/hospital-intro.mp4"
                        poster="/videos/poster.jpg"
                        muted={isMuted}
                        loop
                        autoPlay
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />

                    {/* Play Overlay (when paused) */}
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                            onClick={togglePlay}
                        >
                            <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                                <Play size={36} className="ml-1" />
                            </div>
                        </div>
                    )}

                    {/* Controls Bar */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={togglePlay}
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>
                            </div>
                            <button
                                onClick={toggleFullscreen}
                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <Maximize size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Caption */}
                <p className="text-center text-sm text-muted-foreground mt-4">
                    {language === 'en'
                        ? "A glimpse into BRGEWA Hospital and our commitment to quality healthcare"
                        : "বিআরজিইডাব্লিউএ হাসপাতাল এবং মানসম্মত স্বাস্থ্যসেবায় আমাদের প্রতিশ্রুতির একটি ঝলক"}
                </p>
            </div>
        </section>
    );
}
