import { BookOpen, Lightbulb, Users2, Presentation } from 'lucide-react';

export function Learning() {
  const skills = [
    {
      category: 'Technické zručnosti',
      icon: BookOpen,
      items: [''],
    },
    {
      category: 'Soft skills',
      icon: Users2,
      items: [''],
    },
    {
      category: 'Business zručnosti',
      icon: Presentation,
      items: [''],
    },
    {
      category: 'Praktické zručnosti',
      icon: Lightbulb,
      items: [''],
    },
  ];

  return (
    <section id="co-sa-ucime" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Čo sa učíme</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Práca v Greenpower tíme poskytuje zručnosti, ktoré presahujú bežné štúdium. 
            Získavame praktické skúsenosti, ktoré oceňujú zamestnávatelia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center">
                  <skillSet.icon className="text-white" size={26} />
                </div>
                <h3 className="text-2xl text-gray-900">{skillSet.category}</h3>
              </div>
              
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-blue-400 text-white p-8 md:p-12 rounded-3xl">
          <h3 className="text-3xl mb-6 text-center">Praktické skúsenosti</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            
            <div>
              <div className="text-4xl md:text-5xl mb-2">4</div>
              <div className="text-white/90">Zapojené odbory</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">100%</div>
              <div className="text-white/90">Praktické vzdelávanie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}