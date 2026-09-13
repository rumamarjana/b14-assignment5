import React from "react";
import { Technology } from "./TechGrid";

interface SidebarCardProps {
  item: Technology;
  onRemoveFromStack: (id: number) => void;
}

export default function SidebarCard({ item, onRemoveFromStack }: SidebarCardProps) {
  return (
    <div className="flex items-center justify-between border border-slate-200 rounded-xl p-3 bg-white">
      <div className="flex items-center gap-3">
        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
          <span className="text-xs text-slate-400">{item.category}</span>
        </div>
      </div>
      <button
        onClick={() => onRemoveFromStack(item.id)}
        className="text-slate-400 hover:text-slate-600 p-1"
      >
        ✕
      </button>
    </div>
  );
}