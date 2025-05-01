"use client"

import { useContext } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import ThemeContext from "../context/ThemeContext"

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/Gberekpee-lucky23", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "www.linkedin.com/in/gberekpee-lucky-1602b6248", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://x.com/Gberekpee_lucky", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:gberekpeelucky@yahoo.com", label: "Email" },
  ]

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold mb-4 md:mb-0"
          >
            <span className="text-indigo-600 dark:text-indigo-400">Gberekpee Lucky</span>
          </motion.div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Gberekpee Lucky All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
