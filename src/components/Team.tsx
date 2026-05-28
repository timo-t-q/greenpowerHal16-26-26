import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Team() {
  const team = [
    {
      name: "Janci",
      role: "Tím líder",
      initials: "J",
    },
    {
      name: "Dano",
      role: "Manažér",
      initials: "D",
    },
    {
      name: "Benji",
      role: "Manažér",
      initials: "B",
    },
    {
      name: "Peto",
      role: "Webový vývojár",
      initials: "P",
    },
    {
      name: "Timo",
      role: "Webový vývojár",
      initials: "T",
    },
  ];

  return (
    <section id="nas-tim" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Náš Tím</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Spoznajte ľudí, ktorí stoja za naším projektom. Spájame rôzne talenty a zručnosti,
            aby sme dosiahli náš spoločný cieľ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pt-8 pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-blue-100">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="text-2xl bg-blue-50 text-blue-600 font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium mt-1">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Optional: Add a short quote or socials for each member here later */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
