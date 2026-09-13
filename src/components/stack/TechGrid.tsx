import React from "react";
import Card from "./Card";

export interface Technology {
  id: number;
  name: string;
  description: string;
  category: string;
  level: string;
  badge?: string;
  rating: number;
  icon: string;
}

interface TechGridProps {
  technologies: Technology[];
  selectedStack: Technology[];
  onAddToStack: (tech: Technology) => void;
}

export default function TechGrid({ technologies, selectedStack, onAddToStack }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
      {technologies.map((tech) => (
        <Card
          key={tech.id}
          tech={tech}
          isSelected={selectedStack.some((item) => item.id === tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
}