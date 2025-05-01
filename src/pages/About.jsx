"use client"

import { useContext } from "react"
import { motion } from "framer-motion"
import { Download, CheckCircle } from "lucide-react"
import ThemeContext from "../context/ThemeContext"

const About = () => {
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

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript/TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "MySQL", "PHP"] },
    { category: "Design", items: ["Figma", "Penport", "UI/UX Design", "Responsive Design", "Design Systems"] },
    { category: "Other", items: ["Git/GitHub", "CI/CD", "Agile/Scrum", "RESTful APIs", "GraphQL"] },
  ]

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Brainheal",
      period: "2023 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented design systems and improved performance metrics.",
    },
    {
      title: "UI/UX Designer",
      company: "Webinvent Limited",
      period: "2019 - 2021",
      description:
        "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to improve user experience.",
    },
    {
      title: "Lead UI/UX Designer & Developer",
      company: "Clickiton Studio",
      period: "2017 - 2019",
      description:
        "Developed and maintained websites for clients across various industries. Collaborated with designers to implement responsive designs.",
    },
  ]

  return (
    <motion.main initial="hidden" animate="visible" variants={containerVariants} className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section className="mb-20">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img src="/src/assets/lucky.png" alt="Profile" className="rounded-lg shadow-2xl" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">UI/UX Designer & Web Developer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate UI/UX designer and web developer with over 5 years of experience creating beautiful,
                functional, and user-centered digital experiences. I specialize in building modern web applications
                using React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My approach combines creative design thinking with technical expertise to deliver solutions that not
                only look great but also perform exceptionally well. I believe in clean code, intuitive interfaces, and
                accessible design.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                When I'm not coding or designing, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through blog posts and community events.
              </p>
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1oGsDGNYS7friwTo7sSyj6L7OR1Zzup-t"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  )
}

export default About
