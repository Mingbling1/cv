"use client";

import * as React from "react";
import { Languages, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

export function LanguageDropdown() {
    const { currentLocale, setLocale } =
        useLanguageSwitch();

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
    ] as const;

    const currentLanguage = languages.find(
        (lang) => lang.code === currentLocale
    );

    return (
        <Tooltip>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2">
                            <Languages className="h-4 w-4" />
                            <span className="hidden sm:inline">
                                {currentLanguage?.flag}{" "}
                                {currentLanguage?.name}
                            </span>
                            <span className="sm:hidden">
                                {currentLanguage?.flag}
                            </span>
                            <ChevronDown className="h-3 w-3" />
                        </Button>
                    </TooltipTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {languages.map((language) => (
                        <DropdownMenuItem
                            key={language.code}
                            onClick={() =>
                                setLocale(language.code)
                            }
                            className={`cursor-pointer ${
                                currentLocale ===
                                language.code
                                    ? "bg-accent text-accent-foreground"
                                    : ""
                            }`}>
                            <span className="mr-2">
                                {language.flag}
                            </span>
                            {language.name}
                            {currentLocale ===
                                language.code && (
                                <span className="ml-auto text-xs">
                                    ✓
                                </span>
                            )}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <TooltipContent>
                <p>
                    {currentLocale === "en"
                        ? "AI Generated Translations"
                        : "Traducciones generadas por IA"}
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
