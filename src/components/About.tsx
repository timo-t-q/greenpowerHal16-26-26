import { Zap, Users, Trophy, Wrench } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Praktické skúsenosti',
      description: 'Získavame praktické skúsenosti prácou na reálnych projektoch od konceptu po preteky.',
    },
    {
      icon: Users,
      title: 'Tímová práca',
      description: 'Spolupracujeme ako študenti z rôznych odborov v podporujúcom prostredí.',
    },
    {
      icon: Trophy,
      title: 'Súťaž Greenpower',
      description: 'Reprezentujeme SPŠE Hálova 16 na Greenpower podujatí na Slovensku',
    },
    {
      icon: Wrench,
      title: 'Rozvoj zručností',
      description: 'Učíme sa dizajn, výrobu, testovanie, projektový manažment a riešenie problémov.',
    },
  ];

  return (
    <section id="o-nas" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Kto sme</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Sme slovenský študentský tím, ktorý sa venuje návrhu, výrobe a testovaniu Greenpower pretekárskeho auta. 
            Naša práca nám umožňuje aplikovať teoretické vedomosti zo školy do praxe a rozvíjať sa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-white/40"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}