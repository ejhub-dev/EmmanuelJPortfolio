'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  industries: string[];
  technologies: string[];
  selectedCategory: string;
  selectedIndustry: string;
  selectedTechnology: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onIndustryChange: (industry: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  industries,
  technologies,
  selectedCategory,
  selectedIndustry,
  selectedTechnology,
  searchQuery,
  onCategoryChange,
  onIndustryChange,
  onTechnologyChange,
  onSearchChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedIndustry !== 'All' ||
    selectedTechnology !== 'All' ||
    searchQuery !== '';

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          variant="outline"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-textSecondary"
        />
        <input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Filter Options */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {/* Category Filter */}
        <div>
          <label className="block font-body font-medium text-sm text-foreground mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-input border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Industry Filter */}
        <div>
          <label className="block font-body font-medium text-sm text-foreground mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-input border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div>
          <label className="block font-body font-medium text-sm text-foreground mb-2">
            Technology
          </label>
          <select
            value={selectedTechnology}
            onChange={(e) => onTechnologyChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-input border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
          >
            {technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
        >
          <Icon name="XMarkIcon" size={16} variant="outline" />
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;