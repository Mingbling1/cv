"use client";
import { getResumeData } from "@/app/_data/resume-data";
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { LanguageDropdown } from "@/components/language-dropdown";
import { ModeToggle } from "@/components/mode-toogle";
import {
    ArrowLeft,
    Globe,
    Mail,
    Phone,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ProfessionalPage() {
    const locale = useLocale() as "es" | "en";
    const RESUME_DATA = getResumeData(locale);

    // UI text based on locale
    const uiText = {
        backToHome:
            locale === "en"
                ? "Back to home"
                : "Volver al inicio",
        printPdf:
            locale === "en" ? "Print PDF" : "Imprimir PDF",
        workExperience:
            locale === "en"
                ? "Work Experience"
                : "Experiencia Laboral",
        education:
            locale === "en" ? "Education" : "Educación",
        certifications:
            locale === "en"
                ? "Certifications"
                : "Certificaciones",
        skills: locale === "en" ? "Skills" : "Habilidades",
        interests:
            locale === "en" ? "Interests" : "Intereses",
    };
    return (
        <div className="min-h-screen bg-background">
            {/* Header with controls - No Print */}
            <div className="print:hidden flex justify-between items-center p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <Link
                    href="/"
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 ease-in-out">
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    <span className="relative">
                        {uiText.backToHome}
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                    </span>
                </Link>
                <div className="flex gap-2">
                    <ModeToggle />
                    <Button
                        onClick={() => window.print()}
                        variant="outline"
                        size="sm">
                        {uiText.printPdf}
                    </Button>
                    <LanguageDropdown />
                </div>
            </div>

            {/* CV Content - Optimized for Print */}
            <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
                {/* Header Section */}
                <div className="text-center mb-6 print:mb-4">
                    <Avatar className="size-28 mx-auto mb-4 print:mb-2">
                        <AvatarImage
                            alt={RESUME_DATA.name}
                            src={RESUME_DATA.avatarUrl}
                        />
                        <AvatarFallback>
                            {RESUME_DATA.initials}
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="text-3xl print:text-2xl font-bold mb-2">
                        {RESUME_DATA.name}
                    </h1>
                    <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <span className="flex items-center gap-1">
                                📍 {RESUME_DATA.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                {
                                    RESUME_DATA.personalWebsiteUrl
                                }
                            </span>
                            <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {RESUME_DATA.contact.email}
                            </span>
                            <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {RESUME_DATA.contact.tel}
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            {RESUME_DATA.contact.social
                                .filter(
                                    (social) =>
                                        social.name !==
                                        "Website"
                                )
                                .map((social, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" />
                                        {social.url}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Title and Subtitle */}
                <div className="text-center mb-6 print:mb-4">
                    <h2 className="text-xl print:text-lg font-semibold mb-1">
                        {RESUME_DATA.title}
                    </h2>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {RESUME_DATA.subtitle}
                    </p>
                </div>

                {/* Summary */}
                <div className="mb-6 print:mb-4">
                    <div className="space-y-3 text-sm print:text-xs leading-relaxed">
                        <p>{RESUME_DATA.about}</p>
                        <p>{RESUME_DATA.summary}</p>
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-6 print:mb-4">
                    <h3 className="text-lg print:text-base font-bold mb-3 print:mb-2 border-b pb-1">
                        {uiText.workExperience}
                    </h3>
                    <div className="space-y-4 print:space-y-3">
                        {RESUME_DATA.work.map(
                            (job, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-semibold text-base print:text-sm">
                                                {
                                                    job.company
                                                }{" "}
                                                <span className="text-muted-foreground text-sm print:text-xs">
                                                    {
                                                        job
                                                            .badges[0]
                                                    }
                                                </span>
                                            </h4>
                                            <p className="font-medium text-sm print:text-xs">
                                                {job.title}
                                            </p>
                                        </div>
                                        <div className="text-right text-sm print:text-xs text-muted-foreground">
                                            <p>
                                                {job.start}{" "}
                                                –{" "}
                                                {job.end ||
                                                    "Presente"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm print:text-xs leading-relaxed whitespace-pre-line text-muted-foreground">
                                        {job.description}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-6 print:mb-4">
                    <h3 className="text-lg print:text-base font-bold mb-3 print:mb-2 border-b pb-1">
                        {uiText.education}
                    </h3>
                    <div className="space-y-3 print:space-y-2">
                        {RESUME_DATA.education.map(
                            (edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-semibold text-sm print:text-xs">
                                                {edu.school}{" "}
                                                <span className="text-muted-foreground">
                                                    {
                                                        edu.location
                                                    }
                                                </span>
                                            </h4>
                                            <p className="text-sm print:text-xs text-muted-foreground">
                                                {edu.degree}
                                            </p>
                                            {edu.electives &&
                                                edu
                                                    .electives
                                                    .length >
                                                0 && (
                                                    <p className="text-xs text-muted-foreground">
                                                        Electivos:{" "}
                                                        {edu.electives.join(
                                                            ", "
                                                        )}
                                                    </p>
                                                )}
                                        </div>
                                        <div className="text-right text-sm print:text-xs text-muted-foreground">
                                            <p>{edu.end}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Certifications */}
                <div className="mb-6 print:mb-4">
                    <h3 className="text-lg print:text-base font-bold mb-3 print:mb-2 border-b pb-1">
                        {uiText.certifications}
                    </h3>
                    <div className="space-y-3 print:space-y-2">
                        {RESUME_DATA.certifications.map(
                            (cert, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-semibold text-sm print:text-xs">
                                                {
                                                    cert.issuer
                                                }
                                            </h4>
                                            <p className="text-sm print:text-xs text-muted-foreground">
                                                {cert.name}
                                            </p>
                                        </div>
                                        <div className="text-right text-sm print:text-xs text-muted-foreground">
                                            <p>
                                                {cert.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-6 print:mb-4">
                    <h3 className="text-lg print:text-base font-bold mb-3 print:mb-2 border-b pb-1">
                        {uiText.skills}
                    </h3>
                    <div className="space-y-3 print:space-y-2">
                        {Object.entries(
                            RESUME_DATA.skills
                        ).map(
                            ([category, skills], index) => (
                                <div key={index}>
                                    <span className="font-medium text-sm print:text-xs">
                                        • {category}:{" "}
                                    </span>
                                    <span className="text-sm print:text-xs text-muted-foreground">
                                        {skills.join(", ")}.
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Skills & Interests */}
                <div className="mb-6 print:mb-4">
                    <h3 className="text-lg print:text-base font-bold mb-3 print:mb-2 border-b pb-1">
                        {uiText.interests}
                    </h3>
                    <div className="space-y-2 print:space-y-1">
                        {RESUME_DATA.interests.map(
                            (interest, index) => (
                                <div
                                    key={index}
                                    className="text-sm print:text-xs text-muted-foreground">
                                    • {interest}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Print Styles */}
            <style
                jsx
                global>{`
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        color-adjust: exact;
                    }

                    .print\\:hidden {
                        display: none !important;
                    }

                    .print\\:p-0 {
                        padding: 0 !important;
                    }

                    .print\\:max-w-none {
                        max-width: none !important;
                    }

                    .print\\:text-2xl {
                        font-size: 1.5rem !important;
                    }

                    .print\\:text-lg {
                        font-size: 1.125rem !important;
                    }

                    .print\\:text-base {
                        font-size: 1rem !important;
                    }

                    .print\\:text-sm {
                        font-size: 0.875rem !important;
                    }

                    .print\\:text-xs {
                        font-size: 0.75rem !important;
                    }

                    .print\\:mb-4 {
                        margin-bottom: 1rem !important;
                    }

                    .print\\:mb-2 {
                        margin-bottom: 0.5rem !important;
                    }

                    .print\\:space-y-3 > * + * {
                        margin-top: 0.75rem !important;
                    }

                    .print\\:space-y-2 > * + * {
                        margin-top: 0.5rem !important;
                    }

                    .print\\:space-y-1 > * + * {
                        margin-top: 0.25rem !important;
                    }
                }
            `}</style>
        </div>
    );
}
