import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Calendar: React.FC = () => {
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
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.canva.com/design/DAGvgiBFp1c/T-13HmNP8talVjFfbT5i2Q/view?embed"
                width="100%"
                height="600"
                className="border border-gray-300 rounded-lg shadow-lg"
                title="SOLACE Calendar"
                allowFullScreen
              />
            </div>
          </div>
          
          <div className="text-center mt-6">
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