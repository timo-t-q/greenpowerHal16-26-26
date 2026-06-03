import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart3, Gamepad2, Monitor, ImageIcon } from "lucide-react"

const projectData = [
  {
    id: "projekt1",
    icon: BarChart3,
    title: "Projekt 1 – Zber a vyhodnotenie dát",
    type: "Riešenie založené na meraní dát a aplikácii teórie",
    focus: {
      params: "Zlepšenie parametrov: monitorovanie rýchlosti, stavu batérie a ďalších prevádzkových veličín v reálnom čase. Chceme získať presné dáta z jazdy pre lepšie pochopenie správania formuly na trati.",
      theory: "Riešenie sa opiera o poznatky z fyziky (meranie rýchlosti, elektrického prúdu a napätia), informatiky (spracovanie a prenos dát) a elektrotechniky (zapojenie senzorov a mikrokontrolérov). Využívame princípy telemetrie – bezdrôtového prenosu údajov z vozidla do domovskej stanice.",
    },
    solution: {
      description: "Riešenie spočíva v inštalácii zariadenia eChook do formuly, ktoré zbiera dáta z rôznych senzorov (rýchlosť, napätie batérie, prúd) a bezdrôtovo ich posiela do domovskej stanice na spracovanie a analýzu.",
      testing: "Testovali sme funkčnosť zariadenia v rôznych fázach – najprv v statických podmienkach (zapojenie, napájanie, párovanie), neskôr počas krátkych testovacích jázd. Overovali sme dosah signálu a presnosť prenášaných údajov.",
      protocol: "https://drive.google.com/drive/folders/1tzjLg9BW_Qw3h9E3KLh-PlHTMDthmDVi",
    },
    justification: {
      benefit: "Prínosom je okamžitá spätná väzba o stave formuly počas jazdy. Vodič a tím získavajú reálne dáta, na základe ktorých môžu priebežne upravovať jazdnú stratégiu a identifikovať prípadné problémy.",
      evidence: "Riešenie považujeme za funkčné na základe úspešného párovania zariadení a prenosu testovacích dát. Overili sme, že eChook je schopný posielať dáta na dostatočnú vzdialenosť s minimálnym oneskorením.",
      limitations: "Obmedzenia: testovanie prebiehalo v obmedzených podmienkach (parkovisko, krátke jazdy). Presnosť merania rýchlosti závisí od typu senzora. Plné overenie bude možné až na reálnych pretekoch, kde sa ukáže stabilita prenosu počas dlhšej jazdy a v rušnejšom prostredí.",
    },
  },
  {
    id: "projekt2",
    icon: Gamepad2,
    title: "Projekt 2 – Návrh volantu cez CAD",
    type: "Riešenie navrhnuté prostredníctvom EDP s aplikáciou CAD",
    focus: {
      params: "Zlepšenie parametrov: ergonómia a komfort ovládania formuly. Pôvodný volant nebol prispôsobený potrebám vodiča – chýbalo ergonomické tvarovanie a tlačidlo plynu bolo nekomfortne umiestnené.",
      criteria: "Kritériá úspechu: (1) Volant ergonomicky padne do rúk vodiča, (2) tlačidlo plynu je pohodlne dostupné, (3) volant je pevný a funkčný, (4) dizajn je estetický a jednotný s celkovým vzhľadom formuly.",
    },
    solution: {
      description: "Finálne riešenie je 3D vytlačený volant navrhnutý v CAD softvéri Fusion 360. Volant je tvarovaný pre optimálny úchyt, obsahuje integrované tlačidlo plynu a je prispôsobený na pripojenie k riadiacemu systému formuly.",
      change: "Hlavná zmena oproti pôvodnému stavu: nahradenie jednoduchého, neergonomického volantu vlastným návrhom, ktorý lepšie vyhovuje potrebám vodiča a zlepšuje komfort ovládania.",
      protocol: "https://drive.google.com/drive/folders/1tzjLg9BW_Qw3h9E3KLh-PlHTMDthmDVi",
    },
    justification: {
      benefit: "Prínosom je výrazne lepší komfort ovládania formuly. Vodič má istý a pohodlný úchyt, tlačidlo plynu je na dosah ruky, čo zvyšuje bezpečnosť a umožňuje lepšie sústredenie na jazdu.",
      evidence: "Riešenie zdôvodňujeme ergonomickou analýzou, konzultáciami s vodičmi a pozitívnym feedbackom po osadení. 3D model bol niekoľkokrát upravený na základe praktických skúšok úchytu.",
      limitations: "",
    },
  },
  {
    id: "projekt3",
    icon: Monitor,
    title: "Projekt 3 – Návrh a realizácia HaloBoardu",
    type: "Riešenie navrhnuté prostredníctvom EDP",
    focus: {
      params: "Zlepšenie parametrov: vizuálne rozhranie pre vodiča. Formula nemala žiadny displej, ktorý by vodičovi poskytoval informácie o aktuálnej rýchlosti, stave batérie alebo ďalších dôležitých údajoch počas jazdy.",
      criteria: "Kritériá úspechu: (1) Displej zobrazuje kľúčové údaje v reálnom čase, (2) informácie sú čitateľné aj počas jazdy, (3) panel je ergonomicky umiestnený v zornom poli vodiča, (4) systém je spoľahlivý a odolný voči vibráciám.",
    },
    solution: {
      description: "Riešenie spočíva vo vývoji vlastného prístrojového panelu HaloBoard. Pomocou CAD dizajnu a 3D tlače sme vytvorili kryt, ktorý integruje displej a potrebnú elektroniku. Panel je napojený na riadiaci systém formuly a zobrazuje vodičovi kľúčové informácie v reálnom čase.",
      change: "Hlavná zmena oproti pôvodnému stavu: formula získala vizuálne rozhranie, ktoré dovtedy chýbalo. Vodič už nemusí odhadovať rýchlosť alebo stav batérie – všetky dôležité údaje má priamo pred očami.",
      protocol: "https://drive.google.com/drive/folders/1tzjLg9BW_Qw3h9E3KLh-PlHTMDthmDVi",
    },
    justification: {
      benefit: "Prínosom je výrazné zlepšenie informovanosti vodiča počas jazdy. Vodič vie okamžite reagovať na zmeny stavu batérie alebo rýchlosti, čo vedie k efektívnejšej jazde a lepšiemu manažovaniu pretekovej stratégie.",
      evidence: "Riešenie zdôvodňujeme úspešným testovaním zobrazovania údajov a pozitívnym feedbackom od vodičov, ktorí potvrdili, že informácie na displeji sú prehľadné a užitočné počas jazdy.",
      limitations: "Obmedzenia: testovanie prebiehalo v statických podmienkach a počas krátkych jázd. Stabilita systému pri dlhšej jazde a odolnosť voči vibráciám sa bude dať overiť až na reálnych pretekoch. Presnosť zobrazovaných údajov závisí od kvality vstupných signálov z formuly.",
    },
  },
]

export function GreenpowerProjects() {
  return (
    <section id="greenpower" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">4. Greenpower Engineering</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            V rámci súťaže Greenpower Engineering sme realizovali tri samostatné projekty.
            Každý projekt má vlastné zameranie, definovaný spôsob práce a samostatný záznam.
          </p>
        </div>

        <Tabs defaultValue="projekt1" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8">
            {projectData.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-white/40 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                <project.icon size={18} />
                {project.title.split(" – ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectData.map((project) => (
            <TabsContent key={project.id} value={project.id}>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center">
                      <project.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-purple-600 text-sm font-medium">{project.type}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-none shadow-sm bg-gradient-to-br from-purple-50 to-white">
                      <CardHeader>
                        <CardTitle className="text-lg text-purple-700">Zameranie a zvolené parametre</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-gray-700">
                        <p>{project.focus.params}</p>
                        {"theory" in project.focus && (
                          <div className="bg-white/60 rounded-xl p-3 mt-2">
                            <p className="font-medium text-purple-600 mb-1">Teória zo školských predmetov:</p>
                            <p>{project.focus.theory}</p>
                          </div>
                        )}
                        {"criteria" in project.focus && (
                          <div className="bg-white/60 rounded-xl p-3 mt-2">
                            <p className="font-medium text-purple-600 mb-1">Kritériá úspechu:</p>
                            <p className="text-sm text-gray-700">{project.focus.criteria}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-gradient-to-br from-blue-50 to-white">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-700">Stručný opis riešenia</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-gray-700">
                        <p>{project.solution.description}</p>
                        {"change" in project.solution && project.solution.change && (
                          <div className="bg-white/60 rounded-xl p-3">
                            <p className="font-medium text-blue-600 mb-1">Hlavná zmena oproti pôvodnému stavu:</p>
                            <p>{project.solution.change}</p>
                          </div>
                        )}
                        {"testing" in project.solution && project.solution.testing && (
                          <div className="bg-white/60 rounded-xl p-3">
                            <p className="font-medium text-blue-600 mb-1">Testovanie:</p>
                            <p>{project.solution.testing}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-none shadow-sm bg-gradient-to-br from-green-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-700">Zdôvodnenie riešenia a jeho prínosu</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-gray-700">
                      <p><span className="font-medium text-green-600">Prínos:</span> {project.justification.benefit}</p>
                      <p><span className="font-medium text-green-600">Zdôvodnenie:</span> {project.justification.evidence}</p>
                      {project.justification.limitations && (
                        <div className="bg-white/60 rounded-xl p-3">
                          <p className="font-medium text-amber-600 mb-1">Obmedzenia riešenia:</p>
                          <p>{project.justification.limitations}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <div className="mt-6 text-center">
                    <a
                      href={project.solution.protocol}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm"
                    >
                      Otvoriť protokol k projektu (Google Drive)
                    </a>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/40">
                  <div className="flex items-center gap-3 mb-6">
                    <ImageIcon className="text-purple-600" size={24} />
                    <h4 className="text-xl font-bold text-gray-900">Prílohy</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                        <div className="text-center">
                          <ImageIcon className="mx-auto mb-2" size={32} />
                          <span>Foto {i}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm text-center mt-4">Sem budú doplnené fotografie, grafy a obrázky z procesu</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
