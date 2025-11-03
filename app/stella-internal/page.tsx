"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ApplicationList from "@/components/application-list"
import ApplicationPreview from "@/components/application-preview"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function StellaInternalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8B1538] to-[#6B0F2A]">
      <Header appName="Stella Internal" />
      <Hero
        title="Stella Internal"
        subtitle="One app to simplify your life"
        description="With a clean design, powerful features, and fast performance, AppName helps you stay organized, productive, and connected effortlessly."
        accentColor="#DC143C"
      />
      <ApplicationList appName="Stella Internal" accentColor="#DC143C" />
      <ApplicationPreview accentColor="#DC143C" />
      <Dashboard appName="Stella Internal" accentColor="#DC143C" />
      <Footer />
    </main>
  )
}
