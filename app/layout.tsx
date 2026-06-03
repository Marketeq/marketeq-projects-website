import type { Metadata } from "next"
import { font } from "@/utils/fonts"
import { cn } from "@/utils/functions"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./globals.css"

export const metadata: Metadata = {
  title: "Marketeq Digital",
  description: "A website by Marketeq Digital",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", font.variable)}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
