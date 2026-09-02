// ==========================================================
// AboutUs — central data file
// Sabka data yahin se aayega, pages sirf render karenge.
// ==========================================================

// ---------- Page 1: Hero ----------
export const heroData = {
  title: [
    { text: "Discover ", variant: "title" },
    { text: "Desinary ", variant: "org" },
    { text: "Crafting ", variant: "title" },
    { text: "Unique ", variant: "org" },
    { text: "Interior Spaces", variant: "title" },
  ],

  description:
    "From inspiration to installation, discover how Desinary seamlessly transforms your vision into a beautifully designed and personalized living space.",
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
      "Our vision is to revolutionize interior design by making high-quality, personalized home transformations accessible to everyone. We aim to blend technology with creativity—empowering users to visualize, design, and execute their dream spaces effortlessly. Through AI-driven solutions, immersive tools, and expert support, we strive to simplify the journey from concept to completion while maintaining style, precision, and harmony.",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Our mission is to empower individuals to create beautiful, functional living spaces with ease. By combining intelligent design tools, expert guidance, and immersive technology, we make interior design more accessible, efficient, and inspiring—helping users turn their vision into reality, regardless of their experience, budget, or space size.",
  },
  {
    id: "story",
    title: "Story",
    description:
      "We started with a simple idea: to make interior design easy, smart, and personal. Today, our platform helps anyone turn their space into a reflection of who they are—guided by technology, creativity, and a love for thoughtful design.",
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
    "Our team combines design expertise with smart technology to transform living spaces. We work together to make interiors more beautiful, functional, and uniquely yours.",

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
      role: "Operations Lead",
      image: "/AboutUs/team/piyush-soni.jpg",
      bio: "Piyush leads operational strategy and helps ensure that ideas move smoothly from concept to execution. With strong problem-solving skills and attention to detail, he works closely with different teams to improve workflows and build efficient systems. His contribution helps Desinary deliver a seamless experience while maintaining quality and consistency across projects.",
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