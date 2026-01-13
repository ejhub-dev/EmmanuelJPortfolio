'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import PhilosophySection from './PhilosophySection';
import TimelineSection from './TimelineSection';
import CertificationsSection from './CertificationsSection';
import InterestsSection from './InterestsSection';
import WorkspaceSection from './WorkspaceSection';
import CTASection from './CTASection';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'career' | 'achievement';
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  badgeAlt: string;
  credentialUrl: string;
}

interface Interest {
  icon: string;
  title: string;
  description: string;
}

interface WorkspaceImage {
  url: string;
  alt: string;
  caption: string;
}

const AboutInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroData = {
    name: "Emmanuel Joseph",
    tagline: "Full-Stack Developer & Digital Craftsperson crafting elegant solutions to complex problems",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fbd9a01b-1765828697210.png",
    imageAlt: "Professional developer Emmanuel Joseph in casual business attire working at modern desk with dual monitors"
  };

  const storyParagraphs = [
  "My journey into software development began over 4 years ago when I discovered the power of code to transform ideas into reality. What started as curiosity about how websites worked evolved into a passion for creating digital experiences that solve real-world problems.",
  "Throughout my career, I've had the privilege of working with diverse teams across startups and established companies, building everything from responsive web applications to complex enterprise systems. Each project has taught me that great software isn't just about clean code—it's about understanding user needs, business goals, and the delicate balance between innovation and practicality.",
  "Today, I specialize in modern web technologies with a focus on React, Next.js, and TypeScript. But beyond the technical stack, I'm driven by the challenge of turning complex requirements into intuitive, performant applications that users love. I believe in writing code that's not just functional, but maintainable, scalable, and elegant.",
  "When I'm not coding, I'm constantly learning, whether it's exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community. I'm a firm believer that the best developers never stop being students of their craft."];


  const philosophies: PhilosophyItem[] = [
  {
    icon: "LightBulbIcon",
    title: "User-Centric Design",
    description: "Every line of code should serve the end user. I prioritize creating intuitive interfaces and seamless experiences that solve real problems."
  },
  {
    icon: "CodeBracketIcon",
    title: "Clean Code Advocate",
    description: "Readable, maintainable code is a gift to future developers. I write code that tells a story and makes collaboration effortless."
  },
  {
    icon: "RocketLaunchIcon",
    title: "Performance Matters",
    description: "Speed and efficiency aren't optional. I optimize every aspect of applications to deliver lightning-fast experiences."
  },
  {
    icon: "AcademicCapIcon",
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do I. I'm committed to staying current with industry trends and best practices."
  },
  {
    icon: "UserGroupIcon",
    title: "Collaborative Spirit",
    description: "Great software is built by great teams. I value open communication, knowledge sharing, and collective problem-solving."
  },
  {
    icon: "ShieldCheckIcon",
    title: "Quality First",
    description: "Thorough testing, security considerations, and attention to detail ensure robust, reliable applications."
  }];


  const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Senior Full-Stack Developer",
    organization: "TechVision Solutions",
    description: "Leading development of enterprise-scale web applications using Next.js and microservices architecture. Mentoring junior developers and establishing coding standards.",
    type: "career"
  },
  {
    year: "2024",
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    description: "Achieved professional certification demonstrating expertise in designing distributed systems on AWS cloud platform.",
    type: "achievement"
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    organization: "Development Tecthnology Hub",
    description: "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
    type: "career"
  },
  {
    year: "2021",
    title: "Frontend Developer",
    organization: "Creative Web Studio",
    description: "Built responsive web applications using React and modern JavaScript. Collaborated with designers to implement pixel-perfect UIs.",
    type: "career"
  },
  {
    year: "2026",
    title: "Bachelor of Computer Science",
    organization: "University Of Nigeria Nsukka",
    description: "Graduated with honors. Specialized in software engineering and web technologies. Led university coding club.",
    type: "education"
  },
  {
    year: "2026",
    title: "First Open Source Contribution",
    organization: "GitHub Community",
    description: "Made first significant contribution to a popular React component library, marking the beginning of active open-source involvement.",
    type: "achievement"
  }];


  const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2024",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_115acac56-1767773756433.png",
    badgeAlt: "AWS certification badge with cloud icon and professional seal",
    credentialUrl: "#"
  },
  // {
  //   name: "Meta Front-End Developer",
  //   issuer: "Meta (Facebook)",
  //   date: "September 2023",
  //   badge: "https://img.rocket.new/generatedImages/rocket_gen_img_142750418-1766775192095.png",
  //   badgeAlt: "Meta certification badge with blue gradient and developer icon",
  //   credentialUrl: "#"
  // },
  // {
  //   name: "Google Cloud Professional",
  //   issuer: "Google Cloud",
  //   date: "June 2023",
  //   badge: "https://img.rocket.new/generatedImages/rocket_gen_img_18b369a87-1766940360819.png",
  //   badgeAlt: "Google Cloud certification badge with colorful cloud symbol",
  //   credentialUrl: "#"
  // },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "March 2023",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2bef12e-1766592634050.png",
    badgeAlt: "Frontend Masters certification badge with React logo and advanced level indicator",
    credentialUrl: "#"
  },
  {
    name: "TypeScript Deep Dive",
    issuer: "Self Thought",
    date: "December 2025",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1e10da31c-1765321811076.png",
    badgeAlt: "TypeScript certification badge with blue TS logo and completion seal",
    credentialUrl: "#"
  },
  {
    name: "Node.js Application Development",
    issuer: "Linux Foundation",
    date: "August 2025",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_151783d31-1766821968322.png",
    badgeAlt: "Linux Foundation Node.js certification badge with green hexagon logo",
    credentialUrl: "#"
  }];


  const interests: Interest[] = [
  {
    icon: "CodeBracketSquareIcon",
    title: "Open Source",
    description: "Contributing to community projects and maintaining personal libraries"
  },
  {
    icon: "BookOpenIcon",
    title: "Tech Writing",
    description: "Sharing knowledge through blog posts and technical tutorials"
  },
  {
    icon: "CameraIcon",
    title: "Photography",
    description: "Capturing moments and exploring creative composition"
  },
  {
    icon: "MusicalNoteIcon",
    title: "Music Production",
    description: "Creating electronic music and experimenting with sound design"
  },
  {
    icon: "GlobeAltIcon",
    title: "Travel",
    description: "Exploring new cultures and gaining fresh perspectives"
  },
  {
    icon: "PuzzlePieceIcon",
    title: "Problem Solving",
    description: "Tackling coding challenges and algorithmic puzzles"
  },
  {
    icon: "UserGroupIcon",
    title: "Mentoring",
    description: "Helping aspiring developers grow their skills"
  },
  {
    icon: "BeakerIcon",
    title: "Tech Experiments",
    description: "Testing new frameworks and emerging technologies"
  }];


  const workspaceImages: WorkspaceImage[] = [
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1f69208b2-1766925322115.png",
    alt: "Modern developer workspace with dual monitors displaying code editor and design tools on clean white desk",
    caption: "My primary workspace where ideas transform into code"
  },
  {
    url: "https://images.unsplash.com/photo-1638909067560-fef5a8a032e3",
    alt: "Close-up of mechanical keyboard with RGB lighting and coffee mug on wooden desk surface",
    caption: "The tools of the trade - mechanical keyboard and essential caffeine"
  },
  {
    url: "https://images.unsplash.com/photo-1573377843702-426d10da9054",
    alt: "Laptop showing terminal window with code deployment process on minimalist desk setup",
    caption: "Mobile setup for coding on the go and remote collaboration"
  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-2xl" />
            <div className="h-64 bg-muted rounded-xl" />
            <div className="h-64 bg-muted rounded-xl" />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        name={heroData.name}
        tagline={heroData.tagline}
        image={heroData.image}
        imageAlt={heroData.imageAlt} />

      <StorySection story={storyParagraphs} />
      <PhilosophySection philosophies={philosophies} />
      <TimelineSection timeline={timeline} />
      <CertificationsSection certifications={certifications} />
      <InterestsSection interests={interests} />
      <WorkspaceSection images={workspaceImages} />
      <CTASection resumeUrl="/assets/emmanueljoseph-resume.pdf" />
    </div>);

};

export default AboutInteractive;