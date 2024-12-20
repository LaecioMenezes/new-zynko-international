import React, { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}