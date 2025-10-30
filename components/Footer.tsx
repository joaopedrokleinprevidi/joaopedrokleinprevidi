"use client";

import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/joaopedrokleinprevidi",
      label: "Github",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/joaopedrokleinprevidi/",
      label: "LinkedIn",
    },

    { icon: Mail, href: "mailto:kleincoder@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
              joaopedrokleinprevidi.dev
            </h3>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Front-end especializado em eficiência e alta
              responsividade, atuando em equipe multidisciplinares oferecendo
              soluções escaláveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Skills", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} João Pedro Klein Previdi. Feito com{" "}
            <Heart size={16} className="text-primary-500 fill-primary-500" /> e
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
