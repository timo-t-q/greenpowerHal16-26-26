import { Calendar, Flag, Wrench, Cpu, Car, Gauge, Users, Truck } from "lucide-react"

const milestones = [
  {
    phase: "1. Iniciácia a formovanie tímu",
    icon: Users,
    color: "from-purple-400 to-purple-500",
    description: "Prvotné stretnutie, určenie cieľov a rozdelenie rolí. Zvolili sme team leadera a priradili úlohy jednotlivým členom tímu.",
    result: "Tím s jasnou štruktúrou a rozdelenými rolami",
    learnings: "Naučili sme sa, aké dôležité je jasné zadefinovanie zodpovedností hneď na začiatku. Nové bolo pre nás nastavovanie spoločných očakávaní a hľadanie spôsobu, ako efektívne skĺbiť časové možnosti všetkých členov.",
  },
  {
    phase: "2. Logistika a príprava pracoviska",
    icon: Truck,
    color: "from-blue-400 to-blue-500",
    description: "Prevzali sme formulu, zabezpečili jej transport a pripravili technické priestory na realizáciu projektu.",
    result: "Zabezpečené zázemie a pripravený materiál",
    learnings: "Zistili sme, že aj zdanlivo jednoduché úlohy ako transport a uskladnenie formuly vyžadujú dôkladné plánovanie a koordináciu.",
  },
  {
    phase: "3. Dekonštrukcia a revízia",
    icon: Wrench,
    color: "from-pink-400 to-pink-500",
    description: "Kompletne sme rozobrali pôvodnú formulu, analyzovali stav jednotlivých komponentov a pripravili sa na novú stavbu.",
    result: "Pripravené šasi a komponenty na montáž",
    learnings: "Spoznali sme konštrukciu formuly do najmenších detailov. Náročné bolo zapamätať si, kam ktorá súčiastka patrí, a nič nestratiť.",
  },
  {
    phase: "4. Mechanická stavba (šasi a riadenie)",
    icon: Car,
    color: "from-green-400 to-green-500",
    description: "Zmontovali sme nápravy, osadili a vycentrovali kolesá, nainštalovali a nastavili mechanizmus volantu.",
    result: "Plne pojazdné a riaditeľné šasi",
    learnings: "Prakticky sme si vyskúšali montáž podvozku a nastavenie geometrie riadenia. Výzvou bolo dosiahnuť presné vycentrovanie kolies bez špeciálneho náradia.",
  },
  {
    phase: "5. Integrácia pohonu a elektroinštalácie",
    icon: Cpu,
    color: "from-orange-400 to-orange-500",
    description: "Osadili sme elektromotor, zapojili riadiacu elektroniku a bezpečne namontovali trakčné batérie.",
    result: "Oživený pohonný systém formuly",
    learnings: "Prepojili sme teóriu z elektrotechniky s praxou. Najnáročnejšie bolo správne zapojenie batériového systému a zabezpečenie všetkých istiacich prvkov.",
  },
  {
    phase: "6. CAD modelovanie custom volantu",
    icon: Car,
    color: "from-purple-400 to-purple-500",
    description: "Navrhli sme a vymodelovali vlastný ergonomický volant v CAD softvéri Fusion 360. Následne sme ho vytlačili na 3D tlačiarni.",
    result: "Digitálny 3D model volantu pripravený na výrobu",
    learnings: "Naučili sme sa modelovať v Fusion 360 vrátane tvorby sústav a pohyblivých častí. Nové bolo navrhovanie s ohľadom na ergonómiu a neskoršiu 3D tlač.",
  },
  {
    phase: "7. Vývoj a integrácia HaloBoardu",
    icon: Cpu,
    color: "from-blue-400 to-blue-500",
    description: "Vyvinuli sme prídavný displej HaloBoard, ktorý vodičovi v reálnom čase zobrazuje kľúčové telemetrické a prevádzkové údaje.",
    result: "Funkčné rozhranie pre okamžitú spätnú väzbu vodiča",
    learnings: "Prepojili sme hardvér (mikrokontrolér, displej) so softvérom. Naučili sme sa vyberať vhodné súčiastky a riešiť problémy s kompatibilitou. Výzvou bolo dosiahnuť stabilné zobrazovanie údajov počas jazdy.",
  },
  {
    phase: "8. Karoséria a aerodynamika",
    icon: Car,
    color: "from-pink-400 to-pink-500",
    description: "Navrhli sme, upravili a finálne namontovali kapotáž (karosériu) na konštrukciu formuly.",
    result: "Kompletný vonkajší vzhľad formuly",
    learnings: "Lepenie karosérie a osádzanie množstva skrutiek bolo zdĺhavé, no naučili sme sa trpezlivosti a precíznosti. Niektoré diely sme museli prehadzovať, čo nás naučilo kontrolovať kval už pred montážou.",
  },
  {
    phase: "9. Prvá testovacia jazda",
    icon: Flag,
    color: "from-green-400 to-green-500",
    description: "Dynamické testovanie formuly v teréne – overenie funkčnosti bŕzd, riadenia, motora a stability vozidla.",
    result: "Plne funkčný a pojazdný prototyp formuly",
    learnings: "Prvá jazda bola odmenou za všetku prácu. Zistili sme, čo treba doladiť, a naučili sa systematicky pristupovať k testovaniu.",
  },
  {
    phase: "10. Telemetria a zber dát",
    icon: Gauge,
    color: "from-orange-400 to-orange-500",
    description: "Inštalovali sme senzory pre meranie rýchlosti a ďalších veličín, nastavili zariadenie eChook na zber a prenos dát na spracovanie.",
    result: "Formula pripravená na preteky s inteligentnou telemetriou",
    learnings: "Naučili sme sa pracovať s telemetrickým zariadením eChook, zbierať a vyhodnocovať dáta z jazdy. Nové bolo bezdrôtové posielanie dát z formuly do domovskej stanice na analýzu.",
  },
]

export function Progress() {
  return (
    <section id="priebeh" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">3. Priebeh projektu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Projekt prebiehal v niekoľkých fázach – od prvotného stretnutia cez stavbu a testovanie až po finálnu prípravu na preteky.
            Každá fáza priniesla nové výzvy a cenné skúsenosti.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 hidden md:block"></div>

          <div className="space-y-8">
            {milestones.map((item, index) => (
              <div key={index} className="relative md:pl-20">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md border border-white/40 items-center justify-center z-10">
                  <item.icon className={`text-transparent bg-clip-text bg-gradient-to-br ${item.color}`} size={28} />
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center md:hidden`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.phase}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">Čo sme robili</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4">
                      <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Výsledok</h4>
                      <p className="text-gray-700 font-medium">{item.result}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-1">Čo sme sa naučili</h4>
                      <p className="text-gray-600">{item.learnings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
