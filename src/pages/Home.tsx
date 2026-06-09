/**
 * @file Home.tsx
 * @description Page d'accueil de la Plateforme Académique d'Innovation Numérique
 * pour le Prof. Abakar Malloum.
 */

import React, { useEffect } from 'react'

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
    { label: 'Enseignement', targetId: 'teaching' },
    { label: 'Formations & Ateliers', targetId: 'workshops' },
    { label: 'Recherche & Projets', targetId: 'research' },
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
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_60%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Innovation numérique &amp; données
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
              onClick={() => scrollToSection('teaching')}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Découvrir l&apos;enseignement
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('research')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explorer les projets de recherche
            </button>
          </div>

          <div className="grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Enseignement
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                Cours universitaires
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Modules structurés en data science, IA, systèmes d&apos;information et
                transformation digitale.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Formations
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                Ateliers &amp; conférences
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Dispositifs pédagogiques sur mesure pour institutions, entreprises et
                administrations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Recherche
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                Projets &amp; partenariats
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Projets technologiques ancrés dans les besoins du terrain, avec une
                forte dimension interdisciplinaire.
              </p>
            </div>
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
                      Innovation numérique &amp; data pour l&apos;académique
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    AM
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  Une plateforme pour connecter l&apos;université, le monde socio-économique
                  et les enjeux stratégiques du numérique, avec une approche fondée sur
                  les données.
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

function TeachingSection(): JSX.Element {
  return (
    <SectionShell
      id="teaching"
      title="Enseignement universitaire"
      description="Des enseignements structurés autour des sciences des données, de l’IA et de la transformation numérique, du niveau licence au niveau master."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Data science &amp; intelligence artificielle
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Cours dédiés aux fondements statistiques, aux algorithmes d&apos;apprentissage
            automatique et aux applications concrètes de l&apos;IA dans différents secteurs.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li>• Analyse exploratoire et visualisation des données</li>
            <li>• Modélisation prédictive &amp; apprentissage supervisé</li>
            <li>• Introduction au deep learning et à ses usages</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Systèmes d&apos;information &amp; transformation numérique
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Modules orientés vers la gouvernance des systèmes d&apos;information, la
            stratégie digitale et l&apos;accompagnement des organisations dans leur
            transformation numérique.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li>• Architecture des systèmes d&apos;information</li>
            <li>• Gestion de projet numérique &amp; conduite du changement</li>
            <li>• Gouvernance de la donnée &amp; enjeux éthiques</li>
          </ul>
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
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Ateliers de sensibilisation
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Sessions introductives sur les enjeux du numérique et de la donnée pour
            les décideurs, les cadres et les équipes opérationnelles.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Formations techniques
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Parcours pratiques pour monter en compétence sur les outils de data
            science, de visualisation et d&apos;automatisation de processus.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Analyse de données appliquée
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Accompagnement à la mise en place de tableaux de bord, d&apos;indicateurs
            clés et d&apos;outils d&apos;aide à la décision basés sur les données.
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
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Axes de recherche
          </h3>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li>• Utilisation des données pour les politiques publiques</li>
            <li>• Transformation numérique des systèmes éducatifs</li>
            <li>• Intelligence artificielle responsable et éthique</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Projets &amp; collaborations
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            Développement de projets technologiques, études de cas et travaux de
            recherche menés en partenariat avec des universités, des institutions
            publiques et des organisations internationales.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

/* NOUVELLE SECTION : PORTFOLIO DE COURS */
function CoursePortfolio(): JSX.Element {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '2.2rem', marginBottom: '15px' }}>
            Portfolios de Cours &amp; Transparence Pédagogique
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Une gouvernance de cours claire et accessible est le fondement d&apos;un apprentissage réussi. 
            Ces portfolios présentent l&apos;architecture de mes enseignements, les objectifs rigoureux de la pensée politique 
            et la structure d&apos;évaluation multipartite qui garantit l&apos;équité académique.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
          
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 'bold' }}>
              POL 2508
            </span>
            <h3 style={{ color: '#111827', fontSize: '1.5rem', marginTop: '15px', marginBottom: '10px' }}>
              Pensée politique moderne I
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Ce cours explore les fondements conceptuels de la modernité politique à travers l&apos;analyse critique des textes majeurs. 
              L&apos;accent est mis sur l&apos;émergence de l&apos;État, les théories du contrat social, de la souveraineté et des droits individuels, 
              permettant de contextualiser les débats contemporains sur la citoyenneté.
            </p>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 'bold' }}>
              POL 2108
            </span>
            <h3 style={{ color: '#111827', fontSize: '1.5rem', marginTop: '15px', marginBottom: '10px' }}>
              Modern Political Thought I
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Conducted in English, this course examines the canonical texts that shaped the modern political landscape. 
              Students engage with complex theoretical frameworks to develop critical analytical skills, mapping the evolution 
              of power, liberty, and institutional legitimacy from the Renaissance to the Enlightenment.
            </p>
          </div>

        </div>

        <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '40px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ color: '#1e3a8a', fontSize: '1.6rem', marginBottom: '20px' }}>
            Architecture Évaluative et Équité
          </h3>
          
          <p style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Pour garantir une évaluation juste et stimulante de la pensée critique, les cours POL 2108 et POL 2508 reposent sur une approche d&apos;évaluation continue, structurée autour de jalons clairs et transparents :
          </p>

          <ul style={{ paddingLeft: '20px', color: '#374151', lineHeight: '1.8', fontSize: '1rem', marginBottom: '30px' }}>
            <li>
              <strong>Évaluations Formatives et Sommatives :</strong> L&apos;articulation entre les présentations orales, les quiz de lecture réguliers et les examens de synthèse est pensée pour valider progressivement l&apos;assimilation des concepts philosophiques complexes, évitant la surcharge cognitive de fin de semestre.
            </li>
            <li>
              <strong>Critères de Correction Explicites :</strong> Chaque travail fait l&apos;objet d&apos;une grille d&apos;évaluation détaillée, distribuée en amont, spécifiant les attentes en matière d&apos;analyse textuelle, de rigueur argumentative et de clarté conceptuelle.
            </li>
          </ul>

          <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '20px', marginTop: '20px' }}>
            <h4 style={{ color: '#111827', fontSize: '1.15rem', marginBottom: '10px', fontWeight: 'bold' }}>
              Gouvernance Collégiale du Cours
            </h4>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Le processus de notation est une démarche rigoureuse et collégiale. Toutes les évaluations, examens et travaux écrits sont gérés et révisés en coordination directe avec une équipe d&apos;assistants d&apos;enseignement (TAs) et de correcteurs universitaires qualifiés. Cette structure multipartite assure une objectivité absolue, une standardisation stricte des notes et une double vérification systématique, garantissant le respect rigoureux des standards de l&apos;institution.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function Footer(): JSX.Element {
  return (
    <footer
      id="contact"
      className="border-t border-slate-100 bg-slate-900 py-8 text-slate-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Plateforme académique d&apos;innovation numérique
          </div>
          <div className="mt-1 text-sm font-semibold text-white sm:text-base">
            Prof. Abakar Malloum
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
            Pour toute demande relative à l&apos;enseignement, aux formations ou aux
            projets de recherche, merci de prendre contact par les canaux habituels
            de votre institution.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs text-slate-300 sm:items-end sm:text-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Plateforme en évolution continue
          </div>
          <p className="text-[11px] text-slate-500 sm:text-xs">
            &copy; {new Date().getFullYear()} Plateforme Académique d&apos;Innovation
            Numérique — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage(): JSX.Element {
  useEffect(() => {
    document.title =
      "Prof. Abakar Malloum — Plateforme Académique d'Innovation Numérique"
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <HeroSection />
        <TeachingSection />
        <WorkshopsSection />
        <ResearchSection />
        <CoursePortfolio />
      </main>
      <Footer />
    </div>
  )
}
