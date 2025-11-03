"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ApplicationList } from "@/components/application-list"
import { ApplicationPreview } from "@/components/application-preview"
import { Dashboard } from "@/components/dashboard"
import { Footer } from "@/components/footer"

export default function MyTelkominfraPage() {
  const accentColor = "#0FA77A" // Green accent
  const primaryColor = "#0B8FA3" // Teal primary

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B8FA3] to-[#0A6F7F]">
      <Header appName="MyTelkominfra" primaryColor={primaryColor} />

      <Hero
        title="MyTelkominfra"
        subtitle="One app to simplify your life"
        description="With a clean design, powerful features, and fast performance, MyTelkominfra helps you stay connected and productive. Manage everything in one place and stay connected effortlessly."
        accentColor={accentColor}
        mockupType="laptop"
      />

      <ApplicationList
        appName="MyTelkominfra"
        accentColor={accentColor}
        features={[
          { icon: "📊", label: "Dashboard" },
          { icon: "👤", label: "Profile" },
          { icon: "🔒", label: "Security" },
          { icon: "📱", label: "Mobile" },
          { icon: "⚙️", label: "Settings" },
          { icon: "🔔", label: "Notifications" },
        ]}
      />

      <ApplicationPreview accentColor={accentColor} />

      <Dashboard appName="MyTelkominfra" accentColor={accentColor} mockupType="laptop" />

      <Footer />
    </div>
  )
}
