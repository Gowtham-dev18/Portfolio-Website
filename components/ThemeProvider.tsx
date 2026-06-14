"use client";

import React, { createContext, useContext } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "light";

  /* Dark / night mode — disabled
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme;
      if (stored) {
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } else {
        const docTheme = document.documentElement.getAttribute("data-theme") as Theme;
        if (docTheme) {
          setTheme(docTheme);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
    } catch (e) {
      console.error(e);
    }
  };
  */

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
