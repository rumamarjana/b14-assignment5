import React, { useState, useEffect } from "react";

export default function StackCard() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data.json") 
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const removeFromStack = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  const clearStack = () => {
    setSelectedStack([]);
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Loading technologies...</div>;

  return (
    <div className="max-w-7xl mx-auto p-8 font-sans bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-slate-500 mt-2 text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
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

                {/* Tags & Rating */}
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
                onClick={() => addToStack(tech)}
                disabled={selectedStack.some((item) => item.id === tech.id)}
                className="mt-6 w-full bg-slate-900 text-white font-medium py-2.5 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {selectedStack.some((item) => item.id === tech.id) ? "Added" : "Add to Stack"}
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar Panel */}
        <div className="w-full lg:w-80 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-8">
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

          {selectedStack.length === 0 ? (
            /* Empty State */
            <div className="mt-4">
              <p className="text-sm text-slate-400">No technologies selected yet.</p>
              <div className="mt-6 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                <p className="text-sm text-slate-400">Your stack is empty.</p>
              </div>
            </div>
          ) : (
            /* Active State */
            <div className="mt-4">
              <p className="text-sm text-slate-400 mb-4">
                {selectedStack.length} Technology{selectedStack.length > 1 ? "s" : ""} Selected
              </p>

              <div className="space-y-3">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-slate-200 rounded-xl p-3 bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
                        <span className="text-xs text-slate-400">{item.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromStack(item.id)}
                      className="text-slate-400 hover:text-slate-600 p-1"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={clearStack}
                className="mt-6 w-full border border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2.5 rounded-xl text-sm transition-colors"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}