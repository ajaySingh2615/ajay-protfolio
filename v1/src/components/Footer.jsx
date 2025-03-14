import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaCode,
  FaReact,
  FaNodeJs,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [rocketPosition, setRocketPosition] = useState(0);

  // Monitor scroll position to reset rocket when at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && isScrolling) {
        setTimeout(() => {
          setIsScrolling(false);
          setRocketPosition(0);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToTop = () => {
    if (isScrolling) return;

    // Start the rocket animation
    setIsScrolling(true);
    setRocketPosition(-1000);

    // Try multiple scroll methods for better browser compatibility
    // Method 1: Using scrollTo with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Method 2: Fallback to scrollIntoView for the first element
    setTimeout(() => {
      const firstElement = document.body.firstElementChild;
      if (firstElement) {
        firstElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    // Method 3: Fallback to manual scroll with animation
    let currentPosition = window.pageYOffset;
    const scrollStep = Math.PI / (1000 / 15); // Adjust speed
    let count = 0;

    const scrollAnimation = () => {
      if (window.pageYOffset <= 0) {
        return;
      }

      count += 1;
      currentPosition = Math.floor(
        currentPosition * Math.cos(count * scrollStep)
      );

      if (currentPosition <= 0) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, currentPosition);
        requestAnimationFrame(scrollAnimation);
      }
    };

    setTimeout(() => {
      if (window.pageYOffset > 0) {
        requestAnimationFrame(scrollAnimation);
      }
    }, 100);

    // Reset animation state after a timeout as a fallback
    setTimeout(() => {
      if (isScrolling) {
        setIsScrolling(false);
        setRocketPosition(0);
      }
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ajaySingh2615",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/cadt14/",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/ThakurAjay1605",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/918808319836",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:ajaysingh261526@gmail.com",
    },
  ];

  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  ];

  const quickLinks = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Projects", url: "projects" },
    { name: "Skills", url: "skills" },
    { name: "Experience", url: "experience" },
    { name: "Education", url: "education" },
    { name: "Contact", url: "contact" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[100px]"
        />
      </div>

      {/* Rocket Back to Top Button */}
      <div className="relative w-full mx-auto pt-6 sm:pt-10 md:pt-12 pb-4 sm:pb-6">
        <div className="flex justify-center items-center">
          <div className="relative h-16 sm:h-20 w-16 sm:w-20 flex items-center justify-center">
            {/* Rocket */}
            <Motion.div
              className="absolute z-10"
              style={{ bottom: isScrolling ? 0 : 20 }}
              animate={{ y: rocketPosition }}
              transition={{
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for rocket-like acceleration
              }}
            >
              <Motion.button
                onClick={scrollToTop}
                whileHover={!isScrolling ? { scale: 1.1 } : {}}
                whileTap={!isScrolling ? { scale: 0.95 } : {}}
                className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                aria-label="Back to top"
                disabled={isScrolling}
              >
                <FaRocket
                  className={`text-lg sm:text-xl md:text-2xl ${
                    isScrolling ? "rotate-0" : "-rotate-45"
                  } transition-transform duration-300`}
                />

                {/* Rocket trail/flames - only visible during scrolling */}
                <AnimatePresence>
                  {isScrolling && (
                    <>
                      {/* Main flame */}
                      <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          height: ["20px", "40px", "20px"],
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.3,
                          repeatType: "reverse",
                        }}
                        className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-6 sm:w-8 bg-gradient-to-t from-orange-600 via-yellow-500 to-transparent rounded-full blur-[2px]"
                      />

                      {/* Secondary flame */}
                      <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          height: ["15px", "25px", "15px"],
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.2,
                          repeatType: "reverse",
                          delay: 0.1,
                        }}
                        className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-4 sm:w-5 bg-gradient-to-t from-yellow-500 via-yellow-300 to-transparent rounded-full blur-[1px]"
                      />

                      {/* Smoke particles */}
                      {[...Array(8)].map((_, i) => (
                        <Motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                          }}
                          animate={{
                            opacity: [0, 0.5, 0],
                            x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 20),
                            y: 15 + Math.random() * 20,
                          }}
                          transition={{
                            duration: 1 + Math.random() * 0.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: i * 0.08,
                          }}
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300/80 rounded-full blur-[1px]"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Motion.button>
            </Motion.div>

            {/* Launch pad base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 bg-gray-700 rounded-full" />

            {/* Hover text - hidden on small mobile, visible on hover for larger screens */}
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full hidden sm:block"
            >
              Blast to top 🚀
            </Motion.div>

            {/* Launch pad glow */}
            <Motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 bg-primary/50 rounded-full blur-[3px]"
            />

            {/* Launch effect - only visible during launch */}
            <AnimatePresence>
              {isScrolling && (
                <Motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0.5, 2, 3] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-orange-500/50 rounded-full blur-[5px]"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-12">
          {/* Brand Column - Full width and centered on mobile */}
          <div className="col-span-1 space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <Motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl font-bold text-white"
              >
                Ajay Singh
              </Motion.h2>
              <Motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 bg-primary mt-2"
              />
            </div>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-400"
            >
              Full Stack Developer specializing in building exceptional digital
              experiences with modern technologies.
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="text-lg sm:text-xl" />
                </a>
              ))}
            </Motion.div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg font-semibold text-white"
            >
              Quick Links
            </Motion.h3>
            <Motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 gap-y-2 sm:gap-y-3 w-full"
            >
              {quickLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex justify-center sm:justify-start"
                >
                  <a
                    href={`#${link.url}`}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </Motion.ul>
          </div>

          {/* Tech Stack Column */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg font-semibold text-white"
            >
              Built With
            </Motion.h3>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start"
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors duration-300 group"
                  title={tech.name}
                >
                  <tech.icon
                    className="text-sm sm:text-lg group-hover:text-primary transition-colors duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </Motion.div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg font-semibold text-white"
            >
              Get In Touch
            </Motion.h3>
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-400"
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out.
            </Motion.p>
            <Motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 rounded-lg text-primary transition-all duration-300 text-sm sm:text-base"
            >
              <FaEnvelope className="text-sm sm:text-base" />
              <span>Contact Me</span>
            </Motion.a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-4">
            <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Ajay Singh. All rights reserved.
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-xs sm:text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse text-xs sm:text-sm" />
              <span>and</span>
              <FaCode className="text-primary text-xs sm:text-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
