import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TeamCarousel from './components/team/TeamCarousel';
import InstagramGallery from './components/InstagramGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/chat/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TeamCarousel />
        <InstagramGallery />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;