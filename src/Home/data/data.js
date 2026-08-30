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
  titleHighlight: "Meet Desinary",
  titleSuffix: " — your intelligent interior ",
  titleHighlight2: " design partner",
  paragraphs: [
    "Desinary combines the power of AI with the freedom of manual control, helping you create beautiful, functional spaces effortlessly.",
    "Simply upload a room scan, choose your preferred style or template, and explore smart, pre-optimized layouts, or design everything your way.",
    "From concept to cost planning, Desinary brings your vision to life — fast, accurate, and fully personalized. Step into the future of interior design, where intelligence meets creativity, and your space becomes truly yours.",
  ],
  stats: [
    { value: "50k+", label: "Satisfied Clients" },
    { value: "125k+", label: "Projects" },
    { value: "30+", label: "Styles" },
    { value: "12+", label: "Branches" },
  ],
};

export const journey = {
  titlePrefix: "Your",
  titleHighlight: "Journey",
  titlePostfix: "with Desinary",
  subtitle:
    "From inspiration to installation, discover how Desinary seamlessly transforms your vision into a beautifully designed and personalized living space.",

  steps: [
    {
      number: "01",
      title: "Sign Up and Register",
      description:
        "Get started by creating your Desinary account. The quick and secure sign-up process opens the door to your personalized interior design journey. Whether you're a homeowner or a design enthusiast, Desinary adapts to your needs. Gain access to powerful AI tools and intuitive manual features—all in one smart platform.",
      image: "/Home/2nd/1st.svg",
    },
    {
      number: "02",
      title: "Select Your Design Input",
      description:
        "Kickstart your project by uploading basic room inputs—images, measurements, or a simple room scan. Then, define your design vision:Choose a preferred interior style (e.g. Japandi, Boho, Modern Luxe, Scandinavian, etc.)Set your design goals (maximize space, create a cozy vibe, add multifunctional furniture)Choose your budget range so our system aligns layout suggestions and product picks with your financial comfortDesinary’s AI uses this data to build a design logic tailored to your space type, usage pattern, and personality—eliminating guesswork right from the start.",
      image: "/Home/2nd/2nd.svg",
    },
    {
      number: "03",
      title: "Personalize Your Space with Style and Furniture",
      description:
        "Once your 3D room model is ready, explore a range of interior styles tailored to you. After selecting a style, you can manually place furniture or let Desinary auto-generate a furnished space from a predefined list. Every detail reflects your vision.",
      image: "/Home/2nd/3rd.svg",
    },
    {
      number: "04",
      title: "Design with AI-Powered Assistance",
      description:
        "Describe your interior preferences using voice or text, and Desinary’s AI will automatically generate a complete room layout with matching styles and furniture. The design is fully editable, giving you the freedom to fine-tune each element to match your vision perfectly. You can also review detailed pricing at the end to keep track of your budget.",
      image: "/Home/2nd/4th.svg",
    },
  ],
   result: {
    titlePrefix: "The",
    titleHighlight: "Result",
    titlePostfix: ", You Will Get",

    image: "/Home/2nd/5th.svg",

    points: [
      "A fully customized layout ready for execution",
      "A design file that’s printable, shareable, and editable",
      "Real-time AI support to continue iterating if needed",
      "Smart, beautiful, and personalized interiors—powered by logic, built for life",
    ],
  },
};
export const features = {
  titleLine1: "Trusted Choice for",
  titleLine2Prefix: "Interior",
  titleHighlight: "Innovation",

  description:
    "Discover the powerful tools, intelligent design options, and seamless experience that make Desinary the ultimate solution for modern interior transformations.",

  items: [
    {
      title: "Multiple Layout Input Options",
      heading: "Start your project your way.",
      description:
        "Upload room photos, measurements, or scanned layouts, or choose from existing templates to begin designing instantly. Desinary adapts to the input method that best suits your space and comfort level.",
      image: "/Home/3rd/1st.svg",
    },

    {
      title: "AI-Powered Smart Design Assistance",
      heading: "Let our intelligent engine do the heavy lifting.",
      description:
        "Describe your preferences through voice or text, and Desinary's AI will generate a complete, style-aligned layout—complete with furniture suggestions, functional zoning, and optimized spacing logic.",
      image: "/Home/3rd/2nd.svg",
    },

    {
      title: "Manual Customization with Drag & Drop",
      heading: "Love to get hands-on? You can.",
      description:
        "Use our intuitive drag-and-drop interface to manually place furniture, adjust finishes, change colors, or refine layout details—all in a fully interactive 3D environment that reflects your unique style.",
      image: "/Home/3rd/3rd.svg",
    },

    {
      title: "Dynamic Style and Budget Matching",
      heading: "Design that fits your aesthetic—and your wallet.",
      description:
        "Select styles and budget; Desinary suggests furniture and layouts tailored to your design and cost preferences.",
      image: "/Home/3rd/4th.svg",
    },

    {
      title: "Real-Time Pricing and Final Review",
      heading: "Know what you're getting before you commit.",
      description:
        "View furniture costs and total pricing dynamically, with full transparency before proceeding to checkout.",
      image: "/Home/3rd/5th.svg",
    },
  ],
};
export const transformBanner = {
  titleLine1: "Transform Your Space Into A Masterpiece",
  titleLine2: "With Our Design Platform.",
  image:
    "/Home/4th/hall.png",
};
export const testimonials = {
  titlePrefix: "Voices of Satisfaction",
  titleLine2Prefix: "— Our ",
  titleHighlight: "Clients Speak",

  description:
    "Hear firsthand how Desinary’s innovative interior design solutions have transformed spaces and exceeded expectations, earning the trust and satisfaction of our valued clients.",

  reviews: [
    {
      name: "Jacob Jones",
      rating: 5,
      quote:
        "Collaborate with Lovora to master the art of interior.",
      avatar: "https://i.pravatar.cc/300?img=47",
    },

    {
      name: "Kristin Watson",
      rating: 5,
      quote:
        "Partner with Desinary to achieve mastery in living room interiors.",
      avatar: "https://i.pravatar.cc/300?img=47",
    },

    {
      name: "Marvin McKinney",
      rating: 5,
      quote:
        "Join forces with Desinary and perfect your living room design.",
      avatar: "https://i.pravatar.cc/300?img=12",
    },

    {
      name: "Jenny Wilson",
      rating: 5,
      quote:
        "Work with Desinary to transform every corner into a beautiful and peaceful space.",
      avatar: "https://i.pravatar.cc/300?img=45",
    },

    {
      name: "Cameron Williamson",
      rating: 5,
      quote:
        "Desinary helped us create a modern interior that perfectly matches our lifestyle.",
      avatar: "https://i.pravatar.cc/300?img=11",
    },

    {
      name: "Robert Fox",
      rating: 5,
      quote:
        "A beautiful combination of smart design, personalization and simplicity.",
      avatar: "https://i.pravatar.cc/300?img=13",
    },

    {
      name: "Esther Howard",
      rating: 5,
      quote:
        "The AI suggestions made it incredibly easy to visualize our dream home.",
      avatar: "https://i.pravatar.cc/300?img=32",
    },

    {
      name: "Wade Warren",
      rating: 5,
      quote:
        "Every detail felt personalized. Desinary completely changed how we approach interiors.",
      avatar: "https://i.pravatar.cc/300?img=14",
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
  subtitle2:
    "If you don't find what you're looking for, feel free to contact us below.",
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
