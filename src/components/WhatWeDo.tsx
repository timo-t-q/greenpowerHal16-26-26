import { Pencil, Hammer, TestTube, Flag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhatWeDo() {
  const phases = [
    {
      icon: Pencil,
      title: 'Návrh & Plánovanie',
      description: 'Každú sezónu začíname brainstormingom nápadov, vytváraním CAD modelov a simuláciami na optimalizáciu dizajnu.',
      color: 'from-purple-300 to-purple-400',
    },
    {
      icon: Hammer,
      title: 'Výroba',
      description: 'Vyrábame komponenty v dielni - od zvárania rámu až po obrábanie vlastných dielov.',
      color: 'from-green-300 to-green-400',
    },
    {
      icon: TestTube,
      title: 'Testovanie',
      description: 'Testujeme každý systém dôkladne, zbierame dáta a vykonávame vylepšenia, kým všetko nepracuje perfektne.',
      color: 'from-pink-300 to-pink-400',
    },
    {
      icon: Flag,
      title: 'Súťaž',
      description: 'Nakoniec ideme s naším autom na medzinárodné súťaže, kde prezentujeme našu prácu.',
      color: 'from-blue-300 to-blue-400',
    },
  ];

  return (
    <section id="co-robime" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Čo robíme</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Naša cesta od konceptu po súťaž zahŕňa niekoľko fáz, kde každý člen tímu hrá dôležitú úlohu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mb-6`}>
                <phase.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522832712787-3fbd36c9fe2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzfGVufDF8fHx8MTc2NTIyMTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workshop"
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-3xl text-gray-900 mb-6">Celoročný projekt</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Náš tím pracuje počas celého akademického roka. 
              </p>
              <p>
                Od septembra do mája navrhujeme a staviame auto. Počas letných mesiacov súťažíme 
                na podujatiach v Európe, kde testujeme naše inžinierske schopnosti.
              </p>
              <p>
                Každý člen prispieva - či už ide o navrhovanie geometrie zavesenia, programovanie elektroniky, 
                manažment sociálnych sietí alebo zabezpečovanie sponzorov.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}