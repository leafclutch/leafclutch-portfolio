import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                About LeafClutch.dev
              </h1>
              <p className="text-xl text-muted-foreground">
                Brewing innovation, one line of code at a time
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LeafClutch.dev began with a simple belief — technology should
                  be brewed like a good cup of coffee: with passion, precision,
                  and purpose.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Born from a desire to make AI and data science accessible to
                  everyone, we've built a company that combines cutting-edge
                  technology with a human touch. Just as every cup of coffee
                  tells a story, every project we undertake represents our
                  commitment to innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize AI and data science, making intelligent
                  solutions accessible to everyone. We believe that powerful
                  technology shouldn't be locked behind complex barriers — it
                  should be as approachable and energizing as your morning
                  coffee.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're building a future where businesses of all sizes can
                  harness the power of artificial intelligence, where students
                  can learn from real-world projects, and where innovation flows
                  as freely as conversation over a cup of coffee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Our Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  Meet the minds behind LeafClutch.dev
                </p>
              </div>

              {/* Founder Card */}
              <div className="flex justify-center">
                <Card className="max-w-md shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        Siddhartha Pathak
                      </h3>
                      <p className="text-accent font-medium">
                        Founder & Lead Engineer
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate about AI, data science, and brewing innovative
                      solutions. Siddhartha combines deep technical expertise
                      with a vision to make technology accessible and impactful.
                    </p>
                    <a
                      href="https://linkedin.com/in/siddharthapathak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-smooth"
                    >
                      <Linkedin size={20} />
                      Connect on LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Growing Team Section */}
              <div className="text-center space-y-4 pt-8">
                <p className="text-lg text-muted-foreground">
                  Our team is growing! We're always looking for talented
                  individuals who share our passion for technology and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold text-center">
                Our Values
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3 text-center">
                  <div className="text-4xl">🎯</div>
                  <h3 className="text-xl font-heading font-semibold">
                    Purpose-Driven
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Every project has meaning and impact
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="text-4xl">🚀</div>
                  <h3 className="text-xl font-heading font-semibold">
                    Innovation First
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Pushing boundaries with cutting-edge tech
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="text-4xl">🤝</div>
                  <h3 className="text-xl font-heading font-semibold">
                    Collaboration
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Building together, growing together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
