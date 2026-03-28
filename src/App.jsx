import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ProjectDetails, ToastInvitation, Education } from "./components";

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

const MainLayout = () => (
  <div className='relative z-0 bg-primary'>       
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
      <ToastInvitation />
    </div>
    <About />
    <Experience />
    <Education />
    <Works />
    <Tech />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/proyecto/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

