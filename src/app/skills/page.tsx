import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Certifications - EmmanuelPortfolio',
  description:
    'Explore Mezanur Rahman technical expertise including React, Next.js, TypeScript, Node.js, and more. View professional certifications, skill endorsements, and ongoing learning progress in software development.',
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <SkillsInteractive />
    </>
  );
}