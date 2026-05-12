import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Easy Where Solution | AI Powered Business Solutions",
  description: "Easy Where Solution puts all your business in one place. AI powered marketing, SEO, and automation tools to scale your business faster.",
  keywords: "AI solutions, business automation, SEO, marketing, Easy Where Solution",
  openGraph: {
    title: "Easy Where Solution | AI Powered Business Solutions",
    description: "Scale your business with AI powered solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}