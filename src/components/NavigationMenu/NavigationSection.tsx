import React from 'react';
import NavigationItem from './NavigationItem';

interface NavigationItemData {
  icon: string;
  label: string;
  isActive?: boolean;
}

interface NavigationSectionProps {
  items: NavigationItemData[];
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col w-[217px]">
      <div className="flex flex-col items-start py-0.5 w-full min-w-[217px]">
        {items.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;