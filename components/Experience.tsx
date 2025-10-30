"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Frontend",
      company: "Hávira",
      period: "Jun 2024 - Presente",
      description:
        "Atuação como desenvolvedor front-end na criação de interfaces modulares, responsivas e de alto desempenho, utilizando tecnologias modernas como React, Next.js e TypeScript. Responsável por colaborar com equipes multidisciplinares no desenvolvimento de soluções escaláveis e eficientes, aplicando boas práticas de Clean Code, versionamento com Git e metodologias ágeis.",
      type: "work",
      highlights: [
        "SSR Avançado com Next.js",
        "Integração com múltiplos projetos",
        "Atuando em equipes multidisciplinares",
      ],
    },
  ];

  const education = [
    {
      title: "Escola Britânica de Artes Criativas & Tecnologia (EBAC)",
      institution: "Curso Profissionalizante - 120 horas",
      period: "Fev 2023 - Ago 2023",
      description:
        "Formação pela EBAC – Escola Britânica de Artes Criativas & Tecnologia, com foco em aprendizado prático, projetos reais e desenvolvimento de habilidades avançadas em tecnologia e inovação.",
      type: "education",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência & <span className="text-primary-500">Educação</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-600/20 rounded-lg">
                <Briefcase className="text-primary-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experiência Profissional</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-primary-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-dark-900 p-6 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-colors duration-300">
                    <span className="text-primary-400 text-sm font-semibold">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    {exp.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full border border-primary-500/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-600/20 rounded-lg">
                <GraduationCap className="text-primary-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Educação</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-primary-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-dark-900 p-6 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-colors duration-300">
                    <span className="text-primary-400 text-sm font-semibold">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
