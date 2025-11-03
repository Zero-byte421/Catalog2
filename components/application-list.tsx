"use client"

import { motion } from "framer-motion"
import { Home, Users, Lock, Zap, Shield, Smartphone } from "lucide-react"

interface ApplicationListProps {
  appName?: string
  accentColor?: string
}

export default function ApplicationList({ appName = "Your Everyday", accentColor = "#DC143C" }: ApplicationListProps) {
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

  const features = [
    { icon: Home, label: "Dashboard" },
    { icon: Users, label: "Personalized Experience" },
    { icon: Lock, label: "Fast & Secure" },
    { icon: Zap, label: "Seamless Sync" },
    { icon: Shield, label: "Enterprise Grade" },
    { icon: Smartphone, label: "Mobile Ready" },
  ]

  return (
    <section className="relative py-20 overflow-hidden geometric-pattern">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Application list
          </h2>
        </motion.div>

        {/* App Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-16 h-16 rounded-2xl text-white font-bold text-2xl flex items-center justify-center"
              style={{ backgroundColor: accentColor }}
            >
              {appName.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                Your Everyday
              </h3>
              <p className="font-semibold" style={{ color: accentColor }}>
                Companion
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Features
            </h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div key={index} variants={itemVariants} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-2xl text-white flex items-center justify-center hover:scale-110 transition-transform"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Icon size={24} />
                    </div>
                    <p className="text-white/80 text-xs text-center">{feature.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
