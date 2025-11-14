"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fingerprint, Key, Smartphone, Shield, Clock, BarChart3 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function AccessControlShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Advanced fingerprint and facial recognition for secure, touchless access control",
      image: "/images/access-control-device.jpg",
      specs: ["Fingerprint Scanner", "Face Recognition", "Liveness Detection"],
    },
    {
      icon: Key,
      title: "Multi-Method Access",
      description: "Flexible entry with RFID cards, PIN codes, mobile credentials, and biometrics",
      image: "/images/access-control-collection.jpg",
      specs: ["RFID Cards", "PIN Codes", "Mobile Access"],
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description: "Integrated time tracking with automatic attendance logging and reporting",
      image: "/images/access-control-device.jpg",
      specs: ["Auto Logging", "Shift Management", "Real-time Reports"],
    },
    {
      icon: BarChart3,
      title: "Audit Trails & Analytics",
      description: "Comprehensive logs tracking who entered where and when with detailed analytics",
      image: "/images/access-control-collection.jpg",
      specs: ["Activity Logs", "Access Reports", "User Analytics"],
    },
  ]

  const accessMethods = [
    {
      name: "Fingerprint Scanning",
      icon: Fingerprint,
      description: "Fast, secure biometric access",
    },
    {
      name: "Facial Recognition",
      icon: Shield,
      description: "Touchless AI-powered entry",
    },
    {
      name: "RFID & Cards",
      icon: Key,
      description: "Traditional card-based access",
    },
    {
      name: "Mobile App",
      icon: Smartphone,
      description: "Smartphone-based credentials",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Main Feature Display */}
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Feature Image */}
        <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/5 group">
          <Image
            src={features[activeFeature].image || "/placeholder.svg"}
            alt={features[activeFeature].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <Badge className="bg-accent text-accent-foreground">Hikvision Certified</Badge>
            <h3 className="text-white text-2xl font-bold">{features[activeFeature].title}</h3>
          </div>
        </div>

        {/* Feature Details */}
        <div className="space-y-6">
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeFeature === index
              return (
                <Card
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                      : "border-border/50 hover:border-accent/30 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? "bg-accent text-white" : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold mb-1 ${isActive ? "text-accent" : "text-foreground"}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      {isActive && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {feature.specs.map((spec, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-accent/30">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Access Methods Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Access Control Methods</h3>
          <p className="text-muted-foreground">Choose the right authentication for your security needs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accessMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg p-6 text-center"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {method.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Shield, text: "Secure Authentication" },
          { icon: Clock, text: "Real-time Monitoring" },
          { icon: BarChart3, text: "Detailed Analytics" },
          { icon: Smartphone, text: "Remote Management" },
        ].map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium text-foreground text-sm">{benefit.text}</span>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 md:p-8 text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">Ready to Upgrade Your Access Control?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Manage who enters where and when with our advanced access control systems featuring detailed audit trails and
          comprehensive reporting.
        </p>
      </div>
    </div>
  )
}
