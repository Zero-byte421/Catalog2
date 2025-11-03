"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ApplicationList } from "@/components/application-list"
import { ApplicationPreview } from "@/components/application-preview"
import { Dashboard } from "@/components/dashboard"
import { Footer } from "@/components/footer"

export default function PresensiPage() {
  const accentColor = "#9C27B0" // Purple accent
  const primaryColor = "#6A1B9A" // Deep purple primary

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6A1B9A] to-[#4A0E73]">
      <Header appName="Presensi" primaryColor={primaryColor} />

      <Hero
        title="Presensi"
        subtitle="One app to simplify your life"
        description="Track attendance with ease. Presensi provides real-time presence management, automated reporting, and seamless integration with your workflow. Stay organized and connected effortlessly."
        accentColor={accentColor}
        mockupType="phone"
      />

      <ApplicationList
        appName="Presensi"
        accentColor={accentColor}
        features={[
          { icon: "⏰", label: "Clock In/Out" },
          { icon: "📍", label: "Location" },
          { icon: "📊", label: "Reports" },
          { icon: "👥", label: "Team" },
          { icon: "📅", label: "Schedule" },
          { icon: "✓", label: "Approval" },
        ]}
      />

      <ApplicationPreview accentColor={accentColor} />

      <Dashboard appName="Presensi" accentColor={accentColor} mockupType="phone" />

      <Footer />
    </div>
  )
}
