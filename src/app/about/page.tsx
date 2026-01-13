import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About - EmmanuelPortfolio',
  description: 'Learn about Mezanur Rahman\'s journey as a full-stack developer, technical philosophy, career milestones, certifications, and the passion that drives creating elegant digital solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AboutInteractive />
      </div>
    </main>
  );
}