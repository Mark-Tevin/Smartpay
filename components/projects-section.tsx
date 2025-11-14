"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ProjectsSection() {
  const projectImages = [
    {
      url: "/images/projects/monitoring-display.jpg",
      alt: "Monitoring Display System",
    },
    {
      url: "/images/projects/access-control.jpg",
      alt: "Access Control System Installation",
    },
    {
      url: "/images/projects/gate-automation.jpg",
      alt: "Gate Automation System",
    },
    {
      url: "/images/projects/religious-residency.jpg",
      alt: "Religious Residency Security",
    },
    {
      url: "/images/projects/outdoor-installation.jpg",
      alt: "Outdoor CCTV Installation",
    },
    {
      url: "/images/projects/religious-architecture.jpg",
      alt: "Religious Architecture Security",
    },
    {
      url: "/images/projects/biometric-access.jpg",
      alt: "Biometric Access Control",
    },
    {
      url: "/images/projects/gate-access-control.jpg",
      alt: "Gate Access Control System",
    },
  ]

  const projects = [
    {
      icon: "/classic-stone-church.png",
      name: "Religious Institutions",
      description: "Various Churches & Religious Facilities Across Kenya",
    },
    {
      icon: "/school-graduation.jpg",
      name: "Educational Institutions",
      description: "Various Schools, Institutes & Academic Facilities Across Kenya",
    },
    {
      icon: "/office-building-corporate.jpg",
      name: "Corporate & Commercial",
      description: "Various Properties & Corporate facilities across Kenya",
    },
    {
      icon: "/house-home-residential.jpg",
      name: "Residential Projects",
      description: "Smart automation and security for home & private premises across Kenya",
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance tracking-tight">
              Our Projects
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty font-light">
              Real installations, real results. See how we've secured facilities across Kenya
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {projectImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid mb-4"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      width={800}
                      height={600}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Partnering With Excellence</h3>
              <p className="text-muted-foreground text-base md:text-lg">
                From places of worship to learning spaces, we secure what matters most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-5 md:p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-card border-border/50 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <Image
                      src={project.icon || "/placeholder.svg"}
                      alt={project.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <h4 className="text-base md:text-lg font-semibold text-card-foreground leading-tight">
                      {project.name}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
