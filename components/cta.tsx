"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0B63D1] to-[#084FA8] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
            Access All Your Services with One Secure Login
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Simplify your workflow and boost productivity with our integrated platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-[#0B63D1] rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-block"
          >
            Login SSO
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
