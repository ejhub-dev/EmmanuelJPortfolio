import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfolio - EmmanuelPortfolio',
  description: 'Explore Mezanur Rahman\'s comprehensive project portfolio showcasing web applications, mobile apps, and dashboards across diverse industries with detailed case studies, technology breakdowns, and measurable business impact.',
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PortfolioInteractive />
      </main>
    </>
  );
}