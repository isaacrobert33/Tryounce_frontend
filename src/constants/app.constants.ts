import { HowItWorks01, HowItWorks02, HowItWorks03 } from "../assets/pngs/index";
import {
  DigitalMarketingIcon,
  EmilyNgozi,
  GraphicsDesignIcon,
  JamesOkeke,
  JoyRickyian,
  KimLaura,
  MarkJohnson,
  MotionGraphicsIcon,
  SarahWiliams,
  StarIcon,
  WebDevIcon,
} from "../assets/svgs/index";

export const navLinks = [
  { pathname: "How it Works", path: "/" },
  { pathname: "Categories", path: "/" },
  { pathname: "FAQs", path: "/" },
];

export const footerLinks = [
  {
    section: "categories",
    links: [
      { pathname: "Design", path: "" },
      { pathname: "Development", path: "" },
      { pathname: "IT & Support", path: "" },
      { pathname: "Motion & Video", path: "" },
      { pathname: "Business & Finances", path: "" },
      { pathname: "Artificial intelligence", path: "" },
      { pathname: "Data", path: "" },
    ],
  },
  {
    section: "others",
    links: [
      { pathname: "About Ounce", path: "" },
      { pathname: "Ounce PRO", path: "" },
      { pathname: "Invite a Friend", path: "" },
      { pathname: "Terms of Service", path: "" },
      { pathname: "Privacy Policy", path: "" },
    ],
  },
  {
    section: "socials",
    links: [
      { pathname: "Email", path: "" },
      { pathname: "LinkedIn", path: "" },
      { pathname: "X (Twitter)", path: "" },
    ],
  },
];

export const testimonials = [
  {
    ratingIcon: StarIcon,
    testimony:
      "The hiring process and secure payments made working on this platform fast. I focus on what I do while the platform handles everything else smoothly.",
    name: "Sarah Williams",
    role: "Motion Graphics",
    userImg: SarahWiliams,
  },
  {
    ratingIcon: StarIcon,
    testimony:
      "Managing multiple clients and projects has never been easier. The platform’s simple tools help me stay organized and ensure I never miss a deadline.",
    name: "James Okeke",
    role: "Web Developer",
    userImg: JamesOkeke,
  },
  {
    ratingIcon: StarIcon,
    testimony:
      "Being able to access clients anytime has given me the flexibility I need as a freelancer. The platform allows me to quickly respond to opportunities.",
    name: "Emily Ngozi",
    role: "Technical Writer",
    userImg: EmilyNgozi,
  },
  {
    ratingIcon: StarIcon,
    testimony:
      "Finding and hiring talented freelancers is so much easier now. The payment system is simple, and I can focus on the project instead of chasing invoices.",
    name: "Mark Johnson",
    role: "Marketing Director",
    userImg: MarkJohnson,
  },
  {
    ratingIcon: StarIcon,
    testimony:
      "Managing my team of freelancers is a breeze with the platform’s tools. I get real-time updates and can ensure everything stays on track without any hassle.",
    name: "Kim Laura",
    role: "Project Manager",
    userImg: KimLaura,
  },
  {
    ratingIcon: StarIcon,
    testimony:
      "The ability to find top-tier experts whenever I need them is invaluable. This platform makes it simple to get the right person for any job.",
    name: "Joy Rickyian",
    role: "Startup Founder",
    userImg: JoyRickyian,
  },
];

export const popularService = [
  { icon: WebDevIcon, service: "Web Development" },
  { icon: GraphicsDesignIcon, service: "Graphic Design" },
  { icon: MotionGraphicsIcon, service: "Motion Graphics" },
  { icon: DigitalMarketingIcon, service: "Digital Marketing" },
  { icon: WebDevIcon, service: "Web Development" },
  { icon: GraphicsDesignIcon, service: "Graphic Design" },
  { icon: MotionGraphicsIcon, service: "Motion Graphics" },
  { icon: DigitalMarketingIcon, service: "Digital Marketing" },
  { icon: WebDevIcon, service: "Web Development" },
  { icon: GraphicsDesignIcon, service: "Graphic Design" },
  { icon: MotionGraphicsIcon, service: "Motion Graphics" },
  { icon: DigitalMarketingIcon, service: "Digital Marketing" },
];

export const howItWorks = [
  {
    img: HowItWorks01,
    title: "Access Experts Anytime",
    description:
      "Instantly connect with skilled freelancers. Ounce’s extensive talent pool gives you immediate access ready to help drive your projects forward.",
  },
  {
    img: HowItWorks02,
    title: "Simple Workforce Management",
    description:
      "Easily manage and coordinate remote teams. With Ounce, tracking progress, assigning tasks, and staying on schedule becomes simple.",
  },
  {
    img: HowItWorks03,
    title: "Easy Hiring & Payments",
    description:
      "Ounce provides integrated contract management and secure payment options, so you can hire and pay freelancers without complications.",
  },
];
