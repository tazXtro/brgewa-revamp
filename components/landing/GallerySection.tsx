"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    { id: "1", title: "Health Camp 2025", titleBn: "স্বাস্থ্য ক্যাম্প ২০২৫", category: "Events" },
    { id: "2", title: "Annual General Meeting", titleBn: "বার্ষিক সাধারণ সভা", category: "Meetings" },
    { id: "3", title: "Scholarship Distribution", titleBn: "শিক্ষাবৃত্তি বিতরণ", category: "Welfare" },
    { id: "4", title: "Medical Camp", titleBn: "মেডিকেল ক্যাম্প", category: "Events" },
    { id: "5", title: "Obosor Bhaban", titleBn: "অবসর ভবন", category: "Facility" },
    { id: "6", title: "Executive Meeting", titleBn: "কার্যনির্বাহী কমিটির সভা", category: "Meetings" },
    { id: "7", title: "Eye Camp", titleBn: "চক্ষু ক্যাম্প", category: "Events" },
    { id: "8", title: "Cultural Program", titleBn: "সাংস্কৃতিক অনুষ্ঠান", category: "Events" },
    { id: "9", title: "Independence Day", titleBn: "স্বাধীনতা দিবস", category: "Events" },
    { id: "10", title: "Eid Reunion", titleBn: "ঈদ মিলনমেলা", category: "Events" },
];

const gradients = [
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-green-500 via-emerald-500 to-teal-500",
    "from-teal-500 via-cyan-500 to-blue-500",
    "from-emerald-600 via-green-500 to-lime-500",
    "from-cyan-500 via-teal-500 to-emerald-500",
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (id: string) => {
        const index = galleryImages.findIndex((img) => img.id === id);
        setLightboxIndex(index);
        setSelectedImage(id);
    };

    const nextImage = () => {
        const newIndex = (lightboxIndex + 1) % galleryImages.length;
        setLightboxIndex(newIndex);
        setSelectedImage(galleryImages[newIndex].id);
    };

    const prevImage = () => {
        const newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
        setLightboxIndex(newIndex);
        setSelectedImage(galleryImages[newIndex].id);
    };

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
                        Photo Gallery
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Activities & Events
                    </h2>
                    <p className="text-muted-foreground">
                        আমাদের কার্যক্রম এবং অনুষ্ঠানের স্মৃতিচারণ
                    </p>
                </div>
            </div>

            {/* Auto-scrolling Gallery - Row 1 */}
            <div className="mb-4 overflow-hidden">
                <div className="flex animate-scroll-left hover:pause" style={{ width: "fit-content" }}>
                    {[...galleryImages, ...galleryImages].map((image, index) => (
                        <div
                            key={`row1-${index}`}
                            onClick={() => openLightbox(image.id)}
                            className="flex-shrink-0 w-64 h-44 mx-2 rounded-xl overflow-hidden cursor-pointer group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <ZoomIn size={20} />
                                </div>
                                <p className="font-semibold text-sm text-center">{image.title}</p>
                                <p className="text-xs text-white/70">{image.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Auto-scrolling Gallery - Row 2 (Reverse Direction) */}
            <div className="overflow-hidden">
                <div
                    className="flex hover:pause"
                    style={{
                        width: "fit-content",
                        animation: "scroll-left 35s linear infinite reverse"
                    }}
                >
                    {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((image, index) => (
                        <div
                            key={`row2-${index}`}
                            onClick={() => openLightbox(image.id)}
                            className="flex-shrink-0 w-64 h-44 mx-2 rounded-xl overflow-hidden cursor-pointer group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[(index + 2) % gradients.length]}`} />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <ZoomIn size={20} />
                                </div>
                                <p className="font-semibold text-sm text-center">{image.title}</p>
                                <p className="text-xs text-white/70">{image.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-10">
                <a
                    href="/gallery"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                    View Full Gallery
                </a>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Image */}
                    <div
                        className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`w-full h-full bg-gradient-to-br ${gradients[lightboxIndex % gradients.length]} flex items-center justify-center`}>
                            <div className="text-center text-white">
                                <p className="text-3xl font-bold mb-2">
                                    {galleryImages[lightboxIndex]?.title}
                                </p>
                                <p className="text-xl opacity-80">
                                    {galleryImages[lightboxIndex]?.titleBn}
                                </p>
                                <span className="inline-block mt-4 px-4 py-1.5 bg-white/20 rounded-full text-sm">
                                    {galleryImages[lightboxIndex]?.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
                        {galleryImages.map((img, index) => (
                            <button
                                key={img.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(index);
                                    setSelectedImage(img.id);
                                }}
                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${index === lightboxIndex
                                        ? "ring-2 ring-white scale-110"
                                        : "opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]}`} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
