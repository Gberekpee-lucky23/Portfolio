"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Globe } from "lucide-react"
import ThemeContext from "../context/ThemeContext"

const Home = () => {
  const { theme } = useContext(ThemeContext)

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

  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience.",
    },
    {
      icon: <Globe size={24} />,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend implementation.",
    },
  ]

  return (
    <motion.main initial="hidden" animate="visible" variants={containerVariants} className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div variants={itemVariants} className="mb-12 lg:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="block py-10">Gberekpee Lucky</span>
                <span className="block text-indigo-500">UI/UX Designer &</span>
                <span className="block text-indigo-600 dark:text-indigo-400">Software Developer</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                I create beautiful, functional, and user-centered digital experiences that bring your ideas to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors flex items-center"
                  >
                    View My Work
                    <ArrowRight className="ml-2" size={18} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg shadow-sm transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img src="/src/assets/logo.png" alt="Developer" className="rounded-lg shadow-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I offer a range of services to help businesses and individuals create impactful digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h2>
                <p className="text-indigo-100 mb-0 md:mb-0">Let's discuss how I can help bring your vision to life.</p>
              </div>
              <div className="mt-8 md:mt-0">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home
