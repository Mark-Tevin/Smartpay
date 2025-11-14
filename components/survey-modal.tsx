"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function SurveyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"choice" | "survey" | "support">("choice")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    systemType: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello SmartPay, I would like to request a ${step === "survey" ? "survey" : "technical support"}.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}${step === "support" ? `\nSystem Type: ${formData.systemType}` : ""}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254720528730?text=${encodedMessage}`, "_blank")
    onClose()
    setStep("choice")
    setFormData({ name: "", phone: "", email: "", location: "", systemType: "" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted">
          <h2 className="text-xl font-bold text-foreground">
            {step === "choice" && "How can we help?"}
            {step === "survey" && "Request for Survey"}
            {step === "support" && "Request for Technical Support"}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "choice" && (
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">Choose the service you need:</p>
              <button
                onClick={() => setStep("survey")}
                className="w-full p-4 border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground mb-1">Request for Survey</h3>
                <p className="text-sm text-muted-foreground">Get a professional assessment of your security needs</p>
              </button>
              <button
                onClick={() => setStep("support")}
                className="w-full p-4 border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground mb-1">Request for Technical Support</h3>
                <p className="text-sm text-muted-foreground">Get immediate technical assistance for your systems</p>
              </button>
            </div>
          )}

          {step === "survey" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your location"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep("choice")} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-primary text-primary-foreground">
                  Submit
                </Button>
              </div>
            </form>
          )}

          {step === "support" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">System Type</label>
                <select
                  name="systemType"
                  value={formData.systemType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Select a system</option>
                  <option value="cctv">CCTV & Surveillance</option>
                  <option value="access">Access Control</option>
                  <option value="alarm">Alarm Systems</option>
                  <option value="automation">Office & Home Automation</option>
                  <option value="cabling">Structured Cabling</option>
                  <option value="software">Software Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep("choice")} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-primary text-primary-foreground">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
