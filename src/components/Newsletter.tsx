import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Participe da evolução</h2>
        <p className="mb-8">
          Inscreva-se e receba todas novidades, atualizações e funcionalidades em seu E-mail.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Inscreva-se
          </button>
        </form>
      </div>
    </section>
  );
}