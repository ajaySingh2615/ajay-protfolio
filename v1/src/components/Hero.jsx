import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  // eslint-disable-next-line no-unused-vars
  motion as motion,
  AnimatePresence,
  useTransform,
  useSpring,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringCta, setIsHoveringCta] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // We're keeping the ref for potential future use
  // but we no longer need the scroll tracking
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"],
  // });

  const springCursorX = useSpring(cursorPosition.x, {
    damping: 25,
    stiffness: 150,
  });
  const springCursorY = useSpring(cursorPosition.y, {
    damping: 25,
    stiffness: 150,
  });

  // Tech experience cards
  const techExperience = [
    {
      name: "Frontend",
      icon: FaReact,
      color: "#61dafb",
      skills: ["React", "Next.js", "Tailwind CSS", "Three.js"],
      description:
        "Building beautiful, responsive interfaces with modern tools and frameworks.",
      years: "5+",
    },
    {
      name: "Backend",
      icon: FaNodeJs,
      color: "#68a063",
      skills: ["Node.js", "Express", "API Design", "Microservices"],
      description:
        "Creating robust backend systems that power complex applications at scale.",
      years: "4+",
    },
    {
      name: "AI & ML",
      icon: FaPython,
      color: "#3776ab",
      skills: [
        "Python",
        "TensorFlow",
        "Natural Language Processing",
        "Computer Vision",
      ],
      description:
        "Developing intelligent systems that learn and adapt to user needs.",
      years: "3+",
    },
    {
      name: "Cloud",
      icon: FaAws,
      color: "#ff9900",
      skills: ["AWS", "Serverless", "DevOps", "CI/CD"],
      description:
        "Architecting scalable cloud solutions that grow with your business.",
      years: "4+",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Auto-cycle through tech experience cards
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techExperience.length);
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [techExperience.length]);

  // Animated gradient background
  const gradientTransition = {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen h-auto font-sans overflow-hidden bg-dark pb-16"
      id="home"
    >
      {/* Custom cursor follow effect for larger screens */}
      <motion.div
        className="fixed hidden lg:block w-28 h-28 rounded-full pointer-events-none z-30 mix-blend-difference"
        style={{
          x: springCursorX,
          y: springCursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHoveringCta ? "#ffffff" : "transparent",
          scale: isHoveringCta ? 0.6 : 0.3,
          opacity: isHoveringCta ? 0.6 : 0.3,
        }}
      />

      {/* Advanced animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(78, 56, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
              "radial-gradient(circle at 60% 70%, rgba(78, 56, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
              "radial-gradient(circle at 40% 50%, rgba(78, 56, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
              "radial-gradient(circle at 80% 20%, rgba(78, 56, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
              "radial-gradient(circle at 20% 30%, rgba(78, 56, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
            ],
          }}
          transition={gradientTransition}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />

        {/* Animated grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0"
        >
          <div className="h-full w-full [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]">
            <div className="grid h-full grid-cols-6 md:grid-cols-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="relative">
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-white/5" />
                  {i === 0 && (
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-white/5" />
                  )}
                </div>
              ))}
            </div>
            <div className="grid h-full grid-rows-6 md:grid-rows-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="relative">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
                  {i === 0 && (
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating elements in background */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-28 md:pt-32 lg:pt-24">
        {/* Content without the opacity fade effect */}
        <motion.div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text and CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                <span className="text-primary text-sm font-medium">
                  Available for New Projects
                </span>
              </div>
            </motion.div>

            {/* Name and title with animations */}
            <div className="space-y-3 md:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-8 md:-left-12 top-8 w-6 md:w-8 h-6 md:h-8">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full text-primary"
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                      opacity="0.2"
                    />
                  </svg>
                </div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 -z-10">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    className="text-primary/10"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
                  <span className="block text-white leading-tight">
                    Hi, I'm
                  </span>
                  <span className="block mt-1 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent pb-2">
                    <TypeAnimation
                      sequence={["Ajay Singh", 1000]}
                      wrapper="span"
                      cursor={false}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative overflow-hidden h-16 sm:h-20 md:h-24"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          {techExperience[activeIndex].name}{" "}
                          <span className="text-primary">Developer</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="p-1.5 rounded-md bg-gray-800/50">
                            {(() => {
                              const IconComponent =
                                techExperience[activeIndex].icon;
                              return (
                                <IconComponent
                                  className="w-4 h-4 sm:w-5 sm:h-5"
                                  style={{
                                    color: techExperience[activeIndex].color,
                                  }}
                                />
                              );
                            })()}
                          </div>
                          <span className="text-gray-400 text-xs sm:text-sm">
                            {techExperience[activeIndex].years} Years Experience
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl"
              >
                I create exceptional digital experiences that combine beautiful
                interfaces with powerful functionality to help businesses thrive
                in the digital world.
              </motion.p>
            </div>

            {/* Interactive tech skills progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-xl"
            >
              <div className="flex mb-3 items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  <span className="text-white font-semibold">Key Skills</span>
                </div>
                <div className="flex space-x-1">
                  {techExperience.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        activeIndex === idx ? "bg-primary" : "bg-gray-500"
                      }`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden h-20 sm:h-24 bg-gray-900/50 rounded-lg border border-gray-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 p-3 sm:p-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {techExperience[activeIndex].skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          className="px-2 py-1 text-xs sm:text-sm rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-400">
                      {techExperience[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-dark font-medium rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border border-gray-700 hover:border-primary/50 text-white font-medium rounded-lg overflow-hidden group transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="flex items-center gap-2">
                  <FaFileDownload className="text-sm" />
                  Download Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Social links with hover effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 pt-2 pb-4 sm:pb-0"
            >
              <motion.a
                href="https://github.com/ajaysingh1997"
                target="_blank"
                rel="noreferrer"
                className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <FaGithub className="text-xl" />
                <motion.span
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-1 left-0 h-px bg-primary"
                />
                <span className="sr-only">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ajay-singh-1997/"
                target="_blank"
                rel="noreferrer"
                className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="text-xl" />
                <motion.span
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-1 left-0 h-px bg-primary"
                />
                <span className="sr-only">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://twitter.com/ajaysingh1997"
                target="_blank"
                rel="noreferrer"
                className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <FaTwitter className="text-xl" />
                <motion.span
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-1 left-0 h-px bg-primary"
                />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Animated Profile Image with 3D effect */}
          <motion.div
            className="lg:col-span-5 relative mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-primary/30 z-10"
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-primary/30 z-10"
                animate={{ rotate: [0, -5, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 3D Card Effect */}
              <motion.div
                className="relative h-full w-full rounded-2xl p-2 bg-gradient-to-br from-primary/20 via-purple-500/5 to-blue-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                style={{
                  rotateX: useTransform(
                    springCursorY,
                    [0, window.innerHeight],
                    [10, -10]
                  ),
                  rotateY: useTransform(
                    springCursorX,
                    [0, window.innerWidth],
                    [-10, 10]
                  ),
                  perspective: "1000px",
                }}
              >
                {/* Image Container */}
                <div className="h-full w-full overflow-hidden rounded-xl bg-gray-900 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    {/* Image Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-gray-900/0 z-10"></div>

                    {/* Image */}
                    <img
                      src="/profile.jpg"
                      alt="Ajay Singh"
                      className="h-full w-full object-cover object-center"
                    />

                    {/* Experience Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 text-white text-xs sm:text-sm font-medium z-20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.3 }}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        10+ Years Experience
                      </span>
                    </motion.div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 inset-x-0 p-4 z-20">
                      <motion.div
                        className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-gray-400">
                              Current Focus
                            </p>
                            <p className="text-sm sm:text-base text-white font-medium">
                              AI-Driven Full Stack Applications
                            </p>
                          </div>
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
