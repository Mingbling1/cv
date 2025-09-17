import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

// Supported locales
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
    // Get locale from cookie or default to 'en'
    const store = await cookies();
    const locale = store.get("locale")?.value || "en";

    return {
        locale,
        messages: (
            await import(`../../messages/${locale}.json`)
        ).default,
    };
});
