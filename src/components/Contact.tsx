import { MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresa',
      value: 'Hálova 16, Bratislava 851 01',
      href: 'https://www.google.com/maps/search/?api=1&query=SP%C5%A0E%20H%C3%A1lova%2016%20Bratislava',
    },
  ];

  return (
    <section id="kontakt" className="py-20 px-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Kontakt</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-white" size={24} />
              </div>
              <div className="text-white/70 mb-2">{info.label}</div>
              <div className="text-white">{info.value}</div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70">
              © 2026 Hálova Greenpower team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
