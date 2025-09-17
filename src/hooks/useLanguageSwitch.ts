"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Locale } from "@/lib/i18n";

export function useLanguageSwitch() {
    const router = useRouter();
    const currentLocale = useLocale();

    const setLocale = (locale: Locale) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${
            365 * 24 * 60 * 60
        }`;
        router.refresh();
    };

    const toggleLocale = () => {
        const newLocale =
            currentLocale === "en" ? "es" : "en";
        setLocale(newLocale);
    };

    return {
        currentLocale,
        setLocale,
        toggleLocale,
        availableLocales: ["en", "es"] as const,
    };
}
