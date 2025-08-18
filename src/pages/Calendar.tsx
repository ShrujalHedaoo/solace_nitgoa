import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Calendar as CalendarIcon, Star } from "lucide-react";

const Calendar: React.FC = () => {
  const scheduleData = [
    {
      month: "August",
      color: "from-rose-400 to-pink-600",
      events: [
        { date: "1st", title: "edition 01", type: "regular" },
        { date: "27th", title: "edition 02", type: "regular" }
      ]
    },
    {
      month: "September", 
      color: "from-amber-400 to-orange-600",
      events: [
        { date: "1st", title: "fun week", type: "special" },
        { date: "10th", title: "edition 3", type: "regular" }
      ]
    },
    {
      month: "October",
      color: "from-purple-400 to-violet-600",
      events: [
        { date: "8th", title: "edition 04", type: "regular" },
        { date: "22nd", title: "edition 05", type: "regular" }
      ]
    },
    {
      month: "November",
      color: "from-blue-400 to-indigo-600",
      events: [
        { date: "9th", title: "edition 06", type: "regular" },
        { date: "19th", title: "edition 07", type: "regular" }
      ]
    },
    {
      month: "December",
      color: "from-emerald-400 to-teal-600",
      events: [
        { date: "", title: "see y'all next sem!", type: "farewell" }
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
      <main className="bg-gradient-to-br from-background via-muted/20 to-background min-h-screen relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: "4s"}}></div>
        </div>

        <section className="container mx-auto px-6 py-10 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                SOLACE Calendar
              </h1>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our upcoming literary adventures and creative gatherings
            </p>
          </div>
          
          {/* Aesthetic Calendar Schedule */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-6xl">
              <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-none shadow-2xl animate-scale-in">
                <CardContent className="p-0 relative">
                  {/* Animated Background Patterns */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_hsl(var(--primary))_0%,_transparent_50%)]"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,_hsl(var(--accent))_0%,_transparent_50%)]"></div>
                  </div>
                  
                  {/* Floating Decorative Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <Star className="absolute top-8 left-8 w-6 h-6 text-yellow-400/40 animate-pulse" />
                    <Star className="absolute top-16 right-16 w-4 h-4 text-pink-400/40 animate-pulse" style={{animationDelay: "1s"}} />
                    <Star className="absolute bottom-12 left-20 w-5 h-5 text-blue-400/40 animate-pulse" style={{animationDelay: "2s"}} />
                    <CalendarIcon className="absolute bottom-8 right-8 w-8 h-8 text-purple-400/20 animate-pulse" style={{animationDelay: "3s"}} />
                  </div>

                  <div className="relative z-10 p-8 lg:p-12">
                    {/* Elegant Header */}
                    <div className="text-center mb-12 animate-fade-in">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gold-400/20 to-amber-600/20 backdrop-blur-sm mb-6 border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xl">S</span>
                        </div>
                      </div>
                      <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent mb-4 font-cinzel">
                        Odd Sem-'25
                      </h2>
                      <div className="text-3xl font-semibold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
                        SCHEDULE
                      </div>
                      <div className="flex justify-center">
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    {/* Beautiful Schedule Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {scheduleData.map((monthData, index) => (
                        <div 
                          key={index} 
                          className="group animate-fade-in hover-scale"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                            {/* Month Header with Gradient */}
                            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl bg-gradient-to-r ${monthData.color} shadow-lg`}>
                              <h3 className="text-lg font-bold text-white text-center whitespace-nowrap">
                                {monthData.month}
                              </h3>
                            </div>
                            
                            {/* Events List */}
                            <div className="pt-8 space-y-4">
                              {monthData.events.map((event, eventIndex) => (
                                <div 
                                  key={eventIndex} 
                                  className="group/event p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                                >
                                  <div className="flex items-center gap-3">
                                    {event.type === "special" && <Sparkles className="w-4 h-4 text-yellow-400" />}
                                    {event.type === "regular" && <CalendarIcon className="w-4 h-4 text-blue-400" />}
                                    {event.type === "farewell" && <Star className="w-4 h-4 text-pink-400" />}
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        {event.date && (
                                          <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                            {event.date}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-white/90 text-sm font-medium">
                                        {event.title}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Footer Info */}
          <div className="text-center animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground font-medium">
                Where words come alive and creativity takes flight ✨
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Calendar;