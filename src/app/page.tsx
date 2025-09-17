"use client";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { getResumeData } from "@/app/_data/resume-data";
import { LanguageDropdown } from "@/components/language-dropdown";
import { ModeToggle } from "@/components/mode-toogle";
import { BrainCircuit, FileText } from "lucide-react";
import Link from "next/link";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function HomePage() {
    const t = useTranslations();
    const locale = useLocale() as "es" | "en";
    const RESUME_DATA = getResumeData(locale);
    const { resolvedTheme } = useTheme();

    return (
        <div className="relative min-h-screen md:h-screen w-full md:overflow-hidden">
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

            {/* Main content - mobile first, then desktop fit */}
            <div className="relative z-10 min-h-screen md:h-full flex flex-col justify-center px-3 py-4 md:px-4 md:py-6">
                <div className="max-w-5xl w-full mx-auto flex flex-col justify-center md:h-full">
                    {/* Hero Section - More compact on mobile */}
                    <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-8">
                        <Avatar className="w-16 h-16 md:w-20 md:h-20 mx-auto shadow-xl border-2 border-white/20">
                            <AvatarImage
                                alt={RESUME_DATA.name}
                                src={RESUME_DATA.avatarUrl}
                            />
                            <AvatarFallback className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground font-bold text-lg md:text-xl">
                                {RESUME_DATA.initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 md:space-y-3">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                                {t("common.name")}
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                {t("common.about")}
                            </p>
                            <p className="text-xs md:text-sm lg:text-base text-muted-foreground/80 font-medium">
                                📍 {t("common.location")}
                            </p>
                        </div>
                    </div>

                    {/* CV Presentation Options - More compact on mobile */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-4 md:mb-6">
                        {/* Professional Version */}
                        <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-md bg-background/80 border-2 border-border/50 hover:border-primary/50">
                            <CardHeader className="text-center pb-2 md:pb-3">
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 dark:from-blue-400/20 dark:to-blue-500/30 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                                    <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
                                    {t(
                                        "navigation.professional"
                                    )}
                                </CardTitle>
                                <CardDescription className="text-xs md:text-sm lg:text-base leading-relaxed">
                                    {t(
                                        "landingPage.professionalCard.description"
                                    )}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center pt-0">
                                <Link href="/professional">
                                    <Button
                                        size="lg"
                                        className="w-full h-9 md:h-10 lg:h-12 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                        {t(
                                            "landingPage.professionalCard.buttonText"
                                        )}
                                    </Button>
                                </Link>
                                <div className="flex flex-wrap justify-center gap-1 md:gap-2 mt-3 md:mt-4">
                                    <span className="text-xs bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full font-medium">
                                        {t(
                                            "landingPage.professionalCard.tags.atsFriendly"
                                        )}
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full font-medium">
                                        {t(
                                            "landingPage.professionalCard.tags.printable"
                                        )}
                                    </span>
                                    <span className="text-xs bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full font-medium">
                                        {t(
                                            "landingPage.professionalCard.tags.corporate"
                                        )}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Showcase Version */}
                        <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-md bg-background/80 border-2 border-dashed border-purple-500/50 hover:border-purple-400/70">
                            <CardHeader className="text-center pb-2 md:pb-3">
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-600/30 dark:from-purple-400/20 dark:via-pink-400/20 dark:to-purple-500/30 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                                    <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    {t(
                                        "navigation.showcase"
                                    )}
                                </CardTitle>
                                <CardDescription className="text-xs md:text-sm lg:text-base leading-relaxed">
                                    {t(
                                        "landingPage.showcaseCard.description"
                                    )}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center pt-0">
                                <Link href="/showcase">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full h-9 md:h-10 lg:h-12 text-sm md:text-base font-semibold border-2 border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/10 shadow-lg hover:shadow-xl transition-all duration-300">
                                        {t(
                                            "landingPage.showcaseCard.buttonText"
                                        )}
                                    </Button>
                                </Link>
                                <div className="flex flex-wrap justify-center gap-1 md:gap-2 mt-3 md:mt-4">
                                    <span className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 px-2 md:px-3 py-1 rounded-full font-medium border border-purple-500/30">
                                        {t(
                                            "landingPage.showcaseCard.tags.interactive"
                                        )}
                                    </span>
                                    <span className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 px-2 md:px-3 py-1 rounded-full font-medium border border-purple-500/30">
                                        {t(
                                            "landingPage.showcaseCard.tags.modern"
                                        )}
                                    </span>
                                    <span className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 px-2 md:px-3 py-1 rounded-full font-medium border border-purple-500/30">
                                        {t(
                                            "landingPage.showcaseCard.tags.comingSoon"
                                        )}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Info - Compact on mobile */}
                    <div className="text-center space-y-3 md:space-y-4">
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium">
                            {t(
                                "landingPage.choosePresentation"
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 text-xs md:text-sm lg:text-base">
                            <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
                                <span className="text-sm md:text-base">
                                    📧
                                </span>
                                <span className="text-muted-foreground font-medium">
                                    {t("common.email")}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
                                <span className="text-sm md:text-base">
                                    📱
                                </span>
                                <span className="text-muted-foreground font-medium">
                                    {t("common.phone")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
