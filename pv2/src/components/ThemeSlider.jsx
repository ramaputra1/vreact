// import { useEffect, useState } from "react";

// export default function ThemeSlider() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const root = document.documentElement;
//     const body = document.body;

//     if (isDark) {
//       root.classList.add("dark");
//       body.classList.add("bgdark");
//       body.classList.remove("bglight");
//     } else {
//       root.classList.remove("dark");
//       body.classList.add("bglight");
//       body.classList.remove("bgdark");
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 px-4 rounded-full border border-gray-400 dark:border-gray-200 transition duration-300"
//     >
//       {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
//     </button>
//   );
// }
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSlider() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      // root.classList.add("dark");
      body.classList.add("bgdark");
      body.classList.remove("bglight");
      localStorage.setItem("theme", "dark");
    } else {
      // root.classList.remove("dark");
      body.classList.add("bglight");
      body.classList.remove("bgdark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 cursor-pointer flex items-center px-1 rounded-full border border-gray-400 dark:border-gray-200 transition duration-300 ${
        isDark ? "bg-slate-800" : "bg-yellow-300"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-8" : ""
        }`}
      >
        {isDark ? (
          <Moon size={16} className="text-slate-800" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}
