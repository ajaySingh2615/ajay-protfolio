import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBrain,
  FaBriefcase,
  FaGraduationCap,
  FaPhoneAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Hide/show navbar on scroll
      if (currentScrollPos > 100) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);

      // Update navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", url: "home", icon: FaHome },
    { name: "About", url: "about", icon: FaUser },
    { name: "Projects", url: "projects", icon: FaLaptopCode },
    { name: "Skills", url: "skills", icon: FaBrain },
    { name: "Experience", url: "experience", icon: FaBriefcase },
    { name: "Education", url: "education", icon: FaGraduationCap },
    { name: "Contact", url: "contact", icon: FaPhoneAlt },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "#0077B5",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "#1DA1F2",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:your.email@example.com",
      color: "#D44638",
    },
  ];

  const scrollToSection = (sectionId) => {
    // Close mobile menu first
    setIsOpen(false);

    // Small delay to ensure menu closing animation completes
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();

        // Calculate the absolute position by adding current scroll position
        const absoluteTop = rect.top + window.pageYOffset;

        // Scroll with offset for navbar height
        window.scrollTo({
          top: absoluteTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });

        // Update active section manually
        setActiveSection(sectionId);
      }
    }, 100);
  };

  // Variants for animations
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(var(--color-primary-rgb), 0.5)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <Motion.header
      variants={navbarVariants}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Background gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />

      {/* Glow effect when scrolled */}
      {scrolled && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
        />
      )}

      {/* Interactive background effect */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background: scrolled
            ? `radial-gradient(circle 150px at ${mousePosition.x}px ${
                mousePosition.y - window.scrollY
              }px, rgba(var(--color-primary-rgb), 0.08), transparent)`
            : "transparent",
        }}
      >
        {/* Animated particles */}
        {scrolled &&
          Array.from({ length: 5 }).map((_, i) => (
            <Motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{
                x: mousePosition.x,
                y: mousePosition.y - window.scrollY,
                opacity: 0.7,
                scale: 0,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 150,
                y:
                  mousePosition.y -
                  window.scrollY +
                  (Math.random() - 0.5) * 150,
                opacity: 0,
                scale: 2,
              }}
              transition={{ duration: 1 + Math.random() }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
            variants={logoVariants}
            whileHover="hover"
          >
            <a
              href="#home"
              className="text-white font-bold text-xl sm:text-2xl flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <div className="relative">
                <span className="text-primary group-hover:text-white transition-colors duration-300 relative z-10">
                  A
                </span>
                <Motion.span
                  className="absolute -inset-1 bg-primary/20 rounded-full blur-md z-0 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="group-hover:text-primary transition-colors duration-300 relative">
                jay Singh
                <Motion.span className="absolute -bottom-1 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
              <Motion.div
                className="ml-2 h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-white"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </a>
          </Motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <a
                  href={`#${link.url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.url);
                  }}
                  className={`relative px-3 py-2 text-sm rounded-md transition-all duration-300 group flex items-center gap-1.5 ${
                    activeSection === link.url
                      ? "text-primary"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Removed icon */}
                  {link.name}
                  {activeSection === link.url ? (
                    <Motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <Motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                  <span className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Motion.div>
            ))}
          </nav>

          {/* Call to Action Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links - Desktop Only */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <Motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-1.5 relative group"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="text-lg relative z-10 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 -z-0"></span>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800/90 backdrop-blur-sm text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </Motion.a>
              ))}
            </div>

            {/* Hire Me Button */}
            <Motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="bg-gradient-to-r from-primary to-blue-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-medium text-sm relative overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Hire Me</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Glass effect */}
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm z-0"></span>

              {/* Animated background */}
              <Motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />

              {/* Shine effect */}
              <Motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.2) 50%, transparent 55%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Star icon */}
              <Motion.span
                className="absolute -top-1 -right-1 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 20, 0, -20, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FaStar className="text-xs" />
              </Motion.span>

              {/* Shadow effect */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 8px 30px rgba(var(--color-primary-rgb), 0.4)",
                }}
              ></span>
            </Motion.a>
          </div>

          {/* Mobile Menu Button */}
          <Motion.button
            className="md:hidden flex items-center menu-button"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <Motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <FaTimes className="text-primary text-xl" />
                  </Motion.div>
                ) : (
                  <Motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <FaBars className="text-white text-xl" />
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </Motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mobile-menu overflow-auto bg-[#0a0a0a]/95 backdrop-blur-xl fixed inset-x-0 top-16 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 h-full flex flex-col">
              {/* Professional Status Badge */}
              <div className="mb-6 flex justify-center">
                <Motion.div
                  className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2 relative overflow-hidden"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm text-gray-300 relative z-10">
                    Available for new projects
                  </span>

                  {/* Animated background */}
                  <Motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Motion.div>
              </div>

              <nav className="flex flex-col space-y-2 flex-grow">
                {navLinks.map((link, index) => (
                  <Motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.url)}
                    className={`py-4 px-4 rounded-lg text-center text-base flex items-center justify-center gap-3 ${
                      activeSection === link.url
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-gray-300 hover:bg-gray-800/50"
                    } transition-all duration-200 relative overflow-hidden`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Removed icon */}
                    {link.name}

                    {/* Subtle hover effect */}
                    <Motion.span
                      className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        opacity: 1,
                        transition: { duration: 0.2 },
                      }}
                    />
                  </Motion.button>
                ))}
              </nav>

              {/* Hire Me Button - Mobile */}
              <Motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="mt-6 bg-gradient-to-r from-primary to-blue-500 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-medium text-base relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let's Work Together</span>
                  <FaArrowRight />
                </span>

                {/* Glass effect */}
                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></span>

                {/* Animated background */}
                <Motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary"
                  animate={{
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
              </Motion.a>

              {/* Social Links - Mobile */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-center text-sm mb-4">
                  Connect with me
                </p>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <Motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                      aria-label={social.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-primary/50 group-hover:bg-gray-700 transition-all duration-300 relative overflow-hidden">
                        <social.icon
                          className="text-xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: social.color }}
                        />

                        {/* Glow effect */}
                        <Motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${social.color}20 0%, transparent 70%)`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </span>
                    </Motion.a>
                  ))}
                </div>
              </div>

              {/* Copyright in mobile menu */}
              <div className="mt-8 text-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Ajay Singh</p>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Navbar;
