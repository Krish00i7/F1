import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
            Education
          </h2>
          <div className="glass-card p-8 text-left max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg font-semibold text-primary mb-3">
                  SRM ARTS AND SCIENCE COLLEGE
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Currently Pursuing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Gaining strong foundation in computer science principles, programming languages, 
                  data structures, algorithms, and software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;