import { ExternalLink, ListChecks, FolderOpen } from "lucide-react"

const driveUrl = "https://drive.google.com/drive/folders/1tzjLg9BW_Qw3h9E3KLh-PlHTMDthmDVi"

const finalGoals = [
  {
    project: "Zber a vyhodnotenie dát (eChook)",
    goals: [
      "Vybratie dát, ktoré chceme zbierať",
      "Stanovenie zariadenia na meranie dát",
      "Stanovenie polohy zariadenia vo formule",
      "Zapojenie zariadenia do zdroja a meracích inputov",
      "Prijímanie dát a následné spracovanie",
    ],
  },
  {
    project: "Návrh volantu cez CAD",
    goals: [
      "Vybratie štýlu volantu a elektroniky na volant",
      "Dizajn volantu na formulu (Fusion 360)",
      "Mechanická konštrukcia volantu (3D tlač)",
      "Zapojenie volantu do formule",
      "Testovanie volantu",
    ],
  },
  {
    project: "Návrh a realizácia HaloBoardu",
    goals: [
      "Vybranie čo všetko chceme zobrazovať na displeji",
      "Vybrať vhodné súčiastky na postavenie",
      "Design panelu cez CAD",
      "Vytlačenie modelu cez 3D tlač",
      "Zapojenie a testovanie HaloBoardu",
    ],
  },
]

export function Planning() {
  return (
    <section id="planovanie" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">2. Plánovanie projektu a adaptácia plánu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Plánovač projektu bol živým dokumentom, ktorý sa počas realizácie priebežne upravoval podľa toho,
            ako sa menili podmienky, technické riešenia a čiastkové ciele tímu.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 border border-white/40 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FolderOpen className="text-purple-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Odkazy na verzie projektového plánovača</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Všetky verzie plánovačov (úvodná, priebežná aj konečná) pre všetky tri projekty sú dostupné v spoločnom Google Drive priečinku:
          </p>
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <ExternalLink size={20} />
            Otvoriť Google Drive – Plánovače projektov
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 border border-white/40">
          <div className="flex items-center gap-3 mb-8">
            <ListChecks className="text-purple-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Finálne ciele a podciele projektu</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finalGoals.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-purple-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{project.project}</h4>
                <ul className="space-y-2.5">
                  {project.goals.map((goal, gIndex) => (
                    <li key={gIndex} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shrink-0 mt-2 shadow-sm shadow-purple-200"></span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
