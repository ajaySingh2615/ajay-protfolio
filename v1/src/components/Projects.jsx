import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaTags,
  FaCode,
  FaStar,
  FaEye,
  FaCodeBranch,
  FaCalendar,
  FaArrowRight,
  FaTools,
  FaBuilding,
} from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sortBy, setSortBy] = useState("featured");
  const [searchFocused, setSearchFocused] = useState(false);
  const [noResults, setNoResults] = useState(false);

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

  const categories = ["All", "Backend", "Frontend", "Full-stack"];
  const sortOptions = [
    { value: "featured", label: "Featured", icon: FaStar },
    { value: "stars", label: "Most Stars", icon: FaCodeBranch },
    { value: "recent", label: "Most Recent", icon: FaCalendar },
  ];

  const projects = [
    {
      title: "E-Commerce Backend API",
      description:
        "A robust backend API for an e-commerce platform with secure authentication, role-based authorization, and comprehensive RESTful endpoints for product, user, and order management.",
      image: "/projects/ecommerce-api.jpg",
      category: "Backend",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful APIs",
        "JWT",
        "Mongoose",
      ],
      liveDemo: "#",
      sourceCode: "https://github.com/ajaySingh2615/play-tube",
      stats: {
        stars: 12,
        views: 2.5,
        forks: 4,
      },
      highlights: [
        "Implemented JWT-based authentication and role-based authorization",
        "Designed and built a comprehensive RESTful API following MVC architecture",
        "Integrated MongoDB with Mongoose for efficient data modeling and validation",
        "Created middleware for error handling, request validation, and security",
      ],
      date: "2024-10-01",
      status: "Completed",
      tools: ["Postman", "GitHub", "VS Code", "Git"],
      featured: true,
      company: "Brenolabs",
      period: "Oct-Nov 2024",
    },
    {
      title: "Wanderlust Website",
      description:
        "A full-stack web application for exploring, reviewing, and sharing travel destinations. Features user authentication, dynamic image uploads, interactive maps, and rich content management.",
      image: "/projects/wanderlust.jpg",
      category: "Full-stack",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JavaScript",
        "Bootstrap",
        "CSS",
      ],
      liveDemo: "#",
      sourceCode: "https://github.com/ajaySingh2615/Full_Stack_Project",
      stats: {
        stars: 8,
        views: 1.8,
        forks: 3,
      },
      highlights: [
        "Built user authentication system with session management and password hashing",
        "Integrated MongoDB with Mongoose for structured data models and validation",
        "Implemented MVC architecture for clean code organization",
        "Created responsive UI with Bootstrap and custom CSS",
      ],
      date: "2023-05-15",
      status: "Completed",
      tools: ["GitHub", "VS Code", "Git", "Cloudinary"],
      featured: true,
      company: "IIMT College of Engineering, Greater Noida",
      period: "May-Sep 2023",
    },
    {
      title: "Indian Dry-Cleaner Website",
      description:
        "A responsive website for a local dry cleaning service featuring service details, pricing, location information, and WhatsApp integration for immediate booking and inquiries.",
      image: "/projects/dry-cleaner.jpg",
      category: "Frontend",
      techStack: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
      liveDemo: "#",
      sourceCode: "#",
      stats: {
        stars: 5,
        views: 1.2,
        forks: 1,
      },
      highlights: [
        "Designed responsive layouts using Bootstrap and custom CSS",
        "Implemented WhatsApp API integration for direct customer booking",
        "Created interactive pricing calculator for different services",
        "Optimized images and assets for fast page loading",
      ],
      date: "2023-02-10",
      status: "Completed",
      tools: ["GitHub", "VS Code", "Figma"],
      featured: false,
      company: "Tata Consultancy Services",
      period: "Feb-May 2023",
    },
  ];

  const sortProjects = (projects) => {
    switch (sortBy) {
      case "stars":
        return [...projects].sort((a, b) => b.stats.stars - a.stats.stars);
      case "recent":
        return [...projects].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      case "featured":
      default:
        return [...projects].sort((a, b) =>
          a.featured === b.featured ? 0 : a.featured ? -1 : 1
        );
    }
  };

  const filteredProjects = sortProjects(
    projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  );

  useEffect(() => {
    setNoResults(filteredProjects.length === 0);
  }, [searchQuery, selectedCategory, filteredProjects.length]);

  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/80" />
        <Motion.div
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
        {/* Enhanced Glowing Orbs */}
        <Motion.div
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
        <Motion.div
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
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <Motion.div
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
            <Motion.span
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
            <span className="text-primary font-medium text-sm">
              My Projects
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-light mb-6 leading-tight"
          >
            Featured
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
              Projects
            </Motion.span>
          </Motion.h2>
        </div>

        {/* Enhanced Search, Filter, and Sort */}
        <div className="mb-12 space-y-4">
          {/* Stats Overview */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Total Projects", value: projects.length, icon: FaCode },
              {
                label: "Total Stars",
                value: projects.reduce(
                  (acc, proj) => acc + proj.stats.stars,
                  0
                ),
                icon: FaStar,
              },
              {
                label: "Active Projects",
                value: projects.filter((p) => p.status === "Completed").length,
                icon: FaTools,
              },
              {
                label: "Technologies",
                value: [...new Set(projects.flatMap((p) => p.techStack))]
                  .length,
                icon: FaTags,
              },
            ].map((stat, index) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light/5 rounded-xl p-4 border border-light/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <stat.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-light/60 text-sm">{stat.label}</p>
                    <p className="text-light text-lg font-semibold">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Enhanced Search Bar with Animation */}
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full sm:w-96"
            >
              <Motion.div
                animate={{
                  scale: searchFocused ? 1.02 : 1,
                  borderColor: searchFocused
                    ? "rgba(var(--primary-rgb), 0.5)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
                className="relative"
              >
                <FaSearch
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                    searchFocused ? "text-primary" : "text-light/40"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-3 bg-light/5 border border-light/10 rounded-xl text-light placeholder-light/40 focus:outline-none focus:border-primary/50 transition-all duration-300"
                />
                {searchQuery && (
                  <Motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-light/10"
                  >
                    <span className="text-light/40 hover:text-light">×</span>
                  </Motion.button>
                )}
              </Motion.div>
              {noResults && searchQuery && (
                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 p-3 bg-light/5 border border-light/10 rounded-xl text-light/60 text-sm"
                >
                  No projects found matching "{searchQuery}"
                </Motion.div>
              )}
            </Motion.div>

            {/* Enhanced Sort Dropdown */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full sm:w-48 z-10"
            >
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-light/5 border border-light/10 rounded-xl text-light appearance-none cursor-pointer focus:outline-none focus:border-primary/50 transition-colors duration-300"
                style={{ backgroundColor: "rgb(17, 17, 17)" }}
              >
                {sortOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-dark text-light py-2"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
                {sortOptions
                  .find((opt) => opt.value === sortBy)
                  ?.icon({ className: "text-primary text-sm" })}
                <FaArrowRight className="text-light/40 text-sm transform rotate-90" />
              </div>
            </Motion.div>

            {/* Enhanced Category Filter */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 justify-center sm:justify-end"
            >
              {categories.map((category, index) => (
                <Motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-dark"
                      : "bg-light/5 text-light/60 hover:bg-light/10"
                  }`}
                >
                  {category}
                </Motion.button>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <Motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                  onHoverStart={() => setHoveredProject(project.title)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.title ? null : project.title
                    )
                  }
                >
                  <Motion.div
                    className="relative h-full rounded-2xl bg-light/5 border border-light/10 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                    animate={{
                      y: hoveredProject === project.title ? -5 : 0,
                    }}
                  >
                    {/* Enhanced Project Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60" />

                      {/* Enhanced Hover Overlay */}
                      <Motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredProject === project.title ? 1 : 0,
                        }}
                        className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <Motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-light/90 text-dark hover:bg-light transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </Motion.a>
                        <Motion.a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-light/90 text-dark hover:bg-light transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </Motion.a>
                      </Motion.div>

                      {/* Project Stats */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-light/80">
                            <FaStar className="text-yellow-500" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1 text-light/80">
                            <FaEye className="text-blue-400" />
                            <span>{project.stats.views}k</span>
                          </div>
                          <div className="flex items-center gap-1 text-light/80">
                            <FaCodeBranch className="text-green-400" />
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-light group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-light/60 text-sm">
                            <FaCalendar className="text-xs" />
                            <span>
                              {new Date(project.date).toLocaleDateString(
                                "en-US",
                                { month: "long", year: "numeric" }
                              )}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-light/30" />
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs ${
                                project.status === "Completed"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          {project.company && (
                            <div className="flex items-center gap-2 mt-1 text-light/60 text-sm">
                              <FaBuilding className="text-xs" />
                              <span>{project.company}</span>
                              {project.period && (
                                <>
                                  <span className="w-1 h-1 rounded-full bg-light/30" />
                                  <span>{project.period}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-light/70 mb-6">
                        {project.description}
                      </p>

                      {/* Enhanced Tech Stack */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Motion.span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-light/5 text-light/60 border border-light/10"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor:
                                  "rgba(var(--primary-rgb), 0.1)",
                                borderColor: "rgba(var(--primary-rgb), 0.3)",
                              }}
                            >
                              {tech}
                            </Motion.span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <Motion.span
                              key={tool}
                              className="px-2 py-0.5 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tool}
                            </Motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Project Highlights */}
                      <AnimatePresence>
                        {activeProject === project.title && (
                          <Motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 pt-6 border-t border-light/10"
                          >
                            <h4 className="text-light font-medium mb-3">
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, index) => (
                                <Motion.li
                                  key={highlight}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-2 text-light/70"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {highlight}
                                </Motion.li>
                              ))}
                            </ul>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Motion.div>
                </Motion.div>
              ))
            ) : (
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-12 text-light/60"
              >
                <FaSearch className="text-4xl mb-4 text-light/20" />
                <p className="text-xl font-medium mb-2">No Projects Found</p>
                <p className="text-light/40">
                  Try adjusting your search or filters to find what you're
                  looking for
                </p>
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
