import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobile,
  FaTools,
  FaLaptopCode,
  FaCloud,
  FaLayerGroup,
  FaChartBar,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaGlobe,
  FaDesktop,
  FaTerminal,
  FaGithub,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaAws,
  FaJs,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaAngular,
  FaPython,
  FaJava,
  FaPhp,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend", icon: FaDesktop },
    { id: "backend", label: "Backend", icon: FaServer },
    { id: "database", label: "Database", icon: FaDatabase },
    { id: "devops", label: "DevOps", icon: FaCloud },
    { id: "mobile", label: "Mobile", icon: FaMobile },
    { id: "tools", label: "Tools", icon: FaTools },
  ];

  const skillsData = {
    frontend: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        level: 95,
        description:
          "Expert in React with 5+ years of experience building complex applications with Redux, Context API, and React Query.",
        projects: [
          "E-commerce Platform",
          "Analytics Dashboard",
          "Social Media App",
        ],
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        level: 90,
        description:
          "Advanced JavaScript developer with deep knowledge of ES6+, asynchronous patterns, and functional programming.",
        projects: [
          "Real-time Chat Application",
          "Browser-based Game",
          "Interactive Maps",
        ],
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        level: 85,
        description:
          "Strong TypeScript skills with experience in type definitions, interfaces, and advanced typing patterns.",
        projects: [
          "Enterprise CRM",
          "Financial Dashboard",
          "API Client Library",
        ],
      },
      {
        name: "HTML5/CSS3",
        icon: FaHtml5,
        color: "#E34F26",
        level: 90,
        description:
          "Expert in semantic HTML5 and modern CSS3 including Flexbox, Grid, and CSS animations.",
        projects: [
          "Responsive Marketing Sites",
          "Email Templates",
          "Landing Pages",
        ],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: 90,
        description:
          "Advanced Tailwind CSS skills for rapid UI development with custom configurations and plugins.",
        projects: ["Company Website", "Admin Dashboard", "Documentation Site"],
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        level: 85,
        description:
          "Experienced with Next.js for server-side rendering, static site generation, and API routes.",
        projects: ["E-commerce Store", "Blog Platform", "Marketing Website"],
      },
      {
        name: "Vue.js",
        icon: FaVuejs,
        color: "#4FC08D",
        level: 75,
        description:
          "Proficient in Vue.js with experience in Vue Router, Vuex, and Vue 3 Composition API.",
        projects: [
          "Customer Portal",
          "Internal Tools",
          "Data Visualization App",
        ],
      },
      {
        name: "Angular",
        icon: FaAngular,
        color: "#DD0031",
        level: 70,
        description:
          "Working knowledge of Angular with experience in components, services, and RxJS.",
        projects: [
          "Enterprise Dashboard",
          "Healthcare Portal",
          "IoT Control Panel",
        ],
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        level: 90,
        description:
          "Expert in Node.js backend development with Express, authentication, and RESTful API design.",
        projects: [
          "Microservices Architecture",
          "Payment Processing System",
          "Content Management API",
        ],
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        level: 90,
        description:
          "Advanced Express.js skills for building robust APIs with middleware, routing, and error handling.",
        projects: [
          "E-commerce API",
          "Authentication Service",
          "Data Processing Pipeline",
        ],
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        level: 85,
        description:
          "Strong GraphQL skills with Apollo Server, resolvers, and schema design.",
        projects: [
          "Content API",
          "Social Network Backend",
          "E-commerce Platform",
        ],
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        level: 80,
        description:
          "Proficient in Python with Django, Flask, and data processing libraries.",
        projects: ["Data Analysis Tool", "Web Scraper", "Automation Scripts"],
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396",
        level: 75,
        description:
          "Experienced in Java with Spring Boot for enterprise applications and microservices.",
        projects: [
          "Enterprise Resource Planning",
          "Banking System",
          "Logistics Platform",
        ],
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "#777BB4",
        level: 70,
        description:
          "Working knowledge of PHP with Laravel for web applications and APIs.",
        projects: [
          "Content Management System",
          "E-learning Platform",
          "Community Forum",
        ],
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        level: 90,
        description:
          "Expert in MongoDB with advanced querying, aggregation pipelines, and schema design.",
        projects: [
          "User Analytics Platform",
          "Content Repository",
          "Real-time Dashboard",
        ],
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        level: 85,
        description:
          "Strong PostgreSQL skills with complex queries, indexing, and performance optimization.",
        projects: [
          "Financial System",
          "Inventory Management",
          "Reporting Platform",
        ],
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "#DC382D",
        level: 80,
        description:
          "Proficient in Redis for caching, session management, and pub/sub messaging.",
        projects: [
          "Caching Layer",
          "Rate Limiting Service",
          "Real-time Notifications",
        ],
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        level: 85,
        description:
          "Advanced Firebase skills including Firestore, Authentication, and Cloud Functions.",
        projects: ["Mobile Backend", "User Authentication", "Real-time Chat"],
      },
    ],
    devops: [
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
        level: 85,
        description:
          "Strong AWS skills with EC2, S3, Lambda, and CloudFormation for scalable cloud infrastructure.",
        projects: [
          "Serverless Architecture",
          "CI/CD Pipeline",
          "Multi-region Deployment",
        ],
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        level: 90,
        description:
          "Expert in Docker containerization with multi-stage builds and Docker Compose.",
        projects: [
          "Microservices Platform",
          "Development Environments",
          "Continuous Integration",
        ],
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        color: "#326CE5",
        level: 80,
        description:
          "Proficient in Kubernetes for container orchestration, deployments, and scaling.",
        projects: ["Production Cluster", "Auto-scaling System", "Service Mesh"],
      },
      {
        name: "GitHub Actions",
        icon: FaGithub,
        color: "#181717",
        level: 85,
        description:
          "Advanced CI/CD automation with GitHub Actions for testing, building, and deployment.",
        projects: [
          "Automated Testing",
          "Release Management",
          "Documentation Generation",
        ],
      },
    ],
    mobile: [
      {
        name: "React Native",
        icon: FaReact,
        color: "#61DAFB",
        level: 85,
        description:
          "Strong React Native skills for cross-platform mobile app development with native modules.",
        projects: [
          "Social Media App",
          "Fitness Tracker",
          "E-commerce Mobile App",
        ],
      },
      {
        name: "iOS Development",
        icon: FaApple,
        color: "#000000",
        level: 70,
        description:
          "Working knowledge of iOS development with Swift and UIKit.",
        projects: ["Health Tracking App", "Productivity Tool", "Media Player"],
      },
      {
        name: "Android Development",
        icon: FaAndroid,
        color: "#3DDC84",
        level: 65,
        description: "Basic Android development skills with Java and Kotlin.",
        projects: ["Utility App", "Location Tracker", "Simple Game"],
      },
    ],
    tools: [
      {
        name: "Git",
        icon: FaGithub,
        color: "#F05032",
        level: 95,
        description:
          "Expert in Git version control with advanced branching strategies and workflows.",
        projects: [
          "Open Source Contributions",
          "Team Collaboration",
          "Release Management",
        ],
      },
      {
        name: "VS Code",
        icon: FaCode,
        color: "#007ACC",
        level: 90,
        description:
          "Advanced VS Code user with custom extensions, snippets, and settings.",
        projects: [
          "Custom Workspace Setup",
          "Team Standardization",
          "Productivity Enhancements",
        ],
      },
      {
        name: "Terminal",
        icon: FaTerminal,
        color: "#4D4D4D",
        level: 90,
        description:
          "Proficient in command line tools, shell scripting, and automation.",
        projects: [
          "Build Scripts",
          "Deployment Automation",
          "Development Workflows",
        ],
      },
      {
        name: "Webpack",
        icon: FaLayerGroup,
        color: "#8DD6F9",
        level: 85,
        description:
          "Strong Webpack skills for module bundling, code splitting, and optimization.",
        projects: [
          "Build Configuration",
          "Performance Optimization",
          "Asset Management",
        ],
      },
    ],
  };

  const activeSkills = skillsData[activeCategory] || [];

  // Function to get icon color based on skill level
  const getLevelColor = (level) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    return "text-gray-500";
  };

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
          className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[100px]"
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
          className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-[100px]"
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
              Technical Expertise
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Skills & Technologies
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            My technical toolkit and expertise across various domains of
            software development.
          </Motion.p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-5 py-3 rounded-lg transition-all duration-300 overflow-hidden ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <category.icon
                    className={
                      activeCategory === category.id
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-200"
                    }
                  />
                  <span>{category.label}</span>
                </span>
                {activeCategory === category.id && (
                  <Motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </Motion.div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeSkills.map((skill) => (
              <Motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${skill.color}20`,
                          color: skill.color,
                        }}
                      >
                        <skill.icon className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`text-sm font-medium ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Level Bar */}
                  <div className="w-full h-1.5 bg-gray-800 rounded-full mb-4 overflow-hidden">
                    <Motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {skill.description}
                  </p>

                  {/* Projects */}
                  <div>
                    <h4 className="text-white text-sm font-medium mb-2">
                      Recent Projects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
