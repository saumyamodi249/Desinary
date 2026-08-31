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
      bio: "Anurag Gupta is the co-founder of Desinary, a cutting-edge interior design company known for its innovative approach and stylish solutions.",
    },
    {
      id: 2,
      name: "Anurag Gupta",
      role: "Co - Founder",
      image: "/AboutUs/team/anurag-gupta.jpg",
      bio: "Anurag Gupta is the co-founder of Desinary, a cutting-edge interior design company known for its innovative approach and stylish solutions.",
    },
    {
      id: 3,
      name: "Jay Mehta",
      role: "Co - Founder",
      image: "/AboutUs/team/jay-mehta.jpg",
      bio: "Anurag Gupta is the co-founder of Desinary, a cutting-edge interior design company known for its innovative approach and stylish solutions.",
    },
    {
      id: 4,
      name: "Shruti Jotshi",
      role: "Co - Founder",
      image: "/AboutUs/team/shruti-jotshi.jpg",
      bio: "Anurag Gupta is the co-founder of Desinary, a cutting-edge interior design company known for its innovative approach and stylish solutions.",
    },
  ],
};
