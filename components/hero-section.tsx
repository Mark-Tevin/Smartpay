"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { SurveyModal } from "./survey-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 py-20 md:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
              <Shield className="w-4 h-4" />
              <span>Enterprise-Grade Security Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] animate-fade-in text-balance tracking-tight">
              <span className="text-primary">Technology for you.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up text-pretty font-light">
              Experience intelligent security and automation built for the modern world — for your business, your home,
              and your peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-fade-in-up">
              <Button
                onClick={() => {
                  const servicesSection = document.getElementById("services")
                  servicesSection?.scrollIntoView({ behavior: "smooth" })
                }}
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-14 rounded-full font-medium"
              >
                Explore Solutions
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-14 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request for Survey/Service
              </Button>
            </div>

            <div className="pt-8 md:pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
              {[
                { label: "CCTV Installation" },
                { label: "Access Control" },
                { label: "Alarm Systems" },
                { label: "Structured Cabling" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-base md:text-lg text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
