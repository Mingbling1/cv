import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "CV Jimmy Auris",
    description: "Brief CV of Jimmy Auris",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    merriweather.className,
                    "flex flex-col min-h-screen antialiased"
                )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                    <Analytics mode={"production"} />;
                </ThemeProvider>
            </body>
        </html>
    );
}
