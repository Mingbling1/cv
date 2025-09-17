import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

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
         * Excluye también las fuentes de Google en /public/fonts/
         */
        "/((?!_next/static|_next/image|favicon.ico|fonts/.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ttf|woff|woff2|eot|otf)$).*)",
        "/",
        "/(api|trpc)(.*)",
    ],
};
