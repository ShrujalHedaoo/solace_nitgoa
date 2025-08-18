import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import EventCard from "@/components/EventCard";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      title: "Poetry Reading Night",
      date: "Aug 13, 2025",
      time: "7:00 PM",
      location: "Main Auditorium",
      image: "/lovable-uploads/ec3da0e8-30db-4ef2-beaa-a07eca8e6db0.png"
    },
    {
      title: "Shakespeare Workshop",
      date: "Aug 20, 2025", 
      time: "3:00 PM",
      location: "Drama Room",
      image: "/src/assets/shakespeare-festival.jpg"
    },
    {
      title: "Literary Discussion",
      date: "Aug 27, 2025",
      time: "5:00 PM", 
      location: "Library Hall",
      image: "/src/assets/poetry-night.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>SOLACE Calendar | Events & Activities</title>
        <meta
          name="description"
          content="View upcoming SOLACE events, activities, and important dates. Stay updated with the Literature & Drama Society calendar."
        />
        <link rel="canonical" href="/calendar" />
      </Helmet>
      <Header />
      <main className="bg-background min-h-screen">
        <section className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-foreground text-center mb-8">
            SOLACE Calendar
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Interactive Calendar */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Select a Date</h2>
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="mx-auto"
              />
            </div>

            {/* Upcoming Events */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    image={event.image}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Stay updated with all our upcoming events and activities
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Calendar;