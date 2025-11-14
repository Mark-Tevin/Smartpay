"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AutomationShowcase() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/design-mode/home%20office%20automation%20service.JPG.jpeg"
          alt="Home & Office Automation - Smart control panel in modern living room"
          fill
          className="object-cover object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <Card className="group overflow-hidden border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/images/design-mode/smarthome.JPG.jpeg"
              alt="Mobile app control for home automation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h5 className="text-xl font-bold">Mobile Control</h5>
            </div>
          </div>
        </Card>

        <Card className="group overflow-hidden border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/images/design-mode/home%20office%20auto.JPG.jpeg"
              alt="Biometric access control with face recognition"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h5 className="text-xl font-bold">Smart Access</h5>
            </div>
          </div>
        </Card>

        <Card className="group overflow-hidden border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/images/design-mode/home%20automation%20solutions.JPG.jpeg"
              alt="Complete smart home solutions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h5 className="text-xl font-bold">Complete Solutions</h5>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
