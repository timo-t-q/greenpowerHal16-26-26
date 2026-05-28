import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Domov', href: '#domov' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Čo robíme', href: '#co-robime' },
    { name: 'Čo sa učíme', href: '#co-sa-ucime' },
    { name: 'Cesta', href: '#cesta' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/70 backdrop-blur-lg rounded-full shadow-lg px-6 border border-white/20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="logo192.png" width={48}></img>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden align-center flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-lg rounded-3xl mt-2 shadow-lg border border-white/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-white/50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}