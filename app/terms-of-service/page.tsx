"use client"

import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function TermsOfService() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const sections = [
    { id: "intro", label: "1. Use of Our Website" },
    { id: "services", label: "2. Services and Information" },
    { id: "property", label: "3. Intellectual Property" },
    { id: "links", label: "4. Third-Party Links" },
    { id: "liability", label: "5. Limitation of Liability" },
    { id: "submission", label: "6. User-Submitted Information" },
    { id: "changes", label: "7. Changes to the Terms" },
    { id: "law", label: "8. Governing Law" },
    { id: "contact", label: "9. Contact Information" },
  ]

  return (
    <main className="min-h-screen bg-white text-black py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
          <p className="text-sm text-black mb-8 font-light">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-xs py-2 px-3 rounded transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-emerald-600 text-white font-medium"
                        : "text-black hover:bg-emerald-100"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <section className="space-y-8">
              <p className="text-black leading-relaxed text-base">
                Welcome to SmartPay Telectrics ("we," "our," or "us"). These Terms of Service ("Terms") govern your use
                of our website
                <strong> https://smartpaytelectrics.vercel.app</strong> and any related services. By accessing or using
                our site, you agree to these Terms. If you do not agree, please do not use our website.
              </p>

              <div id="intro" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  1. Use of Our Website
                </h2>
                <p className="text-black">
                  You agree to use our website for lawful purposes only. You must not engage in any activity that could
                  harm, disable, overburden, or impair our website or interfere with others' use.
                </p>
              </div>

              <div id="services" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  2. Services and Information
                </h2>
                <p className="text-black">
                  We provide information about our products, solutions, and installation services such as CCTV systems,
                  access control, alarm systems, and structured cabling. While we strive to ensure accuracy, we do not
                  guarantee that all details are complete or error-free. Service descriptions may change without prior
                  notice.
                </p>
              </div>

              <div id="property" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  3. Intellectual Property
                </h2>
                <p className="text-black">
                  All content on this website, including text, graphics, logos, designs, and images, is owned or
                  licensed by SmartPay Telectrics and protected by copyright laws. You may not reproduce, distribute, or
                  modify any material without our prior written consent.
                </p>
              </div>

              <div id="links" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  4. Third-Party Links
                </h2>
                <p className="text-black">
                  Our website may contain links to third-party sites for your convenience. We are not responsible for
                  the content, policies, or practices of these external websites. Access them at your own risk.
                </p>
              </div>

              <div id="liability" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  5. Limitation of Liability
                </h2>
                <p className="text-black">
                  SmartPay Telectrics shall not be liable for any indirect, incidental, or consequential damages arising
                  out of your use or inability to use the website or services. We make no warranties that the website
                  will be available, secure, or error-free at all times.
                </p>
              </div>

              <div id="submission" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  6. User-Submitted Information
                </h2>
                <p className="text-black">
                  Any information you voluntarily submit (e.g., through inquiry forms) must be accurate and lawful. By
                  submitting, you grant us permission to use the information for communication and project evaluation in
                  line with our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-black hover:text-emerald-600 underline transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div id="changes" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  7. Changes to the Terms
                </h2>
                <p className="text-black">
                  We reserve the right to update or modify these Terms at any time without prior notice. Updates will be
                  posted on this page with the revised effective date.
                </p>
              </div>

              <div id="law" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  8. Governing Law
                </h2>
                <p className="text-black">
                  These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes
                  arising from your use of this website shall be resolved under Kenyan jurisdiction.
                </p>
              </div>

              <div id="contact" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  9. Contact Information
                </h2>
                <p className="text-black mb-3">
                  If you have any questions or concerns about these Terms, please contact us:
                </p>
                <p className="font-medium text-black">
                  📧{" "}
                  <a
                    href="mailto:projects.smartpay@gmail.com"
                    className="text-black hover:text-emerald-600 underline transition-colors"
                  >
                    projects.smartpay@gmail.com
                  </a>
                  <br />📞{" "}
                  <a href="tel:+254720528730" className="text-black hover:text-emerald-600 underline transition-colors">
                    +254 720 528 730
                  </a>
                  <br />📍 SmartPay Telectrics, Embakasi, Nairobi, Kenya
                </p>
              </div>
            </section>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-8 border-t border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/"
                className="text-black hover:text-emerald-600 transition-colors font-light flex items-center gap-1"
              >
                ← Back to Home
              </Link>
              <button
                onClick={scrollToTop}
                className="text-black hover:text-emerald-600 transition-colors font-light flex items-center gap-1"
              >
                Back to Top
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </main>
  )
}
