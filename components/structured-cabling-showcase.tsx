"use client"

import Image from "next/image"
import { useState } from "react"

export function StructuredCablingShowcase() {
  const [activeImage, setActiveImage] = useState(0)

  const installations = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/structured%20cables.JPG-9VOtSxBjex3OpzibEO7T8ZgAOh83IZ.jpeg",
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/structuredcablesetup.JPG-xtVJeCLBpFiMQg1Bg5whqs0IcMWBGz.jpeg",
    },
    {
      id: 3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/structuredcable%20setup.JPG-H2gsq1wOMgEMAJK5qXVf8SJDp2WXSo.jpeg",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Service Description */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 md:p-6 border border-cyan-500/20">
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          Our structured cabling services ensure that your infrastructure is reliable, scalable, and future proof. From
          design to installation, we provide high-quality cabling solutions for all your networking needs, supporting
          data transmission, voice communications, and more.
        </p>
      </div>

      {/* Main Image Display */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden bg-muted group">
        <Image
          src={installations[activeImage].image || "/placeholder.svg"}
          alt="Structured Cabling Installation"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {installations.map((installation, index) => (
          <button
            key={installation.id}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
              activeImage === index
                ? "ring-2 ring-cyan-500 ring-offset-2 ring-offset-background scale-105 shadow-lg"
                : "opacity-70 hover:opacity-100 hover:scale-105"
            }`}
          >
            <Image
              src={installation.image || "/placeholder.svg"}
              alt="Cabling Installation"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
