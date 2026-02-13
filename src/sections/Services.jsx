// src/sections/Services.jsx
import { services } from "../data/services";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { primary } = useTheme();

  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-white text-gray-900 dark:bg-black dark:text-gray-100 overflow-hidden"
    >
      {/* Background Blur Accent */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 -left-20 top-10"
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
          
Technologies &  <span style={{ color: primary }}>Services </span>
  I Work With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
        >
          I provide complete mobile and web development solutions—from UI design
          to backend integrations—focused on performance, scalability, and clean architecture.
        </motion.p>

        {/* SERVICES GRID */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/70 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 backdrop-blur-lg text-left transition duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: `0 10px 30px rgba(0,0,0,0.05)`,
                }}
              >
                {/* ICON */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                  style={{
                    backgroundColor: `${primary}20`,
                  }}
                >
                  <Icon size={26} style={{ color: primary }} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
