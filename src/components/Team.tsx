import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Github } from "lucide-react"

const greenpowerTeam = [
  {
    name: "Janko Michálek",
    role: "Team líder",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    initials: "JM",
  },
  {
    name: "Daniel Konečný",
    role: "Manažér",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    initials: "DK",
  },
  {
    name: "Benjamín Zajko",
    role: "Manažér",
    year: "2. ročník",
    field: "Informačné a sieťové technológie",
    initials: "BZ",
  },
]

const webDevs = [
  {
    name: "Peto",
    role: "Webový vývojár",
    initials: "P",
    githubUrl: "https://github.com",
  },
  {
    name: "Timo",
    role: "Webový vývojár",
    initials: "T",
    githubUrl: "https://github.com/timo-t-q",
  },
]

export function Team() {
  return (
    <section id="nas-tim" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Náš Tím</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Študenti, ktorí sa podieľali na projekte Greenpower.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Greenpower tím</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {greenpowerTeam.map((member, index) => (
            <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pt-8 pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-purple-200">
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-400 to-blue-400 text-white font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                <CardDescription className="text-purple-600 font-medium mt-1">
                  {member.role}
                </CardDescription>
                <div className="text-sm text-gray-500 mt-2 space-y-0.5">
                  <p>{member.year}</p>
                  <p>{member.field}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Tvorcovia webového portfólia</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {webDevs.map((member, index) => (
            <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pt-8 pb-4">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-blue-100">
                  <AvatarFallback className="text-xl bg-blue-50 text-blue-600 font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg text-gray-900">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    {member.name}
                    <Github size={16} />
                  </a>
                </CardTitle>
                <CardDescription className="text-blue-600 font-medium mt-1">
                  {member.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
