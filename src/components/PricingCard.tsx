import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceNote: string;
}

export default function PricingCard({ title, description, price, priceNote }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-8">
        <span className="text-4xl font-bold">R${price}</span>
        <span className="text-gray-500 block">{priceNote}</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
        Começar agora
      </button>
    </div>
  );
}