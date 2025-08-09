import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import NewsCard from "@/components/NewsCard";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import hamletPerformance from "@/assets/hamlet-performance.jpg";

import shakespeareFestival from "@/assets/shakespeare-festival.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Upcoming Events Section */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-foreground mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-2 gap-4">
          <EventCard
            title="Janmashtami Skit"
            date="August 15"
            image="/lovable-uploads/4c34165e-9222-47d1-8c7b-bc940e7c7798.png"
            location="Sal Seminar Hall"
            time="7:00 PM"
          />
          <EventCard
            title="Orientation Nukkad Natak"
            date="August 26"
            image="/lovable-uploads/43f2c450-8b6d-4710-ae3d-0c886dc5772c.png"
            location="Mandovi Seminar Hall"
            time="6:30 PM"
          />
        </div>
      </div>

      {/* Latest News Section */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-foreground mb-4">Latest News</h2>
        <div className="space-y-3">
          <NewsCard
            title="Janmashtami Skit Auditions Open"
            description="Join us for our theatre production auditions. All students welcome!"
            date="August 8, 2025"
            image={shakespeareFestival}
          />
          <NewsCard
            title="Second-Hand Sale Listings Now Open"
            description="Got books, clothes, gadgets, or college stuff you no longer need? List them on Solace and find buyers right from campus!"
            date="August 12, 2025"
            image="/lovable-uploads/61a935c4-6225-427c-8d2c-6852b1252562.png"
          />
        </div>
      </div>

      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
