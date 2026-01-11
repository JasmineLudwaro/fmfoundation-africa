import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logoImage from "@/assets/fm-foundation-logo.jpg";
import isuzuLogo from "@/assets/isuzu-logo.png";
import davisShirtliffLogo from "@/assets/davis-shirtliff-logo.png";

const Footer = () => {
  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/our-work", label: "Our Work" },
    { to: "/impact", label: "Impact" },
    { to: "/gallery", label: "Gallery" },
    { to: "/get-involved", label: "Get Involved" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Organization Info - Takes more space */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="FM Foundation Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-lg tracking-tight">FMF Foundation</h3>
                <p className="text-xs text-primary-foreground/70">Fednarnd Mlati Foundation</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-sm">
              Empowering communities through sustainable development, education, and environmental conservation across East Africa.
            </p>
            
            {/* Partners - Moved here for better layout */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-3">Our Partners</p>
              <div className="flex items-center gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-2 hover:bg-primary-foreground/20 transition-colors">
                  <img 
                    src={isuzuLogo} 
                    alt="Isuzu East Africa" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-2 hover:bg-primary-foreground/20 transition-colors">
                  <img 
                    src={davisShirtliffLogo} 
                    alt="Davis & Shirtliff" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-primary-foreground/90">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="group flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-primary-foreground/90">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="https://maps.google.com/?q=Nairobi,Kenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-foreground/50 group-hover:text-primary-foreground/80" />
                <span>Nairobi, Kenya</span>
              </a>
              <a 
                href="mailto:partnerships@fmfoundation.africa" 
                className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-primary-foreground/50 group-hover:text-primary-foreground/80" />
                <span className="break-all">partnerships@fmfoundation.africa</span>
              </a>
              <a 
                href="tel:+254738773653" 
                className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-primary-foreground/50 group-hover:text-primary-foreground/80" />
                <span>+254 738 773 653</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-primary-foreground/90">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Stay connected for updates on our latest projects and impact stories.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Fednarnd Mlati Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
