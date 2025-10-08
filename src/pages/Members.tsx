import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import "./members.css";

interface Member {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const members: Member[] = [
  {
    name: "Gaurang Raikar",
    role: "Co-President",
    image: "https://i.ibb.co/9kFCBbT4/gaurang.jpg",
    quote: "The college culture needed a miracle, and luckily I was available",
  },
  {
    name: "Aryan Sasane",
    role: "Co-President",
    image: "https://i.ibb.co/3yShR8cw/aryan.jpg",
    quote:
      "College's a lot like sleeping... Let me take a nap and I'll tell you all about it 😴",
  },
  {
    name: "Ram Mishra",
    role: "Secretary",
    image: "https://i.ibb.co/0jkd4JKy/ram.jpg",
    quote: "I'm way cuter in person",
  },
  {
    name: "Kartikey Tiwari",
    role: "Treasurer",
    image: "https://i.ibb.co/Cp7Nphry/kartikey.jpg",
    quote: "People told me to aim for the stars—So I got a water gun🔫",
  },
  {
    name: "Aryan Kumar",
    role: "Marketing Head",
    image: "https://i.ibb.co/0RDwRCrZ/aryan-kumar.jpg",
    quote: "Slow is Smooth, Smooth is Fast",
  },
  {
    name: "Shrujal",
    role: "PR and Out-Reach Head",
    image: "https://i.ibb.co/QFRbPTLw/shru.jpg",
    quote: "YOLO",
  },
  {
    name: "Kathan",
    role: "PR and Out-Reach Head",
    image: "https://i.ibb.co/27T7V0d1/kathan.jpg",
    quote: "built different. probably wrong.",
  },
  {
    name: "Trushna",
    role: "Chief Editor",
    image: "https://i.ibb.co/pBwmL5HS/tushy.jpg",
    quote: "If I'm not editing, I'm napping",
  },
  {
    name: "Rutuja",
    role: "Social Media Head",
    image: "https://i.ibb.co/Xr8nd2vS/rutuja.jpg",
    quote: "my life my rules",
  },
  {
    name: "Sameer",
    role: "Editorial Team",
    image: "https://i.ibb.co/YBYwr65p/sameer.jpg",
    quote: "I don't make mistakes - I create unexpected plotlines",
  },
  {
    name: "Soha",
    role: "Social Media Team",
    image: "https://i.ibb.co/LX9QrdFz/soha.jpg",
    quote: "no comments...",
  },
  {
    name: "Manasi",
    role: "Social Media Team",
    image: "https://i.ibb.co/HfBffkCJ/manasi.jpg",
    quote: "I genuinely don't know what's going on, but I'm vibing.",
  },
  {
    name: "Sanchita Mahale",
    role: "Social Media Team",
    image: "https://i.ibb.co/8gRx2pRZ/sanchita.jpg",
    quote: "Like wildflowers, I bloom in my own time🌸",
  },
  {
    name: "Parth",
    role: "Writer",
    image: "https://i.ibb.co/xSyp4XxD/parth.jpg",
    quote:
      "College taught me that 'due tomorrow' means 'do tomorrow', it's simple math, really",
  },
];

const Members: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SOLACE Members | Meet the Crew</title>
        <meta
          name="description"
          content="Meet the SOLACE crew: presidents, heads, and team members. Flip each card to see a fun quote."
        />
        <link rel="canonical" href="/members" />
      </Helmet>
      <Header />
      <main className="bg-background">
        <section className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-playfair font-bold text-foreground text-center mb-8">
            SOLACE Members — Meet the Crew
          </h1>

          <div className="wrapper" role="list">
            <div className="cols">
              {members.map((m) => (
                <div className="col" key={m.name} role="listitem">
                  <div className="container" aria-label={`${m.name}, ${m.role}`}>
                    <div
                      className="front"
                      style={{ backgroundImage: `url(${m.image})` }}
                    >
                      <div className="inner">
                        <p>{m.name}</p>
                        <span>{m.role}</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <p>"{m.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Members;
