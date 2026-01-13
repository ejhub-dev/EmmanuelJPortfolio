import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import TestimonialCarousel from './components/TestimonialCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'EmmanuelPortfolio',
  description: 'Dynamic homepage showcasing Mezanur Rahman\'s portfolio as a premium digital craftsperson and strategic technology partner. Features rotating project highlights, skills visualization, and immediate contact access.'
};

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  link: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  companyLogoAlt: string;
  avatar: string;
  avatarAlt: string;
  testimonial: string;
  rating: number;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Homepage() {
  const typingTexts: string[] = [
  "Full-Stack Developer",
  "UI/UX Architect",
  "Problem Solver",
  "Digital Craftsperson"];


  const stats = {
    experience: 8,
    projects: 150,
    satisfaction: 98
  };

  const skills: Skill[] = [
  { name: "React", level: 95, icon: "CodeBracketIcon", category: "Frontend Development" },
  { name: "Next.js", level: 92, icon: "RocketLaunchIcon", category: "Frontend Development" },
  { name: "TypeScript", level: 90, icon: "CommandLineIcon", category: "Frontend Development" },
  { name: "Tailwind CSS", level: 95, icon: "PaintBrushIcon", category: "Frontend Development" },
  { name: "Node.js", level: 88, icon: "ServerIcon", category: "Backend Development" },
  { name: "Express", level: 85, icon: "CircleStackIcon", category: "Backend Development" },
  { name: "MongoDB", level: 82, icon: "CircleStackIcon", category: "Backend Development" },
  { name: "PostgreSQL", level: 80, icon: "CircleStackIcon", category: "Backend Development" },
  { name: "AWS", level: 78, icon: "CloudIcon", category: "DevOps & Cloud" },
  { name: "Docker", level: 75, icon: "CubeIcon", category: "DevOps & Cloud" },
  { name: "Git", level: 92, icon: "CodeBracketSquareIcon", category: "DevOps & Cloud" },
  { name: "CI/CD", level: 80, icon: "ArrowPathIcon", category: "DevOps & Cloud" }];


  const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive online shopping platform with real-time inventory management, secure payment processing, and personalized recommendations that increased client revenue by 45%.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
    alt: "Modern e-commerce website interface showing product grid with shopping cart and checkout features on desktop screen",
    technologies: [
    { name: "Next.js", icon: "RocketLaunchIcon" },
    { name: "Node.js", icon: "ServerIcon" },
    { name: "MongoDB", icon: "CircleStackIcon" },
    { name: "Stripe", icon: "CreditCardIcon" }],

    category: "Web Application",
    link: "/portfolio"
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description: "An intuitive patient management system with appointment scheduling, medical records, and telemedicine capabilities that improved clinic efficiency by 60%.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1764b2c2a-1764663845672.png",
    alt: "Healthcare dashboard interface displaying patient data charts, appointment calendar, and medical analytics on tablet device",
    technologies: [
    { name: "React", icon: "CodeBracketIcon" },
    { name: "TypeScript", icon: "CommandLineIcon" },
    { name: "PostgreSQL", icon: "CircleStackIcon" },
    { name: "AWS", icon: "CloudIcon" }],

    category: "Enterprise Software",
    link: "/portfolio"
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "A property listing platform with advanced search filters, virtual tours, and mortgage calculators that generated 10,000+ monthly active users.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_149004bc0-1767179391465.png",
    alt: "Real estate website showing luxury property listings with high-resolution images and interactive map view",
    technologies: [
    { name: "Next.js", icon: "RocketLaunchIcon" },
    { name: "Tailwind", icon: "PaintBrushIcon" },
    { name: "Express", icon: "ServerIcon" },
    { name: "MongoDB", icon: "CircleStackIcon" }],

    category: "Web Application",
    link: "/portfolio"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_15d8144b2-1764652218896.png",
    companyLogoAlt: "TechStart Inc company logo with blue and white color scheme",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16e75c406-1763294340369.png",
    avatarAlt: "Professional headshot of Sarah Johnson, blonde woman in navy blazer smiling at camera",
    testimonial: "Mezanur transformed our vision into reality with exceptional technical expertise and strategic thinking. The platform he built exceeded our expectations and drove significant business growth.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "HealthTech Solutions",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4951f45-1764669835430.png",
    companyLogoAlt: "HealthTech Solutions company logo featuring medical cross symbol",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_144541ab0-1763293834444.png",
    avatarAlt: "Professional portrait of Michael Chen, Asian man with short black hair in gray suit",
    testimonial: "Working with Mezanur was a game-changer for our healthcare platform. His attention to detail, problem-solving skills, and ability to deliver on tight deadlines made him an invaluable partner.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "PropTech Ventures",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1fce2a5ab-1767375948103.png",
    companyLogoAlt: "PropTech Ventures company logo with modern building silhouette design",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1de57631c-1763294258585.png",
    avatarAlt: "Professional photo of Emily Rodriguez, Hispanic woman with long brown hair in white blouse",
    testimonial: "Mezanur's technical prowess combined with his business acumen helped us launch our real estate platform ahead of schedule. His code quality and architectural decisions set us up for long-term success.",
    rating: 5
  }];


  const contactInfo: ContactInfo[] = [
  {
    icon: "EnvelopeIcon",
    label: "Email",
    value: "emmanueljxx@gmail.com",
    link: "mailto:emmanueljxx@gmail.com"
  },
  {
    icon: "PhoneIcon",
    label: "Phone",
    value: "+234 (703) 241-1695",
    link: "tel:+2347032411695"
  },
  {
    icon: "MapPinIcon",
    label: "Location",
    value: "Enugu, NG",
    link: "https://www.google.com/maps/place/Enugu/"
  }];


  const footerSections: FooterSection[] = [
  {
    title: "Navigation",
    links: [
    { label: "Home", href: "/homepage" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" }]

  },
  {
    title: "Services",
    links: [
    { label: "Web Development", href: "/portfolio" },
    { label: "UI/UX Design", href: "/portfolio" },
    { label: "Consulting", href: "/contact" },
    { label: "Technical Writing", href: "/portfolio" }]

  },
  {
    title: "Resources",
    links: [
    { label: "Blog", href: "/homepage" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Resume", href: "/assets/resume.pdf" },
    { label: "FAQ", href: "/contact" }]

  }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection typingTexts={typingTexts} stats={stats} />
        <SkillsVisualization skills={skills} />
        <FeaturedProjects projects={projects} />
        <TestimonialCarousel testimonials={testimonials} />
        <ContactSection contactInfo={contactInfo} />
      </main>
      <Footer sections={footerSections} />
    </div>);

}