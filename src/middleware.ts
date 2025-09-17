import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/i18n";

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: "en",

    // Don't use locales in URLs
    localePrefix: "never",
});

export const config = {
    // Match only pages that need internationalization
    // Exclude static files, Next.js internals, and fonts
    matcher: ["/((?!api|_next|favicon|fonts).*)"],
};
