import React from 'react';

const faqs = [
  {
    question: 'Posso trocar todos os meus atendentes pelo Zynko?',
    answer: 'É possível. Porém recomendamos o uso em conjunto dos dois, fazendo com que a IA tome maior parte do trabalho e deixando sua equipe humana cuidar de casos específicos. O equilíbrio do Zynko junto à sua equipe geralmente traz os melhores resultados.'
  },
  {
    question: 'É simples começar a trabalhar com o Zynko?',
    answer: 'Com certeza! Você poderá configurar ele em poucas horas e já poderá colocá-lo em campo. O funcionamento é simples; usando apenas a sua linguagem natural você irá ensiná-lo como funciona suas etapas de atendimento e a abordagem que precisa ser utilizada. Fácil e rápido.'
  },
  {
    question: 'Preciso ter conhecimento técnico ou em programação para usar o Zynko?',
    answer: 'Não mesmo! Ele é feito para ser intuitivo nos mínimos detalhes, dando uma experiência simples e de fácil acesso mesmo que você não entenda sobre. Inclusive nós lhe daremos todo o suporte caso precise de ajuda na sua configuração.'
  },
  {
    question: 'Posso usar o Zynko em outras línguas além do Português?',
    answer: 'Pode sim! Nós damos suporte não só ao Inglês, mas como em outras línguas também.'
  },
  {
    question: 'Vocês podem me ajudar a treinar, configurar e implementar o Zynko em meu processo de atendimento?',
    answer: 'Podemos sim! Nós oferecemos toda a otimização de seus processos e implementamos o Zynko à sua estrutura de atendimento, com treinamento e alinhamento com sua abordagem. Isso está disponível no plano Pinnacle ou separadamente. Adquira e lhe guiaremos em tudo o que você precisar.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dúvidas frequentes</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 p-6 rounded-lg cursor-pointer [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-medium text-lg">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}