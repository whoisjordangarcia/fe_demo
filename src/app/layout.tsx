import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";
import { Inter as FontSans } from "next/font/google";

export const metadata = {
  title: "Trase Demo",
  description: "Jordan Garcia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
