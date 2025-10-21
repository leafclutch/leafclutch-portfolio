import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "Advanced NLP-powered system that intelligently parses resumes, extracts key information, and matches candidates with job requirements using semantic analysis and machine learning.",
      technologies: ["Python", "NLP", "spaCy", "Machine Learning", "FastAPI"],
    },
    {
      title: "Image Captioning with BLIP-2",
      description:
        "State-of-the-art vision-language model integration that generates accurate, context-aware image descriptions. Leverages BLIP-2 architecture for superior understanding of visual content.",
      technologies: [
        "PyTorch",
        "GPT-4V",
        "Computer Vision",
        "Transformers",
        "Python",
      ],
    },
    {
      title: "IoT-Based Energy Monitor",
      description:
        "Real-time energy consumption tracking system using ESP32 microcontrollers and cloud analytics. Provides actionable insights for optimizing energy usage and reducing costs.",
      technologies: ["ESP32", "Python", "IoT", "MQTT", "Time Series DB"],
    },
    {
      title: "FairAI: Bias Detection Toolkit",
      description:
        "Research-driven toolkit for detecting and mitigating bias in machine learning models. Helps ensure fairness and ethical AI deployment across various domains.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Research",
        "Ethics",
        "Statistics",
      ],
    },
    {
      title: "Smart Document Classifier",
      description:
        "Automated document classification system using deep learning to categorize, tag, and organize large document repositories with high accuracy.",
      technologies: [
        "TensorFlow",
        "NLP",
        "Deep Learning",
        "Document AI",
        "Flask",
      ],
    },
    {
      title: "Predictive Maintenance System",
      description:
        "ML-powered predictive analytics for industrial equipment. Forecasts maintenance needs and prevents costly downtime through pattern recognition and anomaly detection.",
      technologies: ["Python", "Time Series", "ML", "Analytics", "Docker"],
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
                Innovation in Action
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of AI-powered solutions and technology
                innovations
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center animate-fade-in">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">15+</div>
                  <div className="text-lg text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">10+</div>
                  <div className="text-lg text-muted-foreground">
                    Technologies Mastered
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">100%</div>
                  <div className="text-lg text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Technologies We Use
                </h2>
                <p className="text-lg text-muted-foreground">
                  Leveraging cutting-edge tools to build robust solutions
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "React",
                  "Node.js",
                  "Docker",
                  "AWS",
                  "MongoDB",
                  "PostgreSQL",
                  "FastAPI",
                  "TypeScript",
                  "Machine Learning",
                  "Deep Learning",
                  "NLP",
                  "Computer Vision",
                  "Nextcloud",
                  "n8n",
                  "Agentic AI",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-card border border-border rounded-lg shadow-card hover:shadow-hover hover:scale-105 transition-smooth"
                  >
                    <span className="font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
