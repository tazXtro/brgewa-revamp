import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/Marquee";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import DoctorsSection from "@/components/landing/DoctorsSection";
import NewsSection from "@/components/landing/NewsSection";
import GallerySection from "@/components/landing/GallerySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ImageCarousel from "@/components/landing/ImageCarousel";
import PhotoScroll from "@/components/landing/PhotoScroll";

const announcements = [
  "📢 বিনামূল্যে স্বাস্থ্য ক্যাম্প - ১৫ জানুয়ারি ২০২৬",
  "🎓 ২০২৬ সালের শিক্ষাবৃত্তির আবেদন গ্রহণ চলছে",
  "🏥 নতুন হৃদরোগ বিভাগ চালু হয়েছে",
  "📞 হেল্পলাইন: ২২২২৪০১৮৯, ২২২২৪০১৯০",
  "🗓️ বার্ষিক সাধারণ সভা - ২০ জানুয়ারি ২০২৬",
];

const heroImages = [
  {
    id: "1",
    title: "Welcome to BRGEWA Hospital",
    titleBn: "বিআরজিইডাব্লিউএ হাসপাতালে স্বাগতম",
    category: "About Us",
  },
  {
    id: "2",
    title: "Free Health Camp 2025",
    titleBn: "বিনামূল্যে স্বাস্থ্য ক্যাম্প ২০২৫",
    category: "Events",
  },
  {
    id: "3",
    title: "Scholarship Distribution Ceremony",
    titleBn: "শিক্ষাবৃত্তি বিতরণ অনুষ্ঠান",
    category: "Welfare",
  },
  {
    id: "4",
    title: "Annual General Meeting 2025",
    titleBn: "বার্ষিক সাধারণ সভা ২০২৫",
    category: "Meetings",
  },
];

const facilityPhotos = [
  { id: "1", title: "Reception Area", titleBn: "রিসেপশন এরিয়া", category: "Facility" },
  { id: "2", title: "Consultation Room", titleBn: "পরামর্শ কক্ষ", category: "Facility" },
  { id: "3", title: "Waiting Lounge", titleBn: "অপেক্ষা কক্ষ", category: "Facility" },
  { id: "4", title: "Laboratory", titleBn: "ল্যাবরেটরি", category: "Facility" },
  { id: "5", title: "Pharmacy", titleBn: "ফার্মেসি", category: "Facility" },
  { id: "6", title: "Medical Store", titleBn: "মেডিকেল স্টোর", category: "Facility" },
];

const eventPhotos = [
  { id: "1", title: "Health Camp 2025", titleBn: "স্বাস্থ্য ক্যাম্প ২০২৫", category: "Health Camp" },
  { id: "2", title: "Scholarship Award", titleBn: "শিক্ষাবৃত্তি প্রদান", category: "Welfare" },
  { id: "3", title: "Committee Meeting", titleBn: "কমিটি সভা", category: "Meeting" },
  { id: "4", title: "Cultural Program", titleBn: "সাংস্কৃতিক অনুষ্ঠান", category: "Event" },
  { id: "5", title: "Blood Donation", titleBn: "রক্তদান কর্মসূচি", category: "Health Camp" },
  { id: "6", title: "Eye Camp", titleBn: "চক্ষু ক্যাম্প", category: "Health Camp" },
  { id: "7", title: "Eid Reunion", titleBn: "ঈদ মিলনমেলা", category: "Event" },
  { id: "8", title: "Independence Day", titleBn: "স্বাধীনতা দিবস", category: "Event" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Marquee Announcement */}
      <Marquee items={announcements} speed={15} />

      <HeroSection />

      {/* Featured Image Carousel */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <ImageCarousel
            images={heroImages}
            title="Latest Highlights"
            titleBn="সর্বশেষ হাইলাইটস"
          />
        </div>
      </section>

      <ServicesSection />

      {/* Facility Photos Scroll */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <PhotoScroll
            photos={facilityPhotos}
            title="Our Facilities"
            titleBn="আমাদের সুবিধাসমূহ"
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
            title="Events & Programs"
            titleBn="অনুষ্ঠান ও কার্যক্রম"
          />
        </div>
      </section>

      <NewsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
