import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                My Resume
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download my resume to learn more about my education, skills, and experience
              </p>
            </div>
            
            <a
              href="/assets/resume.pdf"
              className="btn-hero inline-flex items-center gap-3 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-5 w-5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;