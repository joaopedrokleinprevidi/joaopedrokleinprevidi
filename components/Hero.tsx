"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  FileText,
  MessageCircle,
  Mail,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
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
    // { icon: FileText, href: '/images/GUSTAVO CRISTOVAM.pdf', label: 'Currículo' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex flex-col">
            <span>Olá! Me chamo </span>
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              João Pedro Klein Previdi
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 mb-10">
            Desenvolvedor Frontend
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mb-10 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 group"
              >
                <link.icon size={20} />
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5554993202107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            Fazer Orçamento
          </motion.a>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="#about"
              className="text-gray-500 hover:text-primary-400 transition-colors duration-200 inline-block"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-sm block mb-2">Veja meu trabalho</span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto flex items-start justify-center p-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
