"use client"

import Image from "next/image"

export function SoftwareSupportShowcase() {
  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 group">
        <Image
          src="/images/design-mode/sw%20support.JPG.jpeg"
          alt="Software Support & Development"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Service Features Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            24/7
          </div>
          <div className="text-sm text-muted-foreground mt-2">Technical Support</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Custom
          </div>
          <div className="text-sm text-muted-foreground mt-2">Software Solutions</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Fast
          </div>
          <div className="text-sm text-muted-foreground mt-2">System Updates</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-pink-500/10 hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
            Expert
          </div>
          <div className="text-sm text-muted-foreground mt-2">Configuration</div>
        </div>
      </div>
    </div>
  )
}
