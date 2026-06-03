import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Users, User, Lightbulb, Trophy, Target, RefreshCw } from "lucide-react"

const teamReflection = {
  mindsetChange: "Na začiatku projektu sme vnímali Greenpower hlavne ako technickú výzvu – postaviť čo najrýchlejšie auto. Postupne sme si však uvedomili, že rovnako dôležité ako samotná stavba je aj tímová spolupráca, plánovanie a schopnosť reagovať na nečakané problémy. Zistili sme, že projekt nie je len o výsledku, ale aj o ceste, ktorou sme sa k nemu dopracovali.",
  achievements: "Najviac sme hrdí na to, že sme ako tím dokázali postaviť plne funkčnú formulu od základov. Každý z nás prispel svojou časťou – od mechanickej stavby cez elektroniku až po dizajn. Zvládli sme prvú testovaciu jazdu, čo bol pre nás všetkých obrovský moment. Taktiež sme hrdí na to, že sme si sami navrhli a vytlačili volant a HaloBoard – veci, ktoré vo formule reálne fungujú.",
  challenges: "Najväčšou výzvou bolo zladiť časové možnosti všetkých členov tímu. Každý z nás mal množstvo iných povinností a projektov, preto bolo ťažké nájsť spoločný čas na stretnutia. Riešili sme to flexibilným plánovaním – keď sa nás zišlo viac, robili sme veľký kus práce naraz. Ďalšou výzvou boli technické problémy počas montáže, najmä pri lepení karosérie a osádzaní skrutiek, ktoré sme niekedy museli prerábať.",
  differentApproach: "Do budúcna by sme viac dbali na pravidelné spoločné stretnutia od samého začiatku. Zistili sme, že tímová synergia je nenahraditeľná – v dňoch, keď sme boli všetci spolu, sme urobili oveľa viac a práca nás viac bavila. Taktiež by sme si lepšie rozvrhli úlohy tak, aby sa práca nerobila na poslednú chvíľu.",
}

const individualReflections = [
  {
    name: "Janko Michálek",
    initials: "JM",
    role: "Team líder",
    learnings: "Počas projektu som si naplno uvedomil, aká kľúčová je úloha lídra pri koordinácii ľudí. Naučil som sa, že viesť tím neznamená len zadávať úlohy, ale najmä hľadať spôsoby, ako efektívne prepojiť rôznych členov tímu, motivovať ich k spolupráci a nachádzať kompromisy v prospech spoločného cieľa.",
    challenge: "Ako team leader som čelil najväčšej výzve pri organizovaní spoločných stretnutí. Náš tím bol zložený z vysoko angažovaných ľudí, ktorí pracovali na množstve iných projektov. Zladiť naše nabité kalendáre tak, aby sme sa mohli stretnúť a pracovať spoločne na jednom mieste, si vyžadovalo veľkú dávku flexibility, trpezlivosti a organizačného úsilia.",
    takeaway: "V dňoch, keď sa nás zišlo najviac, sme urobili obrovský kus práce a celá tvorba nás bavila oveľa viac. Do budúcich projektov si odnášam jednoznačné poznanie, že skutočná tímová synergia je nenahraditeľná. Keď tím funguje spolu a ťahá za jeden povraz, produktivita rapídne stúpa a práca sa stáva zábavou. Tento moment silnej tímovej dynamiky je pre mňa tou najcennejšou skúsenosťou.",
  },
  {
    name: "Daniel Konečný",
    initials: "DK",
    role: "Manažér",
    learnings: "Naučil som sa narábať s telemetriou – ako funguje zariadenie eChook, ako zbierať a spracovávať dáta z formuly a ako ich prenášať na spracovanie.",
    challenge: "Najväčšia výzva bola pre mňa práca na projekte volantu – bolo to niečo nové, s čím som nemal predchádzajúce skúsenosti.",
    takeaway: "Z projektu si odnášam nové znalosti a skúsenosti, ktoré určite využijem v ďalších projektoch aj v budúcnosti.",
  },
  {
    name: "Benjamín Zajko",
    initials: "BZ",
    role: "Manažér",
    learnings: "Naučil som sa hlavne to, že netreba si všetko nechávať na poslednú chvíľu a netreba sa spoliehať na ostatných – sám musím vždy pohnúť vecami ďalej. Taktiež som si v praxi vyskúšal elektroniku, čo je sto krát lepšie ako len sedieť v lavici a počítať príklady.",
    challenge: "Najväčšia výzva bola dať tím dokopy – lepšie sa pracuje, keď sme aspoň piati, ako keď som tam sám alebo dvaja. Z konkrétnych vecí bolo najviac otravné lepenie karosérie na konci a osádzanie milióna skrutiek, hlavne keď to niekto dal zle a musel som to po nich vytahovať a meniť.",
    takeaway: "Do budúcnosti si odnášam skvelý experience, ktorý bude krásne vyzerať na CV-čku, ale aj priateľstvá a lepšie vzťahy s ostatnými.",
  },
]

export function Reflection() {
  const [active, setActive] = useState("0")

  const member = individualReflections[Number(active)]

  return (
    <section id="reflexia" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">5. Záverečná reflexia</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Reflexia prebiehala formou spoločného rozhovoru aj individuálneho zamyslenia.
            Zachytáva ako tímový pohľad na projekt, tak osobný posun každého člena.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-purple-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Časť A – Spoločná tímová reflexia</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" size={22} />
                  <CardTitle className="text-lg text-gray-900">Ako sa zmenilo naše uvažovanie</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{teamReflection.mindsetChange}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" size={22} />
                  <CardTitle className="text-lg text-gray-900">Čo sa nám podarilo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{teamReflection.achievements}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="text-red-500" size={22} />
                  <CardTitle className="text-lg text-gray-900">Najväčšie výzvy a ich riešenie</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{teamReflection.challenges}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <RefreshCw className="text-blue-500" size={22} />
                  <CardTitle className="text-lg text-gray-900">Čo by sme urobili inak</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{teamReflection.differentApproach}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Časť B – Individuálna reflexia členov tímu</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {individualReflections.map((m, index) => (
              <button
                key={index}
                onClick={() => setActive(String(index))}
                className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-sm border transition-all duration-300 hover:shadow-md ${
                  active === String(index)
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg border-transparent"
                    : "bg-white/70 backdrop-blur-sm border-white/40 text-gray-700"
                }`}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {m.initials}
                </div>
                {m.name}
              </button>
            ))}
          </div>

          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm max-w-3xl mx-auto">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {member.initials}
              </div>
              <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
              <p className="text-purple-600 font-medium text-sm">{member.role}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-5">
                <p className="font-semibold text-purple-700 mb-2">Čo som sa naučil</p>
                <p className="text-gray-700">{member.learnings}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-5">
                <p className="font-semibold text-orange-700 mb-2">Najväčšia výzva</p>
                <p className="text-gray-700">{member.challenge}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5">
                <p className="font-semibold text-green-700 mb-2">Čo si odnášam do budúcnosti</p>
                <p className="text-gray-700">{member.takeaway}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
