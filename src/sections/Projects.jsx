import { projects } from "../data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { primary } = useTheme();

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-white dark:bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] blur-[140px] opacity-30 rounded-full"
          style={{ background: primary }}
        />

        <div
          className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] blur-[140px] opacity-30 rounded-full"
          style={{ background: primary }}
        />

      </div>

      {/* Heading */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          My Projects
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A collection of modern web applications built with clean UI,
          animation, and performance-focused architecture.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Glass Card */}
            <div className="relative rounded-3xl overflow-hidden">

              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]" />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${primary}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="relative flex flex-col h-full">

                {/* Image */}
                <div className="h-[240px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col flex-grow">

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.name}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border dark:text-gray-200 border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto py-3 text-center rounded-xl font-medium text-white transition duration-300 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${primary}, ${primary}cc)`,
                    }}
                  >
                    View Project
                  </a>

                </div>

              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;
