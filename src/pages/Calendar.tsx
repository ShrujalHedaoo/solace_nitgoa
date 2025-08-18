import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const Calendar: React.FC = () => {
  const scheduleData = [
    {
      month: "August",
      events: [
        { date: "1st", title: "edition 01" },
        { date: "27th", title: "edition 02" }
      ]
    },
    {
      month: "September", 
      events: [
        { date: "1st", title: "fun week" },
        { date: "10th", title: "edition 3" }
      ]
    },
    {
      month: "October",
      events: [
        { date: "8th", title: "edition 04" },
        { date: "22nd", title: "edition 05" }
      ]
    },
    {
      month: "November",
      events: [
        { date: "9th", title: "edition 06" },
        { date: "19th", title: "edition 07" }
      ]
    },
    {
      month: "December",
      events: [
        { date: "", title: "see y'all next sem!" }
      ]
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
          
          {/* Enhanced Calendar Schedule */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-5xl">
              <Card className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 border-none shadow-2xl">
                <CardContent className="p-8 relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/5 rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-6 h-6 bg-yellow-400/30 rounded-full"></div>
                  <div className="absolute top-1/4 right-16 w-4 h-4 bg-yellow-400/20 rounded-full"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">Odd Sem-'25</h2>
                    <div className="text-2xl font-semibold text-yellow-200">SCHEDULE</div>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
                  </div>

                  {/* Schedule Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {scheduleData.map((monthData, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
                          <h3 className="text-lg font-bold text-white mb-3 bg-purple-600/50 rounded-lg py-2 px-3">
                            {monthData.month}
                          </h3>
                          <div className="space-y-2">
                            {monthData.events.map((event, eventIndex) => (
                              <div key={eventIndex} className="text-white/90">
                                <span className="font-semibold text-yellow-200">
                                  {event.date && `${event.date} `}
                                </span>
                                <span className="text-sm">
                                  {event.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Vines */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-4 left-1/4 w-32 h-2 bg-green-400/20 rounded-full transform -rotate-12"></div>
                    <div className="absolute bottom-8 right-1/3 w-24 h-2 bg-green-400/15 rounded-full transform rotate-45"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Stay updated with all our upcoming events and activities
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span>📅 Regular Editions</span>
              <span>🎉 Special Events</span>
              <span>📚 Literary Activities</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Calendar;