import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaLink,
  FaTasks,
  FaUsers,
  FaAward,
  FaBuilding,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState("exp1");

  const experienceData = [
    {
      id: "exp1",
      role: "Associate Software Engineer",
      company: "Sortout Innovation",
      location: "Spaze i-Tech Park, Gurugram, India",
      period: "Jan 2025 - Present",
      description:
        "As a passionate Web Developer specializing in frontend and backend technologies, I focus on building dynamic, responsive, and high-performance websites. My work involves creating seamless UI/UX experiences and implementing robust backend functionality.",
      responsibilities: [
        "Develop and maintain dynamic, responsive websites with modern web technologies",
        "Implement robust backend functionality using Spring Boot",
        "Collaborate with design and product teams to ensure seamless UI/UX experiences",
        "Optimize website performance and ensure cross-browser compatibility",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "Spring Boot",
        "React",
        "REST APIs",
      ],
      icon: FaLaptopCode,
      color: "#3B82F6",
      type: "fulltime",
      website: "https://sortoutinnovation.com",
      achievements: [
        "Contributed to projects across digital marketing, IT, and event management sectors",
        "Improved site performance by implementing modern frontend optimization techniques",
        "Collaborated on cross-functional teams to deliver client solutions",
      ],
    },
    {
      id: "exp2",
      role: "Associate Software Engineer",
      company: "Brenolabs",
      location: "Bengaluru, Karnataka, India (Remote)",
      period: "Sep 2023 - Dec 2024",
      description:
        "Led NodeJS & ReactJS full-stack projects, taking the initiative in problem-solving and application improvement. Worked closely with team members to enhance functionality and user experience.",
      responsibilities: [
        "Led full-stack development projects using NodeJS and ReactJS",
        "Collaborated with team members to identify and resolve application issues",
        "Implemented improvements that boosted application functionality and usability by 25%",
        "Conducted code reviews and mentored junior developers",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "JavaScript",
        "Express",
        "MongoDB",
        "RESTful APIs",
        "Spring Boot",
      ],
      icon: FaCode,
      color: "#10B981",
      type: "fulltime",
      website: "https://www.brenolabs.com/",
      achievements: [
        "Improved application functionality and usability by 25%",
        "Successfully delivered multiple client projects ahead of schedule",
        "Introduced efficient development practices that reduced bug rate",
      ],
    },
    {
      id: "exp3",
      role: "Software Engineer Intern",
      company: "Appilary Technologies",
      location: "Noida, Uttar Pradesh, India",
      period: "Jun 2023 - Sep 2023",
      description:
        "Played a crucial role in the development, design, and maintenance of software applications. Gained hands-on experience in full-stack development and software engineering practices.",
      responsibilities: [
        "Developed and maintained web applications using modern technologies",
        "Collaborated with senior developers on software architecture and design",
        "Participated in code reviews and implemented feedback",
        "Assisted in troubleshooting and debugging issues",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Git",
        "Spring Boot",
      ],
      icon: FaServer,
      color: "#8B5CF6",
      type: "fulltime",
      website: "https://appilary.com",
      achievements: [
        "Successfully completed assigned projects within deadline",
        "Received positive feedback from senior developers and management",
        "Contributed valuable features to production applications",
      ],
    },
    {
      id: "exp4",
      role: "Web Developer Intern",
      company: "Tata Consultancy Services",
      location: "Remote",
      period: "Feb 2023 - May 2023",
      description:
        "Engineered and deployed a 'Dry Cleaner' website, leveraging frontend technologies to deliver an innovative user experience with enhanced functionality.",
      responsibilities: [
        "Developed a complete 'Dry Cleaner' website from concept to deployment",
        "Implemented WhatsApp API integration for appointment bookings",
        "Created responsive designs for optimal viewing on all devices",
        "Enhanced user experience through interactive JavaScript functionalities",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "WhatsApp API",
        "Responsive Design",
      ],
      icon: FaMobileAlt,
      color: "#EC4899",
      type: "internship",
      website: "https://www.tcs.com",
      achievements: [
        "Increased appointment bookings by 40% through WhatsApp API integration",
        "Streamlined communication for customer inquiries",
        "Delivered a fully-functional website that met all client requirements",
      ],
    },
  ];

  const activeExp = experienceData.find((exp) => exp.id === activeExperience);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />

        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Animated glow */}
        <Motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[100px]"
        />
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
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full px-4 sm:px-6 py-2 mb-4 border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">
              Work History
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Professional Experience
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg px-2"
          >
            My journey through the tech industry, building innovative solutions
            and leading development teams.
          </Motion.p>
        </div>

        {/* Mobile Timeline Navigation */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-2 min-w-max">
            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`py-2 px-4 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                  activeExperience === exp.id
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600"
                }`}
                style={{
                  boxShadow:
                    activeExperience === exp.id
                      ? `0 0 10px ${exp.color}30`
                      : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <exp.icon className="text-sm" />
                  <span>{exp.company}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Side - Experience Timeline (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-4 space-y-4">
            {experienceData.map((exp, index) => (
              <Motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative cursor-pointer group`}
                onClick={() => setActiveExperience(exp.id)}
              >
                <div
                  className={`
                    relative z-10 p-5 rounded-xl border transition-all duration-300
                    ${
                      activeExperience === exp.id
                        ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-gray-800 bg-gray-900/30 hover:bg-gray-900/50"
                    }
                  `}
                  style={{
                    transform:
                      activeExperience === exp.id
                        ? "translateX(20px)"
                        : "translateX(0)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        activeExperience === exp.id
                          ? "bg-primary/20"
                          : "bg-gray-800"
                      }`}
                      style={{
                        color:
                          activeExperience === exp.id ? exp.color : "#6b7280",
                      }}
                    >
                      <exp.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold transition-colors duration-300 ${
                          activeExperience === exp.id
                            ? "text-primary"
                            : "text-white group-hover:text-primary/80"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    {activeExperience === exp.id && (
                      <div className="text-primary">
                        <FaChevronRight />
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector Line */}
                {index < experienceData.length - 1 && (
                  <div
                    className={`absolute left-[2.25rem] top-[4.5rem] w-px h-[calc(100%-1rem)] transition-all duration-300 ${
                      activeExperience === exp.id ||
                      activeExperience === experienceData[index + 1].id
                        ? "bg-primary/50"
                        : "bg-gray-800"
                    }`}
                  />
                )}
              </Motion.div>
            ))}
          </div>

          {/* Right Side - Experience Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden"
                style={{
                  boxShadow: "0 20px 80px -20px rgba(0, 0, 0, 0.5)",
                  backgroundImage: `radial-gradient(circle at top right, rgba(${activeExp.color
                    .replace("#", "")
                    .match(/.{2}/g)
                    .map((hex) => parseInt(hex, 16))
                    .join(", ")}, 0.03), transparent 70%)`,
                }}
              >
                {/* Header */}
                <div className="p-5 sm:p-8 border-b border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{
                          backgroundColor: `${activeExp.color}20`,
                          color: activeExp.color,
                        }}
                      >
                        <activeExp.icon className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-0">
                          {activeExp.role}
                        </h3>
                        <p className="text-gray-400">{activeExp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt style={{ color: activeExp.color }} />
                        <span>{activeExp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt style={{ color: activeExp.color }} />
                        <span>{activeExp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBuilding style={{ color: activeExp.color }} />
                        <span>
                          {activeExp.type === "fulltime"
                            ? "Full-time"
                            : "Contract"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8">
                  <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                    {activeExp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-white font-medium mb-3 sm:mb-4 flex items-center gap-2">
                      <FaCode style={{ color: activeExp.color }} />
                      <span>Technologies</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.technologies.map((tech, i) => (
                        <Motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-gray-300 text-xs sm:text-sm border border-gray-700 hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </Motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities and Achievements (stacked on mobile, two columns on larger screens) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-medium mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <FaTasks style={{ color: activeExp.color }} />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {activeExp.responsibilities.map((resp, i) => (
                          <Motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: activeExp.color }}
                            />
                            <span>{resp}</span>
                          </Motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-medium mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                        <FaAward style={{ color: activeExp.color }} />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {activeExp.achievements.map((achievement, i) => (
                          <Motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
                            className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: activeExp.color }}
                            />
                            <span>{achievement}</span>
                          </Motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Website Link */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                    <a
                      href={activeExp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-xs sm:text-sm font-medium group"
                    >
                      <span style={{ color: activeExp.color }}>
                        Visit Company Website
                      </span>
                      <FaExternalLinkAlt
                        className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
                        style={{ color: activeExp.color }}
                      />
                    </a>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
