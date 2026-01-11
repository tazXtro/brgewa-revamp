
"use client";



import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/Marquee";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import DoctorsSection from "@/components/landing/DoctorsSection";
import NewsSection from "@/components/landing/NewsSection";
import GallerySection from "@/components/landing/GallerySection";
import CTASection from "@/components/landing/CTASection";


import ImageCarousel from "@/components/landing/ImageCarousel";
import PhotoScroll from "@/components/landing/PhotoScroll";
import VideoSection from "@/components/landing/VideoSection";
import MapSection from "@/components/landing/MapSection";
import { useLanguage } from "@/components/providers/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  const announcements = t.hero.announcements;

  const heroImages = [
    {
      id: "1",
      title: t.hero.welcome,
      titleBn: t.hero.welcome,
      category: "About Us",
    },
    {
      id: "2",
      title: t.landing.heroImages.freeHealthCamp,
      titleBn: t.landing.heroImages.freeHealthCamp,
      category: "Events",
    },
    {
      id: "3",
      title: t.landing.heroImages.scholarshipDistribution,
      titleBn: t.landing.heroImages.scholarshipDistribution,
      category: "Welfare",
    },
    {
      id: "4",
      title: t.landing.heroImages.annualMeeting,
      titleBn: t.landing.heroImages.annualMeeting,
      category: "Meetings",
    },
  ];

  const facilityPhotos = [
    { id: "1", title: t.landing.facilityPhotos.receptionArea, titleBn: t.landing.facilityPhotos.receptionArea, category: "Facility" },
    { id: "2", title: t.landing.facilityPhotos.consultationRoom, titleBn: t.landing.facilityPhotos.consultationRoom, category: "Facility" },
    { id: "3", title: t.landing.facilityPhotos.waitingLounge, titleBn: t.landing.facilityPhotos.waitingLounge, category: "Facility" },
    { id: "4", title: t.landing.facilityPhotos.laboratory, titleBn: t.landing.facilityPhotos.laboratory, category: "Facility" },
    { id: "5", title: t.landing.facilityPhotos.pharmacy, titleBn: t.landing.facilityPhotos.pharmacy, category: "Facility" },
    { id: "6", title: t.landing.facilityPhotos.medicalStore, titleBn: t.landing.facilityPhotos.medicalStore, category: "Facility" },
  ];

  const eventPhotos = [
    { id: "1", title: t.landing.eventPhotos.healthCamp, titleBn: t.landing.eventPhotos.healthCamp, category: "Health Camp" },
    { id: "2", title: t.landing.eventPhotos.scholarshipAward, titleBn: t.landing.eventPhotos.scholarshipAward, category: "Welfare" },
    { id: "3", title: t.landing.eventPhotos.committeeMeeting, titleBn: t.landing.eventPhotos.committeeMeeting, category: "Meeting" },
    { id: "4", title: t.landing.eventPhotos.culturalProgram, titleBn: t.landing.eventPhotos.culturalProgram, category: "Event" },
    { id: "5", title: t.landing.eventPhotos.bloodDonation, titleBn: t.landing.eventPhotos.bloodDonation, category: "Health Camp" },
    { id: "6", title: t.landing.eventPhotos.eyeCamp, titleBn: t.landing.eventPhotos.eyeCamp, category: "Health Camp" },
    { id: "7", title: t.landing.eventPhotos.eidReunion, titleBn: t.landing.eventPhotos.eidReunion, category: "Event" },
    { id: "8", title: t.landing.eventPhotos.independenceDay, titleBn: t.landing.eventPhotos.independenceDay, category: "Event" },
  ];

  return (
    <main className="min-h-screen">



      {/* Marquee Announcement */}
      <Marquee items={announcements} speed={15} />

      <HeroSection />

      {/* Featured Image Carousel */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <ImageCarousel
            images={heroImages}
            title={t.landing.latestHighlights}
            titleBn="" // Not needed if we handle title dynamically
          />
        </div>
      </section>

      <ServicesSection />

      <VideoSection />

      {/* Facility Photos Scroll */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <PhotoScroll
            photos={facilityPhotos}
            title={t.facilities.title}
            titleBn=""
          />
        </div>
      </section>

      <StatsSection />
      <DoctorsSection />

      {/* Event Photos Scroll */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <PhotoScroll
            photos={eventPhotos}
            title={t.landing.eventsAndPrograms}
            titleBn=""
          />
        </div>
      </section>

      <NewsSection />
      <GallerySection />
      <CTASection />
      <MapSection />


    </main>
  );
}
