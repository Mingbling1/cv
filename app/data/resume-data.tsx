import { AdelantaLogo } from "@/app/images/logos";
import {
    GitHubIcon,
    LinkedInIcon,
} from "@/components/icons";

export const RESUME_DATA = {
    name: "Jimmy Auris Castillejos",
    initials: "JA",
    location: "Lima, Perú",
    locationLink:
        "https://www.google.com/maps/place/Wrocław",
    about: "Economista y Full Stack Engineer dedicado a buscar soluciones a problemas de negocio.",
    summary:
        "He aplicado mis conocimientos para automatizar procesos y crear soluciones backend y frontend que optimizan tareas repetitivas, especialmente en el ámbito financiero. He implementado mejoras en tiempos de despliegue, integración de tecnologías en la nube y desarrollo de reportes en tiempo real para apoyar la toma de decisiones críticas.",
    avatarUrl:
        "https://avatars.githubusercontent.com/u/109232820?s=400&u=89962108f2796f204e037b84dbd13882d9ae0477&v=4",
    personalWebsiteUrl: "https://github.com/Mingbling1",
    contact: {
        email: "jimmy.auris@outlook.com",
        tel: "+51924357862",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/Mingbling1",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jimmyauris/",
                icon: LinkedInIcon,
            },
        ],
    },
    education: [
        {
            school: "Universidad ESAN",
            degree: "Economía y Negocios Internacionales",
            start: null,
            end: "Mayo 2021",
            electives: ["Python ML"],
        },
    ],
    work: [
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Remote"],
            title: "Analista de Control de Gestión Financiera",
            logo: AdelantaLogo,
            start: "2022",
            end: null,
            description:
                "Desarrollé soluciones backend y frontend para la automatización de tareas financieras diarias.Tecnologías: Node.js, Typescript, Python, Github Actions, AWS, Docker.",
        },
        {
            company: "SUNAT",
            link: "https://www.sunat.gob.pe",
            badges: [],
            title: "Practicante de Economía",
            logo: null,
            start: "Enero 2021",
            end: "Diciembre 2021",
            description:
                "Creé reportes de control para apoyar la toma de decisiones en la oficina, con un enfoque en mejorar la eficiencia en la recaudación de impuestos.Tecnologías: Python",
        },
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "React/Next.js",
        "Node.js",
        "Python",
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Vercel",
        "Oracle",
        ".Net",
        "Nginx",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
        "Redis",
        "Microsoft SQL Server",
    ],
    projects: [
        {
            title: "SAAS OCR",
            techStack: [
                "Side Project",
                "Rust",
                "Machine Learning",
            ],
            description:
                "Creación de un SAAS como proyecto personal para automatización de estructuración de facturas con OCR.",
            logo: null,
            link: {
                label: "github.com",
                href: "https://github.com/Mingbling1",
            },
        },
    ],
} as const;
