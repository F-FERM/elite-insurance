import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Elite Insurance",
  description: "Elite Insurance",
  icons: {
    icon: "/icon.png",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
