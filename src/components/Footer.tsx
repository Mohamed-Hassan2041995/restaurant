import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Award,
  Users,
  ChefHat,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Reservations", href: "#reservations" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Private Events", href: "#events" },
    { name: "Gift Cards", href: "#gifts" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20">
      {/* Newsletter Section */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mail className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Newsletter
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-4">
              Stay Updated with
              <span className="text-luxury "> Culinary Experiences</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Subscribe to receive exclusive offers, seasonal menu updates, and
              invitations to special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-xl border border-border/50 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button variant="luxury" className="h-12 px-8 rounded-xl">
                <span className="relative z-10">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-elegant font-bold text-luxury mb-4">
              Bellissimo
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where culinary artistry meets exceptional service. Experience fine
              dining that transcends the ordinary and creates lasting memories.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>123 Gourmet Avenue</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@bellissimo.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@bellissimo.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Monday - Sunday</p>
                  <p>5:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Recognition
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-secondary mr-3" />
                <span className="text-muted-foreground">
                  Michelin 5-Star Rating
                </span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-secondary mr-3" />
                <span className="text-muted-foreground">James Beard Award</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-secondary mr-3" />
                <span className="text-muted-foreground">
                  OpenTable Diners' Choice
                </span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-secondary mr-3" />
                <span className="text-muted-foreground">
                  Wine Spectator Award
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Verified by Google</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>TripAdvisor Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-border/50" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Bellissimo Restaurant. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* <div className="text-muted-foreground text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 inline fill-current" /> for food lovers
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
