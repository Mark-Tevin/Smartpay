"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Copy, ChevronDown } from "lucide-react"

export function ContactDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+254720528730"

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber)
    setIsOpen(false)
    // Optional: Show a toast notification
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello")
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="w-full sm:w-auto text-base px-8 h-14 rounded-full font-medium text-primary border-2 border-primary hover:bg-primary/10 bg-transparent flex items-center gap-2"
      >
        Contact Us
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 sm:right-auto sm:left-0 w-full sm:w-56 bg-background border border-primary/20 rounded-lg shadow-lg z-50">
          <button
            onClick={handleCopyPhone}
            className="w-full px-4 py-3 text-left hover:bg-primary/10 flex items-center gap-3 text-foreground transition-colors border-b border-primary/10"
          >
            <Copy className="w-4 h-4 text-primary" />
            <div>
              <div className="font-medium text-sm">Copy Phone Number</div>
              <div className="text-xs text-muted-foreground">{phoneNumber}</div>
            </div>
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-full px-4 py-3 text-left hover:bg-primary/10 flex items-center gap-3 text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <div>
              <div className="font-medium text-sm">Contact via WhatsApp</div>
              <div className="text-xs text-muted-foreground">Chat with us now</div>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
