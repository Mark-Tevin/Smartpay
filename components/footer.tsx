import Link from "next/link"
import { Facebook, Instagram, ArrowRight } from "lucide-react"
import Image from "next/image"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/smartpay_limited?utm_source=qr&igsh=b2RjeHhmMHN1eDd5",
      label: "Instagram",
    },
    { icon: Facebook, href: "/", label: "Facebook" },
    { icon: TikTokIcon, href: "#", label: "TikTok" },
  ]

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-2">
              <Link href="#home" className="inline-flex items-center group">
                <Image
                  src="/smartpay-logo.jpg"
                  alt="SmartPay Logo"
                  width={160}
                  height={60}
                  className="h-10 md:h-11 w-auto object-contain"
                />
              </Link>
              <p className="text-xs text-muted-foreground leading-snug font-light max-w-xs">
                Enterprise security and automation solutions for Kenya.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Navigation</h3>
              <ul className="space-y-1.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group font-light"
                    >
                      {link.label}
                      <ArrowRight className="w-2.5 h-2.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">Follow</h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-8 h-8 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-all duration-300 group hover:scale-105"
                    >
                      <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-4" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-light">
            <p>© {currentYear} SmartPay. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
