export interface Intro{
    name: string;
    about: string;
    href: string;
    github: string;
    linkedin: string;
    email: string;
}

export interface ResumeEntry{
    title: string;
    href?: string;
    date?: string;
    location?: string;
    description?: string[];
}

export interface EducationEntry extends ResumeEntry{
    title: string;
    date: string;
    location: string;
    description: string[];
}

export interface ProjectEntry extends ResumeEntry{
    title: string;
    href: string;
    description: string[];
}

export const intro: Intro = {
    name: "Daler Khamidov",
    about: "As an agile software engineer with experience in large-scale projects, databases, front-end, back-end, and server management, I excel in delivering innovative solutions.",
    href: "",
    github: "https://github.com/DalerKhamidov",
    linkedin: "https://linkedin.com/in/daler-khamidov",
    email: "daler.khamidov12@gmail.com",
};

export const work: ResumeEntry[] = [
    {
      title: "Backend Engineer at GE Aerospace (contractor)",
      href: "https://www.geaerospace.com/",
      date: "2023 to Present",
      location: "Niskayuna NY",
      description: [
        "Configured and maintained HPC systems, including compute nodes, storage systems, and network components, to enhance performance and reliability",
        "Pushed high level coordinated software installation",
        "Managed maintanance and software product support",
      ],
    }
];


export const education: EducationEntry[] = [
    {
      title: "BS Computer Science at GMU",
      date: "2018 to 2022",
      location: "Fairfax, VA",
      description: [
        "Focus: Low-level software development for systems and network computing",
      ],
    },
]