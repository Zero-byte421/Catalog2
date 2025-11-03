"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ApplicationList } from "@/components/application-list"
import { ApplicationPreview } from "@/components/application-preview"
import { Dashboard } from "@/components/dashboard"
import { Footer } from "@/components/footer"

export default function ApprovalPage() {
  const accentColor = "#FF9800" // Orange accent
  const primaryColor = "#E65100" // Deep orange primary

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E65100] to-[#BF360C]">
      <Header appName="Approval" primaryColor={primaryColor} />

      <Hero
        title="Approval"
        subtitle="One app to simplify your life"
        description="Streamline your approval workflows. Approval helps you manage requests efficiently, track status in real-time, and ensure nothing falls through the cracks. Approve faster, work smarter."
        accentColor={accentColor}
        mockupType="laptop"
      />

      <ApplicationList
        appName="Approval"
        accentColor={accentColor}
        features={[
          { icon: "✓", label: "Approve" },
          { icon: "✗", label: "Reject" },
          { icon: "📋", label: "Requests" },
          { icon: "📊", label: "Analytics" },
          { icon: "🔔", label: "Notifications" },
          { icon: "📝", label: "Comments" },
        ]}
      />

      <ApplicationPreview accentColor={accentColor} />

      <Dashboard appName="Approval" accentColor={accentColor} mockupType="laptop" />

      <Footer />
    </div>
  )
}
