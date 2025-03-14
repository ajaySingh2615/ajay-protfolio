import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaAws,
  FaDatabase,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiPython } from "react-icons/si";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const qualities = [
    {
      icon: FaCode,
      title: "Clean Code Advocate",
      description:
        "Writing maintainable, scalable, and efficient code following best practices and design patterns.",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description:
        "Approaching challenges with analytical thinking and innovative solutions.",
    },
    {
      icon: FaRocket,
      title: "Performance Focused",
      description:
        "Optimizing applications for speed, efficiency, and exceptional user experience.",
    },
    {
      icon: FaUsers,
      title: "Team Collaborator",
      description:
        "Working effectively with cross-functional teams to deliver outstanding results.",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      level: 95,
      color: "#F7DF1E",
      Icon: SiJavascript,
      bgColor: "rgba(247, 223, 30, 0.1)",
    },
    {
      name: "React.js",
      level: 90,
      color: "#61DAFB",
      Icon: SiReact,
      bgColor: "rgba(97, 218, 251, 0.1)",
    },
    {
      name: "Node.js",
      level: 88,
      color: "#339933",
      Icon: SiNodedotjs,
      bgColor: "rgba(51, 153, 51, 0.1)",
    },
    {
      name: "Python",
      level: 85,
      color: "#3776AB",
      Icon: SiPython,
      bgColor: "rgba(55, 118, 171, 0.1)",
    },
    {
      name: "AWS Cloud",
      level: 82,
      color: "#FF9900",
      Icon: FaAws,
      bgColor: "rgba(255, 153, 0, 0.1)",
    },
    {
      name: "MongoDB",
      level: 85,
      color: "#47A248",
      Icon: FaDatabase,
      bgColor: "rgba(71, 162, 72, 0.1)",
    },
    {
      name: "REST APIs",
      level: 92,
      color: "#FF6C37",
      Icon: FaServer,
      bgColor: "rgba(255, 108, 55, 0.1)",
    },
    {
      name: "GraphQL",
      level: 80,
      color: "#E535AB",
      Icon: FaProjectDiagram,
      bgColor: "rgba(229, 53, 171, 0.1)",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "#", color: "#333" },
    { icon: FaLinkedin, url: "#", color: "#0077B5" },
    { icon: FaTwitter, url: "#", color: "#1DA1F2" },
  ];

  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      {/* Particle Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/80" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: "30px 30px",
          }}
        />
        {/* Enhanced Glowing Orbs with Mouse Movement */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Section Header with 3D Effect */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full px-6 py-3 mb-4 border border-primary/20 backdrop-blur-sm"
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 0.01
              }deg) rotateY(${mousePosition.x * 0.01}deg)`,
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="text-primary font-medium text-sm">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-light mb-6 leading-tight"
          >
            Transforming Ideas into
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% ml-2"
            >
              Digital Reality
            </motion.span>
          </motion.h2>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Enhanced Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={{
              transform: `perspective(2000px) rotateY(${
                mousePosition.x * 0.02
              }deg) rotateX(${mousePosition.y * -0.02}deg)`,
            }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10">
              {/* Enhanced Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-2 -left-2 w-20 h-20 border-4 border-primary/20 rounded-lg z-10"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-2 -right-2 w-20 h-20 border-4 border-primary/20 rounded-lg z-10"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full group cursor-pointer"
              >
                <img
                  src="/workplace.jpg"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-dark/20 to-dark/30 mix-blend-multiply"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-light text-lg font-medium bg-dark/80 px-6 py-2 rounded-full shadow-lg"
                  >
                    View Workspace
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Experience Card with 3D Transform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute -bottom-6 -right-6 bg-dark/95 backdrop-blur-xl border border-light/10 p-6 rounded-2xl shadow-2xl"
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 0.02
                }deg) rotateY(${mousePosition.x * 0.02}deg)`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-2xl text-primary font-bold relative z-10"
                    >
                      10+
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-xl border-2 border-primary/20"
                  />
                </div>
                <div>
                  <p className="text-light/80 text-sm">Years of</p>
                  <p className="text-light font-semibold text-lg">Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, x: 5 }}
                  className="w-10 h-10 rounded-full bg-dark/90 backdrop-blur-sm border border-light/10 flex items-center justify-center text-light/60 hover:text-light transition-colors duration-300"
                  style={{
                    boxShadow: `0 0 20px ${social.color}20`,
                  }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-light leading-tight">
                Crafting Digital Excellence with
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% ml-2"
                >
                  Innovation
                </motion.span>
              </h3>

              <p className="text-light/70 leading-relaxed text-lg">
                With over a decade of experience in software development, I've
                dedicated my career to creating innovative solutions that make a
                difference. My journey in tech has been driven by a passion for
                clean code, user-centric design, and cutting-edge technologies.
              </p>

              {/* Enhanced Skills Display */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `linear-gradient(120deg, ${skill.bgColor}, ${skill.color}20)`,
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                      }}
                      animate={{
                        scale: hoveredSkill === skill.name ? [1, 1.02, 1] : 1,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="relative p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-light font-medium flex items-center gap-2">
                          <skill.Icon
                            className="text-2xl"
                            style={{ color: skill.color }}
                          />
                          {skill.name}
                          {hoveredSkill === skill.name && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1, rotate: 360 }}
                              className="text-primary"
                            >
                              <FaStar className="text-sm" />
                            </motion.span>
                          )}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-light/5 rounded-full overflow-hidden p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              background: [
                                `linear-gradient(90deg, ${skill.color}00, ${skill.color}50)`,
                                `linear-gradient(90deg, ${skill.color}50, ${skill.color}00)`,
                              ],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Qualities Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-light/5 to-light/[0.02] border border-light/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="flex items-start gap-4 relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary group-hover:scale-110 transition-transform duration-300"
                    >
                      <quality.icon className="text-2xl" />
                    </motion.div>
                    <div>
                      <h4 className="text-light font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        {quality.title}
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="text-primary"
                        >
                          <FaArrowRight className="text-sm" />
                        </motion.div>
                      </h4>
                      <p className="text-light/60 text-sm leading-relaxed">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
