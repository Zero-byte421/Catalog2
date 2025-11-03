"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ApplicationList from "@/components/application-list"
import ApplicationPreview from "@/components/application-preview"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8B1538] to-[#6B0F2A]">
      <Header />
      <Hero />
      <ApplicationList />
      <ApplicationPreview />
      <Dashboard />
      <Footer />
    </main>
  )
}
