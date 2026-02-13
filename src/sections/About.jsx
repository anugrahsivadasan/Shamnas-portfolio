// src/sections/About.jsx
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { aboutMe } from "../data/about";
import { FaMobileAlt, FaLayerGroup, FaRocket } from "react-icons/fa";

const icons = [FaMobileAlt, FaLayerGroup, FaRocket];

const About = () => {
  const { primary } = useTheme();

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND BLUR EFFECT (matching hero) */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 -top-20 right-10"
        style={{ backgroundColor: primary }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span style={{ color: primary }}>{aboutMe.title}</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
        >
          {aboutMe.description}
        </motion.p>

        {/* FEATURE CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {aboutMe.highlights.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/70 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 backdrop-blur-lg hover:scale-105 transition"
              >
                <Icon
                  size={32}
                  className="mx-auto mb-4"
                  style={{ color: primary }}
                />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* EXPERIENCE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row justify-center gap-12 text-center"
        >
          <div>
            <h3
              className="text-3xl font-bold"
              style={{ color: primary }}
            >
              2+
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <h3
              className="text-3xl font-bold"
              style={{ color: primary }}
            >
              10+
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Apps Developed
            </p>
          </div>

          <div>
            <h3
              className="text-3xl font-bold"
              style={{ color: primary }}
            >
              100%
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Client Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
