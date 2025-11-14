"use client"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export function ContactSection() {
  const handleSendWhatsApp = () => {
    const message = encodeURIComponent("Hello")
    window.open(`https://wa.me/254720528730?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">Get In Touch</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
              <div className="space-y-5">
                <a
                  href="tel:+254720528730"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm">+254 720 528 730</span>
                </a>

                <a
                  href="mailto:projects.smartpay@gmail.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">projects.smartpay@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Embakasi, Nairobi, Kenya</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={handleSendWhatsApp}
                    className="w-full h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon />
                    Contact via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
