/**
 * @file Home.tsx
 * @description Page d'accueil de la Plateforme Académique d'Innovation Numérique
 * pour le Dr. Abakar Malloum. Contient le header, le héros, les sections
 * Enseignement / Formations / Recherche et un footer, dans un design moderne et épuré.
 */

import React, { useEffect } from 'react'

/**
 * Représente un élément de navigation dans le header.
 */
interface NavItem {
  /** Libellé affiché dans la barre de navigation. */
  label: string
  /** ID de la section cible dans la page. */
  targetId: string
}

/**
 * Fait défiler la page jusqu'à la section donnée en douceur.
 * @param id - Identifiant de la section (attribut HTML id).
 */
function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Composant Header
 * Affiche la barre de navigation supérieure, sticky, avec logo et liens d'ancrage.
 */
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

/**
 * Composant HeroSection
 * Présente le professeur, la plateforme et les principaux axes (enseignement, data, recherche).
 */
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
            Un espace interdisciplinaire dédié à l'enseignement universitaire, aux formations professionnelles et à la recherche. Sous la direction du Prof. Abakar Malloum, cette plateforme explore les enjeux de l'intelligence artificielle et de la transformation numérique à travers le prisme critique de la philosophie politique, de la théorie morale et de l'éthique appliquée
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

/**
 * Composant SectionShell
 * Conteneur générique pour les sections avec titre et description.
 */
interface SectionShellProps {
  /** Identifiant de section, utilisé pour l&apos;ancre de navigation. */
  id: string
  /** Titre principal de la section. */
  title: string
  /** Description courte sous le titre. */
  description: string
  /** Contenu spécifique de la section. */
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
 * Composant TeachingSection
 * Présente l&apos;offre d&apos;enseignement universitaire.
 */
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

/**
 * Composant WorkshopsSection
 * Décrit les ateliers, formations professionnelles et activités autour de la donnée.
 */
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

/**
 * Composant ResearchSection
 * Met en avant les axes de recherche et les projets technologiques.
 */
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

/**
 * Composant Footer
 * Pied de page institutionnel avec informations de base et contact.
 */
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

/**
 * Composant HomePage
 * Page principale de la plateforme, assemble toutes les sections avec un design cohérent.
 */
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
      </main>
      <Footer />
    </div>
  )
}
