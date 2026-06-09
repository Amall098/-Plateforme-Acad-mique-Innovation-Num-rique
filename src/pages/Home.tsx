/**
 * @file Home.tsx
 * @description Page d'accueil de la Plateforme Académique d'Innovation Numérique
 * pour le Prof. Abakar Malloum. Inclut les portfolios de cours (Baccalauréat et Maîtrise)
 * et un simulateur interactif de cas d'éthique appliquée.
 */

import React, { useState, useEffect } from 'react'

interface NavItem {
  label: string
  targetId: string
}

function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Header(): JSX.Element {
  const navItems: NavItem[] = [
    { label: 'Accueil', targetId: 'home' },
    { label: 'Portfolios de Cours', targetId: 'teaching-portfolio' },
    { label: 'Simulateur Éthique', targetId: 'simulator-lab' },
    { label: 'Formations', targetId: 'workshops' },
    { label: 'Recherche', targetId: 'research' },
    { label: 'Contact', targetId: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
            AM
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Plateforme académique
            </span>
            <span className="text-sm font-semibold text-slate-900 sm:text-base">
              Prof. Abakar Malloum
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function HeroSection(): JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_60%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Éthique Appliquée &amp; Philosophie Politique
          </span>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Plateforme Académique d&apos;Innovation Numérique
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Un carrefour entre technologie et sciences humaines dédié à l'enseignement et à la recherche. J'y analyse l'impact de l'intelligence artificielle, des données et de la mondialisation technologique sous l'angle de la philosophie politique, de l'éthique appliquée et des nouveaux enjeux de la citoyenneté numérique.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('simulator-lab')}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Lancer le Simulateur Éthique
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('teaching-portfolio')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
            >
              Voir l&apos;offre de cours
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-slate-900/10 via-emerald-500/5 to-sky-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
              <img
                src="https://pub-cdn.sider.ai/u/U08XHONVVR/web-coder/6a247852614ae89139df7deb/resource/e47a96c9-49af-4fa6-aa4a-c81ba0cf1936.png"
                alt="Innovation numérique universitaire"
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="space-y-3 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Prof. Abakar Malloum
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Philosophie politique &amp; Gouvernance Numérique
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  Une approche critique liant l&apos;analyse de données et les fondements moraux traditionnels pour éclairer les décisions publiques de l&apos;ère technologique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SectionShellProps {
  id: string
  title: string
  description: string
  children: React.ReactNode
}

function SectionShell(props: SectionShellProps): JSX.Element {
  const { id, title, description, children } = props

  return (
    <section id={id} className="border-t border-slate-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}

/**
 * COMPOSANT : Portfolio de tous les cours (Baccalauréat et Maîtrise)
 */
function TotalCoursePortfolio(): JSX.Element {
  return (
    <SectionShell
      id="teaching-portfolio"
      title="Portfolios de Cours &amp; Transparence Pédagogique"
      description="Gouvernance de cours rigoureuse, grilles d'évaluation explicites et encadrement collégial multipartite garantissant l'équité académique."
    >
      {/* GROUPE 1 : PREMIER CYCLE */}
      <div className="mb-10">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Premier cycle — Enseignement fondamental
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
              POL 2508
            </span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">Pensée politique moderne I</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Analyse conceptuelle de la modernité politique : genèse de l&apos;État, souveraineté, théories du contrat social (Hobbes, Locke, Rousseau) et fondements des libertés civiles.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
              POL 2108
            </span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">Modern Political Thought I</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Conducted in English. Examination of canonical texts from the Renaissance to the Enlightenment, defining institutional legitimacy, civic duties, and individual rights.
            </p>
          </div>
        </div>
      </div>

      {/* GROUPE 2 : INTE SÉMINAIRE */}
      <div className="mb-10">
        <div className="grid gap-5 sm:grid-cols-1">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-600">
              INTE 3026
            </span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">Éthique et Sociétés</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Étude transdisciplinaire des systèmes moraux face aux mutations sociétales contemporaines. Analyse critique de la justice distributive, de la responsabilité collective et des fractures sociales provoquées par le virage technologique.
            </p>
          </div>
        </div>
      </div>

      {/* GROUPE 3 : CYCLES SUPÉRIEURS */}
      <div className="mb-10">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Cycles supérieurs — Séminaires de Maîtrise
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-900 p-5 text-white shadow-sm">
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              EPE 6709
            </span>
            <h4 className="mt-3 text-base font-semibold text-white">Éthique, philosophie et politiques publiques</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Séminaire avancé analysant la justification morale des décisions de l&apos;État. Modèles de choix social, éthique algorithmique dans les administrations publiques et conciliation entre libertés individuelles et impératifs collectifs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-900 p-5 text-white shadow-sm">
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              EPE 6720
            </span>
            <h4 className="mt-3 text-base font-semibold text-white">Thèmes choisis en éthique</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Recherche approfondie sur les mutations de la mondialisation technologique. Analyse des concepts d&apos;épiphylogenèse, d&apos;aliénation numérique et de reconstruction éthique de la citoyenneté face aux puissances algorithmiques.
            </p>
          </div>
        </div>
      </div>

      {/* BLOC SÉCURITÉ DE NOTATION */}
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <h4 className="text-sm font-semibold text-slate-900">Gouvernance Collégiale &amp; Équité Évaluative</h4>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
          Afin d&apos;assurer une impartialité absolue, l&apos;évaluation de la pensée critique au sein de ces cinq modules repose sur un processus rigoureux. La validation des examens, des travaux de séminaire et des livrables de recherche s&apos;effectue en étroite collaboration avec une équipe d&apos;assistants d&apos;enseignement (TAs) et de correcteurs universitaires qualifiés, appliquant des grilles d&apos;évaluation standardisées.
        </p>
      </div>
    </SectionShell>
  )
}

/**
 * COMPOSANT : Simulateur Interactif Pédagogique (Exemple en direct)
 */
function SimulationLab(): JSX.Element {
  const [course, setCourse] = useState<'modern' | 'public' | 'tech'>('modern')
  const [paramA, setParamA] = useState<number>(50)
  const [paramB, setParamB] = useState<number>(50)

  // Modèle d'impact simplifié calculé dynamiquement
  const libertyScore = course === 'modern' ? Math.max(10, 100 - paramA) : Math.min(95, paramA + 20)
  const equityScore = course === 'public' ? Math.min(100, (paramA + paramB) / 1.5) : Math.max(15, (paramB * 0.9))
  const stabilityScore = Math.min(100, (paramA * 0.5) + (paramB * 0.6))

  return (
    <SectionShell
      id="simulator-lab"
      title="Laboratoire de Simulation Éthique"
      description="Outil d'expérimentation pédagogique permettant d'ajuster les variables politiques pour évaluer en temps réel les équilibres sociétaux."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Sélectionner un cadre d&apos;étude de cours :
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setCourse('modern'); setParamA(40); setParamB(60); }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'modern' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              POL 2108 / 2508 : Prerogative d&apos;État vs Libertés (Contrat Social)
            </button>
            <button
              onClick={() => { setCourse('public'); setParamA(70); setParamB(40); }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'public' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              EPE 6709 : Algorithmes Publics vs Justice Distributive
            </button>
            <button
              onClick={() => { setCourse('tech'); setParamA(30); setParamB(80); }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'tech' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              EPE 6720 / INTE 3026 : Citoyenneté face à l&apos;Automatisation
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-6">
          {/* Leviers de contrôle */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900">Variables d&apos;Ajustement</h4>
            <div>
              <label className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{course === 'modern' ? "Pouvoir Centralisé (Léviathan)" : course === 'public' ? "Intégration de l'IA Publique" : "Degré d'Automatisation"}</span>
                <span className="font-mono">{paramA}%</span>
              </label>
              <input
                type="range" min="0" max="100" value={paramA} onChange={(e) => setParamA(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            <div>
              <label className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{course === 'modern' ? "Droits et Revendications Civiles" : course === 'public' ? "Transparence & Droit de Regard" : "Régulation Éthique Globale"}</span>
                <span className="font-mono">{paramB}%</span>
              </label>
              <input
                type="range" min="0" max="100" value={paramB} onChange={(e) => setParamB(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>
          </div>

          {/* Indicateurs de résultats */}
          <div className="space-y-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h4 className="text-sm font-semibold text-slate-900">Impacts Systémiques Mesurés</h4>
            
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Autonomie &amp; Libertés Individuelles</span>
                <span className="font-mono font-semibold">{Math.round(libertyScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${libertyScore}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Équité Sociale &amp; Justice</span>
                <span className="font-mono font-semibold">{Math.round(equityScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full transition-all duration-300" style={{ width: `${equityScore}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Stabilité des Institutions</span>
                <span className="font-mono font-semibold">{Math.round(stabilityScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full transition-all duration-300" style={{ width: `${stabilityScore}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function WorkshopsSection(): JSX.Element {
  return (
    <SectionShell
      id="workshops"
      title="Formations, ateliers &amp; data pour la décision"
      description="Une offre de formations courtes, d’ateliers pratiques et d’accompagnement en analyse de données pour les institutions, administrations et entreprises."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">Ateliers de sensibilisation</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Sessions introductives sur les enjeux du numérique et de la donnée pour les décideurs, les cadres et les équipes opérationnelles.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">Formations techniques</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Parcours pratiques pour monter en compétence sur les outils de data science, de visualisation et d&apos;automatisation.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">Analyse de données appliquée</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Accompagnement à la mise en place de tableaux de bord, d&apos;indicateurs clés et d&apos;outils d&apos;aide à la décision.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

function ResearchSection(): JSX.Element {
  return (
    <SectionShell
      id="research"
      title="Recherche &amp; projets technologiques"
      description="Une activité de recherche ancrée dans les réalités du terrain, avec des projets collaboratifs à l’interface entre université, institutions et société."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">Axes de recherche</h3>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li>• Utilisation des données pour les politiques publiques</li>
            <li>• Transformation numérique des systèmes éducatifs</li>
            <li>• Intelligence artificielle responsable et éthique</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">Projets &amp; collaborations</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Développement de projets technologiques, études de cas et travaux de recherche menés en partenariat avec des universités et institutions nationales.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

function Footer(): JSX.Element {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-slate-900 py-8 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Plateforme académique d&apos;innovation numérique
          </div>
          <div className="mt-1 text-sm font-semibold text-white sm:text-base">
            Prof. Abakar Malloum
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
            Pour toute demande relative à l&apos;enseignement, aux formations ou aux projets de recherche, merci de prendre contact par les canaux habituels de votre institution.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs text-slate-300 sm:items-end sm:text-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Plateforme en évolution continue
          </div>
          <p className="text-[11px] text-slate-500 sm:text-xs">
            &copy; {new Date().getFullYear()} Plateforme Académique d&apos;Innovation Numérique — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage(): JSX.Element {
  useEffect(() => {
    document.title = "Prof. Abakar Malloum — Plateforme Académique d'Innovation Numérique"
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <HeroSection />
        <TotalCoursePortfolio />
        <SimulationLab />
        <WorkshopsSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  )
}
