import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Target } from "lucide-react"

const teamMembers = [
  {
    name: "Janko Michálek",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    role: "Team líder",
    initials: "JM",
    photo: "janko.jpg",
    responsibilities: "Koordinácia tímu, organizácia stretnutí, rozdelenie úloh, dohľad nad priebehom projektu",
    expectations: "Do projektu GreenPower ma prilákal najmä zaujímavý koncept stavby a pretekania s vlastnou formulou, keďže som predtým absolvoval pár jázd na motokárach v Dlhej. Mojím primárnym cieľom však bolo vyskúšať si rolu team leadera. Chcel som zistiť, čo všetko obnáša manažovanie tímu, naučiť sa lepšie organizovať prácu ostatných a otestovať svoje líderské zručnosti na reálnom projekte.",
  },
  {
    name: "Daniel Konečný",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    role: "Manažér",
    initials: "DK",
    responsibilities: "Manažment projektu telemetrie (eChook), zber a vyhodnotenie dát, koordinácia meraní",
    expectations: "Chcel som sa naučiť niečo nové.",
  },
  {
    name: "Benjamín Zajko",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    role: "Manažér",
    initials: "BZ",
    photo: "benji.jpg",
    responsibilities: "Manažment projektu, koordinácia montáže a mechanických prác, dohľad nad kvalitou",
    expectations: "Zapojil som sa, lebo ma baví práca s elektronikou a chcel som si vyskúšať reálny projekt. Tešil som sa na praktické využitie teórie namiesto sedenia v lavici. Očakával som viac fantázie a voľnosti pri návrhoch, nie len presný návod, čo máme spraviť.",
  },
  {
    name: "Jaroslav Šubjak",
    year: "",
    field: "",
    role: "Elektronika",
    initials: "JŠ",
    responsibilities: "Elektronické zapojenie a systémy formuly",
    expectations: "",
  },
  {
    name: "Matej Gec",
    year: "",
    field: "",
    role: "Stavanie + elektronika",
    initials: "MG",
    responsibilities: "Mechanická stavba a elektronické systémy",
    expectations: "",
  },
  {
    name: "Dávid Mušitz",
    year: "",
    field: "",
    role: "Stavanie",
    initials: "DM",
    responsibilities: "Mechanická stavba a montáž formuly",
    expectations: "",
  },
  {
    name: "Peter Krupka",
    year: "",
    field: "",
    role: "Fotografovanie",
    initials: "PK",
    responsibilities: "Fotodokumentácia priebehu projektu",
    expectations: "",
  },
]

export function TeamIntro() {
  return (
    <section id="tim" className="py-24 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">1. Predstavenie tímu a ciele tímu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Táto časť zachytáva počiatočné nastavenie tímu – kto sme, aké máme roly a s akými očakávaniami sme do projektu vstupovali.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pt-10 pb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-purple-200">
                  {member.photo && <AvatarImage src={member.photo} alt={member.name} className="object-cover" />}
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-400 to-blue-400 text-white font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600 px-6 pb-10">
                <p><span className="font-medium text-gray-800">Ročník:</span> {member.year}</p>
                <p><span className="font-medium text-gray-800">Odbor:</span> {member.field}</p>
                <p><span className="font-medium text-gray-800">Zodpovedný za:</span> {member.responsibilities}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-purple-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Osobné očakávania a ciele členov tímu</h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {teamMembers.filter(m => m.expectations).map((member, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-md px-6">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-purple-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {member.initials}
                    </div>
                    {member.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {member.expectations}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
