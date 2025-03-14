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
      role: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      location: "San Francisco, CA",
      period: "2020 - Present",
      description:
        "Leading development of enterprise SaaS platforms with React, Node.js, and AWS. Architecting scalable solutions and mentoring junior developers.",
      responsibilities: [
        "Architected and implemented a microservices-based application that improved system scalability by 300%",
        "Led a team of 6 developers to deliver projects consistently ahead of schedule",
        "Reduced cloud infrastructure costs by 40% through optimization and serverless architecture",
        "Implemented CI/CD pipelines that decreased deployment time from days to minutes",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "MongoDB",
        "GraphQL",
      ],
      icon: FaLaptopCode,
      color: "#3B82F6",
      type: "fulltime",
      website: "https://technova.example.com",
      achievements: [
        "Employee of the Year 2021",
        "Led migration to microservices architecture",
        "Reduced application load time by 60%",
      ],
    },
    {
      id: "exp2",
      role: "Frontend Developer",
      company: "DataViz Innovations",
      location: "Remote",
      period: "2018 - 2020",
      description:
        "Developed interactive data visualization dashboards for financial services clients using React, D3.js, and Redux.",
      responsibilities: [
        "Built responsive dashboards that visualized complex financial data for Fortune 500 clients",
        "Collaborated with UX designers to implement intuitive user interfaces",
        "Optimized rendering performance for large datasets, improving load times by 70%",
        "Implemented automated testing that increased code coverage to 90%",
      ],
      technologies: [
        "React",
        "Redux",
        "D3.js",
        "SCSS",
        "Jest",
        "Webpack",
        "RESTful APIs",
      ],
      icon: FaCode,
      color: "#10B981",
      type: "fulltime",
      website: "https://dataviz.example.com",
      achievements: [
        "Developed company's component library",
        "Mentored 3 junior developers",
        "Presented at React Conference 2019",
      ],
    },
    {
      id: "exp3",
      role: "Backend Engineer",
      company: "CloudScale Systems",
      location: "Austin, TX",
      period: "2016 - 2018",
      description:
        "Designed and implemented scalable backend services for high-traffic applications using Node.js, Express, and PostgreSQL.",
      responsibilities: [
        "Developed RESTful APIs that handled 10M+ daily requests",
        "Implemented database optimization strategies that reduced query times by 80%",
        "Created authentication and authorization systems with OAuth 2.0 and JWT",
        "Collaborated with DevOps to implement containerization with Docker and Kubernetes",
      ],
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      icon: FaServer,
      color: "#8B5CF6",
      type: "fulltime",
      website: "https://cloudscale.example.com",
      achievements: [
        "Reduced server response time by 65%",
        "Implemented real-time notification system",
        "Designed scalable database architecture",
      ],
    },
    {
      id: "exp4",
      role: "Mobile App Developer",
      company: "HealthTech Innovations",
      location: "Remote",
      period: "2015 - 2016",
      description:
        "Developed cross-platform mobile applications for healthcare providers using React Native and Firebase.",
      responsibilities: [
        "Built patient management applications for iOS and Android from concept to deployment",
        "Integrated with healthcare APIs for secure data exchange",
        "Implemented offline-first functionality for rural healthcare providers",
        "Collaborated with healthcare professionals to design intuitive interfaces",
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Jest",
        "RESTful APIs",
        "iOS",
        "Android",
      ],
      icon: FaMobileAlt,
      color: "#EC4899",
      type: "contract",
      website: "https://healthtech.example.com",
      achievements: [
        "App featured in healthcare industry publication",
        "Implemented HIPAA-compliant data storage",
        "Reduced development time by 40% with reusable components",
      ],
    },
  ];

  const activeExp = experienceData.find((exp) => exp.id === activeExperience);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
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
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full px-6 py-2 mb-4 border border-primary/20 backdrop-blur-sm"
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
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Professional Experience
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            My journey through the tech industry, building innovative solutions
            and leading development teams.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Experience Timeline */}
          <div className="lg:col-span-4 space-y-4">
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
                <div className="p-8 border-b border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
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
                        <h3 className="text-2xl font-bold text-white">
                          {activeExp.role}
                        </h3>
                        <p className="text-gray-400">{activeExp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
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
                <div className="p-8">
                  <p className="text-gray-300 mb-8">{activeExp.description}</p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
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
                          className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm border border-gray-700 hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </Motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Layout for Responsibilities and Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                        <FaTasks style={{ color: activeExp.color }} />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-3">
                        {activeExp.responsibilities.map((resp, i) => (
                          <Motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-3 text-gray-400"
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
                      <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                        <FaAward style={{ color: activeExp.color }} />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-3">
                        {activeExp.achievements.map((achievement, i) => (
                          <Motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
                            className="flex items-start gap-3 text-gray-400"
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
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <a
                      href={activeExp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-sm font-medium group"
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
