"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Desenvolvedor Frontend</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sou desenvolvedor front-end com 2 anos de experiência, apaixonado
              por criar interfaces modulares, responsivas e de alto desempenho.
              Desde jovem, sempre fui fascinado por tecnologia e, aos 17 anos,
              comecei a me dedicar à programação, encontrando minha verdadeira
              vocação.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Autodidata e disciplinado, busco evolução contínua em todos os
              aspectos da vida — profissional, mental e espiritual. Atualmente
              atuo em múltiplos projetos na Hávira e em trabalhos próprios,
              utilizando tecnologias como TypeScript, Next.js, Tailwind, ShadCN,
              Chakra UI e Redux para entregar soluções escaláveis e eficientes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-primary-500" size={20} />
                <span>Carlos Barbosa - RS, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary-500" size={20} />
                <a
                  href="mailto:kleincoder@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  kleincoder@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="text-primary-500" size={20} />
                <a
                  href="https://wa.me/5554993202107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Fale comigo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/perfil.png"
                alt="João Pedro Klein Previdi"
                width={400}
                height={400}
                className="relative rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
