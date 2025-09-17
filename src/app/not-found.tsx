"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LanguageDropdown } from "@/components/language-dropdown";
import { ModeToggle } from "@/components/mode-toogle";
import { Home, Search, FileQuestion } from "lucide-react";
import Link from "next/link";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function NotFound() {
    const t = useTranslations();
    const { resolvedTheme } = useTheme();

    return (
        <div className="relative min-h-screen w-full">
            {/* Stars Background */}
            <StarsBackground
                starColor={
                    resolvedTheme === "dark"
                        ? "#FFF"
                        : "#000"
                }
                className={cn(
                    "absolute inset-0",
                    "dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]"
                )}
            />

            {/* Header with controls */}
            <div className="fixed top-3 right-3 z-50 flex gap-2">
                <ModeToggle />
                <LanguageDropdown />
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-3 py-4 md:px-4 md:py-6">
                <div className="max-w-2xl w-full mx-auto">
                    <Card className="backdrop-blur-md bg-background/80 border-2 border-border/50 shadow-2xl">
                        <CardHeader className="text-center pb-4">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-orange-600/30 dark:from-red-400/20 dark:to-orange-500/30 flex items-center justify-center mb-6 shadow-lg">
                                <FileQuestion className="w-10 h-10 text-red-600 dark:text-red-400" />
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                                404
                            </CardTitle>
                            <CardDescription className="text-lg md:text-xl text-muted-foreground">
                                {t("errors.pageNotFound.title") || "Página no encontrada"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                {t("errors.pageNotFound.description") ||
                                    "Lo siento, la página que estás buscando no existe o ha sido movida."}
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                <Link href="/">
                                    <Button
                                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                        size="lg"
                                    >
                                        <Home className="w-4 h-4 mr-2" />
                                        {t("navigation.home") || "Inicio"}
                                    </Button>
                                </Link>

                                <Link href="/professional">
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto border-2 hover:bg-primary/10 transition-all duration-300"
                                        size="lg"
                                    >
                                        <Search className="w-4 h-4 mr-2" />
                                        {t("navigation.professional") || "CV Profesional"}
                                    </Button>
                                </Link>
                            </div>

                            {/* Quick links */}
                            <div className="pt-4 border-t border-border/50">
                                <p className="text-sm text-muted-foreground mb-3">
                                    {t("errors.pageNotFound.suggestions") || "También puedes visitar:"}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Link href="/showcase">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400"
                                        >
                                            {t("navigation.showcase") || "Showcase"}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}