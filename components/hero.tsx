"use client"

import { motion } from "framer-motion"

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  accentColor?: string
}

export default function Hero({
  title = "e-BAST e-Materai",
  subtitle = "One app to simplify your life",
  description = "With a clean design, powerful features, and fast performance, our platform helps you stay connected and productive effortlessly.",
  accentColor = "#8B1538",
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden geometric-pattern">
      {/* Decorative circles */}
      <div className="absolute top-40 left-10 circle-accent opacity-20" />
      <div className="absolute bottom-20 right-10 circle-accent opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-white space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {title}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-white/90 leading-relaxed max-w-lg">
              {subtitle}
            </motion.p>

            <motion.p variants={itemVariants} className="text-base text-white/80 leading-relaxed max-w-lg">
              {description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-3 bg-white text-white rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl"
                style={{ color: accentColor }}
              >
                Explore Applications
              </button>
              <button
                className="px-8 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all"
                style={{ backgroundColor: accentColor }}
              >
                Login SSO
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 lg:h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Laptop frame */}
              <div className="bg-black rounded-lg p-3 shadow-2xl">
                <div className="bg-white rounded-md overflow-hidden">
                  {/* Screen content - landscape mockup */}
                  <div className="aspect-video bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">Dashboard</div>
                    </div>
                  </div>
                </div>
                {/* Laptop stand */}
                <div className="flex justify-center gap-8 mt-2">
                  <div className="w-1 h-2 bg-gray-800" />
                  <div className="w-1 h-2 bg-gray-800" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
