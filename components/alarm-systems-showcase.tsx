"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Flame, Lock, Siren, Radio, ShieldCheck, Smartphone } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function AlarmSystemsShowcase() {
  const [activeTab, setActiveTab] = useState<"intrusion" | "fire" | "automation">("intrusion")

  const alarmTypes = [
    {
      id: "intrusion" as const,
      icon: ShieldCheck,
      title: "Intrusion Detection",
      tagline: "Delivering a safer world",
      image: "/images/hikvision-alarm-solutions.jpg",
      features: [
        { icon: Lock, text: "Perimeter Protection", desc: "Secure your boundaries with smart sensors" },
        { icon: AlertTriangle, text: "Panic Alert", desc: "Instant emergency notifications" },
        { icon: Bell, text: "Tamper Alarm", desc: "Detect unauthorized access attempts" },
        { icon: Siren, text: "Emergency Alarm", desc: "Loud deterrent for intruders" },
      ],
      specs: ["24/7 Monitoring", "Wireless Sensors", "Mobile Notifications", "Auto-Dispatch"],
    },
    {
      id: "fire" as const,
      icon: Flame,
      title: "Fire & Safety Systems",
      tagline: "Protect lives and property",
      image: "/images/hikvision-alarm-solutions.jpg",
      features: [
        { icon: Flame, text: "Smoke Detection", desc: "Early warning smoke sensors" },
        { icon: AlertTriangle, text: "Heat Sensors", desc: "Temperature-based fire detection" },
        { icon: Radio, text: "Alarm Panels", desc: "Centralized control system" },
        { icon: Bell, text: "Audible Alerts", desc: "Clear evacuation signals" },
      ],
      specs: ["Certified Systems", "Multi-Zone Control", "Emergency Lighting", "Fire Brigade Link"],
    },
    {
      id: "automation" as const,
      icon: Radio,
      title: "Gate & Access Automation",
      tagline: "Smart automation solutions",
      image: "/images/gate-automation-alarm.jpg",
      features: [
        { icon: Lock, text: "Automated Gates", desc: "Remote-controlled gate systems" },
        { icon: Smartphone, text: "Remote Access", desc: "Control from anywhere via app" },
        { icon: ShieldCheck, text: "Safety Features", desc: "Obstacle detection & auto-reverse" },
        { icon: Radio, text: "Integration", desc: "Works with alarm systems" },
      ],
      specs: ["Solar Compatible", "Battery Backup", "Multiple Users", "Activity Logs"],
    },
  ]

  const activeAlarm = alarmTypes.find((alarm) => alarm.id === activeTab)!

  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent rounded-2xl p-8 border border-orange-500/20">
        <p className="text-foreground/90 leading-relaxed text-lg text-center max-w-4xl mx-auto">
          We offer state-of-the-art alarm systems that protect your assets and ensure peace of mind. From intrusion
          alarms to fire alarms, we design, install, and monitor alarm solutions that provide immediate alerts in case
          of unauthorized access, fires, or other emergencies.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {alarmTypes.map((alarm) => {
          const Icon = alarm.icon
          const isActive = activeTab === alarm.id
          return (
            <button
              key={alarm.id}
              onClick={() => setActiveTab(alarm.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 shadow-lg shadow-orange-500/10"
                  : "bg-card border border-border/50 hover:border-orange-500/20 hover:bg-card/80"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-orange-500 to-red-500 text-white"
                    : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {alarm.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: Image & Tagline */}
        <div className="space-y-6">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 shadow-xl">
            <Image
              src={activeAlarm.image || "/placeholder.svg"}
              alt={activeAlarm.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-6 left-6">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-sm px-4 py-1.5">
                Hikvision Alarm Solution
              </Badge>
            </div>
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <h3 className="text-white text-3xl font-bold text-balance">{activeAlarm.title}</h3>
              <p className="text-white/90 text-lg uppercase tracking-wide font-medium">{activeAlarm.tagline}</p>
            </div>
          </div>

          {/* Specifications */}
          <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-transparent border-orange-500/20">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              System Capabilities
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {activeAlarm.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 rounded-lg p-3 border border-border/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Features Grid */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
            <p className="text-muted-foreground">
              Real-time intrusion and fire alarms providing safety and protection against unauthorized access
            </p>
          </div>

          <div className="grid gap-4">
            {activeAlarm.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group p-5 border-border/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {feature.text}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Benefits Bar */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Bell, text: "Instant Alerts", color: "from-orange-500 to-red-500" },
          { icon: Smartphone, text: "Mobile Control", color: "from-red-500 to-pink-500" },
          { icon: ShieldCheck, text: "24/7 Protection", color: "from-orange-600 to-red-600" },
          { icon: Radio, text: "Smart Integration", color: "from-amber-500 to-orange-500" },
        ].map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/10 hover:border-orange-500/30 transition-all hover:shadow-md group"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-foreground text-sm">{benefit.text}</span>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl p-8 text-center space-y-4 border border-orange-500/20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-2">
          <Bell className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Secure Your Property Today</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Integrated alarm systems with instant notifications, emergency response coordination, and 24/7 monitoring to
          protect against intrusions, fire, and environmental hazards.
        </p>
      </div>
    </div>
  )
}
