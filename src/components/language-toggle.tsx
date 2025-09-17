'use client';

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

export function LanguageToggle() {
    const { currentLocale, toggleLocale } = useLanguageSwitch();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleLocale}
            className="relative"
        >
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="absolute -bottom-1 -right-1 text-[8px] font-bold uppercase bg-muted text-muted-foreground px-1 rounded">
                {currentLocale}
            </span>
            <span className="sr-only">
                Switch to {currentLocale === 'en' ? 'Spanish' : 'English'}
            </span>
        </Button>
    );
}