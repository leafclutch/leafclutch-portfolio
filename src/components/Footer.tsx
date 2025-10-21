import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo-symbol.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Internships", path: "/internships" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/leafclutch",
      label: "LinkedIn",
    },
    { icon: Github, url: "https://github.com/leafclutch", label: "GitHub" },
    {
      icon: Instagram,
      url: "https://instagram.com/leafclutch.dev",
      label: "Instagram",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/leafclutch_dev",
      label: "X (Twitter)",
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="LeafClutch.dev"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="font-heading font-bold text-lg">
                LeafClutch<span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 max-w-xs">
              Brewing Ideas into Innovation. We build intelligent solutions in
              AI, data science, and software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Email:{" "}
              <a
                href="mailto:info@leafclutch.dev"
                className="text-primary hover:underline"
              >
                info@leafclutch.dev
              </a>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <p className="text-sm text-center text-secondary-foreground/60">
            Copyright © {currentYear} LeafClutch.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
