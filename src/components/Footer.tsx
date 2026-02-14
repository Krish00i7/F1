import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-accent-coral animate-pulse" />
            <span className="text-sm">by Krishnakumar M.</span>
          </div>
          <p className="text-sm opacity-80">
            © {currentYear} Krishnakumar M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;