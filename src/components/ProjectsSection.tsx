import { ExternalLink, Github, Calculator, Shield, ShoppingCart, Brain } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Math Quiz Game",
      description: "Interactive quiz application with scoring system and multiple difficulty levels. Built with vanilla JavaScript for smooth user experience.",
      icon: Brain,
      color: "bg-accent-coral/10 text-accent-coral",
      github: "https://github.com/krishnakumar-m/math-quiz",
      demo: "https://krishnakumar-m.github.io/math-quiz"
    },
    {
      title: "Cyber Safety Quiz",
      description: "Educational quiz platform focused on cybersecurity awareness. Features progress tracking and detailed explanations.",
      icon: Shield,
      color: "bg-primary/10 text-primary",
      github: "https://github.com/krishnakumar-m/cyber-safety-quiz",
      demo: "https://krishnakumar-m.github.io/cyber-safety-quiz"
    },
    {
      title: "E-Cart Website",
      description: "Modern e-commerce shopping cart with product filtering, local storage, and responsive design. Clean UI/UX implementation.",
      icon: ShoppingCart,
      color: "bg-accent-violet/10 text-accent-violet",
      github: "https://github.com/krishnakumar-m/e-cart",
      demo: "https://krishnakumar-m.github.io/e-cart"
    },
    {
      title: "Simple Calculator",
      description: "Clean and functional calculator with scientific operations support. Focuses on accurate calculations and intuitive design.",
      icon: Calculator,
      color: "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20",
      github: "https://github.com/krishnakumar-m/calculator",
      demo: "https://krishnakumar-m.github.io/calculator"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development and problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="project-card group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;