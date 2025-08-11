import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Advertisements: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SOLACE Advertisements | Partner with Us</title>
        <meta
          name="description"
          content="Advertise with SOLACE NIT Goa. Reach the college community through our platform and events. Contact us for advertising opportunities."
        />
        <link rel="canonical" href="/advertisements" />
      </Helmet>
      <Header />
      <main className="bg-background min-h-screen">
        <section className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-foreground text-center mb-8">
            Advertise with SOLACE
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl">
              <img
                src="/lovable-uploads/b2d0799b-3e61-43a4-8e69-7a081e0ab91e.png"
                alt="SOLACE Advertisement Packages - Featuring NIT Goa's biweekly newspaper, in-house design services, and campus reach"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-lg text-foreground">
              Partner with NIT Goa's premier Literature & Drama Society
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach our vibrant campus community through our biweekly newspaper, 
              events, and digital platforms. We offer comprehensive advertising 
              packages tailored to your needs.
            </p>
            
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Get in Touch</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:solacenitgoa@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/917984884347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Advertisements;