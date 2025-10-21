import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Code, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import heroBg from "@/assets/hero-bg.jpg";
import logoFull from "@/assets/logo-full.jpg";

const Index = () => {
  const expertise = [
    {
      icon: Brain,
      title: "AI & Data Science",
      description:
        "Custom machine learning models, intelligent automation, and data-driven insights.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description:
        "Full-stack solutions from rapid prototypes to scalable production applications.",
    },
    {
      icon: Settings,
      title: "Automation & Analytics",
      description:
        "Smart systems that optimize workflows and provide actionable intelligence.",
    },
  ];

  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "Intelligent resume parsing and matching system using NLP to streamline recruitment processes.",
      technologies: ["Python", "NLP", "Machine Learning"],
    },
    {
      title: "Image Captioning with BLIP-2",
      description:
        "Advanced vision-language model for generating accurate and context-aware image descriptions.",
      technologies: ["PyTorch", "GPT-4V", "Computer Vision"],
    },
    {
      title: "IoT Energy Monitor",
      description:
        "Real-time energy consumption tracking and optimization using smart sensors.",
      technologies: ["ESP32", "Python", "IoT"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        /> */}
        <div className="absolute inset-0 gradient-hero" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <img
                  src={logoFull}
                  alt="LeafClutch.dev - A Cup Full of Tech"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We brew intelligent solutions in AI, data science, and software
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <Link to="/contact">Contect Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build products that combine data, creativity, and intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {expertise.map((item, index) => (
              <ServiceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovation in action — discover what we've built
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold">
            Join the next wave of tech creators
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Whether you're looking for innovative solutions or want to be part
            of our journey, we'd love to connect.
          </p>
          <Button asChild size="lg" variant="default" className="text-lg px-8">
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
