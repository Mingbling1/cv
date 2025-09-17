import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
    "./src/lib/i18n.ts"
);

const nextConfig: NextConfig = {
    // No i18n configuration needed for App Router
    // next-intl handles this through middleware
};

export default withNextIntl(nextConfig);
