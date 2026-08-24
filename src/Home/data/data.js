// ============================================================
// data.js — single source of truth for all Home page content.
// Edit copy, numbers, and images here; components just render it.
// ============================================================

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const hero = {
  eyebrow: "",
  titleLine1: "Smarter Interiors Start Here",
  titleLine2Prefix: "— Welcome to ",
  titleLine2Highlight: "Desinary",
  description:
    "Whether you prefer AI precision or hands-on control, Desinary lets you design interiors your way — smarter, faster, and beautifully tailored.",
  ctaLabel: "Design now",
  clientCount: "200+",
  clientLabel: "Clients",
  avatars: [
    "https://i.pravatar.cc/64?img=32",
    "https://i.pravatar.cc/64?img=47",
    "https://i.pravatar.cc/64?img=12",
    "https://i.pravatar.cc/64?img=5",
  ],
  image:
    "https://images.unsplash.com/photo-1616486338d812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
};

export const meetDesinary = {
  titlePrefix: "Meet ",
  titleHighlight: "Desinary",
  titleSuffix: " — your intelligent interior design partner",
  paragraphs: [
    "Desinary blends the power of AI with manual flexibility to help you create beautiful, functional living spaces effortlessly.",
    "Upload a room scan, pick a template or style, and explore smart layouts or design it all yourself.",
    "From concept to cost review, Desinary brings your vision to life — fast, accurate, and truly personalized. Step into the future of interior design with Desinary.",
  ],
  stats: [
    { value: "50k+", label: "Satisfied Clients" },
    { value: "125k+", label: "Projects" },
    { value: "30+", label: "Styles" },
    { value: "12+", label: "Branches" },
  ],
};

export const journey = {
  titlePrefix: "Your Journey with ",
  titleHighlight: "Desinary",
  subtitle:
    "A simple, guided path from your first sign-up to a finished, move-in-ready space.",
  steps: [
    {
      number: "01",
      title: "Sign up and Get Started",
      description:
        "Create your free Desinary account in seconds and unlock access to every design tool the platform offers.",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "02",
      title: "Enter Your Design Space",
      description:
        "Upload a scan, drawing, or photo of your room so Desinary can map the space accurately before you design.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "03",
      title: "Pick a Template, Style or Apply Custom Setting",
      description:
        "Choose from curated templates and styles, or set your own preferences and let Desinary tailor the layout to you.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Design with AI or Manual Assistance",
      description:
        "Let AI generate a full layout instantly, or fine-tune every piece yourself with simple drag-and-drop controls.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    },
    {
      number: "05",
      title: "Review Pricing and Finalize",
      description:
        "See real-time, transparent pricing for every item in your design before you confirm and check out.",
      image:
        "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

export const features = {
  titlePrefix: "Trusted Choice for ",
  titleHighlight: "Interior Innovation",
  description:
    "Discover the powerful tools, intelligent design options, and seamless experience that make Desinary the ultimate solution for modern interior transformations.",
  items: [
    {
      title: "Multiple Layout Input Options",
      description:
        "Design rooms using templates, drawings, scans, or uploads — choose the input method that suits you.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "AI-Powered Smart Design Assistance",
      description:
        "Automatically generate personalized layouts and furniture using AI with voice or text-based inputs.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Manual Customization with Drag & Drop",
      description:
        "Manually place and adjust furniture in an interactive 3D space with simple drag-and-drop tools.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Dynamic Style and Budget Matching",
      description:
        "Select styles and budget; Desinary suggests furniture and layouts tailored to your design and cost preferences.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Real-Time Pricing and Final Review",
      description:
        "View furniture costs and total pricing dynamically, with full transparency before proceeding to checkout.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop",
    },
  ],
};

export const transformBanner = {
  titleLine1: "Transform Your Space Into A Masterpiece",
  titleLine2: "With Our Design Platform.",
  image:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
};

export const testimonials = {
  titlePrefix: "Voices of Satisfaction",
  titleLine2Prefix: "— Our ",
  titleHighlight: "Clients Speak",
  description:
    "Hear firsthand how Desinary's innovative interior design solutions have transformed spaces and exceeded expectations, earning the trust and satisfaction of our valued clients.",
  reviews: [
    {
      name: "Jenny Wilson",
      rating: 5,
      quote:
        "Work With Archspace Architecte Mastery Every Corner of Serenity Beckons You",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      name: "Jenny Wilson",
      rating: 5,
      quote:
        "Work With Archspace Architecte Mastery Every Corner of Serenity Beckons You",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      name: "Jenny Wilson",
      rating: 5,
      quote:
        "Work With Archspace Architecte Mastery Every Corner of Serenity Beckons You",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
  ],
};

export const beforeAfter = {
  titlePrefix: "See What ",
  titleHighlight: "Greatness",
  titleSuffix: " Can Unfold Here",
  description:
    "Experience the extraordinary potential of Desinary, where every detail is transformed to elevate your space to unmatched perfection",
  before:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
  after:
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop",
};

export const faq = {
  titlePrefix: "Frequently Ask ",
  titleHighlight: "Questions",
  subtitle: "Browse our Frequently Asked Questions.",
  subtitle2: "If you don't find what you're looking for, feel free to contact us below.",
  items: [
    {
      question: "What services do you offer",
      answer:
        "We offer full-service interior design, from AI-generated layouts and 3D visualizations to manual customization, furniture sourcing, and real-time cost estimates.",
    },
    {
      question: "How does the design process work?",
      answer:
        "Sign up, upload a scan or photo of your room, choose a template or style, then design with AI assistance or manually — then review pricing and finalize.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Yes. Desinary's dynamic style and budget matching suggests furniture and layouts tailored to the budget you set.",
    },
    {
      question: "How long does a typical interior project take?",
      answer:
        "Most digital designs are ready within minutes to a few days, depending on complexity and how much manual customization you'd like.",
    },
    {
      question: "Do I need to move out during the renovation?",
      answer:
        "No — Desinary is a design and planning platform. Any physical renovation timeline depends on your chosen contractor and project scope.",
    },
  ],
};

export const ctaBanner = {
  title: "Ready to Transform Your Space?",
  description:
    "Join thousands of satisfied clients who have discovered the power of AI-driven interior design with Desinary.",
  ctaLabel: "Start Your Design Journey",
};

export const footer = {
  tagline: "AI-powered interior design solutions from modern living spaces",
  socials: [
    { label: "Facebook", icon: "facebook" },
    { label: "Instagram", icon: "instagram" },
    { label: "X", icon: "x" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  contact: {
    address: "Office 357, Block D Business Avenue Ahmedabad",
    phone: "+91 829956 8797",
    email: "info@Desinary.com",
  },
  newsletter: {
    description:
      "Join countless happy clients who have embraced AI-driven design with Desinary.",
    placeholder: "E-mail",
  },
};
