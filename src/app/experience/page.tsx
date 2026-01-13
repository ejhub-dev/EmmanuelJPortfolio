import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceInteractive from './components/ExperienceInteractive';

export const metadata: Metadata = {
  title: 'Experience - EmmanuelPortfolio',
  description: 'Explore Mezanur Rahman\'s professional journey including work experience, education, certifications, and career growth trajectory. View detailed timeline of achievements, technologies used, and recommendations from colleagues and supervisors.',
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <ExperienceInteractive />
    </>
  );
}