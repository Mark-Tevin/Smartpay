"use client"

import { Card } from "@/components/ui/card"
import { Cable } from "lucide-react"
import { useState } from "react"
import { CCTVShowcase } from "@/components/cctv-showcase"
import { AccessControlShowcase } from "@/components/access-control-showcase"
import { AlarmSystemsShowcase } from "@/components/alarm-systems-showcase"
import { AutomationShowcase } from "@/components/automation-showcase"
import { StructuredCablingShowcase } from "@/components/structured-cabling-showcase"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      type: "cctv",
      title: "CCTV & Surveillance Solutions",
      description:
        "Professional security systems with 24/7 monitoring, HD/4K resolution, and smart features including ColorVu night vision and solar-powered options.",
      fullDescription:
        "We offer end-to-end CCTV solutions, from system design and consultation to installation and maintenance. Our systems are built to provide comprehensive surveillance coverage, with both wired and wireless options customized to each client, ensuring security and peace of mind.",
      imageUrl: "/images/dome-camera.png",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      hasShowcase: true,
    },
    {
      type: "access-control",
      title: "Access Control",
      description:
        "Smart entry management with card, biometric, and proximity-based solutions integrated with your operations.",
      fullDescription:
        "Advanced access control systems with facial recognition, fingerprint scanning, RFID cards, and PIN codes. Manage who enters where and when with detailed audit trails.",
      imageUrl: "/images/access-control-icon.jpeg",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      hasShowcase: true,
    },
    {
      type: "alarm-systems",
      title: "Alarm Systems",
      description: "Real-time intrusion and fire alarms providing safety and protection against unauthorized access.",
      fullDescription:
        "Integrated alarm systems with instant notifications, emergency response coordination, and 24/7 monitoring. Protects against intrusions, fire, and environmental hazards.",
      imageUrl: "/images/alarm-system-icon.png",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hasShowcase: true,
    },
    {
      type: "automation",
      title: "Office & Home Automation",
      description:
        "Intelligent automation for lighting, appliances, security, and environment control at your fingertips.",
      fullDescription:
        "Smart home and office solutions with automated lighting, temperature control, appliance management, and integrated security. Control everything from your smartphone or voice commands.",
      imageUrl: "/images/automation-icon.jpeg",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      hasShowcase: true,
    },
    {
      type: "structured-cabling",
      icon: Cable,
      title: "Structured Cabling",
      description:
        "High-quality cabling solutions designed for speed, scalability, and seamless data communication flow.",
      fullDescription:
        "Professional network infrastructure with Cat6/Cat6A cabling, fiber optics, and proper cable management. Ensures reliable connectivity and future scalability for your organization.",
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      hasShowcase: true,
    },
  ]

  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [showCCTVShowcase, setShowCCTVShowcase] = useState(false)
  const [showAccessControlShowcase, setShowAccessControlShowcase] = useState(false)
  const [showAlarmSystemsShowcase, setShowAlarmSystemsShowcase] = useState(false)
  const [showAutomationShowcase, setShowAutomationShowcase] = useState(false)
  const [showStructuredCablingShowcase, setShowStructuredCablingShowcase] = useState(false)
  // Removed software support state

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance tracking-tight">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-light">
              From CCTV and access control to automation — we create systems that work seamlessly
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service, index) => {
              const isExpanded = expandedService === index
              const isCCTVActive = index === 0 && showCCTVShowcase
              const isAccessControlActive = index === 1 && showAccessControlShowcase
              const isAlarmSystemsActive = index === 2 && showAlarmSystemsShowcase
              const isAutomationActive = index === 3 && showAutomationShowcase
              const isStructuredCablingActive = index === 4 && showStructuredCablingShowcase
              const isCCTV = service.type === "cctv"
              const isAccessControl = service.type === "access-control"
              const isAlarmSystems = service.type === "alarm-systems"
              const isAutomation = service.type === "automation"
              const isStructuredCabling = service.type === "structured-cabling"

              return (
                <Card
                  key={index}
                  onClick={() => {
                    setExpandedService(isExpanded ? null : index)
                    if (index === 0) {
                      setShowCCTVShowcase(!showCCTVShowcase)
                      setShowAccessControlShowcase(false)
                      setShowAlarmSystemsShowcase(false)
                      setShowAutomationShowcase(false)
                      setShowStructuredCablingShowcase(false)
                    } else if (index === 1) {
                      setShowAccessControlShowcase(!showAccessControlShowcase)
                      setShowCCTVShowcase(false)
                      setShowAlarmSystemsShowcase(false)
                      setShowAutomationShowcase(false)
                      setShowStructuredCablingShowcase(false)
                    } else if (index === 2) {
                      setShowAlarmSystemsShowcase(!showAlarmSystemsShowcase)
                      setShowCCTVShowcase(false)
                      setShowAccessControlShowcase(false)
                      setShowAutomationShowcase(false)
                      setShowStructuredCablingShowcase(false)
                    } else if (index === 3) {
                      setShowAutomationShowcase(!showAutomationShowcase)
                      setShowCCTVShowcase(false)
                      setShowAccessControlShowcase(false)
                      setShowAlarmSystemsShowcase(false)
                      setShowStructuredCablingShowcase(false)
                    } else if (index === 4) {
                      setShowStructuredCablingShowcase(!showStructuredCablingShowcase)
                      setShowCCTVShowcase(false)
                      setShowAccessControlShowcase(false)
                      setShowAlarmSystemsShowcase(false)
                      setShowAutomationShowcase(false)
                    } else {
                      setShowCCTVShowcase(false)
                      setShowAccessControlShowcase(false)
                      setShowAlarmSystemsShowcase(false)
                      setShowAutomationShowcase(false)
                      setShowStructuredCablingShowcase(false)
                    }
                  }}
                  className={`group relative p-5 md:p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 ${service.borderColor} hover:border-primary/40 dark:hover:border-primary/50 overflow-hidden cursor-pointer ${
                    isCCTVActive ||
                    isAccessControlActive ||
                    isAlarmSystemsActive ||
                    isAutomationActive ||
                    isStructuredCablingActive
                      ? `shadow-xl ${isAccessControlActive ? "border-accent" : isAlarmSystemsActive ? "border-orange-500" : isAutomationActive ? "border-purple-500" : isStructuredCablingActive ? "border-cyan-500" : "border-primary"} ring-2 ${isAccessControlActive ? "ring-accent/20" : isAlarmSystemsActive ? "ring-orange-500/20" : isAutomationActive ? "ring-purple-500/20" : isStructuredCablingActive ? "ring-cyan-500/20" : "ring-primary/20"}`
                      : isExpanded
                        ? "lg:col-span-2 shadow-xl border-primary/50"
                        : ""
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 space-y-3">
                    {isCCTV || isAccessControl || isAlarmSystems || isAutomation ? (
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md ${isAccessControl ? "group-hover:shadow-accent/20" : isAlarmSystems ? "group-hover:shadow-orange-500/20" : isAutomation ? "group-hover:shadow-purple-500/20" : "group-hover:shadow-primary/20"} overflow-hidden ${
                          isCCTVActive || isAccessControlActive || isAlarmSystemsActive || isAutomationActive
                            ? "scale-110 shadow-md animate-pulse"
                            : ""
                        } ${isAccessControlActive ? "shadow-accent/20" : isAlarmSystemsActive ? "shadow-orange-500/20" : isAutomationActive ? "shadow-purple-500/20" : isCCTVActive ? "shadow-primary/20" : ""}`}
                      >
                        <div
                          className={`relative ${isAccessControl || isAutomation ? "w-9 h-9 md:w-10 md:h-10" : "w-8 h-8 md:w-9 md:h-9"}`}
                        >
                          <Image
                            src={service.imageUrl || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md ${isStructuredCabling ? "group-hover:shadow-cyan-500/20" : "group-hover:shadow-primary/20"} ${isStructuredCablingActive ? "scale-110 shadow-md shadow-cyan-500/20 animate-pulse" : ""}`}
                      >
                        {service.icon && <service.icon className={`w-6 h-6 md:w-7 md:h-7 ${service.color}`} />}
                      </div>
                    )}

                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 ${
                        isCCTVActive
                          ? "text-primary"
                          : isAccessControlActive
                            ? "text-accent"
                            : isAlarmSystemsActive
                              ? "text-orange-600 dark:text-orange-400"
                              : isAutomationActive
                                ? "text-purple-600 dark:text-purple-400"
                                : isStructuredCablingActive
                                  ? "text-cyan-600 dark:text-cyan-400"
                                  : ""
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description - Show full when expanded */}
                    <p
                      className={`text-sm md:text-base text-muted-foreground leading-snug font-light ${!isExpanded ? "line-clamp-2" : ""}`}
                    >
                      {isExpanded ? service.fullDescription : service.description}
                    </p>

                    {service.hasShowcase ? (
                      <p
                        className={`text-xs md:text-sm font-medium pt-2 ${
                          isCCTVActive ||
                          isAccessControlActive ||
                          isAlarmSystemsActive ||
                          isAutomationActive ||
                          isStructuredCablingActive
                            ? "text-primary"
                            : isAccessControl
                              ? "text-accent"
                              : isAlarmSystems
                                ? "text-orange-600 dark:text-orange-400"
                                : isAutomation
                                  ? "text-purple-600 dark:text-purple-400"
                                  : isStructuredCabling
                                    ? "text-cyan-600 dark:text-cyan-400"
                                    : "text-primary"
                        }`}
                      >
                        {isCCTVActive ||
                        isAccessControlActive ||
                        isAlarmSystemsActive ||
                        isAutomationActive ||
                        isStructuredCablingActive
                          ? "Hide detailed showcase"
                          : `Explore ${isAccessControl ? "access control" : isAlarmSystems ? "alarm" : isAutomation ? "automation" : isStructuredCabling ? "cabling" : "surveillance"} solutions`}
                      </p>
                    ) : !isExpanded ? (
                      <p className="text-xs md:text-sm text-primary font-medium pt-2">Click to learn more</p>
                    ) : null}
                  </div>
                </Card>
              )
            })}
          </div>

          {showCCTVShowcase && (
            <div className="animate-slide-in-from-top">
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image src="/images/dome-camera.png" alt="CCTV" fill className="object-contain" />
                      </div>
                      Professional CCTV & Surveillance
                    </h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowCCTVShowcase(false)
                      setExpandedService(null)
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Close showcase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <CCTVShowcase />
              </div>
            </div>
          )}

          {showAccessControlShowcase && (
            <div className="animate-slide-in-from-top">
              <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-primary/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image
                          src="/images/access-control-icon.jpeg"
                          alt="Access Control"
                          fill
                          className="object-contain"
                        />
                      </div>
                      Advanced Access Control Systems
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Secure authentication with biometric and smart card technology
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowAccessControlShowcase(false)
                      setExpandedService(null)
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Close showcase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <AccessControlShowcase />
              </div>
            </div>
          )}

          {showAlarmSystemsShowcase && (
            <div className="animate-slide-in-from-top">
              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-background to-red-500/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image
                          src="/images/alarm-system-icon.png"
                          alt="Alarm Systems"
                          fill
                          className="object-contain"
                        />
                      </div>
                      Alarm & Security Systems
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Comprehensive protection with intrusion detection, fire alarms, and smart automation
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowAlarmSystemsShowcase(false)
                      setExpandedService(null)
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Close showcase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <AlarmSystemsShowcase />
              </div>
            </div>
          )}

          {showAutomationShowcase && (
            <div className="animate-slide-in-from-top">
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <div className="relative w-10 h-10">
                        <Image src="/images/automation-icon.jpeg" alt="Automation" fill className="object-contain" />
                      </div>
                      Smart Home & Office Automation
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Intelligent automation for modern living and working spaces
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowAutomationShowcase(false)
                      setExpandedService(null)
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Close showcase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <AutomationShowcase />
              </div>
            </div>
          )}

          {showStructuredCablingShowcase && (
            <div className="animate-slide-in-from-top">
              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-background to-blue-500/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                      <Cable className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
                      Professional Structured Cabling
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Enterprise network infrastructure with certified installation and cable management
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowStructuredCablingShowcase(false)
                      setExpandedService(null)
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                    aria-label="Close showcase"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <StructuredCablingShowcase />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
