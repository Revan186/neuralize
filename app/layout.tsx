import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { DM_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'

const font = DM_Sans({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Neuralize | Automate your business",
  description: "Automate your business with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <head><link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@{{PACKAGE_VERSION}}/web/lr-file-uploader-regular.min.css"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@v1/web/uc-file-uploader-regular.min.css"></link>
</head>
    
      <body
         className={font.className}
      >
              <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <ModalProvider>
          {children}
          </ModalProvider>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
