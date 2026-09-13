import React from "react";
import { Technology } from "./TechGrid";

interface CardProps {
  tech: Technology;
  isSelected: boolean;
  onAddToStack: (tech: Technology) => void;
}

export default function Card({ tech, isSelected, onAddToStack }: CardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {/* Header Row */}
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          {tech.badge && (
            <span className="bg-sky-50 text-sky-500 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-800">{tech.name}</h3>
        <p className="text-slate-500 text-sm mt-2 line-clamp-3 leading-relaxed">
          {tech.description}
        </p>

        {/* Badges & Rating */}
        <div className="flex items-center gap-2 mt-6 text-xs text-slate-400">
          <span className="bg-slate-100 px-2 py-1 rounded">{tech.category}</span>
          <span className="bg-slate-100 px-2 py-1 rounded">{tech.level}</span>
          <span className="ml-auto text-amber-500 font-semibold flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onAddToStack(tech)}
        disabled={isSelected}
        className="mt-6 w-full bg-slate-900 text-white font-medium py-2.5 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {isSelected ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
}