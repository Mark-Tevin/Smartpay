import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Inter, Lato } from "next/font/google"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SmartPay Telectrics Company Limited | Enterprise Security & Automation Solutions",
  description:
    "Trusted technology provider with 10+ years of experience delivering enterprise-grade CCTV, access control, automation, and security solutions for businesses, institutions, and homes.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          {children}
          <Toaster
            position="top-right"
            theme="light"
            richColors
            closeButton
            expand
            visibleToasts={3}
            duration={3000}
            toastOptions={{
              classNames: {
                toast: "bg-card border-primary/20 text-foreground shadow-lg",
                description: "text-muted-foreground",
                actionButton: "bg-primary text-primary-foreground hover:bg-primary/90",
                cancelButton: "bg-muted text-muted-foreground hover:bg-muted/80",
                closeButton: "bg-primary/10 text-primary hover:bg-primary/20",
              },
            }}
          />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
