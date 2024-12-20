import { MessageCircle, Mail, Clock, Target, Users, Brain, Zap, CheckCircle2 } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import PricingCard from '../components/PricingCard';
import FeatureCard from '../components/FeatureCard';
import BenefitCard from '../components/BenefitCard';
import { Link } from 'react-router-dom';

export default function PortugueseLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-4 right-4">
        <Link to="/en" className="text-white hover:text-blue-200">
          English
        </Link>
      </div>
      
      {/* Hero Section */}
      <header className="px-4 py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quer triplicar a eficiência do seu atendimento sem esforço?
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Deixe o Zynko fazer isso por você. Sem dor de cabeça, sem complexidade.
            Revolucione seu negócio com uma IA que atende seus clientes 24/7.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
            Experimente Grátis
            <span className="block text-sm font-normal">Sem cartão de crédito</span>
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Com o Zynko, seu atendimento é mais rápido, eficiente e 100% automatizado
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BenefitCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Múltiplas conversas simultâneas"
              description="Diga adeus à sobrecarga de atendimento e à frustração dos clientes com filas intermináveis de espera."
            />
            <BenefitCard
              icon={<Target className="w-12 h-12 text-blue-600" />}
              title="Qualificação automática de leads"
              description="O Zynko filtra leads com precisão e guia seus clientes pelo funil de vendas, eliminando todo trabalho manual."
            />
            <BenefitCard
              icon={<Brain className="w-12 h-12 text-blue-600" />}
              title="Criado por especialistas"
              description="Diferente da maioria do mercado, o Zynko foi projetado por especialistas em vendas com mais de uma década de experiência."
            />
            <BenefitCard
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Disponível 24/7"
              description="Sua IA nunca descansa, garantindo que seus clientes sejam atendidos a qualquer momento, dando mais espaço para você focar em mais projetos."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mais clientes, mais tempo e menos despesas com o Zynko
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Indistinguível"
              description="Capaz de qualificar leads, agendar reuniões e direcionar clientes de forma natural e humanizada."
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Integrado ao seu sistema"
              description="Integre com WhatsApp, Telegram, Email, CRM ou seu Site para uma experiência unificada."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Automação de agendamentos"
              description="Agende reuniões e compromissos sem envolver manualmente sua equipe."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planos</h2>
          <PricingCard
            title="Primeiro Passo"
            description="Perfeito para pequenas empresas ou startups que estão começando e precisam de atendimento econômico e inteligente pelo Zynko."
            currency='R$'
            price="599.21"
            priceNote="oferta por tempo limitado"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Entre para a revolução e torne sua empresa mais inteligente
          </h2>
          <p className="text-xl mb-8">(antes que sua concorrência faça isso)</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
            Experimente grátis agora
            <span className="block text-sm font-normal">Sem cartão de crédito</span>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Zynko. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <a href="#" className="hover:text-blue-400 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}