import React, { useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { lawyers } from '../../data/lawyers';
import LawyerCard from './LawyerCard';

export default function CardHero() {
  
  return (
    <section id="equipe" className="bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center min-h-[300px] h-3/4w-full overflow-hidden">
            {/* Carrossel */}
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="w-full flex-shrink-0 px-2 py-4 md:px-4 flex justify-center"
                >
                  <LawyerCard lawyer={lawyer} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
