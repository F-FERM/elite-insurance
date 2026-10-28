import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Elite Insurance",
  description: "Elite Insurance",
  icons: {
    icon: "/logo.png",
    
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
      </body>
    </html>
  );
}
