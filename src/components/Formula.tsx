export function Formula() {
  return (
    <section id="formula" className="py-24 px-4 bg-gradient-to-b from-white to-purple-50 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Naša formula</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Karosériu odhalíme na prezentácii.
          </p>
        </div>

        <figure className="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white">
          <img
            src="zakryta_formula.png"
            alt="Zakrytá formula – karosériu odhalíme na prezentácii"
            className="w-full h-auto object-contain"
          />
        </figure>
      </div>
    </section>
  )
}
