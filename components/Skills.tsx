"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNestjs,
  SiNextdotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiOpenjdk,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiSharp,
  SiShadcnui,
  SiChakraui,
  SiKubernetes,
} from "react-icons/si";
import { Server, Code } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "Expert",
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "Expert",
      color: "#F7DF1E",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      category: "Intermediate",
      color: "#339933",
    },
    { name: "React.js", icon: SiReact, category: "Expert", color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, category: "Expert", color: "white" },
    { name: "Figma", icon: SiFigma, category: "Intermediate", color: "white" },
    {
      name: "Express.js",
      icon: SiExpress,
      category: "Intermediate",
      color: "white",
    },
    { name: "C#", icon: SiSharp, category: "Intermediate", color: "#007396" },
    {
      name: "Docker",
      icon: SiDocker,
      category: "Intermediate",
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      category: "Intermediate",
      color: "#2496ED",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "Intermediate",
      color: "#4169E1",
    },
    { name: "API RESTful", icon: Server, category: "Expert", color: "#8B5CF6" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Expert",
      color: "#06B6D4",
    },
    {
      name: "ShadCN",
      icon: SiShadcnui,
      category: "Expert",
      color: "#06B6D4",
    },
    {
      name: "Chakra UI",
      icon: SiChakraui,
      category: "Expert",
      color: "#06B6D4",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e
            eficientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-dark-900 p-6 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <skill.icon
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full inline-block ${
                  skill.category === "Expert"
                    ? "bg-green-600/20 text-green-400 border border-green-500/30"
                    : skill.category === "Intermediate"
                    ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                    : "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                }`}
              >
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Front-end",
              items: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "ShadCN",
                "Chakra UI",
                "Zustand",
                "Redux",
                "Figma",
              ],
            },
            {
              title: "Back-end",
              items: ["Node.js", "Express.js", "C#"],
            },
            {
              title: "Infra & DevOps",
              items: [
                "API RESTful",
                "Git",
                "Docker",
                "PostgreSQL",
                "Kubernetes",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-dark-900 p-6 rounded-xl border border-dark-800"
            >
              <h3 className="text-xl font-bold text-primary-500 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
