import createMiddleware from "next-intl/middleware";
import { locales } from "./src/i18n";

export default createMiddleware({
    locales,
    defaultLocale: "en",
    // No locale detection from pathname
    localeDetection: false,
    // Don't redirect based on locale
    localePrefix: "never",
});

export const config = {
    matcher: [
        /*
         * Matcher estándar para Next.js middleware
         * Ejecuta en todas las rutas excepto archivos estáticos y assets
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
        "/",
        "/(api|trpc)(.*)",
    ],
};
