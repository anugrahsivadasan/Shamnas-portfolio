import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SocialButton from "../components/SocialButtons";
import { socials } from "../data/socials";
import { useTheme } from "../context/ThemeContext";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUserTie,
} from "react-icons/fa";

/* FLOATING ICONS */
const floatingIcons = [
  { Icon: FaEnvelope, left: "10%", top: "20%", size: 36, depth: 60 },
  { Icon: FaPaperPlane, left: "88%", top: "25%", size: 32, depth: 50 },
  { Icon: FaPhoneAlt, left: "75%", top: "82%", size: 34, depth: 70 },
  { Icon: FaUserTie, left: "12%", top: "78%", size: 38, depth: 90 },
];

const Contact = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.7,
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 overflow-hidden 
                 bg-white text-gray-900 
                 dark:bg-[#0f0f14] dark:text-gray-100"
    >
      {/* 🌟 Adaptive Spotlight Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 40%, ${primary}20, transparent 60%),
            radial-gradient(circle at 20% 80%, ${primary}15, transparent 60%)
          `,
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(smoothProgress, [0, 1], [0, -item.depth]);

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none opacity-[0.06] dark:opacity-[0.08]"
            style={{
              left: item.left,
              top: item.top,
              y,
              color: primary,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}

      {/* Main Glass Card */}
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          className="
            rounded-3xl p-12 text-center
            backdrop-blur-xl
            bg-white/70 border border-gray-200 shadow-xl
            dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold mb-6 tracking-tight">
            Let’s Work Together
          </h2>

          <p className="mb-10 max-w-xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to connect?
            I’m always open to discussing new ideas and collaborations.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anugrahsivadasan@gmail.com"
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-white"
              style={{ backgroundColor: primary }}
            >
              Hire Me
            </a>

            <a
              href="/Anugrah-Sivadasan-React-Resume.pdf"
              download
              className="
                px-8 py-3 rounded-full font-medium transition-all duration-300
                border border-gray-300 hover:bg-gray-100
                dark:border-white/20 dark:hover:bg-white/10
              "
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 flex-wrap">
            {socials.map((social, idx) => (
              <SocialButton key={idx} social={social} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
