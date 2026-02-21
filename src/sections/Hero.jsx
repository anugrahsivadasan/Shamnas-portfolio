// src/sections/Hero.jsx
import { motion } from "framer-motion";
import ThemeSwitcher from "../components/ThemeSwitcher";
import profileImg from "../assets/shamnas.jpeg";
import { FaMobileAlt, FaRocket, FaCodeBranch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" relative z-10
        min-h-screen  
        flex flex-col items-center 
        text-center 
       justify-center pt-20 sm:pt-24
        px-5 sm:px-6 
        overflow-hidden
        bg-white text-gray-900 
        dark:bg-black dark:text-gray-100
      "
    >
      {/* 🔵 Background Blur Orbs */}
      <div
        className="
          absolute w-56 h-56 sm:w-72 sm:h-72 
          rounded-full blur-3xl opacity-25 
          -top-10 -left-10
        "
        style={{ backgroundColor: "var(--primary)" }}
      ></div>

      <div
        className="
          absolute w-72 h-72 sm:w-96 sm:h-96 
          rounded-full blur-3xl opacity-20 
          bottom-0 right-0
        "
        style={{ backgroundColor: "var(--primary)" }}
      ></div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Heading */}
        <h1 className="font-extrabold text-center leading-tight">
          <span className="block text-xl sm:text-2xl md:text-4xl text-gray-500 dark:text-gray-400">
            Hello, I’m
          </span>

          <span
            className="block text-4xl sm:text-5xl md:text-6xl mt-2"
            style={{ color: "var(--primary)" }}
          >
            Shamnas
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="
          mt-4 
          text-lg sm:text-xl md:text-2xl 
          font-medium 
          text-gray-600 dark:text-gray-400
        ">
          Flutter Developer building fast & beautiful cross-platform apps.
        </h2>

        {/* Description */}
        <p className="
          mt-5 
          text-sm sm:text-base 
          text-gray-500 dark:text-gray-400 
          max-w-xl mx-auto
        ">
          I specialize in developing high-performance mobile applications
          using Flutter, creating seamless UI experiences for Android and iOS.
        </p>

        {/* Buttons */}
        <div className="
          mt-8 
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-4
        ">
          <a
            href="#contact"
            className="
              w-full sm:w-auto
              px-8 py-3 
              rounded-full 
              text-white font-medium 
              transition hover:scale-105
            "
            style={{ backgroundColor: "var(--primary)" }}
          >
            Let’s Work Together
          </a>

          <a
            href="/Shamnas_P.pdf"
            className="
              w-full sm:w-auto
              px-8 py-3 
              rounded-full 
              border font-medium 
              transition 
              hover:bg-gray-100 
              dark:hover:bg-gray-800
            "
            download
          >
            Download CV
          </a>
        </div>

        {/* Stats Section */}
        <div className="
          mt-12 
          grid grid-cols-1 sm:grid-cols-3 
          gap-8 sm:gap-6
        ">
          <div className="flex flex-col items-center">
            <FaMobileAlt
              className="mb-3"
              size={26}
              style={{ color: "var(--primary)" }}
            />
            <h3 className="text-xl sm:text-2xl font-bold">10+</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Mobile Apps Built
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRocket
              className="mb-3"
              size={26}
              style={{ color: "var(--primary)" }}
            />
            <h3 className="text-xl sm:text-2xl font-bold">2+ Years</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Experience
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaCodeBranch
              className="mb-3"
              size={26}
              style={{ color: "var(--primary)" }}
            />
            <h3 className="text-xl sm:text-2xl font-bold">Cross Platform</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Android & iOS
            </p>
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-14 sm:mt-16"
      >
        <div
          className="
            w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
            rounded-full p-[3px] 
            shadow-2xl backdrop-blur-lg
          "
          style={{
            background: "linear-gradient(135deg, var(--primary), #e5e7eb)",
          }}
        >
          <img
            src={profileImg}
            alt="Shamnas"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Theme Switcher */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
        <ThemeSwitcher />
      </div>
    </section>
  );
};

export default Hero;
