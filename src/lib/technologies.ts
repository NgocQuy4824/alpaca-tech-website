import { Workflow, Sparkles, BrainCircuit, Eye, Bot, type LucideIcon } from "lucide-react";

export type TechItem = {
  name: string;
  /** Local brand logo (self-hosted SVG in /public/images/logos). */
  logo?: string;
  /** Lucide icon for abstract concepts (no single brand logo). */
  icon?: LucideIcon;
};

export type TechCategory = {
  key: "frontend" | "backend" | "mobile" | "cloud" | "database" | "ai";
  items: TechItem[];
};

const L = (file: string) => `/images/logos/${file}.svg`;

export const TECH_CATEGORIES: TechCategory[] = [
  {
    key: "frontend",
    items: [
      { name: "React", logo: L("react") },
      { name: "Next.js", logo: L("nextdotjs") },
      { name: "Vue.js", logo: L("vuedotjs") },
      { name: "TypeScript", logo: L("typescript") },
      { name: "Tailwind CSS", logo: L("tailwindcss") },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", logo: L("nodedotjs") },
      { name: "Java / Spring Boot", logo: L("springboot") },
      { name: "Python", logo: L("python") },
      { name: ".NET", logo: L("dotnet") },
      { name: "PHP", logo: L("php") },
    ],
  },
  {
    key: "mobile",
    items: [
      { name: "React Native", logo: L("react") },
      { name: "Flutter", logo: L("flutter") },
      { name: "iOS", logo: L("apple") },
      { name: "Android", logo: L("android") },
    ],
  },
  {
    key: "cloud",
    items: [
      { name: "AWS", logo: L("aws") },
      { name: "Microsoft Azure", logo: L("azure") },
      { name: "Google Cloud", logo: L("googlecloud") },
      { name: "Docker", logo: L("docker") },
      { name: "Kubernetes", logo: L("kubernetes") },
      { name: "CI/CD", icon: Workflow },
    ],
  },
  {
    key: "database",
    items: [
      { name: "PostgreSQL", logo: L("postgresql") },
      { name: "MySQL", logo: L("mysql") },
      { name: "MongoDB", logo: L("mongodb") },
      { name: "Redis", logo: L("redis") },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "Generative AI", icon: Sparkles },
      { name: "Machine Learning", icon: BrainCircuit },
      { name: "Computer Vision", icon: Eye },
      { name: "AI Agents", icon: Bot },
      { name: "OpenAI / LLM APIs", logo: L("openai") },
    ],
  },
];
