import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Domain Hijack Alerter — Know When Someone Eyes Your Domain',
  description: 'Real-time alerts when someone searches your domain on GoDaddy. Protect your brand before domain snipers strike.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e7dae84b-1bb8-40c0-a793-28c03d70842a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
