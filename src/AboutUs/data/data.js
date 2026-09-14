// ==========================================================
// AboutUs — central data file
// Sabka data yahin se aayega, pages sirf render karenge.
// ==========================================================

// ---------- Page 1: Hero ----------
export const heroData = {
  title: [
    { text: "Discover ", variant: "title" },
    { text: "Desinary", variant: "org" },
    { text: "Crafting Intelligent ", variant: "title" },
    { text: "Interiors, ", variant: "title" },
    { text: "Uniquely ", variant: "org" },
    { text: "for ", variant: "title" },
    { text: "You", variant: "title" },
  ],

  description:
    "At Desinary, we merge design logic, creativity, and smart technology to craft interiors that are not just beautiful but built around your lifestyle. Whether it's a cozy apartment, a stylish home office, or a compact rental, our AI-powered platform helps you design spaces that feel like you, with functionality, flow, and flair.",
  // asset from public/AboutUs/2nd.jpg
  bgImage: "/AboutUs/2nd.jpg",
  // decorative asset from public/AboutUs/1st.svg
  decorSvg: "/AboutUs/1st.svg",
};

// ---------- Page 2: Vision / Mission / Story ----------
export const visionMissionStoryData = [
  {
    id: "vision",
    title: "Vision",
    description:
      "To redefine interior design by making intelligent, personalized, and affordable transformations accessible to everyone. Desinary envisions a world where anyone regardless of space, style, or budget can bring their dream space to life using the power of AI, immersive design tools, and curated expertise. We aim to simplify the design journey and make beautiful living a universal experience.",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Our mission is to empower individuals to design smarter, not harder. By combining AI-driven design intelligence, interactive customization, and expert-backed layouts, we make it easy for anyone to create a space that is both functional and inspiring. Desinary is here to eliminate overwhelm, reduce cost, and deliver design that works for real life.",
  },
  {
    id: "story",
    title: "Story",
    description:
      "Desinary began with a simple question: Why is interior design still so complicated?. We experienced the struggle of making sense of design choices, product options, and space planning, especially without expensive professionals. So, we set out to build a smarter way.\n\nWhat started as a classroom project has grown into a vision to democratize design. Today, Desinary helps people everywhere transform their spaces with confidence using AI, smart layouts, and a human touch to create interiors that are truly yours.",
  },
];

// ---------- Page 3: Investment Banner ----------
export const investmentBannerData = {
  heading: "Build Tomorrow's World Now An Investment Platform To Enable You",
  // TODO: is banner ke liye alag image public/AboutUs mein daal dena,
  // abhi ke liye 2nd.jpg hi reuse ho raha hai
  Image: "/AboutUs/2nd.jpg",
};

// ---------- Page 4: Team ----------
export const teamData = {
  heading: [
    { text: "The Minds ", variant: "title" },
    { text: "Behind ", variant: "org" },
    { text: "the Magic", variant: "title" },
  ],

  description:
    "We're a team of creators, strategists, and technologists on a mission to redefine interior design. By blending design intelligence with cutting-edge technology, we turn everyday spaces into personalized, functional, and inspiring environments. Every layout we craft is rooted in logic, guided by style, and made uniquely for you.",

  members: [
    {
      id: 1,
      name: "Mina Gupta",
      role: "Co - Founder",
      image: "/AboutUs/team/mina-gupta.jpg",
      bio: "Mina Gupta is a creative visionary and co-founder of Desinary. With a deep understanding of interior aesthetics and modern design trends, she helps shape spaces that feel both beautiful and practical. Her passion lies in transforming everyday environments into personalized experiences that reflect the personality and lifestyle of every client.",
    },

    {
      id: 2,
      name: "Anurag Gupta",
      role: "Co - Founder",
      image: "/AboutUs/team/anurag-gupta.jpg",
      bio: "Anurag Gupta is the co-founder of Desinary and plays an important role in building the company's vision and strategy. With a strong focus on innovation and technology, he works towards creating smarter and more accessible interior design solutions. His approach combines creativity, functionality, and modern digital experiences to transform the way people design their homes.",
    },

    {
      id: 3,
      name: "Jay Mehta",
      role: "Co - Founder",
      image: "/AboutUs/team/jay-mehta.jpg",
      bio: "Jay Mehta brings creativity, strategic thinking, and a fresh perspective to the Desinary team. He is passionate about exploring innovative ideas and turning them into meaningful experiences for users. His work focuses on combining modern design principles with practical solutions, ensuring that every project delivers both visual appeal and functionality.",
    },

    {
      id: 4,
      name: "Shruti Joshi",
      role: "Co - Founder",
      image: "/AboutUs/team/shruti-joshi.jpg",
      bio: "Shruti Joshi is passionate about creating thoughtful and inspiring spaces that connect with people on a personal level. Her creative approach focuses on understanding individual preferences and translating them into unique interior experiences. She believes that good design should not only look beautiful but also improve the way people live and interact with their surroundings.",
    },

    {
      id: 5,
      name: "Piyush Soni",
      role: "Co - Founder",
      image: "/AboutUs/team/piyush-soni.jpg",
      bio: "An operations strategist and systems thinker, Piyush leads Desinary's execution, product workflows, and vendor integrations. With a strong foundation in backend operations and digital process optimization, he ensures the platform runs smoothly and scales efficiently. Beyond operations, Piyush brings a creative edge to Desinary's marketing strategies, contributing to brand storytelling, campaign ideation, and user engagement. His ability to blend logic with creativity makes him a vital force in both the growth and experience sides of the business. Piyush has been full-time on Desinary since inception.",
    },

    {
      id: 6,
      name: "Aarav Shah",
      role: "Design Strategist",
      image: "/AboutUs/team/aarav-shah.jpg",
      bio: "Aarav is a design strategist with a passion for understanding how people interact with spaces. He combines research, creativity, and practical thinking to develop ideas that are visually compelling and easy to use. His goal is to create design experiences that balance innovation with comfort and bring meaningful value to every project.",
    },

    {
      id: 7,
      name: "Riya Patel",
      role: "Creative Designer",
      image: "/AboutUs/team/riya-patel.jpg",
      bio: "Riya brings a creative and detail-oriented approach to the Desinary team. She enjoys experimenting with colors, layouts, textures, and modern visual concepts to create memorable experiences. Her work focuses on turning ideas into attractive and meaningful designs while ensuring every element contributes to a cohesive and personalized result.",
    },

    {
      id: 8,
      name: "Karan Malhotra",
      role: "Technology Lead",
      image: "/AboutUs/team/karan-malhotra.jpg",
      bio: "Karan leads the technology side of Desinary and focuses on building smart digital solutions that support the future of interior design. He works on improving systems, user experiences, and innovative tools that make the design process simpler. His combination of technical expertise and creative thinking helps bring modern ideas to life.",
    },
  ],
};