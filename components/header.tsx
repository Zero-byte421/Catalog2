"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  appName?: string
  primaryColor?: string
}

export default function Header({ appName = "TelkomInfra", primaryColor = "#8B1538" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{ backgroundColor: `${primaryColor}cc` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{appName.charAt(0)}</span>
            </div>
            <span className="font-bold text-lg text-white">{appName}</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#applications" className="text-white/80 hover:text-white transition-colors">
              Applications
            </Link>
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <button
              className="px-6 py-2 bg-white text-white rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              style={{ color: primaryColor }}
            >
              Login SSO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="#" className="block text-white/80 hover:text-white transition-colors py-2">
              Home
            </Link>
            <Link href="#applications" className="block text-white/80 hover:text-white transition-colors py-2">
              Applications
            </Link>
            <Link href="#about" className="block text-white/80 hover:text-white transition-colors py-2">
              About
            </Link>
            <button
              className="w-full px-6 py-2 bg-white text-white rounded-full font-medium hover:bg-gray-100 transition-colors"
              style={{ color: primaryColor }}
            >
              Login SSO
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
