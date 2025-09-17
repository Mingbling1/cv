import { AdelantaLogo } from "@/assets/logos";
import {
    GitHubIcon,
    LinkedInIcon,
} from "@/app/(main)/_icons";

export const RESUME_DATA_ES = {
    name: "Jimmy Auris Castillejos",
    initials: "JA",
    location: "Lima, Perú",
    locationLink: "https://www.google.com/maps/place/Lima",
    title: "Arquitecto de Soluciones",
    subtitle:
        "CLOUD DEVOPS | MEJORA DE PROCESOS & AUTOMATIZACIÓN | DISEÑO DE APIS & SISTEMAS ESCALABLES",
    about: "Economista con sólida práctica en tecnología aplicada a finanzas: automatizo procesos, diseño APIs y despliego infraestructuras en la nube para convertir problemas operativos en productos digitales que mejoran la toma de decisiones.",
    summary:
        "Tengo un perfil híbrido (análisis financiero + desarrollo/arquitectura) —me apasiona materializar ideas en soluciones escalables, optimizando costos y tiempos, y traduciéndolo en resultados cuantificables para la empresa.",
    avatarUrl:
        "https://avatars.githubusercontent.com/u/109232820?s=400&u=89962108f2796f204e037b84dbd13882d9ae0477&v=4",
    personalWebsiteUrl: "https://jimmyauris.musuq.me",
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
            {
                name: "Website",
                url: "https://jimmyauris.musuq.me",
                icon: GitHubIcon,
            },
        ],
    },
    education: [
        {
            school: "Universidad ESAN",
            degree: "Bachiller en Economía y Negocios Internacionales",
            location: "Surco, Lima",
            start: null,
            end: "Mayo 2021",
            electives: ["Machine Learning con Python"],
        },
        {
            school: "Universidad Nacional de Ingeniería",
            degree: "SQL Server Database Administrator",
            location: "Lima, Perú",
            start: null,
            end: "Diciembre 2019",
            electives: [],
        },
    ],
    certifications: [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services (AWS)",
            date: "Diciembre 2024 – Diciembre 2027",
            link: null,
        },
    ],
    work: [
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Perú"],
            title: "Arquitecto de Soluciones",
            logo: AdelantaLogo,
            start: "Enero 2025",
            end: "Septiembre 2025",
            description:
                "• Lideré la consolidación de la plataforma interna diseñando e implementando un flujo completo con APIs (FastAPI) y frontend (Next.js), centralizando la captura y reporte de datos en dashboards.\n• Implementé pipelines CI/CD con GitHub Actions y contenedores (Docker, Kubernetes), logrando una reducción del ~80% en el tiempo de despliegue de nuevas funcionalidades.\n• Diseñé y apliqué prácticas FinOps durante la migración y operación en AWS (EC2, Lambda, RDS), optimizando los costos operativos en la nube en un 25%.\n• Construí procesos serverless (AWS Lambda + EventBridge) para cálculos masivos que alimentaron dashboards en Power BI, reduciendo latencias de procesamiento hasta un 40% en workflows críticos.\n• Gestioné la migración de bases de datos de MySQL a PostgreSQL (AWS DMS) y administré la instancia RDS, mejorando la resiliencia y capacidad analítica de la plataforma.",
        },
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Perú"],
            title: "Analista de Control de Gestión",
            logo: AdelantaLogo,
            start: "Enero 2023",
            end: "Diciembre 2024",
            description:
                "• Transformé scripts ad-hoc en un sistema robusto, migrando SPs a ORM (SQLAlchemy) y refactorizando a una arquitectura hexagonal, lo que permitió disminuir la carga de consultas críticas hasta en un 70%.\n• Desarrollé un sistema interno para gestión de inversionistas que soportó un incremento de capital administrado de ~S/100 millones, acelerando reportes y la toma de decisión en tiempo real.\n• Implementé automatizaciones en Python (pandas, NumPy) para reporting tributario y conciliaciones, ahorrando ~15 horas/semana en tareas repetitivas y reduciendo errores manuales significativamente.\n• Lideré técnicamente el rediseño del CRM y la integración de bots conversacionales (n8n), lo que resultó en un incremento del 15% en desembolsos comerciales (~S/2 millones adicionales).\n• Migré y autogestioné herramientas internas (n8n, NocoDB) con pipelines CI/CD, posicionando a la empresa a la vanguardia en la automatización de procesos comerciales.",
        },
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Perú"],
            title: "Asistente de Operaciones",
            logo: AdelantaLogo,
            start: "Febrero 2022",
            end: "Diciembre 2022",
            description:
                "• Digitalicé y automatizé reportes tributarios y procesos operativos con Python, mejorando la eficiencia operativa en un ~60% y liberando tiempo de análisis.\n• Implementé alertas y reportes con pandas/Plotly integrados a dashboards internos, reduciendo incidencias por error en procesos en ~20%.\n• Mostré iniciativa para crear soluciones escalables, sentando la base para migraciones y sistemas que luego serían formalizados.",
        },
        {
            company: "SUNAT",
            link: "https://www.sunat.gob.pe",
            badges: ["Lima, Perú"],
            title: "Asistente de Operaciones",
            logo: null,
            start: "Enero 2021",
            end: "Diciembre 2021",
            description:
                "• Limpieza y estructuración de grandes volúmenes de datos no estructurados para análisis de cobranza coactiva, mejorando precisión en reportes en ~30%.",
        },
    ],
    skills: {
        "Lenguajes & frameworks": [
            "Python (pandas, FastAPI)",
            "JavaScript/TypeScript",
            "Next.js",
            "React",
            "Tailwind",
            "SQLAlchemy",
        ],
        "Infraestructura & Cloud": [
            "AWS (EC2, ECR, Lambda, EventBridge, RDS)",
            "Docker",
            "Kubernetes",
            "Terraform",
            "GitHub Actions (CI/CD)",
        ],
        "Bases de datos": [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "Redis",
            "MongoDB",
        ],
        "Herramientas de integración & automatización": [
            "n8n",
            "NocoDB",
            "Resend (mailing)",
            "AWS DMS",
        ],
        "BI & visualización": [
            "Looker Studio",
            "Power BI",
            "Plotly",
        ],
        Prácticas: [
            "Clean code / Arquitectura hexagonal",
            "FinOps",
            "monitoreo y alerting",
        ],
    },
    interests: [
        "Mentalidad product-oriented: convierto necesidades del negocio en herramientas tangibles.",
        "Optimización orientada a impacto: priorizo costo, tiempo y calidad para maximizar resultados operativos.",
        "Mejora de procesos y automatización: diseño orquestaciones, pipelines y bots que reducen trabajo manual y errores.",
        "Arquitecturas escalables y gobernanza cloud: diseño infraestructuras con enfoque en FinOps y resiliencia.",
        "Investigación aplicada y difusión: desarrollo proyectos técnicos, los documento y los comparto en GitHub y LinkedIn.",
        "Interés técnico continuo: profundizo en Rust y multi-cloud (GCP/Azure) para ampliar alternativas de arquitectura.",
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

export const RESUME_DATA_EN = {
    name: "Jimmy Auris Castillejos",
    initials: "JA",
    location: "Lima, Peru",
    locationLink: "https://www.google.com/maps/place/Lima",
    title: "Solutions Architect",
    subtitle:
        "CLOUD DEVOPS | PROCESS IMPROVEMENT & AUTOMATION | API DESIGN & SCALABLE SYSTEMS",
    about: "Economist with solid practice in technology applied to finance: I automate processes, design APIs and deploy cloud infrastructures to convert operational problems into digital products that improve decision-making.",
    summary:
        "I have a hybrid profile (financial analysis + development/architecture) — I'm passionate about materializing ideas into scalable solutions, optimizing costs and time, and translating it into quantifiable results for the company.",
    avatarUrl:
        "https://avatars.githubusercontent.com/u/109232820?s=400&u=89962108f2796f204e037b84dbd13882d9ae0477&v=4",
    personalWebsiteUrl: "https://jimmyauris.musuq.me",
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
            {
                name: "Website",
                url: "https://jimmyauris.musuq.me",
                icon: GitHubIcon,
            },
        ],
    },
    education: [
        {
            school: "ESAN University",
            degree: "Bachelor in Economics and International Business",
            location: "Surco, Lima",
            start: null,
            end: "May 2021",
            electives: ["Machine Learning with Python"],
        },
        {
            school: "National University of Engineering",
            degree: "SQL Server Database Administrator",
            location: "Lima, Peru",
            start: null,
            end: "December 2019",
            electives: [],
        },
    ],
    certifications: [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services (AWS)",
            date: "December 2024 – December 2027",
            link: null,
        },
    ],
    work: [
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Peru"],
            title: "Solutions Architect",
            logo: AdelantaLogo,
            start: "January 2025",
            end: "September 2025",
            description:
                "• Led the consolidation of the internal platform by designing and implementing a complete flow with APIs (FastAPI) and frontend (Next.js), centralizing data capture and reporting in dashboards.\n• Implemented CI/CD pipelines with GitHub Actions and containers (Docker, Kubernetes), achieving a ~80% reduction in deployment time for new features.\n• Designed and applied FinOps practices during migration and operation on AWS (EC2, Lambda, RDS), optimizing cloud operational costs by 25%.\n• Built serverless processes (AWS Lambda + EventBridge) for massive calculations that fed Power BI dashboards, reducing processing latencies by up to 40% in critical workflows.\n• Managed database migration from MySQL to PostgreSQL (AWS DMS) and administered the RDS instance, improving platform resilience and analytical capacity.",
        },
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Peru"],
            title: "Management Control Analyst",
            logo: AdelantaLogo,
            start: "January 2023",
            end: "December 2024",
            description:
                "• Transformed ad-hoc scripts into a robust system, migrating SPs to ORM (SQLAlchemy) and refactoring to hexagonal architecture, reducing critical query load by up to 70%.\n• Developed an internal system for investor management that supported an increase in managed capital of ~S/100 million, accelerating reports and real-time decision making.\n• Implemented Python automations (pandas, NumPy) for tax reporting and reconciliations, saving ~15 hours/week on repetitive tasks and significantly reducing manual errors.\n• Technically led the CRM redesign and integration of conversational bots (n8n), resulting in a 15% increase in commercial disbursements (~S/2 million additional).\n• Migrated and self-managed internal tools (n8n, NocoDB) with CI/CD pipelines, positioning the company at the forefront of commercial process automation.",
        },
        {
            company: "Adelanta Factoring",
            link: "https://adelantafactoring.com",
            badges: ["Lima, Peru"],
            title: "Operations Assistant",
            logo: AdelantaLogo,
            start: "February 2022",
            end: "December 2022",
            description:
                "• Digitized and automated tax reports and operational processes with Python, improving operational efficiency by ~60% and freeing up analysis time.\n• Implemented alerts and reports with pandas/Plotly integrated into internal dashboards, reducing process error incidents by ~20%.\n• Showed initiative to create scalable solutions, laying the foundation for migrations and systems that would later be formalized.",
        },
        {
            company: "SUNAT",
            link: "https://www.sunat.gob.pe",
            badges: ["Lima, Peru"],
            title: "Operations Assistant",
            logo: null,
            start: "January 2021",
            end: "December 2021",
            description:
                "• Cleaning and structuring large volumes of unstructured data for coercive collection analysis, improving report accuracy by ~30%.",
        },
    ],
    skills: {
        "Languages & frameworks": [
            "Python (pandas, FastAPI)",
            "JavaScript/TypeScript",
            "Next.js",
            "React",
            "Tailwind",
            "SQLAlchemy",
        ],
        "Infrastructure & Cloud": [
            "AWS (EC2, ECR, Lambda, EventBridge, RDS)",
            "Docker",
            "Kubernetes",
            "Terraform",
            "GitHub Actions (CI/CD)",
        ],
        Databases: [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "Redis",
            "MongoDB",
        ],
        "Integration & automation tools": [
            "n8n",
            "NocoDB",
            "Resend (mailing)",
            "AWS DMS",
        ],
        "BI & visualization": [
            "Looker Studio",
            "Power BI",
            "Plotly",
        ],
        Practices: [
            "Clean code / Hexagonal architecture",
            "FinOps",
            "monitoring and alerting",
        ],
    },
    interests: [
        "Product-oriented mindset: I convert business needs into tangible tools.",
        "Impact-oriented optimization: I prioritize cost, time and quality to maximize operational results.",
        "Process improvement and automation: I design orchestrations, pipelines and bots that reduce manual work and errors.",
        "Scalable architectures and cloud governance: I design infrastructures with a focus on FinOps and resilience.",
        "Applied research and dissemination: I develop technical projects, document them and share them on GitHub and LinkedIn.",
        "Continuous technical interest: I delve into Rust and multi-cloud (GCP/Azure) to expand architecture alternatives.",
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
                "Creation of a SAAS as a personal project for automation of invoice structuring with OCR.",
            logo: null,
            link: {
                label: "github.com",
                href: "https://github.com/Mingbling1",
            },
        },
    ],
} as const;

export function getResumeData(locale: "es" | "en" = "es") {
    return locale === "en"
        ? RESUME_DATA_EN
        : RESUME_DATA_ES;
}

// For backward compatibility
export const RESUME_DATA = RESUME_DATA_ES;
