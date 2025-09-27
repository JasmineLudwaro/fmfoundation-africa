import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/fm-foundation-logo.jpg";
import isuzuLogo from "@/assets/isuzu-logo.png";
import davisShirtliffLogo from "@/assets/davis-shirtliff-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="FM Foundation Logo" 
                className="h-14 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">FMF Foundation</h3>
                <p className="text-sm text-primary-foreground/80">Fednarnd Mlati Foundation</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering communities through sustainable development, education, and environmental conservation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/our-work" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Work
              </Link>
              <Link to="/impact" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Impact
              </Link>
              <Link to="/get-involved" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Get Involved
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/60" />
                <a href="mailto:partnerships@fmfoundation.africa" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  partnerships@fmfoundation.africa
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/60" />
                <a href="tel:+254738773653" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +254 738 773 653
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Stay connected for updates on our latest projects and impact stories.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-lg text-primary-foreground mb-4">Our Partners</h4>
            <div className="flex justify-center items-center space-x-8">
              <img 
                src={isuzuLogo} 
                alt="Isuzu East Africa" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src={davisShirtliffLogo} 
                alt="Davis & Shirtliff" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Fednarnd Mlati Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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