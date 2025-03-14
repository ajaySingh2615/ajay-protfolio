import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaChevronDown,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";

// Add this in your index.css or directly in head
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Raleway:wght@400;500;600&family=Poppins:wght@400;500;600&family=Playfair+Display:wght@700&display=swap');

const Hero = () => {
  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "AI Developer",
    "Full-Stack Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const techStack = [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "AWS", icon: FaAws },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      opacity: { value: 0.1 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-dark to-dark/95 font-sans">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-[60%] space-y-6 sm:space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Status Badge with Enhanced Tech Stack */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                  role="status"
                  aria-label="Availability status"
                >
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    <div className="relative w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-primary text-sm font-medium">
                    Available for Work
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="group relative px-2 py-1 rounded-md bg-light/5 text-light/60 border border-light/10 hover:border-primary/50 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="flex items-center gap-1.5">
                        <tech.icon className="w-3 h-3" />
                        <span className="text-xs">{tech.name}</span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-md"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light">
                <TypeAnimation
                  sequence={["Hi, I'm Ajay Singh", 1000]}
                  wrapper="span"
                  className="block mb-4 sm:mb-6"
                  cursor={false}
                />
                <div className="relative h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] mb-4 sm:mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRole}
                      initial={{ opacity: 0, x: -20, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, y: -10, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute w-full"
                    >
                      <div className="relative">
                        {/* Background accent */}
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="absolute -left-2 top-1/2 -translate-y-1/2 h-[110%] bg-primary/5 -skew-x-12 rounded-lg"
                        />

                        {/* Role text with special styling */}
                        <div className="relative flex items-baseline gap-4 py-1">
                          <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-light/90 bg-clip-text text-transparent">
                            {roles[currentRole].split(" ")[0]}
                          </span>
                          <div className="flex flex-col items-start gap-1">
                            <motion.span className="text-xl sm:text-2xl text-light/80">
                              Developer
                            </motion.span>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.3, duration: 0.3 }}
                              className="h-[2px] bg-gradient-to-r from-primary to-transparent"
                            />
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-primary/20"
                        >
                          <div className="absolute inset-1 rounded-full bg-primary/10" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </h1>

              {/* Enhanced Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {[
                  { number: "10+", label: "Years\nExperience", icon: "🚀" },
                  { number: "100+", label: "Projects\nDelivered", icon: "💼" },
                  { number: "50+", label: "Happy\nClients", icon: "🎯" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    className="flex items-center gap-4 bg-light/5 px-4 sm:px-6 py-3 rounded-2xl backdrop-blur-sm hover:bg-light/10 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl sm:text-2xl">{stat.icon}</span>
                    <div>
                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                        {stat.number}
                      </span>
                      <span className="text-sm sm:text-base text-light/60 whitespace-pre-line block">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 rounded-xl font-medium text-dark overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 text-center sm:text-left"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Collaborate
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-dark"
                    />
                  </span>
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-white/25 via-white/0 to-white/25 group-hover:translate-y-[0%] transition-transform duration-300" />
                  <div className="absolute inset-0 translate-y-[-100%] bg-gradient-to-r from-white/25 via-white/0 to-white/25 group-hover:translate-y-[0%] transition-transform duration-300" />
                </a>

                <div className="flex gap-4">
                  <a
                    href="#work"
                    className="flex-1 sm:flex-none group px-6 sm:px-8 py-3 rounded-xl font-medium border border-light/10 text-light relative overflow-hidden hover:border-primary/50 transition-colors duration-300 text-center sm:text-left"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Projects
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  <a
                    href="/resume.pdf"
                    className="group p-3 rounded-xl border border-light/10 text-light hover:border-primary/50 transition-colors duration-300"
                    title="Download Resume"
                  >
                    <FaFileDownload className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center sm:justify-start gap-6 sm:gap-8"
              >
                {[
                  {
                    icon: FaGithub,
                    link: "https://github.com/yourusername",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    link: "https://linkedin.com/in/yourusername",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaTwitter,
                    link: "https://twitter.com/yourusername",
                    label: "Twitter",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-light/40 hover:text-primary transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className="text-2xl" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-dark/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="w-full lg:w-[40%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full"
              whileHover="hover"
            >
              <motion.div
                className="relative w-full max-w-xl mx-auto"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                variants={{
                  hover: {
                    rotateY: 5,
                    rotateX: 5,
                  },
                }}
              >
                <div className="relative rounded-xl overflow-hidden group aspect-[3/4] lg:aspect-[16/20]">
                  <motion.img
                    src="/profile.jpg"
                    alt="Ajay Singh"
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                    animate={{ scale: isImageHovered ? 1.05 : 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: isImageHovered ? 1 : 0 }}
                  />

                  {/* Enhanced Status Card */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 bg-dark/90 backdrop-blur-sm border-t border-light/10"
                    variants={{
                      hover: {
                        y: -5,
                      },
                    }}
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative w-2 h-2">
                          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                          <div className="relative w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <span className="text-light font-medium">
                          Available for Projects
                        </span>
                      </div>
                      <div className="text-primary/90 tracking-wide">
                        Full Stack Development • AI Integration • Cloud
                        Solutions
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        role="button"
        aria-label="Scroll to explore content"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-light/40 text-xs sm:text-sm">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown className="text-light/40 w-3 h-3 sm:w-4 sm:h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
