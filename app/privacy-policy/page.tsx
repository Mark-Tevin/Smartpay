"use client"

import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function PrivacyPolicy() {
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
    { id: "intro", label: "1. Information We Collect" },
    { id: "usage", label: "2. How We Use Your Information" },
    { id: "cookies", label: "3. Cookies and Analytics" },
    { id: "sharing", label: "4. Data Sharing and Disclosure" },
    { id: "security", label: "5. Data Security" },
    { id: "retention", label: "6. Data Retention" },
    { id: "rights", label: "7. Your Rights" },
    { id: "updates", label: "8. Updates to This Policy" },
    { id: "contact", label: "9. Contact Us" },
  ]

  return (
    <main className="min-h-screen bg-white text-black py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-sm text-black mb-8 font-light">Effective Date: {new Date().toLocaleDateString()}</p>
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
                SmartPay Telectrics ("we", "our", or "us") respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you
                visit our website or engage our services.
              </p>

              <div id="intro" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  1. Information We Collect
                </h2>
                <p className="text-black mb-3">We may collect the following information when you use our website:</p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>
                    <strong>Personal Information:</strong> such as your name, phone number, company name, or email
                    address when you submit forms.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> including IP address, browser type, and pages visited, collected
                    automatically through cookies or analytics tools.
                  </li>
                  <li>
                    <strong>Project Information:</strong> any details you voluntarily share with us regarding your
                    projects or inquiries.
                  </li>
                </ul>
              </div>

              <div id="usage" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>To respond to your inquiries and provide quotations.</li>
                  <li>To deliver, manage, and improve our services.</li>
                  <li>To communicate updates, offers, or promotions (if you've opted in).</li>
                  <li>To analyze website traffic and user behavior for improvements.</li>
                </ul>
              </div>

              <div id="cookies" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  3. Cookies and Analytics
                </h2>
                <p className="text-black">
                  Our website may use cookies and third-party analytics (e.g., Google Analytics) to enhance your
                  browsing experience. You can disable cookies anytime in your browser settings.
                </p>
              </div>

              <div id="sharing" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-black">
                  We do not sell or rent your personal data. Information may be shared only with trusted partners who
                  assist in operating our website or delivering our services — all bound by confidentiality agreements.
                </p>
              </div>

              <div id="security" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  5. Data Security
                </h2>
                <p className="text-black">
                  We use SSL encryption, secure servers, and restricted access protocols to protect your personal data
                  from unauthorized access or misuse.
                </p>
              </div>

              <div id="retention" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  6. Data Retention
                </h2>
                <p className="text-black">
                  Your personal data is retained only as long as necessary to fulfill the purposes outlined in this
                  policy or as required by law.
                </p>
              </div>

              <div id="rights" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  7. Your Rights
                </h2>
                <p className="text-black mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Access, correct, or delete your data.</li>
                  <li>Withdraw consent for marketing communications.</li>
                  <li>Request details about how your data is processed or shared.</li>
                </ul>
                <p className="text-black mt-3">
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:projects.smartpay@gmail.com"
                    className="text-black hover:text-emerald-600 underline transition-colors"
                  >
                    projects.smartpay@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div id="updates" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  8. Updates to This Policy
                </h2>
                <p className="text-black">
                  We may update this Privacy Policy occasionally. Any changes will be reflected on this page with a
                  revised effective date.
                </p>
              </div>

              <div id="contact" className="scroll-mt-20">
                <h2 className="text-2xl font-semibold text-black mb-4 pb-3 border-b-2 border-emerald-300">
                  9. Contact Us
                </h2>
                <p className="text-black mb-3">For questions about this Privacy Policy, please contact us at:</p>
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
