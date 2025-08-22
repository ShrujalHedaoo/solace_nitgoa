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
      
      {/* Join the Club Section */}
      <div className="px-6 py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-8 backdrop-blur-sm border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Join SOLACE</h2>
              <p className="text-muted-foreground text-sm mb-6">Become part of our creative community and unleash your artistic potential</p>
            </div>
            <button 
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Join the Club
            </button>
          </div>
        </div>
      </div>
      
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
