import React from 'react';
import type { Lawyer } from '../../data/lawyers';

interface LawyerCardProps {
  lawyer: Lawyer;
}

export default function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full max-w-64 mx-auto">
      <div className="aspect-[3/4] relative">
        <img
          src={lawyer.image || '/path/to/default-image.jpg'}
          alt={`${lawyer.name} imagem de perfil`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-gray-50 dark:bg-neutral-800">
        <h3 className="text-lg font-poppins font-normal text-gray-900 mb-2">
          {lawyer.name}
        </h3>
        <p className="text-xs text-musgo mb-2">{lawyer.crp}</p>
        <div className="space-x-1">
          {lawyer.specialties.map((specialty) => (
            <span
              key={specialty}
              className="inline-block text-xs bg-green-50 text-musgo px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
