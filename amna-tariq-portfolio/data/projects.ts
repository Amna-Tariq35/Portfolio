export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  featured: boolean;
  /** Tailwind gradient utility class used for the thumbnail when no real image is supplied. */
  gradient: string;
  /** Optional real screenshot — drop a file in /public/projects/ and point this at it. */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "lumiere",
    name: "Lumiere Ecommerce",
    tagline: "AI & AR-powered makeup shopping platform",
    description:
      "A full-stack e-commerce platform with a real-time AR virtual try-on built on DeepAR, plus an AI shopping assistant powered by Google and Groq. Stripe handles payments end to end; Supabase powers auth, data, and storage.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Stripe", "Supabase", "DeepAR", "AI SDK"],
    link: { label: "Live demo", href: "https://lumiere-makeup.vercel.app/" },
    featured: true,
    gradient: "bg-gradient-warm",
    image: "/projects/lumiere_makeup.png"
  },
  {
    id: "ar-makeup",
    name: "AR Makeup Try-On",
    tagline: "Cross-platform AR mobile app — Final Year Project",
    description:
      "A Flutter app that lets users try on makeup in real time across seven product categories, using DeepAR for face tracking and Google ML Kit for feature detection. Includes a custom native fix for an Android EGL rendering timing bug.",
    stack: ["Flutter", "Dart", "DeepAR SDK", "Google ML Kit", "Supabase", "C++/CMake"],
    link: { label: "View on GitHub", href: "https://github.com/Amna-Tariq35/AR-Makup-App" },
    featured: true,
    gradient: "bg-gradient-dusk",
    image: "/projects/AR_Makeup_TryOn.png"
  },
  {
    id: "tinychat",
    name: "TinyChat",
    tagline: "Real-time messaging application",
    description:
      "A WhatsApp-style chat app with live delivery and read receipts, presence indicators, and message controls like delete-for-everyone and hide-chat — built on Socket.IO with a JWT-secured MongoDB backend.",
    stack: ["React", "Vite", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    link: { label: "Live demo", href: "https://tiny-chat.vercel.app/" },
    featured: true,
    gradient: "bg-gradient-glow",
    image: "/projects/TinyChat.png"
  },
  {
    id: "health-hub",
    name: "Health Hub",
    tagline: "Hospital management system",
    description:
      "A role-based hospital management system handling patient admissions, ward allocation, medicine inventory, and automated billing with tax calculation, backed by transactional Microsoft SQL Server operations.",
    stack: ["Node.js", "Express", "Microsoft SQL Server", "bcrypt"],
    link: { label: "View on GitHub", href: "https://github.com/Amna-Tariq35/Health-Hub" },
    featured: false,
    gradient: "bg-gradient-warm",
    image: "/projects/Health_Hub.png"
  },
  {
    id: "sana-safinaz",
    name: "Sana Safinaz Clone",
    tagline: "Full-stack e-commerce experience",
    description:
      "An end-to-end online store covering browsing, cart, wishlist, checkout, and order placement, with an admin panel for managing products, categories, and images.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "bcrypt"],
    link: { label: "Live demo", href: "https://sana-safinaz-clone-tau.vercel.app/" },
    featured: false,
    gradient: "bg-gradient-dusk",
    image: "/projects/SanaSafinaz.png"
  },
  {
    id: "proposalpro",
    name: "ProposalPro",
    tagline: "Proposal generator for freelancers",
    description:
      "A tool that helps freelancers draft high-quality business proposals, cover letters, and application emails for platforms like Upwork and Fiverr.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind"],
    link: { label: "Live demo", href: "https://proposal-pro-lovat.vercel.app/" },
    featured: true,
    gradient: "bg-gradient-glow",
    image: "/projects/ProposalPro.png"
  },
  {
    id: "nutristep",
    name: "NutriStep",
    tagline: "Nutrition & fitness tracker",
    description:
      "A mobile app for logging meals, exercise, and water intake, with calorie and macronutrient breakdowns synced in real time through Firestore.",
    stack: ["Flutter", "Firebase", "Dart"],
    link: { label: "View on GitHub", href: "https://github.com/Amna-Tariq35/NutriStep" },
    featured: false,
    gradient: "bg-gradient-warm",
    image: "/projects/NutriStep.png"
  },
  {
    id: "depresso-haus",
    name: "Depresso Haus",
    tagline: "High-performance SSR web app",
    description:
      "A visually driven, server-rendered web app focused on fast load times, strong SEO fundamentals, and a fully responsive, component-driven interface.",
    stack: ["Next.js", "Tailwind CSS"],
    link: { label: "Live demo", href: "https://depresso-haus.vercel.app/" },
    featured: false,
    gradient: "bg-gradient-dusk",
    image: "/projects/Depresso_Haus.png"
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", "Express.js", "Flutter", "Dart"],
  },
  {
    label: "Web & APIs",
    items: ["HTML5", "CSS3", "Tailwind CSS", "EJS", "RESTful API Design"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "Microsoft SQL Server", "Firebase", "Supabase"],
  },
  {
    label: "Real-Time & Auth",
    items: ["Socket.IO", "JWT", "bcrypt", "express-session"],
  },
  {
    label: "Tools & Integrations",
    items: ["Git", "GitHub", "Agile/Scrum", "Stripe", "DeepAR SDK", "Google ML Kit", "AI Models (Gemini, Groq)"],
  },
];

export const toolsTicker: string[] = [
  "Next.js", "React", "Node.js", "Flutter", "TypeScript",
  "MongoDB", "Supabase", "DeepAR", "Stripe", "Socket.IO", "Firebase", "Tailwind CSS",
];

export const education = {
  university: "COMSATS University Islamabad, Lahore Campus",
  degree: "BS Software Engineering",
  dates: "Feb 2023 – Jan 2027 (Expected)",
  gpa: "CGPA: 3.92 / 4.00",
};

export const heroSummary =
  "Full-stack software engineer with 3 years of hands-on experience shipping production web, mobile, and AI/AR-powered products — from checkout flows and real-time chat to face-tracking AR try-on.";

export const aboutText =
  "For the past three years I've been designing, building, and shipping full-stack products end to end — web platforms, cross-platform mobile apps, and increasingly, systems that fold in AI and AR. I like owning the whole stack: from database schema and API design to the pixel-level polish of the interface people actually touch. That's meant building everything from an AI-driven AR shopping experience with real-time face tracking, to a role-based hospital management system, to a WhatsApp-style chat app built on sockets from scratch. I'm currently completing a BS in Software Engineering at COMSATS University Islamabad (CGPA 3.92/4.00), and I'm looking for a full-stack, frontend, or AI/AR-integration role where I can keep building things people actually use.";

export const contact = {
  email: "amnatariq9892@gmail.com",
  phone: "+92 333 4784863",
  location: "Lahore, Pakistan",
  github: "https://github.com/Amna-Tariq35",
  linkedin: "https://www.linkedin.com/in/amnatariqhashmi",
};
