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
    // Skip all paths that should not be internationalized
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
