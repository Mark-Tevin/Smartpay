"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Sun, Eye, Shield, Wifi, CloudUpload } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function CCTVShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  const features = [
    {
      icon: Eye,
      title: "ColorVu Technology",
      description: "Next-level night vision with smart hybrid light for crystal-clear full-color images 24/7",
      image: "/images/cctv-turbo-hd.jpg",
      specs: ["F1.0 Super Confocal Lens", "HD/4K Resolution", "IR & White Light Modes"],
    },
    {
      icon: Sun,
      title: "Solar-Powered Solutions",
      description: "Flexible security with unlimited power and lower energy consumption",
      image: "/images/solar-ptz.jpg",
      specs: ["Eco-Friendly", "PTZ Control", "Remote Management"],
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Professional surveillance systems with advanced detection and monitoring",
      image: "/images/surveillance-service.png",
      specs: ["24/7 Monitoring", "Cloud Storage", "Mobile Access"],
    },
    {
      icon: CloudUpload,
      title: "Complete Camera Range",
      description: "Dome, bullet, and PTZ cameras in pure metal or plastic options",
      image: "/images/all-cameras.jpg",
      specs: ["Multiple Formats", "Weather Resistant", "Hikvision Certified"],
    },
  ]

  const cameraTypes = [
    {
      name: "Dome Cameras",
      image: "/images/dome-camera.png",
      use: "Indoor/Outdoor",
    },
    {
      name: "Bullet Cameras",
      image: "/images/cameras-collection.jpg",
      use: "Long Range",
    },
    {
      name: "Video Intercom",
      image: "/images/video-doorbell.jpg",
      use: "Access Control",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Main Feature Display */}
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Feature Image */}
        <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-black group">
          <Image
            src={features[activeFeature].image || "/placeholder.svg"}
            alt={features[activeFeature].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <Badge className="bg-primary text-primary-foreground">Hikvision Certified</Badge>
            <h3 className="text-white text-2xl font-bold">{features[activeFeature].title}</h3>
          </div>
        </div>

        {/* Feature Details */}
        <div className="space-y-6">
          {activeFeature === 0 && (
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We offer end-to-end CCTV solutions, from system design and consultation to installation and maintenance.
                Our systems are built to provide comprehensive surveillance coverage, with both wired and wireless
                options customized to each client, ensuring security and peace of mind.
              </p>
            </div>
          )}

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
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border/50 hover:border-primary/30 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold mb-1 ${isActive ? "text-primary" : "text-foreground"}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      {isActive && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {feature.specs.map((spec, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-primary/30">
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

      {/* Camera Types Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Camera Solutions</h3>
          <p className="text-muted-foreground">Professional surveillance systems for every need</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cameraTypes.map((camera, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={camera.image || "/placeholder.svg"}
                  alt={camera.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="bg-primary/90 text-white backdrop-blur-sm">{camera.use}</Badge>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {camera.name}
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Camera, text: "HD/4K Resolution" },
          { icon: Wifi, text: "Remote Access" },
          { icon: Shield, text: "24/7 Monitoring" },
          { icon: Sun, text: "Solar Options" },
        ].map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">{benefit.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
