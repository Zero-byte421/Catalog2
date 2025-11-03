"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ApplicationList from "@/components/application-list"
import ApplicationPreview from "@/components/application-preview"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function TelkominfraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B8FA3] to-[#066B7F]">
      <Header appName="Telkominfra" />
      <Hero
        title="Telkominfra"
        subtitle="One app to simplify your life"
        description="With a clean design, powerful features, and fast performance, AppName helps you stay organized, productive, and connected effortlessly."
        accentColor="#0FA77A"
      />
      <ApplicationList appName="Telkominfra" accentColor="#0FA77A" />
      <ApplicationPreview accentColor="#0FA77A" />
      <Dashboard appName="Telkominfra" accentColor="#0FA77A" />
      <Footer />
    </main>
  )
}
