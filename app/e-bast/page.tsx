"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ApplicationList from "@/components/application-list"
import ApplicationPreview from "@/components/application-preview"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function EBastPage() {
  const accentColor = "#2196F3" // Blue accent
  const primaryColor = "#1565C0" // Deep blue primary

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1565C0] to-[#0D47A1]">
      <Header appName="e-BAST" primaryColor={primaryColor} />

      <Hero
        title="e-BAST"
        subtitle="One app to simplify your life"
        description="Digital Berita Acara Serah Terima. e-BAST streamlines the handover process with digital documentation, secure signatures, and instant verification. Complete transactions faster and more securely."
        accentColor={accentColor}
        mockupType="laptop"
      />

      <ApplicationList
        appName="e-BAST"
        accentColor={accentColor}
        features={[
          { icon: "📄", label: "Documents" },
          { icon: "✍️", label: "Signatures" },
          { icon: "🔐", label: "Security" },
          { icon: "✓", label: "Verification" },
          { icon: "📊", label: "Reports" },
          { icon: "🔍", label: "Audit" },
        ]}
      />

      <ApplicationPreview accentColor={accentColor} />

      <Dashboard appName="e-BAST" accentColor={accentColor} mockupType="laptop" />

      <Footer />
    </div>
  )
}
