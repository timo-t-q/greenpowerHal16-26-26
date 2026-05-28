import { Calendar, MapPin, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Journey() {
  const timeline = [
    {
      month: 'September - November',
      title: 'Fáza návrhu',
      activities: ['Vývoj konceptu', 'CAD modelovanie a simulácie', 'Výber komponentov', 'Design reviews'],
    },
    {
      month: 'December - Marec',
      title: 'Výroba',
      activities: ['Výroba rámu', 'Obrábanie dielov', 'Práca s kompozitmi', 'Začiatok montáže'],
    },
    {
      month: 'Apríl - Máj',
      title: 'Testovanie',
      activities: ['Integrácia systémov', 'Testovanie na trati', 'Ladenie výkonu', 'Finálne prípravy'],
    },
    {
      month: 'Jún - August',
      title: 'Súťažná sezóna',
      activities: ['Cesta na podujatia', 'Technické inšpekcie', 'Dynamické testy', 'Preteky!'],
    },
  ];

  return (
    <section id="cesta" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Naša cesta</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl text-gray-900 mb-8 text-center">Ročný harmonogram</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl shadow-lg h-full border-t-4 border-purple-400">
                  <div className="flex items-center gap-2 mb-4 text-purple-600">
                    <Calendar size={20} />
                    <span className="text-sm">{phase.month}</span>
                  </div>
                  <h4 className="text-xl text-gray-900 mb-4">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}