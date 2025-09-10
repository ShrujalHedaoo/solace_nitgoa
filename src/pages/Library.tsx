import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const editions = [
  {
    title: "Edition 101",
    url: "https://flipbookpdf.net/web/site/39c2ef3d2dc693c6f3cd77c571dca048f952d891202508.pdf.html",
  },
  {
    title: "Edition 102",
    url: "https://flipbookpdf.net/web/site/135276758f1f24c138bfb8bed5aa41462fb4818e202508.pdf.html",
  },
  {
    title: "Edition 103",
    url: "https://flipbookpdf.net/web/site/f28c0f784baec137e948b1f108d27b2ae8d9d9d7202508.pdf.html",
  },
  {
    title: "Edition 104",
    url: "https://flipbookpdf.net/web/site/116afa374e858371959613773048b695e8ffca51202508.pdf.html",
  },
  {
    title: "Edition 201",
    url: "https://www.flipbookpdf.net/web/site/1e75e4d0c20dc875de243d358d8d82ff6e93058a202508.pdf.html",
  },
  {
    title: "Edition 202",
    url: "https://flipbookpdf.net/web/site/863c1230d26aa17467814756e98852473bffbb88202508.pdf.html",
  },
  {
    title: "Edition 203 - Freshers edition",
    url: "https://flipbookpdf.net/web/site/2549e940afa54aad4202d59f637b4a5cc9f13f02202508.pdf.html",
  },
  {
    title: "Edition 204",
    url: "https://flipbookpdf.net/web/site/a633966a6dc18c5d69fb98075b73c28fa0dbb681202509.pdf.html",
  },
];

const Library: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SOLACE Library | Flipbook Editions 101–203</title>
        <meta
          name="description"
          content="Browse the SOLACE Library and open flipbook editions 101 to 203, including the Freshers edition."
        />
        <link rel="canonical" href="/library" />
      </Helmet>
      <Header />
      <main className="bg-background">
        <section className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">SOLACE Library</h1>
          <p className="text-muted-foreground mb-8">Open recent SOLACE BIWEEKLY editions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editions.map((e) => (
              <a
                key={e.title}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${e.title} flipbook`}
              >
                <Card className="h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{e.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full">Open Flipbook</Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Library;
