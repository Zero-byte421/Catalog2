"use client"

import { motion } from "framer-motion"
import { Home, Users, Lock, Zap, Shield, Smartphone } from "lucide-react"

interface DashboardProps {
  appName?: string
  accentColor?: string
}

export default function Dashboard({ appName = "Your Everyday", accentColor = "#DC143C" }: DashboardProps) {
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
        {/* Dashboard Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Dashboard Dismantle Radio IP
          </h2>
          <p className="text-white/80">https://amara.telkominfra.com</p>
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <div className="relative w-full max-w-2xl">
            {/* Laptop frame */}
            <div className="bg-black rounded-lg p-4 shadow-2xl">
              <div className="bg-white rounded-md overflow-hidden">
                {/* Screen content */}
                <div className="aspect-video bg-gradient-to-br from-red-300 to-red-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">Dashboard</div>
                  </div>
                </div>
              </div>
              {/* Laptop stand */}
              <div className="flex justify-center gap-12 mt-3">
                <div className="w-1 h-3 bg-gray-800" />
                <div className="w-1 h-3 bg-gray-800" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-16" />

        {/* Dashboard Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Everyday Companion
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

        {/* Application Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mt-16"
        >
          {/* Preview Card 1 */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                Login SSO
              </h3>
              <p className="text-white/80">
                Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe,
                and seamless
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-48 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-sm">Login Preview</p>
              </div>
            </div>
          </motion.div>

          {/* Preview Card 2 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse"
          >
            <div className="text-white space-y-4 lg:order-2">
              <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                Login SSO
              </h3>
              <p className="text-white/80">
                Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe,
                and seamless
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-48 flex items-center justify-center lg:order-1">
              <div className="text-center text-white/60">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-sm">Login Preview</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
