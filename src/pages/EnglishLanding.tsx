import { MessageCircle, Mail, Clock, Target, Users, Brain, Zap, CheckCircle2 } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import PricingCard from '../components/PricingCard';
import FeatureCard from '../components/FeatureCard';
import BenefitCard from '../components/BenefitCard';
import { Link } from 'react-router-dom';

export default function EnglishLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-4 right-4">
        <Link to="/" className="text-white hover:text-blue-200">
          Português
        </Link>
      </div>
      
      {/* Hero Section */}
      <header className="px-4 py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Want to triple your customer service efficiency effortlessly?
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Let Zynko do it for you. No headaches, no complexity.
            Revolutionize your business with an AI that serves your customers 24/7.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
            Try it Free
            <span className="block text-sm font-normal">No credit card required</span>
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            With Zynko, your service is faster, more efficient, and 100% automated
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BenefitCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Multiple simultaneous conversations"
              description="Say goodbye to service overload and customer frustration from endless waiting queues."
            />
            <BenefitCard
              icon={<Target className="w-12 h-12 text-blue-600" />}
              title="Automatic lead qualification"
              description="Zynko precisely filters leads and guides your customers through your sales funnel, eliminating all manual work."
            />
            <BenefitCard
              icon={<Brain className="w-12 h-12 text-blue-600" />}
              title="Created by experts"
              description="Unlike most of the market, Zynko was designed by sales experts with over a decade of experience."
            />
            <BenefitCard
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Available 24/7"
              description="Your AI never rests, ensuring your customers are served at any time, giving you more space to focus on more projects."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            More customers, more time, and less expenses with Zynko
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Indistinguishable"
              description="Capable of qualifying leads, scheduling meetings, and directing customers naturally and humanized."
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Integrated with your system"
              description="Integrate with WhatsApp, Telegram, Email, CRM, or your Website for a unified experience."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Scheduling automation"
              description="Schedule meetings and appointments without manually involving your team."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Plans</h2>
          <PricingCard
            title="First Step"
            description="Perfect for small businesses or startups that are getting started and need economical and intelligent service by Zynko."
            price="97"
            priceNote="limited time offer"
          />
        </div>
      </section>

      {/* FAQ Section with English content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: 'Can I replace all my service agents with Zynko?',
                answer: 'It\'s possible. However, we recommend using both together, letting the AI handle most of the work while your human team handles specific cases. The balance of Zynko with your team usually brings the best results.'
              },
              {
                question: 'Is it simple to start working with Zynko?',
                answer: 'Absolutely! You can configure it in just a few hours and put it to work. The operation is simple; using just your natural language, you\'ll teach it how your service steps work and the approach that needs to be used. Quick and easy.'
              },
              {
                question: 'Do I need technical or programming knowledge to use Zynko?',
                answer: 'Not at all! It\'s made to be intuitive down to the smallest details, providing a simple and easily accessible experience even if you don\'t understand technology. We\'ll also provide all the support you need with configuration.'
              },
              {
                question: 'Can I use Zynko in languages other than English?',
                answer: 'Yes, you can! We support not only Portuguese but other languages as well.'
              },
              {
                question: 'Can you help me train, configure, and implement Zynko in my service process?',
                answer: 'Yes, we can! We offer complete optimization of your processes and implement Zynko into your service structure, with training and alignment with your approach. This is available in the Pinnacle plan or separately. Get started and we\'ll guide you through everything you need.'
              }
            ].map((faq, index) => (
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Join the revolution and make your company smarter
          </h2>
          <p className="text-xl mb-8">(before your competition does)</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
            Try free now
            <span className="block text-sm font-normal">No credit card required</span>
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Be part of the evolution</h2>
          <p className="mb-8">
            Subscribe and receive all news, updates, and features in your email.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your best email"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Zynko. All rights reserved.</p>
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