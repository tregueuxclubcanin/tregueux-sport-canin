
export default function TregueuxSportCanin() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TREGUEUX SPORT CANIN</h1>
          <nav className="space-x-4 text-sm">
            <a href="#club">Le club</a>
            <a href="#disciplines">Disciplines</a>
            <a href="#evenements">Événements</a>
            <a href="#galerie">Galerie</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <section id="club" className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Bienvenue au Tregueux Sport Canin</h2>
          <p>
            Club sportif canin situé à Trégueux, nous proposons des disciplines telles que l’IGP, l’obéissance, le pistage et plus encore. Notre objectif : créer une complicité forte entre le maître et son chien.
          </p>
        </section>

        <section id="disciplines" className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Nos disciplines</h2>
          <ul className="list-disc list-inside">
            <li>IGP (Obéissance, Défense, Pistage)</li>
            <li>Obéissance de loisir et compétition</li>
            <li>Pistage français</li>
            <li>Détection & recherche utilitaire</li>
          </ul>
        </section>

        <section id="evenements" className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Événements à venir</h2>
          <ul className="list-disc list-inside">
            <li>2 mai 2025 : Concours IGP-FH</li>
            <li>31 octobre 2025 : Grand Prix RU Classe 2</li>
            <li>22 novembre 2024 : Championnat régional de pistage</li>
          </ul>
        </section>

        <section id="galerie" className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Galerie photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/chien1.jpg" alt="Chien à l'entraînement" className="rounded-xl shadow" />
            <img src="/images/chien2.jpg" alt="Obéissance" className="rounded-xl shadow" />
            <img src="/images/chien3.jpg" alt="IGP en action" className="rounded-xl shadow" />
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>📍 Stade André Allénic, 22950 Trégueux</p>
          <p>📧 jacky.rebillard@orange.fr</p>
          <p>📞 06 75 85 47 63</p>
        </section>
      </main>

      <footer className="bg-blue-700 text-white text-center p-4">
        © 2025 Tregueux Sport Canin. Tous droits réservés.
      </footer>
    </div>
  );
}
