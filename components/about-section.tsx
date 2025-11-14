"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, Award, Shield, Zap, Users } from "lucide-react"
import { useState } from "react"

export function AboutSection() {
  const [activeValue, setActiveValue] = useState(0)
  const [expandedStatement, setExpandedStatement] = useState<"mission" | "vision" | null>(null)

  const valueProps = [
    {
      icon: Shield,
      title: "Warranty & Protection",
      description: "All systems are backed by reliable warranty and post-installation support.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Quality of Service",
      description: "We use high-end technology and trained professionals for every project.",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Customized Solutions",
      description: "Every installation is tailored to your specific environment and goals.",
      color: "text-orange-500",
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance tracking-tight">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty font-light">
              SmartPay Telectrics Company Limited is a trusted technology provider with over 10 years of experience
              delivering enterprise-grade security and automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Card
              className="p-5 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg bg-card border-border/50 group hover:border-primary/50 overflow-hidden"
              onMouseEnter={() => setExpandedStatement("mission")}
              onMouseLeave={() => setExpandedStatement(null)}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground pt-1">Our Mission</h3>
                </div>
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed font-light transition-all duration-300 ${
                    expandedStatement === "mission" ? "max-h-40" : "line-clamp-2"
                  }`}
                >
                  To provide our clients with the highest level of security and infrastructure through the integration
                  of the latest technology, top-tier products, and exceptional service.
                </p>
              </div>
            </Card>

            <Card
              className="p-5 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg bg-card border-border/50 group hover:border-accent/50 overflow-hidden"
              onMouseEnter={() => setExpandedStatement("vision")}
              onMouseLeave={() => setExpandedStatement(null)}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground pt-1">Our Vision</h3>
                </div>
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed font-light transition-all duration-300 ${
                    expandedStatement === "vision" ? "max-h-40" : "line-clamp-2"
                  }`}
                >
                  To become the most trusted and innovative provider of enterprise-grade security and infrastructure
                  solutions, continuously delivering excellent customer experiences.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-3">
                <Award className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                Value Proposition
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon
                return (
                  <Card
                    key={index}
                    className={`p-5 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      activeValue === index
                        ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50 shadow-lg"
                        : "bg-card border-border/50 hover:border-primary/30"
                    }`}
                    onMouseEnter={() => setActiveValue(index)}
                  >
                    <div className="space-y-3">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background/50 flex items-center justify-center transition-transform duration-300 ${
                          activeValue === index ? "scale-110" : ""
                        }`}
                      >
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${prop.color}`} />
                      </div>
                      <h4
                        className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          activeValue === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {prop.title}
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                        {prop.description}
                      </p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
