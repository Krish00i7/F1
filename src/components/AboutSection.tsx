const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            About Me
          </h2>
          <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              I'm Krishnakumar M., an aspiring software engineer with a foundation in computer science. 
              I build readable, reliable, and user-friendly software, focusing on practical problem solving 
              and creating small, impactful projects. My passion lies in transforming complex problems 
              into elegant solutions through clean code and thoughtful design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;