import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const sectionRef = useRef(null);
  const [count, setCount] = useState([0, 0, 0, 0]); // Initial state for counters
  const [hasStarted, setHasStarted] = useState(false);
  const targetValues = [16, 300, 9, 10000]; // Updated target values

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          targetValues.forEach((target, index) => startCounter(index, target));
        }
      },
      { threshold: 0.5 } // 50% visibility for triggering
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  const startCounter = (index, target) => {
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += Math.ceil(target / 100); // Adjust speed dynamically
      if (currentValue >= target) {
        currentValue = target;
        clearInterval(interval);
      }
      setCount((prev) => {
        const updatedCounters = [...prev];
        updatedCounters[index] = currentValue;
        return updatedCounters;
      });
    }, 100);
  };

  return (
    <>
<div className="h-auto md:h-screen">
  {/* Facilities Heading */}
  <h1 id="counter" className="font-bold  text-center text-4xl md:text-5xl lg:text-7xl text-amber-500 mb-6 md:mb-10">
    FACILITIES
  </h1>

  {/* Facilities Grid */}
  <div ref={sectionRef} className="flex flex-wrap justify-center gap-4 p-4">
    {/* Faculties */}
    <div className="w-full sm:w-[48%] p-4 md:p-6 border border-gray-300 rounded-[3rem] text-center mb-4">
      <h1 className="text-3xl md:text-5xl font-bold">{count[0]}+</h1>
      <p className="text-2xl md:text-4xl font-semibold">Faculties</p>
    </div>

    {/* Students */}
    <div className="w-full sm:w-[48%] p-4 md:p-6 border border-gray-300 rounded-[3rem] text-center mb-4">
      <h1 className="text-3xl md:text-5xl font-bold">{count[1]}+</h1>
      <p className="text-2xl md:text-4xl font-semibold">Students</p>
    </div>

    {/* Digital Classes */}
    <div className="w-full sm:w-[48%] p-4 md:p-6 border border-gray-300 rounded-[3rem] text-center mb-4">
      <h1 className="text-3xl md:text-5xl font-bold">{count[2]}+</h1>
      <p className="text-2xl md:text-4xl font-semibold">Digital Classes</p>
    </div>

    {/* Library Resources */}
    <div className="w-full sm:w-[48%] p-4 md:p-6 border border-gray-300 rounded-[3rem] text-center mb-4">
      <h1 className="text-3xl md:text-5xl font-bold">{count[3]}+</h1>
      <p className="text-2xl md:text-4xl font-semibold">Library Resources</p>
    </div>
  </div>

  {/* Facilities Button */}
  <div className="flex justify-center mt-6 mb-6 md:mt-10 pt-6 md:pt-12">
    <Link to="/facilities">
      <button className="w-40 md:w-50 bg-orange-400 p-2 md:p-3 rounded-lg text-white font-semibold text-lg md:text-xl hover:bg-orange-500 transition-colors">
        Facilities
      </button>
    </Link>
  </div>
</div>
    </>
  );
}
