import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Areas from './components/Areas';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/chat/ChatBot';
import InstagramGallery from './components/InstagramGallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Areas/>
        <Services />
        <InstagramGallery/>
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;