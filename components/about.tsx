"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1320]" style={{ fontFamily: "var(--font-poppins)" }}>
              About TelkomInfra
            </h2>
            <p className="text-lg text-[#546070] leading-relaxed">
              TelkomInfra is a comprehensive digital infrastructure platform designed to streamline internal operations
              and enhance productivity across the organization. Our integrated suite of applications provides seamless
              access to essential business tools through a single, secure login.
            </p>
            <p className="text-lg text-[#546070] leading-relaxed">
              Built with modern technology and user-centric design principles, TelkomInfra ensures that every employee
              can access the tools they need, when they need them, with enterprise-grade security and reliability.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#0B63D1] text-white rounded-full font-semibold hover:bg-[#084FA8] transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B63D1]/10 to-[#0FA77A]/10 rounded-3xl p-8">
              <div className="w-full h-full bg-gradient-to-br from-[#F7F9FB] to-[#EAF2FE] rounded-2xl flex items-center justify-center border border-[#0B63D1]/20">
                <div className="text-center text-[#546070]">
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#0B63D1]/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#0B63D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Platform Interface</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
