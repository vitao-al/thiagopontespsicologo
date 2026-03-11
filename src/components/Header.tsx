import React, { useState } from 'react';
import { Scale, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/thiagoponteslogo5.png" alt="Logo" className="h-2/4 w-2/4" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#inicio" className="font-normal font-poppins text-verde-musgo hover:text-laranja dark:text-musgo dark:hover:text-white transition-color">Início</a>
              <a href="#sobre" className="font-normal font-poppins text-verde-musgo hover:text-laranja dark:text-musgo dark:hover:text-white transition-colors">Sobre</a>
              <a href="#servicos" className="font-normal font-poppins text-verde-musgo hover:text-laranja dark:text-musgo dark:hover:text-white transition-colors">Serviços</a>
              <a href="#contato" className="font-normal font-poppins text-verde-musgo hover:text-laranja dark:text-musgo dark:hover:text-white transition-colors">Contato</a>
            </nav>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-musgo hover:text-musgo dark:text-musgo dark:hover:text-white transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}