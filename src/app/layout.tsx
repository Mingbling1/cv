// Fixed routing structure - moved routes from (main) group to direct app folder
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
    title: "jimmyauris",
    description: "Brief CV of Jimmy Auris",
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();

    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body
                className="antialiased relative flex min-h-[100dvh] md:min-h-screen flex-col"
                style={{
                    fontFamily: '"Asap", serif',
                }}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
