import { Code, Database, Globe, FileCode, GitBranch, Github } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: Code, color: "bg-accent-coral text-white" },
    { name: "CSS", icon: FileCode, color: "bg-primary text-primary-foreground" },
    { name: "JavaScript", icon: Globe, color: "bg-accent-yellow text-secondary" },
    { name: "Java", icon: Code, color: "bg-accent-violet text-white" },
    { name: "Python", icon: Code, color: "bg-accent-coral text-white" },
    { name: "React", icon: Globe, color: "bg-primary text-primary-foreground" },
    { name: "Git", icon: GitBranch, color: "bg-secondary text-secondary-foreground" },
    { name: "GitHub", icon: Github, color: "bg-foreground text-background" },
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`skill-badge ${skill.color} group cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;