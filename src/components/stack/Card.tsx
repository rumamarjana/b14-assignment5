import  { useState, useEffect } from "react";
import { Star, X } from "lucide-react";


interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  iconUrl: string;
  rating: number;
  level: string;
  badge?: string;
  badgeColor?: string;
}

export default function Card() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);


  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);


  useEffect(() => {
    fetch("/data2.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
      });
  }, []);


  const handleAddToStack = (tech: Technology): void => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (id: number): void => {
    setSelectedStack(
      selectedStack.filter((item) => item.id !== id)
    );
  };


  const handleRemoveAll = (): void => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">

       
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the{" "}
            <span className="text-fuchsia-600">
              Technologies
            </span>
          </h1>

          <p className="text-slate-500 mt-2 text-lg">
            Pick one technology per category to build your ideal stack.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technologies.map((tech) => {

              const isSelected = selectedStack.some(
                (item) => item.id === tech.id
              );

              return (
                <div
                  key={tech.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >

                  <div>

                    {/* Icon + Badge */}
                    <div className="flex justify-between items-start mb-4">

                      <img
                        src={tech.iconUrl}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                      />

                      {tech.badge && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            tech.badgeColor || "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {tech.badge}
                        </span>
                      )}

                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                      {tech.description}
                    </p>

                  </div>

                  <div>

                
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">

                      <div className="flex gap-2">

                        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                          {tech.category}
                        </span>

                        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                          {tech.level}
                        </span>

                      </div>

                      
                      <div className="flex items-center gap-1 font-semibold text-slate-700">

                        <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />

                        <span>
                          {tech.rating}
                        </span>

                      </div>

                    </div>

                  
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isSelected}
                      className={`bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors w-full cursor-pointer ${
                        isSelected
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {isSelected
                        ? "Added to Stack"
                        : "Add to Stack"}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-6">

            <h2 className="text-xl font-bold text-slate-900">
              Your Stack
            </h2>

            <p className="text-xs text-slate-400 mt-1 mb-6">
              {selectedStack.length > 0
                ? `${selectedStack.length} Technology Selected`
                : "No technologies selected yet."}
            </p>

           
            {selectedStack.length === 0 ? (

              <div className="border-2 border-dashed border-slate-200 rounded-xl p-10 text-center">

                <p className="text-slate-400 text-xs font-medium">
                  Your stack is empty.
                </p>

              </div>

            ) : (

             
              <div className="space-y-3">

                {selectedStack.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white shadow-xs"
                  >

                    <div className="flex items-center gap-3">

                     
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                      />

                      <div>

                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {item.name}
                        </h4>

                    
                        <span className="text-[10px] text-slate-400">
                          {item.category}
                        </span>

                      </div>

                    </div>

                  
                    <button
                      onClick={() =>
                        handleRemoveFromStack(item.id)
                      }
                      className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>

                  </div>

                ))}

               
                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 border border-rose-200 text-rose-500 font-semibold py-2.5 rounded-xl text-xs hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  Remove All
                </button>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}