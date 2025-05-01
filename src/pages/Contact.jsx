"use client"

import { useState, useContext, useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, CreditCard, CheckCircle, AlertCircle } from "lucide-react"
import ThemeContext from "../context/ThemeContext"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const { theme } = useContext(ThemeContext)
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showPayment, setShowPayment] = useState(false)
  const [amount, setAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS configuration
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = "service_shbn57i"
    const templateId = "template_4q0obi5"
    const publicKey = "VV-UAmiwVqjF1voyP"

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response)
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        setSubmitStatus("error")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would initialize Paystack here
    // For demonstration purposes, we'll just log the amount
    console.log("Payment initiated for amount:", amount)

    // Mock Paystack integration
    if (typeof window !== "undefined" && window.PaystackPop) {
      const handler = window.PaystackPop.setup({
        key: "pk_test_your_public_key",
        email: formData.email || "customer@example.com",
        amount: Number.parseFloat(amount) * 100, // Paystack expects amount in kobo (smallest currency unit)
        currency: "NGN",
        ref: "REF_" + Math.floor(Math.random() * 1000000000 + 1),
        callback: (response) => {
          console.log("Payment complete! Reference:", response.reference)
          // Handle successful payment
        },
        onClose: () => {
          console.log("Payment window closed")
        },
      })
      handler.openIframe()
    } else {
      alert("Kindly use the Bank Transfer Option, Paystack will be live soon!")
    }
  }

  return (
    <motion.main initial="hidden" animate="visible" variants={containerVariants} className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">PortHarcourt, Nigeria</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+234 815 735 8750</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">gberekpeelucky@gmail.com</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                ></textarea>
              </div>

              {/* Status message */}
              {submitStatus === "success" && (
                <div className="flex items-center p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                  <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                  <span>Failed to send message. Please try again or contact me directly via email.</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors flex items-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Pay Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need to make a payment for services? Use the secure Paystack payment gateway below.
            </p>
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-2">
                  Amount (NGN)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="100"
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors flex items-center"
              >
                <CreditCard size={18} className="mr-2" />
                Pay with Paystack
              </motion.button>
            </form>

            <div className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Other Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">₦</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium">Bank Transfer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bank: Guarantee Trust Bank (GTB)
                      <br />
                      Account Name: Gberekpee Lucky
                      <br />
                      Account Number: 0562536897
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}

export default Contact
