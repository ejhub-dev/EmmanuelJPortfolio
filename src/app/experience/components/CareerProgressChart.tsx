import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface CareerProgressChartProps {
  data: Array<{
    year: string;
    projects: number;
    skills: number;
  }>;
}

const CareerProgressChart: React.FC<CareerProgressChartProps> = ({ data }) => {
  const colors = {
    projects: 'hsl(var(--color-primary) / 1)',
    skills: 'hsl(var(--color-accent) / 1)',
  };

  return (
    <div className="w-full h-80 bg-card rounded-lg border border-border p-6 shadow-sm">
      <h3 className="font-headline font-semibold text-lg text-foreground mb-4">
        Career Growth Trajectory
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border) / 1)" />
          <XAxis 
            dataKey="year" 
            stroke="hsl(var(--color-muted-foreground) / 1)"
            style={{ fontSize: '12px', fontFamily: 'Source Sans 3, sans-serif' }}
          />
          <YAxis 
            stroke="hsl(var(--color-muted-foreground) / 1)"
            style={{ fontSize: '12px', fontFamily: 'Source Sans 3, sans-serif' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--color-card) / 1)',
              border: '1px solid hsl(var(--color-border) / 1)',
              borderRadius: '0.5rem',
              fontSize: '12px',
              fontFamily: 'Source Sans 3, sans-serif',
            }}
          />
          <Bar dataKey="projects" name="Projects Completed" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors.projects} />
            ))}
          </Bar>
          <Bar dataKey="skills" name="New Skills Acquired" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors.skills} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CareerProgressChart;