"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ApplicationList from "@/components/application-list"
import ApplicationPreview from "@/components/application-preview"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function DashboardPoketPage() {
  const accentColor = "#4CAF50" // Green accent
  const primaryColor = "#2E7D32" // Deep green primary

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] to-[#1B5E20]">
      <Header appName="Dashboard Poket" primaryColor={primaryColor} />

      <Hero
        title="Dashboard Poket"
        subtitle="One app to simplify your life"
        description="Your pocket-sized dashboard. Dashboard Poket brings all your important metrics and insights to your mobile device. Monitor performance, track KPIs, and make decisions on the go."
        accentColor={accentColor}
        mockupType="phone"
      />

      <ApplicationList
        appName="Dashboard Poket"
        accentColor={accentColor}
        features={[
          { icon: "📊", label: "Analytics" },
          { icon: "📈", label: "Growth" },
          { icon: "💰", label: "Revenue" },
          { icon: "👥", label: "Users" },
          { icon: "⚡", label: "Performance" },
          { icon: "🎯", label: "Goals" },
        ]}
      />

      <ApplicationPreview accentColor={accentColor} />

      <Dashboard appName="Dashboard Poket" accentColor={accentColor} mockupType="phone" />

      <Footer />
    </div>
  )
}
