import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About SOLACE - Society of Literature, Arts, Culture, and Expression</title>
        <meta name="description" content="Learn about SOLACE, the official student-led club dedicated to nurturing creativity and cultural awareness through Solace Biweekly newspaper." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-playfair font-bold text-foreground mb-6">
                About <span className="text-solace-primary">SOLACE</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-solace-primary to-solace-accent mx-auto rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-semibold text-card-foreground mb-4">
                    Society of Literature, Arts, Culture, and Expression
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Solace is an official student-led club known as the Society of Literature, Arts, Culture, and Expression. 
                    Dedicated to nurturing creativity and cultural awareness within the college community, the club has launched 
                    <span className="font-semibold text-solace-primary"> Solace Biweekly</span>—a newspaper published once every two weeks.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-semibold text-card-foreground mb-4">
                    Our Publication
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    This publication serves not only as a platform for literary and dramatic works but also features 
                    a wide range of engaging content, including:
                  </p>
                  <ul className="list-none space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-solace-primary rounded-full mr-4"></div>
                      Interviews with both students and professors
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-solace-accent rounded-full mr-4"></div>
                      Highlights from recent campus events
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-solace-primary rounded-full mr-4"></div>
                      Thought-provoking quizzes and fun facts
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-solace-accent rounded-full mr-4"></div>
                      Restaurant-style reviews of popular eateries around the college
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-semibold text-card-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Through this diverse content, Solace Biweekly aims to connect, inform, and inspire members 
                    of the campus community.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-solace-primary">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    We look forward to your support and feedback as we grow this initiative. Your involvement 
                    will be instrumental in encouraging a vibrant and inclusive atmosphere of creative expression 
                    within our college.
                  </p>
                  <div className="text-right">
                    <p className="font-playfair font-semibold text-card-foreground text-lg">
                      Warm regards,
                    </p>
                    <p className="font-playfair text-solace-primary font-medium">
                      On behalf of the SOLACE Club
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Society of Literature, Arts, Culture, and Expression
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;