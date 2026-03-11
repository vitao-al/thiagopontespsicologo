import React, { useEffect } from 'react';
import { X, Scale } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm text-musgo bg-musgo-claro transform transition-transform duration-300 ease-out">
        <div className=" p-2 border-musgo rounded">
          <div className="flex items-center justify-between">
            <button 
              onClick={onClose}
              className="p-2 text-berge  hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="p-6 space-y-4 bg-musgo-claro rounded-lg">
          <a 
            href="#inicio" 
            onClick={onClose}
            className="block text-lg text-berge font-bold font-poppins hover:bg-laranja p-2 rounded-lg hover:text-white transition-colors"
          >
            Início
          </a>
          <a 
            href="#sobre" 
            onClick={onClose}
            className="block text-lg text-berge font-bold font-poppins hover:bg-laranja p-2 rounded-lg hover:text-white transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            onClick={onClose}
            className="block text-lg text-berge font-bold font-poppins hover:bg-laranja p-2 rounded-lg hover:text-white transition-colors"
          >
            Serviços
          </a>
          <a 
            href="#instagram" 
            onClick={onClose}
            className="block text-lg text-berge font-bold font-poppins hover:bg-laranja p-2 rounded-lg hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="#contato" 
            onClick={onClose}
            className="block text-lg font-bold font-poppins text-berge hover:bg-laranja p-2 rounded-lg hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
}