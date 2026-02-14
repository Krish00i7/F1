import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "krish@example.com",
      href: "mailto:krish@example.com",
      icon: Mail,
      color: "bg-accent-coral text-white hover:bg-accent-coral/90"
    },
    {
      name: "GitHub", 
      value: "github.com/krishnakumar-m",
      href: "https://github.com/krishnakumar-m",
      icon: Github,
      color: "bg-foreground text-background hover:bg-foreground/90"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/krishnakumar-m",
      href: "https://linkedin.com/in/krishnakumar-m",
      icon: Linkedin,
      color: "bg-primary text-primary-foreground hover:bg-primary/90"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name !== "Email" ? "_blank" : undefined}
                  rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="project-card group text-center hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-12">
            <div className="card-gradient rounded-2xl p-8 shadow-lg">
              <Send className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out via email for project collaborations, internship opportunities, or technical discussions.
              </p>
              <a
                href="mailto:krish@example.com"
                className="btn-hero inline-flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;