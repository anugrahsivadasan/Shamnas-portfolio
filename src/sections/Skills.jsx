import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { primary } = useTheme();

  const skillCategories = [
    {
      title: "Mobile Development",
      content:
        "Flutter, Dart, Java, Kotlin, XML, and Jetpack Compose for building fast and scalable mobile applications.",
    },
    {
      title: "App Release & Distribution",
      content:
        "Skilled in deploying, updating, and maintaining Android and iOS applications across official app distribution platforms.",
    },
    {
      title: "Tools & Platforms",
      content:
        "Expertise in OOP, Data Structures, Databases, and Operating Systems, capable of working efficiently across Windows, macOS, and Linux.",
    },
    {
      title: "Soft Skills",
      content:
        "Excellent communication, teamwork, and problem-solving abilities focused on collaboration and delivering high-quality results.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div
        className="absolute top-20 right-0 w-[400px] h-[400px] blur-[140px] opacity-20 rounded-full"
        style={{ backgroundColor: primary }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Skill <span style={{ color: primary }}>Set</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-lg block mb-2">
              Technical Skills & Expertise
            </span>
            Specialized in mobile application development with strong expertise
            in Flutter, Android, and cross-platform technologies. My skill set
            includes modern programming languages, UI development, backend
            integration, and essential tools that help me deliver reliable,
            scalable, and high-quality mobile solutions.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about adopting emerging technologies and best practices
            to optimize performance and enhance user experiences. With strong
            problem-solving abilities and effective collaboration skills, I
            create innovative solutions that consistently meet project goals
            and client expectations.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 hover:shadow-xl transition-all duration-300"
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: primary }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
