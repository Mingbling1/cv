"use client";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import Link from "next/link";
import { getResumeData } from "@/app/_data/resume-data";
import { LanguageDropdown } from "@/components/language-dropdown";
import { ModeToggle } from "@/components/mode-toogle";
import { Highlighter } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    ArrowRight,
    Code,
    Cloud,
    TrendingUp,
    FileText,
    Mail,
} from "lucide-react";

export default function ShowcasePage() {
    const locale = useLocale() as "es" | "en";
    const RESUME_DATA = getResumeData(locale);

    return (
        <div>
            {/* Hexagon Background */}
            {/* <HexagonBackground className="absolute inset-0" /> */}

            {/* Fixed Header */}
            <div className="fixed top-4 right-4 z-50 flex gap-2">
                <ModeToggle />
                <LanguageDropdown />
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Hero Section */}
                <section className="relative flex-1 flex items-center justify-center px-6 py-12">
                    <div className="w-full max-w-5xl mx-auto">
                        <div className="text-center space-y-8">
                            <Avatar className="w-24 h-24 mx-auto border-4 border-border/20 shadow-2xl">
                                <AvatarImage
                                    alt={RESUME_DATA.name}
                                    src={
                                        RESUME_DATA.avatarUrl
                                    }
                                />
                                <AvatarFallback className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground font-bold text-xl">
                                    {RESUME_DATA.initials}
                                </AvatarFallback>
                            </Avatar>

                            <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="space-y-6">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    <Highlighter
                                        action="highlight"
                                        color="#fbbf24"
                                        isView={true}>
                                        {
                                            RESUME_DATA.name.split(
                                                " "
                                            )[0]
                                        }
                                    </Highlighter>
                                    <span>
                                        {RESUME_DATA.name
                                            .split(" ")
                                            .slice(1)
                                            .join(" ")}
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl font-medium">
                                    <Highlighter
                                        action="underline"
                                        color="#06b6d4"
                                        isView={true}>
                                        {RESUME_DATA.title}
                                    </Highlighter>
                                </p>

                                <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                                    {RESUME_DATA.about}
                                </p>
                            </motion.div>

                            <div className="flex items-center justify-center gap-2 py-4">
                                <div className="flex h-3 w-3 items-center justify-center">
                                    <div
                                        className="h-3 w-3 animate-pulse rounded-full bg-green-600 shadow-lg shadow-green-500/50"
                                        style={{
                                            animationDuration:
                                                "1s",
                                        }}></div>
                                </div>
                                <p className="text-sm text-green-600 font-medium">
                                    {locale === "es"
                                        ? "Disponible para Nuevos Proyectos"
                                        : "Available for New Projects"}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Link href="/professional">
                                    <Button
                                        size="lg"
                                        className="bg-white text-black hover:bg-gray-100 font-medium transition-all duration-300">
                                        <FileText className="w-4 h-4 mr-2" />
                                        {locale === "es"
                                            ? "Ver CV Profesional"
                                            : "View Professional CV"}
                                    </Button>
                                </Link>
                                <a
                                    href={`mailto:${RESUME_DATA.contact.email}`}>
                                    <Button
                                        size="lg"
                                        variant="outline">
                                        <Mail className="w-4 h-4 mr-2" />
                                        {locale === "es"
                                            ? "Contactar"
                                            : "Let's Connect"}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="relative py-16 px-6">
                    <motion.div
                        className="max-w-6xl mx-auto"
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                <Highlighter
                                    action="box"
                                    color="#fbbf24"
                                    isView={true}>
                                    Expertise
                                </Highlighter>{" "}
                                &{" "}
                                <Highlighter
                                    action="highlight"
                                    color="#84cc16"
                                    isView={true}>
                                    Impact
                                </Highlighter>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                className="p-8 rounded-2xl bg-background/5 border border-border/20 backdrop-blur-sm hover:bg-background/10 transition-all duration-300 group"
                                whileInView={{ y: -10 }}
                                transition={{
                                    duration: 0.3,
                                }}>
                                <div className="text-center space-y-4">
                                    <Cloud className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-xl font-bold">
                                        <Highlighter
                                            action="underline"
                                            color="#f97316"
                                            isView={true}>
                                            Cloud DevOps
                                        </Highlighter>
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        AWS Solutions
                                        Architect • CI/CD •
                                        Docker • Kubernetes
                                    </p>
                                    <div className="border-t border-border/20 pt-4">
                                        <div className="text-3xl font-bold text-primary">
                                            80%
                                        </div>
                                        <div className="text-muted-foreground text-xs">
                                            {locale === "es"
                                                ? "Reducción en tiempo de despliegue"
                                                : "Deployment time reduction"}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="p-8 rounded-2xl bg-background/5 border border-border/20 backdrop-blur-sm hover:bg-background/10 transition-all duration-300 group"
                                whileInView={{ y: -10 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.1,
                                }}>
                                <div className="text-center space-y-4">
                                    <Code className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-xl font-bold">
                                        <Highlighter
                                            action="circle"
                                            color="#ef4444"
                                            isView={true}>
                                            API Design
                                        </Highlighter>
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        FastAPI • Next.js •
                                        Python • TypeScript
                                    </p>
                                    <div className="border-t border-border/20 pt-4">
                                        <div className="text-3xl font-bold text-primary">
                                            70%
                                        </div>
                                        <div className="text-muted-foreground text-xs">
                                            {locale === "es"
                                                ? "Mejora en rendimiento"
                                                : "Performance improvement"}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="p-8 rounded-2xl bg-background/5 border border-border/20 backdrop-blur-sm hover:bg-background/10 transition-all duration-300 group"
                                whileInView={{ y: -10 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.2,
                                }}>
                                <div className="text-center space-y-4">
                                    <TrendingUp className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-xl font-bold">
                                        <Highlighter
                                            action="highlight"
                                            color="#8b5cf6"
                                            isView={true}>
                                            FinTech Expert
                                        </Highlighter>
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {locale === "es"
                                            ? "Automatización • Análisis de Datos"
                                            : "Automation • Data Analysis"}
                                    </p>
                                    <div className="border-t border-border/20 pt-4">
                                        <div className="text-3xl font-bold text-primary">
                                            25%
                                        </div>
                                        <div className="text-muted-foreground text-xs">
                                            {locale === "es"
                                                ? "Optimización de costos"
                                                : "Cost optimization"}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Summary Section */}
                <section className="relative py-16 px-6 pb-20">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <div className="p-8 md:p-12 rounded-2xl bg-background/5 border border-border/20 backdrop-blur-sm">
                            <p className="text-lg md:text-xl leading-relaxed text-center">
                                {locale === "es" ? (
                                    <>
                                        En{" "}
                                        <Highlighter
                                            action="box"
                                            color="#06d6a0"
                                            isView={true}>
                                            Adelanta
                                            Factoring
                                        </Highlighter>
                                        , lideré la
                                        transformación
                                        digital completa:
                                        desde la
                                        automatización de
                                        procesos hasta la
                                        implementación de
                                        una plataforma
                                        robusta en la nube.
                                        Mi enfoque híbrido
                                        combina{" "}
                                        <Highlighter
                                            action="highlight"
                                            color="#fbbf24"
                                            isView={true}>
                                            análisis
                                            financiero
                                            profundo
                                        </Highlighter>{" "}
                                        con{" "}
                                        <Highlighter
                                            action="underline"
                                            color="#f97316"
                                            isView={true}>
                                            arquitectura de
                                            software moderna
                                        </Highlighter>
                                        , creando soluciones
                                        escalables que
                                        generan valor
                                        medible.
                                    </>
                                ) : (
                                    <>
                                        At{" "}
                                        <Highlighter
                                            action="box"
                                            color="#06d6a0"
                                            isView={true}>
                                            Adelanta
                                            Factoring
                                        </Highlighter>
                                        , I led complete
                                        digital
                                        transformation: from
                                        process automation
                                        to implementing
                                        robust cloud
                                        platforms. My hybrid
                                        approach combines{" "}
                                        <Highlighter
                                            action="highlight"
                                            color="#fbbf24"
                                            isView={true}>
                                            deep financial
                                            analysis
                                        </Highlighter>{" "}
                                        with{" "}
                                        <Highlighter
                                            action="underline"
                                            color="#f97316"
                                            isView={true}>
                                            modern software
                                            architecture
                                        </Highlighter>
                                        , creating scalable
                                        solutions that
                                        generate measurable
                                        value.
                                    </>
                                )}
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
