import { Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-bounce-gentle">
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Krishnakumar M. Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 animate-glow"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up">
          Hi, I'm{" "}
          <span className="text-gradient">Krishnakumar M.</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-up delay-200">
          BSc Computer Science Student
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground animate-fade-up delay-300">
          Creating clean, interactive, and user-friendly web pages.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up delay-500">
          <a
            href="/assets/resume.pdf"
            className="btn-hero inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            className="btn-secondary inline-flex items-center gap-2"
          >
            View Projects
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 mx-auto text-primary opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;