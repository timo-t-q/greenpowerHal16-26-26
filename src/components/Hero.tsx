import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544824158-f13eb5211474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwc3R1ZGVudCUyMGNhcnxlbnwxfHx8fDE3NjUyODEzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Formula Student Car" //TOTO ZMEN
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl py-20">
        <div className="bg-white/70 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/40 shadow-2xl">
          <img src="logo192.png" alt="" className='mx-auto'/>
          <h1 className="text-gray-800 text-5xl md:text-7xl mb-6">
            Hálova Greenpower team
          </h1>
          <p className="text-gray-700 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Študentský tím navrhujúci, stavajúci a testujúci Greenpower pretekárske auto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tim"
              className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Zistiť viac
            </a>
            <a
              href="#kontakt"
              className="px-8 py-3 bg-white/70 backdrop-blur-sm text-gray-800 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#tim"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}