import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "AI/ML Engineering Intern",
      duration: "3-6 months",
      location: "Remote",
      type: "Full-time",
      level: "Intermediate",
      description:
        "Work on real-world machine learning projects including computer vision, NLP, and predictive analytics. Build and deploy ML models using PyTorch and TensorFlow.",
      requirements: [
        "Strong Python programming skills",
        "Understanding of ML fundamentals",
        "Familiarity with PyTorch or TensorFlow",
        "Interest in AI research and applications",
      ],
      learnings: [
        "Production ML model deployment",
        "End-to-end ML pipeline development",
        "Model optimization and tuning",
        "Working with real client datasets",
      ],
    },
    {
      title: "Data Science Intern",
      duration: "3-6 months",
      location: "Remote",
      type: "Full-time",
      level: "Beginner to Intermediate",
      description:
        "Analyze complex datasets, build predictive models, and create data visualizations. Work with pandas, scikit-learn, and modern data science tools.",
      requirements: [
        "Python programming knowledge",
        "Statistics and probability basics",
        "SQL knowledge is a plus",
        "Strong analytical thinking",
      ],
      learnings: [
        "Data wrangling and preprocessing",
        "Exploratory data analysis (EDA)",
        "Statistical modeling and hypothesis testing",
        "Data visualization best practices",
      ],
    },
    {
      title: "Full-Stack Development Intern",
      duration: "3-6 months",
      location: "Remote",
      type: "Full-time",
      level: "Intermediate",
      description:
        "Build modern web applications using React, Node.js, and cloud technologies. Work on both frontend and backend development for production applications.",
      requirements: [
        "JavaScript/TypeScript proficiency",
        "React or similar framework experience",
        "Understanding of REST APIs",
        "Git version control knowledge",
      ],
      learnings: [
        "Modern frontend development with React",
        "Backend API development with Node.js",
        "Database design and management",
        "Cloud deployment (AWS/GCP)",
      ],
    },
    {
      title: "NLP Research Intern",
      duration: "3-6 months",
      location: "Remote",
      type: "Full-time",
      level: "Intermediate to Advanced",
      description:
        "Conduct research and development in natural language processing. Work with transformer models, text generation, sentiment analysis, and language understanding tasks.",
      requirements: [
        "Strong Python skills",
        "Understanding of NLP concepts",
        "Experience with Hugging Face or similar",
        "Research mindset and curiosity",
      ],
      learnings: [
        "Advanced NLP techniques",
        "Fine-tuning transformer models",
        "Prompt engineering and LLMs",
        "Publishing research findings",
      ],
    },
    {
      title: "Computer Vision Intern",
      duration: "3-6 months",
      location: "Remote",
      type: "Full-time",
      level: "Intermediate",
      description:
        "Develop computer vision applications including object detection, image segmentation, and image generation. Work with state-of-the-art CV models.",
      requirements: [
        "Python and OpenCV knowledge",
        "Understanding of CNNs",
        "PyTorch or TensorFlow experience",
        "Linear algebra basics",
      ],
      learnings: [
        "Advanced CV architectures",
        "Object detection and tracking",
        "Image preprocessing and augmentation",
        "Real-time CV applications",
      ],
    },
    // {
    //   title: "IoT & Embedded Systems Intern",
    //   duration: "3-6 months",
    //   location: "Remote/Hybrid",
    //   type: "Full-time",
    //   level: "Beginner to Intermediate",
    //   description: "Build IoT solutions using ESP32, Arduino, and Raspberry Pi. Develop sensor integrations, data collection systems, and cloud-connected devices.",
    //   requirements: [
    //     "C/C++ or Python programming",
    //     "Basic electronics knowledge",
    //     "Interest in hardware and IoT",
    //     "Problem-solving skills",
    //   ],
    //   learnings: [
    //     "Microcontroller programming",
    //     "Sensor integration and protocols",
    //     "IoT cloud platforms",
    //     "Real-time data streaming",
    //   ],
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-block">
                <Badge className="mb-4 text-base px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  Now Hiring
                </Badge>
              </div>
              <h1 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                Join Our Lab
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world AI and software development internships. Learn from
                experienced engineers and build impactful projects.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 animate-fade-in">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    Learn by Doing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Work on real projects, not tutorials
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">🧑‍🏫</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    Expert Mentorship
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    1-on-1 guidance from industry pros
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    Certificate
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Completion certificate for your resume
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">
                    Portfolio Projects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Build impressive projects to showcase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internships Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the area that excites you most and start your journey
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 animate-fade-in">
                {internships.map((internship, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-hover transition-smooth"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-2xl font-heading">
                          {internship.title}
                        </CardTitle>
                        <Badge variant="secondary">{internship.level}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{internship.type}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {internship.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {internship.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          What You'll Learn:
                        </h4>
                        <ul className="space-y-1">
                          {internship.learnings.map((learning, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-accent mt-1">✓</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button asChild className="w-full">
                        <a href="mailto:careers@leafclutch.dev?subject=Application%20for%20Internship%20Position">
                          Apply Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Application Process
                </h2>
                <p className="text-lg text-muted-foreground">
                  Simple and straightforward — we value your time
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Apply",
                    description:
                      "Send your resume and a brief introduction about your interests and goals.",
                  },
                  {
                    step: "02",
                    title: "Interview",
                    description:
                      "Casual conversation to understand your background and align expectations.",
                  },
                  {
                    step: "03",
                    title: "Start Learning",
                    description:
                      "Begin your internship with onboarding and your first project assignment.",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold">
                Ready to start your AI journey?
              </h2>
              <p className="text-lg opacity-90">
                Don't see a perfect match? We're always open to passionate
                learners. Reach out and let's talk about custom opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <a href="mailto:hello@leafclutch.dev?subject=Internship Inquiry">
                    Apply Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-secondary-foreground/20 hover:bg-secondary-foreground/10"
                >
                  <Link to="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Internships;
