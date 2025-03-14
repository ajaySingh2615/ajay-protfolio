import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMedal,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaStar,
  FaLink,
  FaBookOpen,
  FaAward,
  FaUserGraduate,
} from "react-icons/fa";

// Animation variants for better performance
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 },
    },
  },
};

const achievementVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
};

const courseVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.2,
    },
  }),
};

const Education = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Throttle mouse movement updates for better performance
      if (!window.requestAnimationFrame) {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        setMousePosition({ x: moveX, y: moveY });
        return;
      }

      window.requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        setMousePosition({ x: moveX, y: moveY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const educationData = [
    {
      id: "edu1",
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks and Deep Learning architectures.",
      achievements: [
        "Graduated with Distinction (GPA: 3.9/4.0)",
        "Teaching Assistant for Advanced Algorithms course",
        "Published research paper on 'Optimizing Neural Networks for Edge Computing'",
      ],
      courses: [
        "Advanced Machine Learning",
        "Deep Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "Distributed Systems",
      ],
      icon: FaUniversity,
      color: "from-blue-600 to-blue-400",
      type: "degree",
      website: "https://stanford.edu",
      rating: 5,
      skills: ["AI/ML", "Research", "Algorithm Design", "Neural Networks"],
    },
    {
      id: "edu2",
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2014 - 2018",
      description:
        "Comprehensive program covering both hardware and software aspects of computing systems with minor in Mathematics.",
      achievements: [
        "Dean's List for all semesters",
        "Senior thesis on 'Efficient Algorithms for IoT Networks'",
        "President of the Robotics Club",
      ],
      courses: [
        "Data Structures and Algorithms",
        "Computer Architecture",
        "Operating Systems",
        "Database Systems",
        "Software Engineering",
      ],
      icon: FaGraduationCap,
      color: "from-red-600 to-red-400",
      type: "degree",
      website: "https://mit.edu",
      rating: 5,
      skills: [
        "Algorithms",
        "System Design",
        "Software Engineering",
        "Leadership",
      ],
    },
    {
      id: "cert1",
      degree: "Professional Certification in Cloud Computing",
      institution: "Amazon Web Services (AWS)",
      location: "Online",
      period: "2021",
      description:
        "Comprehensive certification covering AWS architecture, services, and best practices for cloud solutions.",
      achievements: [
        "AWS Certified Solutions Architect - Professional",
        "AWS Certified DevOps Engineer - Professional",
        "Completed 5 hands-on projects deploying scalable applications",
      ],
      courses: [
        "Cloud Architecture",
        "Serverless Computing",
        "Containerization with Docker and Kubernetes",
        "Infrastructure as Code",
        "Cloud Security",
      ],
      icon: FaCertificate,
      color: "from-yellow-500 to-yellow-300",
      type: "certification",
      website: "https://aws.amazon.com/certification/",
      rating: 4,
      skills: ["AWS", "Cloud Architecture", "DevOps", "Serverless"],
    },
    {
      id: "cert2",
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Innovators Academy",
      location: "San Francisco, CA",
      period: "2019",
      description:
        "Intensive 12-week bootcamp focused on modern web development technologies and practices.",
      achievements: [
        "Developed 3 full-stack applications from concept to deployment",
        "Won 'Best Project' award for e-commerce platform",
        "Mentored 5 junior developers in subsequent cohorts",
      ],
      courses: [
        "JavaScript/TypeScript",
        "React & Redux",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "RESTful API Design",
      ],
      icon: FaLaptopCode,
      color: "from-green-600 to-green-400",
      type: "bootcamp",
      website: "https://techinnovators.com",
      rating: 4,
      skills: ["Full Stack", "JavaScript", "React", "Node.js", "MongoDB"],
    },
  ];

  const filteredEducation =
    activeFilter === "all"
      ? educationData
      : educationData.filter((item) => item.type === activeFilter);

  const filters = [
    { id: "all", label: "All", icon: FaBookOpen },
    { id: "degree", label: "Degrees", icon: FaUserGraduate },
    { id: "certification", label: "Certifications", icon: FaCertificate },
    { id: "bootcamp", label: "Bootcamps", icon: FaLaptopCode },
  ];

  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      {/* Background Elements - Simplified for better performance */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/80" />
        <Motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: "30px 30px",
            willChange: "transform",
          }}
        />
        {/* Simplified Glowing Orbs with hardware acceleration */}
        <Motion.div
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
          style={{ willChange: "transform" }}
        />
        <Motion.div
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full px-6 py-3 mb-4 border border-primary/20 backdrop-blur-sm"
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 0.005
              }deg) rotateY(${mousePosition.x * 0.005}deg)`,
              willChange: "transform",
            }}
          >
            <Motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-primary"
              style={{ willChange: "transform" }}
            />
            <span className="text-primary font-medium text-sm">
              My Background
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-light mb-6 leading-tight"
          >
            Education &
            <Motion.span
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
              Certifications
            </Motion.span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-light/60 text-lg"
          >
            My academic journey and professional certifications that have shaped
            my expertise and knowledge in the field.
          </Motion.p>
        </div>

        {/* Filter Tabs */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <Motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-dark font-medium"
                  : "bg-light/5 text-light/60 hover:bg-light/10"
              }`}
            >
              <filter.icon className="text-sm" />
              <span>{filter.label}</span>
            </Motion.button>
          ))}
        </Motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-blue-500/50 to-purple-500/50 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            <AnimatePresence mode="wait" initial={false}>
              <div key={activeFilter}>
                {filteredEducation.map((item, index) => (
                  <Motion.div
                    key={item.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.05 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    } mb-12 last:mb-0`}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Timeline Dot */}
                    <Motion.div
                      className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-500 transform -translate-x-1/2 hidden md:flex items-center justify-center"
                      animate={{
                        scale: hoveredItem === item.id ? 1.2 : 1,
                        boxShadow:
                          hoveredItem === item.id
                            ? "0 0 15px rgba(var(--primary-rgb), 0.5)"
                            : "none",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-dark" />
                    </Motion.div>

                    {/* Content */}
                    <div className="md:w-1/2 relative">
                      <Motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-light/5 border rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
                          hoveredItem === item.id
                            ? "border-primary/30 shadow-lg shadow-primary/5"
                            : "border-light/10"
                        }`}
                      >
                        {/* Decorative Elements - Simplified */}
                        <div
                          className={`absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br ${
                            item.color
                          } opacity-10 transition-all duration-300 ${
                            hoveredItem === item.id
                              ? "scale-125 opacity-15"
                              : "scale-100 opacity-10"
                          }`}
                        />

                        <div className="flex items-start gap-4">
                          <Motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className="text-light text-xl" />
                          </Motion.div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3
                                className={`text-xl font-bold transition-colors duration-300 ${
                                  hoveredItem === item.id
                                    ? "text-primary"
                                    : "text-light"
                                }`}
                              >
                                {item.degree}
                              </h3>
                              <Motion.button
                                onClick={() => toggleExpand(item.id)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="p-1 rounded-full bg-light/10 text-light/60 hover:bg-light/20 hover:text-light"
                              >
                                {expandedItem === item.id ? (
                                  <FaChevronUp />
                                ) : (
                                  <FaChevronDown />
                                )}
                              </Motion.button>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-light/60">
                              <div className="flex items-center gap-1">
                                <FaUniversity className="text-xs" />
                                <span>{item.institution}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaCalendarAlt className="text-xs" />
                                <span>{item.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaMapMarkerAlt className="text-xs" />
                                <span>{item.location}</span>
                              </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={`text-xs ${
                                    i < item.rating
                                      ? "text-yellow-400"
                                      : "text-light/20"
                                  }`}
                                />
                              ))}
                            </div>

                            <p className="mt-3 text-light/70">
                              {item.description}
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {item.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 text-xs rounded-full bg-light/5 text-light/60 border border-light/10 hover:bg-light/10 hover:border-primary/30 transition-colors duration-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <AnimatePresence initial={false}>
                              {expandedItem === item.id && (
                                <Motion.div
                                  variants={expandVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="mt-4 pt-4 border-t border-light/10"
                                >
                                  {/* Achievements */}
                                  <div className="mb-4">
                                    <h4 className="text-light font-medium mb-2 flex items-center gap-2">
                                      <FaMedal className="text-primary" />
                                      <span>Achievements</span>
                                    </h4>
                                    <ul className="space-y-1">
                                      {item.achievements.map(
                                        (achievement, i) => (
                                          <Motion.li
                                            key={i}
                                            custom={i}
                                            variants={achievementVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="flex items-start gap-2 text-light/70"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                            <span>{achievement}</span>
                                          </Motion.li>
                                        )
                                      )}
                                    </ul>
                                  </div>

                                  {/* Courses */}
                                  <div className="mb-4">
                                    <h4 className="text-light font-medium mb-2 flex items-center gap-2">
                                      <FaCode className="text-primary" />
                                      <span>Key Courses</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {item.courses.map((course, i) => (
                                        <Motion.span
                                          key={i}
                                          custom={i}
                                          variants={courseVariants}
                                          initial="hidden"
                                          animate="visible"
                                          className="px-3 py-1 rounded-full text-xs font-medium bg-light/5 text-light/60 border border-light/10 hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                                        >
                                          {course}
                                        </Motion.span>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Website Link */}
                                  <a
                                    href={item.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 hover:translate-x-1"
                                  >
                                    <FaLink className="text-xs" />
                                    <span className="text-sm">
                                      Visit Website
                                    </span>
                                  </a>
                                </Motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </Motion.div>
                    </div>

                    {/* Empty Space for Timeline Layout */}
                    <div className="md:w-1/2" />
                  </Motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
