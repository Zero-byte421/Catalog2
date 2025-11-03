"use client"

import { motion } from "framer-motion"

interface ApplicationPreviewProps {
  accentColor?: string
}

export default function ApplicationPreview({ accentColor = "#DC143C" }: ApplicationPreviewProps) {
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
    <section id="applications" className="relative py-20 overflow-hidden geometric-pattern">
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
            Application Preview
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
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

          {/* Preview Card 3 */}
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
        </motion.div>
      </div>
    </section>
  )
}
