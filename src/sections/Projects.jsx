import { projects } from "../data/projects";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (value) => {
      const index = Math.min(
        projects.length - 1,
        Math.floor(value * projects.length)
      );
      setActiveIndex(index);
    });
  }, [smoothProgress]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-white dark:bg-black"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">

        <motion.div
          key={activeIndex}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full max-w-6xl"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] border border-white/10">
            
            {/* Image */}
            <div className="h-[60vh] overflow-hidden">
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-10 text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {projects[activeIndex].name}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                {projects[activeIndex].description}
              </p>

              <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-medium transition duration-300 hover:scale-105"
                style={{ backgroundColor: primary, color: "#fff" }}
              >
                View Project →
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
 