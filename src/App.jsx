import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, ProjectDetails, Education } from "./components";
import { Analytics } from '@vercel/analytics/react';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const MainLayout = ({ isDark, setIsDark }) => (
  <div className="relative z-0 min-h-screen">       
    <Hero />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 pb-24">
      <About />
      <Works />
      <Experience />
      <Education />
      <Tech />
      <Contact />
    </div>
  </div>
);

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path="/" element={<MainLayout isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/proyecto/:id" element={<ProjectDetails />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
