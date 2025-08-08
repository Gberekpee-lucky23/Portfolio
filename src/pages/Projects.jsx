"use client"

import { useState, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import ThemeContext from "../context/ThemeContext"
// Import images properly
import atmosphereImg from "../assets/atmosphere.jpeg"
import systemImg from "../assets/system.png"
import researchImg from "../assets/research.jpeg"
import restrauntImg from "../assets/restraunt.jpeg"
import scannerImg from "../assets/scanner.jpeg" // Fixed typo in import path
import webinventImg from "../assets/webinvent.jpeg"
import DiggingImg from "../assets/digging.png"

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const [filter, setFilter] = useState("all")
  const [activeProject, setActiveProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Fixed project data with correct image references
  const projects = [
    {
      id: 1,
      title: "A&A Mgt System",
      category: "fullstack",
      tags: ["React", "Node.js", "Appwrite"],
      image: systemImg, // Direct reference to imported image
      description:
        "A full-stack Attendanace and Assignment Management platform with user authentication, Attendance management, and assignment processing.",
      demoLink: "https://aamsystem.netlify.app/",
      githubLink: "#",
    },
    // {
    //   id: 2,
    //   title: "Restaurant App UI Design",
    //   category: "design",
    //   tags: ["Figma", "UI/UX", "Mobile"],
    //   image: restrauntImg, // Direct reference to imported image
    //   description:
    //     "A modern UI design for a travel booking application with a focus on user experience and accessibility.",
    //   demoLink: "#",
    //   // githubLink: "https://github.com/yourusername/project",
    // },
    {
      id: 3,
      title: "Webinvent Limited Website",
      category: "web",
      tags: ["HTML", "CSS/JS", "PHP"],
      image: webinventImg, // Direct reference to imported image
      description:
        "A responsive task management dashboard with real-time updates, drag-and-drop functionality, and team collaboration features.",
      demoLink: "https://webinvent.com.ng/",
      // githubLink: "https://github.com/yourusername/project",
    },
    // {
    //   id: 4,
    //   title: "Research AI Design",
    //   category: "design",
    //   tags: ["Penport", "UI/UX", "Wireframing"],
    //   image: researchImg, // Direct reference to imported image
    //   description:
    //     "A complete redesign of a finance application with improved information architecture and visual hierarchy.",
    //   demoLink: "#",
    //   // githubLink: "https://github.com/yourusername/project",
    // },
    {
      id: 5,
      title: "Atmosphere Tech",
      category: "web",
      tags: ["HTML/CSS/JS", "Bootstrap", "PHP"],
      image: atmosphereImg, // Direct reference to imported image
      description:
        "A web application for tracking and visualizing social media analytics with interactive charts and reports.",
      demoLink: "https://atmospheretech.com.ng/",
      // githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 6,
      title: "Digging Deep Engineering Marine and Logistics Services Limited",
      category: "web",
      tags: ["HTML/CSS/JS", "TailwindCss", "Typescript"],
      image: DiggingImg, // Direct reference to imported image
      description:
        "An oil and gas application for Digging Deep engineering marine and logitics services limited. ",
      demoLink: "https://ddemlsl.netlify.app/",
      // githubLink: "https://github.com/yourusername/project",
    },
    // {
    //   id: 7,
    //   title: "Web Vulnerability Scanner",
    //   category: "fullstack",
    //   tags: ["Next.js", "AppWrite", "Tailwind CSS", "React.js"],
    //   image: scannerImg, // Direct reference to imported image
    //   description: "A full-stack application for Web Vulnerability Scanning",
    //   demoLink: "#",
    //   githubLink: "https://github.com/yourusername/project",
    // },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const openProjectDetails = (project) => {
    setActiveProject(project)
  }

  const closeProjectDetails = () => {
    setActiveProject(null)
  }

  return (
    <motion.main initial="hidden" animate="visible" variants={containerVariants} className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my recent work across web development and UI/UX design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            } transition-colors`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-full ${
              filter === "web"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            } transition-colors`}
          >
            Web Development
          </button>
          {/*<button
            onClick={() => setFilter("design")}
            className={`px-4 py-2 rounded-full ${
              filter === "design"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            } transition-colors`}
          >
            UI/UX Design
          </button>*/}
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-4 py-2 rounded-full ${
              filter === "fullstack"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            } transition-colors`}
          >
            Full Stack
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openProjectDetails(project)}
                      className="p-2 bg-white rounded-full"
                      aria-label="View project details"
                    >
                      <Eye size={20} className="text-gray-900" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center"
                      >
                        <Github size={16} className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={closeProjectDetails}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={activeProject.image || "/placeholder.svg"}
                    alt={activeProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={closeProjectDetails}
                    className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{activeProject.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={activeProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" /> View Demo
                    </a>
                    {activeProject.githubLink && (
                      <a
                        href={activeProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg flex items-center transition-colors"
                      >
                        <Github size={16} className="mr-2" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  )
}

export default Projects
