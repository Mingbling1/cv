import createMiddleware from "next-intl/middleware";
import { locales } from "./src/i18n";

// export default createMiddleware({
//     locales,
//     defaultLocale: "en",
//     localeDetection: false,
//     localePrefix: "never",
// });

export const config = {
    matcher: [
        // Simplified matcher - exclude only essential static files
        "/((?!_next/static|_next/image|favicon|fonts).*)",
    ],
};
