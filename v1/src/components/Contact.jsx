import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.2;
      setFormStatus(success ? "success" : "error");

      if (success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "contact@yourname.com",
      link: "mailto:contact@yourname.com",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "New York, NY",
      link: "https://maps.google.com/?q=New+York",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/yourname",
      link: "https://linkedin.com/in/yourname",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/yourname",
      link: "https://github.com/yourname",
      color: "from-gray-700 to-gray-500",
    },
  ];

  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      {/* Background Elements */}
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
        {/* Glowing Orbs */}
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
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"
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
          className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"
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
              Get In Touch
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-light mb-6 leading-tight"
          >
            Let's
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
              Connect
            </Motion.span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-light/60 text-lg"
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Fill out the form below or reach out through any of
            my contact channels.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-light mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-light/5 border border-light/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}
                  >
                    <item.icon className="text-light text-xl" />
                  </div>
                  <div>
                    <h4 className="text-light font-medium">{item.title}</h4>
                    <p className="text-light/60 text-sm mt-1">{item.value}</p>
                  </div>
                </Motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-light font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaTwitter,
                    color: "bg-blue-400",
                    link: "https://twitter.com/yourname",
                  },
                  {
                    icon: FaGithub,
                    color: "bg-gray-700",
                    link: "https://github.com/yourname",
                  },
                  {
                    icon: FaLinkedin,
                    color: "bg-blue-600",
                    link: "https://linkedin.com/in/yourname",
                  },
                ].map((social, index) => (
                  <Motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full ${social.color} text-light`}
                  >
                    <social.icon />
                  </Motion.a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-light/5 border border-light/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-light mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="relative">
                    <Motion.div
                      animate={{
                        borderColor: errors.name
                          ? "rgb(239, 68, 68)"
                          : focusedField === "name"
                          ? "rgba(var(--primary-rgb), 0.5)"
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 bg-light/5 border rounded-xl text-light placeholder-light/40 focus:outline-none transition-all duration-300 ${
                          errors.name
                            ? "border-red-500"
                            : "border-light/10 focus:border-primary/50"
                        }`}
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      />
                    </Motion.div>
                    {errors.name && (
                      <Motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 ml-1"
                      >
                        {errors.name}
                      </Motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <Motion.div
                      animate={{
                        borderColor: errors.email
                          ? "rgb(239, 68, 68)"
                          : focusedField === "email"
                          ? "rgba(var(--primary-rgb), 0.5)"
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      className="relative"
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Email"
                        className={`w-full px-4 py-3 bg-light/5 border rounded-xl text-light placeholder-light/40 focus:outline-none transition-all duration-300 ${
                          errors.email
                            ? "border-red-500"
                            : "border-light/10 focus:border-primary/50"
                        }`}
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      />
                    </Motion.div>
                    {errors.email && (
                      <Motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 ml-1"
                      >
                        {errors.email}
                      </Motion.p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <Motion.div
                    animate={{
                      borderColor: errors.subject
                        ? "rgb(239, 68, 68)"
                        : focusedField === "subject"
                        ? "rgba(var(--primary-rgb), 0.5)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Subject"
                      className={`w-full px-4 py-3 bg-light/5 border rounded-xl text-light placeholder-light/40 focus:outline-none transition-all duration-300 ${
                        errors.subject
                          ? "border-red-500"
                          : "border-light/10 focus:border-primary/50"
                      }`}
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                    />
                  </Motion.div>
                  {errors.subject && (
                    <Motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1 ml-1"
                    >
                      {errors.subject}
                    </Motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <Motion.div
                    animate={{
                      borderColor: errors.message
                        ? "rgb(239, 68, 68)"
                        : focusedField === "message"
                        ? "rgba(var(--primary-rgb), 0.5)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message"
                      rows={5}
                      className={`w-full px-4 py-3 bg-light/5 border rounded-xl text-light placeholder-light/40 focus:outline-none transition-all duration-300 ${
                        errors.message
                          ? "border-red-500"
                          : "border-light/10 focus:border-primary/50"
                      }`}
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                    />
                  </Motion.div>
                  {errors.message && (
                    <Motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1 ml-1"
                    >
                      {errors.message}
                    </Motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <Motion.button
                  type="submit"
                  disabled={
                    formStatus === "submitting" || formStatus === "success"
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    formStatus === "success"
                      ? "bg-green-500 text-white"
                      : formStatus === "error"
                      ? "bg-red-500 text-white"
                      : "bg-primary text-dark hover:bg-primary/90"
                  }`}
                >
                  {formStatus === "idle" && (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                  {formStatus === "submitting" && (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <FaCheck />
                      <span>Message Sent!</span>
                    </>
                  )}
                  {formStatus === "error" && (
                    <>
                      <FaExclamationTriangle />
                      <span>Failed to Send</span>
                    </>
                  )}
                </Motion.button>

                {/* Form Status Messages */}
                {formStatus === "error" && (
                  <Motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    There was an error sending your message. Please try again.
                  </Motion.p>
                )}
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
