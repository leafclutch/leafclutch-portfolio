import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Code, Zap, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Data Science Solutions",
      description: "Custom machine learning models, neural networks, and data pipelines tailored to your business needs. From predictive analytics to natural language processing, we build intelligent systems that learn and adapt.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Full-stack development from concept to deployment. We create responsive, scalable applications using modern frameworks and best practices. Whether it's a prototype or production-ready solution, we've got you covered.",
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Intelligent automation systems that streamline workflows and boost productivity. From RPA to custom integrations, we help businesses save time and reduce manual effort with smart, efficient solutions.",
    },
    {
      icon: GraduationCap,
      title: "Internships & Training",
      description: "Real-world learning experiences with live AI projects. Our internship program provides hands-on training in machine learning, data science, and software development, preparing the next generation of tech innovators.",
    },
    {
      icon: Search,
      title: "Research & Consulting",
      description: "Expert guidance for your AI and technology initiatives. We provide strategic consulting, feasibility studies, and research support to help you make informed decisions and stay ahead of the curve.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                Solutions We Brew
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive technology services designed to power your innovation
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Our Process
                </h2>
                <p className="text-lg text-muted-foreground">
                  From concept to deployment, we follow a proven methodology
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
                  { step: "02", title: "Design", desc: "Architecting the perfect solution" },
                  { step: "03", title: "Development", desc: "Building with precision and care" },
                  { step: "04", title: "Delivery", desc: "Deploying and supporting your success" },
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                Ready to build something amazing?
              </h2>
              <p className="text-lg opacity-90">
                Let's discuss how our services can help bring your vision to life.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
