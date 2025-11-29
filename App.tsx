import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import WelcomeAudio from './components/WelcomeAudio';
import CustomCursor from './components/CustomCursor';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const About = () => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h2 className="text-3xl text-yellow-400 font-bold mb-4">About Us</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Arya Higher Secondary School is dedicated to nurturing young minds. Located in Sandalpur, Kanpur Dehat, 
      we offer a curriculum that balances academic excellence with character building.
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100 selection:bg-yellow-500 selection:text-black">
        <ScrollToTop />
        <CustomCursor />
        <WelcomeAudio />
        
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Background Texture Effect */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>
    </Router>
  );
};

export default App;