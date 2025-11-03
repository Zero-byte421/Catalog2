"use client"

import { motion } from "framer-motion"
import { BarChart3, Zap, Smile, Lock } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Dashboard",
    description: "Comprehensive analytics and insights at your fingertips",
  },
  {
    icon: Zap,
    title: "Seamless Sync",
    description: "Real-time synchronization across all your applications",
  },
  {
    icon: Smile,
    title: "Personalized Experience",
    description: "Customized interface tailored to your workflow",
  },
  {
    icon: Lock,
    title: "Fast & Secure",
    description: "Enterprise-grade security with lightning-fast performance",
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B1320] mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Everyday Companion
          </h2>
          <p className="text-lg text-[#546070] max-w-2xl mx-auto">
            Everything you need to work smarter, faster, and more efficiently
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-[#F7F9FB] hover:bg-[#EAF2FE] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#0B63D1]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1320] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {feature.title}
                </h3>
                <p className="text-[#546070] leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
