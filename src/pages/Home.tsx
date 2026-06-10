/**
 * @file Home.tsx
 * @description Page d'accueil bilingue de la Plateforme Académique d'Innovation Numérique
 * pour Dr. Abakar Malloum.
 */

import React, { useState, useEffect } from 'react'

// ==========================================
// 1. LE DICTIONNAIRE BILINGUE
// ==========================================
const dict = {
  fr: {
    nav: {
      badge: "Plateforme académique",
      home: "Accueil",
      portfolio: "Portfolios de Cours",
      sim: "Simulateur",
      workshops: "Formations",
      research: "Recherche",
      contact: "Contact",
      langToggle: "EN",
    },
    hero: {
      tag: "Éthique Appliquée & Philosophie Politique",
      title: "Plateforme Académique d'Innovation Numérique",
      desc: "Un carrefour entre technologie et sciences humaines dédié à l'enseignement et à la recherche. J'y analyse l'impact de l'intelligence artificielle, des données et de la mondialisation technologique sous l'angle de la philosophie politique, de l'éthique appliquée et des nouveaux enjeux de la citoyenneté numérique.",
      btnSim: "Lancer le Simulateur",
      btnCourse: "Voir l'offre de cours",
      profTag: "Philosophie politique & Gouvernance Numérique",
      profDesc: "Une approche critique liant l'analyse de données et les fondements moraux traditionnels pour éclairer les décisions publiques de l'ère technologique."
    },
    portfolio: {
      title: "Portfolios de Cours & Transparence Pédagogique",
      desc: "Gouvernance de cours rigoureuse, grilles d'évaluation explicites et encadrement collégial multipartite garantissant l'équité académique.",
      ugTitle: "Premier cycle — Enseignement fondamental",
      pol2508Desc: "Analyse conceptuelle de la modernité politique : genèse de l'État, souveraineté, théories du contrat social (Hobbes, Locke, Rousseau) et fondements des libertés civiles.",
      pol2108Desc: "Conducted in English. Examination of canonical texts from the Renaissance to the Enlightenment, defining institutional legitimacy, civic duties, and individual rights.",
      inte3026Title: "Éthique et Sociétés",
      inte3026Desc: "Étude transdisciplinaire des systèmes moraux face aux mutations sociétales contemporaines. Analyse critique de la justice distributive, de la responsabilité collective et des fractures sociales provoquées par le virage technologique.",
      gradTitle: "Cycles supérieurs — Séminaires de Maîtrise",
      epe6709Title: "Éthique, philosophie et politiques publiques",
      epe6709Desc: "Séminaire avancé analysant la justification morale des décisions de l'État. Modèles de choix social, éthique algorithmique dans les administrations publiques et conciliation entre libertés individuelles et impératifs collectifs.",
      epe6720Title: "Thèmes choisis en éthique",
      epe6720Desc: "Recherche approfondie sur les mutations de la mondialisation technologique. Analyse des concepts d'épiphylogenèse, d'aliénation numérique et de reconstruction éthique de la citoyenneté face aux puissances algorithmiques.",
      govTitle: "Gouvernance Collégiale & Équité Évaluative",
      govDesc: "Afin d'assurer une impartialité absolue, l'évaluation de la pensée critique au sein de ces cinq modules repose sur un processus rigoureux. La validation des examens, des travaux de séminaire et des livrables de recherche s'effectue en étroite collaboration avec une équipe d'assistants d'enseignement (TAs) et de correcteurs universitaires qualifiés, appliquant des grilles d'évaluation standardisées."
    },
    sim: {
      title: "Laboratoire de Simulation Éthique",
      desc: "Outil d'expérimentation pédagogique permettant d'ajuster les variables politiques pour évaluer en temps réel les équilibres sociétaux.",
      selectText: "Sélectionner un cadre d'étude de cours :",
      btn1: "POL 2108/2508 : État vs Libertés",
      btn2: "EPE 6709 : IA Publique vs Justice",
      btn3: "EPE 6720/INTE 3026 : Citoyenneté vs Automatisation",
      vars: "Variables d'Ajustement",
      impacts: "Impacts Systémiques Mesurés",
      labels: {
        modA: "Pouvoir Centralisé (Léviathan)", modB: "Droits et Revendications Civiles",
        pubA: "Intégration de l'IA Publique", pubB: "Transparence & Droit de Regard",
        techA: "Degré d'Automatisation", techB: "Régulation Éthique Globale"
      },
      scores: {
        lib: "Autonomie & Libertés Individuelles",
        eq: "Équité Sociale & Justice",
        stab: "Stabilité des Institutions"
      }
    },
    workshops: {
      title: "Formations, ateliers & data pour la décision",
      desc: "Une offre de formations courtes, d’ateliers pratiques et d’accompagnement en analyse de données pour les institutions, administrations et entreprises.",
      c1Title: "Ateliers de sensibilisation", c1Desc: "Sessions introductives sur les enjeux du numérique et de la donnée pour les décideurs, les cadres et les équipes.",
      c2Title: "Formations techniques", c2Desc: "Parcours pratiques pour monter en compétence sur les outils de data science, de visualisation et d'automatisation.",
      c3Title: "Analyse de données appliquée", c3Desc: "Accompagnement à la mise en place de tableaux de bord, d'indicateurs clés et d'outils d'aide à la décision."
    },
    research: {
      title: "Recherche & projets technologiques",
      desc: "Une activité de recherche ancrée dans les réalités du terrain, avec des projets collaboratifs à l’interface entre université, institutions et société.",
      c1Title: "Axes de recherche",
      c1L1: "Utilisation des données pour les politiques publiques", c1L2: "Transformation numérique des systèmes éducatifs", c1L3: "Intelligence artificielle responsable et éthique",
      c2Title: "Projets & collaborations",
      c2Desc: "Développement de projets technologiques, études de cas et travaux de recherche menés en partenariat avec des universités et institutions."
    },
    footer: {
      desc: "Pour toute demande relative à l'enseignement, aux formations ou aux projets de recherche, merci de prendre contact par les canaux habituels de votre institution.",
      badge: "Plateforme en évolution continue",
      rights: "Tous droits réservés."
    }
  },
  en: {
    nav: {
      badge: "Academic Platform",
      home: "Home",
      portfolio: "Course Portfolios",
      sim: "Simulator",
      workshops: "Workshops",
      research: "Research",
      contact: "Contact",
      langToggle: "FR",
    },
    hero: {
      tag: "Applied Ethics & Political Philosophy",
      title: "Academic Platform for Digital Innovation",
      desc: "A crossroads between technology and humanities dedicated to teaching and research. I analyze the impact of artificial intelligence, data, and technological globalization through the lens of political philosophy, applied ethics, and the new challenges of digital citizenship.",
      btnSim: "Launch Simulator",
      btnCourse: "View Course Offerings",
      profTag: "Political Philosophy & Digital Governance",
      profDesc: "A critical approach linking data analysis and traditional moral foundations to inform public decisions in the technological age."
    },
    portfolio: {
      title: "Course Portfolios & Pedagogical Transparency",
      desc: "Rigorous course governance, explicit grading rubrics, and multi-party collegial oversight ensuring academic fairness.",
      ugTitle: "Undergraduate — Fundamental Teaching",
      pol2508Desc: "Conceptual analysis of political modernity: genesis of the State, sovereignty, social contract theories (Hobbes, Locke, Rousseau), and foundations of civil liberties.",
      pol2108Desc: "Conducted in English. Examination of canonical texts from the Renaissance to the Enlightenment, defining institutional legitimacy, civic duties, and individual rights.",
      inte3026Title: "Ethics and Societies",
      inte3026Desc: "Transdisciplinary study of moral systems in the face of contemporary societal mutations. Critical analysis of distributive justice, collective responsibility, and social fractures caused by the technological shift.",
      gradTitle: "Graduate — Master's Seminars",
      epe6709Title: "Ethics, Philosophy and Public Policy",
      epe6709Desc: "Advanced seminar analyzing the moral justification of State decisions. Social choice models, algorithmic ethics in public administrations, and balancing individual freedoms with collective imperatives.",
      epe6720Title: "Selected Topics in Ethics",
      epe6720Desc: "In-depth research on the mutations of technological globalization. Analysis of the concepts of epiphylogenesis, digital alienation, and the ethical reconstruction of citizenship in the face of algorithmic powers.",
      govTitle: "Collegial Governance & Evaluative Equity",
      govDesc: "To ensure absolute impartiality, the evaluation of critical thinking within these five modules is based on a rigorous process. The validation of exams, seminar papers, and research deliverables is carried out in close collaboration with a team of teaching assistants (TAs) and qualified university graders, applying standardized evaluation rubrics."
    },
    sim: {
      title: "Ethical Simulation Laboratory",
      desc: "Pedagogical experimentation tool allowing the adjustment of political variables to evaluate societal balances in real-time.",
      selectText: "Select a course framework:",
      btn1: "POL 2108/2508: State vs Liberties",
      btn2: "EPE 6709: Public AI vs Justice",
      btn3: "EPE 6720/INTE 3026: Citizenship vs Automation",
      vars: "Adjustment Variables",
      impacts: "Measured Systemic Impacts",
      labels: {
        modA: "Centralized Power (Leviathan)", modB: "Civil Rights & Demands",
        pubA: "Public AI Integration", pubB: "Transparency & Oversight",
        techA: "Degree of Automation", techB: "Global Ethical Regulation"
      },
      scores: {
        lib: "Autonomy & Individual Liberties",
        eq: "Social Equity & Justice",
        stab: "Institutional Stability"
      }
    },
    workshops: {
      title: "Training, Workshops & Data for Decision Making",
      desc: "Short training courses, practical workshops, and support in data analysis for institutions, administrations, and businesses.",
      c1Title: "Awareness Workshops", c1Desc: "Introductory sessions on digital and data challenges for decision-makers, executives, and operational teams.",
      c2Title: "Technical Training", c2Desc: "Practical paths to gain skills in data science tools, visualization, and automation.",
      c3Title: "Applied Data Analysis", c3Desc: "Support in setting up dashboards, key indicators, and data-driven decision support tools."
    },
    research: {
      title: "Research & Technological Projects",
      desc: "Research activity rooted in field realities, with collaborative projects at the interface between university, institutions, and society.",
      c1Title: "Research Axes",
      c1L1: "Use of data for public policies", c1L2: "Digital transformation of educational systems", c1L3: "Responsible and ethical artificial intelligence",
      c2Title: "Projects & Collaborations",
      c2Desc: "Development of technological projects, case studies, and research work conducted in partnership with national universities and institutions."
    },
    footer: {
      desc: "For any inquiries regarding teaching, training, or research projects, please contact us through your institution's usual channels.",
      badge: "Platform in continuous evolution",
      rights: "All rights reserved."
    }
  }
}

// ==========================================
// 2. FONCTIONS DE NAVIGATION
// ==========================================
function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ==========================================
// 3. COMPOSANTS (AVEC GESTION DE LANGUE)
// ==========================================

function Header({ lang, setLang }: { lang: 'fr'|'en', setLang: (l: 'fr'|'en') => void }): JSX.Element {
  const t = dict[lang].nav
  const navItems = [
    { label: t.home, targetId: 'home' },
    { label: t.portfolio, targetId: 'teaching-portfolio' },
    { label: t.sim, targetId: 'simulator-lab' },
    { label: t.workshops, targetId: 'workshops' },
    { label: t.research, targetId: 'research' },
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
              {t.badge}
            </span>
            <span className="text-sm font-semibold text-slate-900 sm:text-base">
              Dr. Abakar Malloum
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map((item) => (
            <button key={item.targetId} type="button" onClick={() => scrollToSection(item.targetId)} className="transition-colors hover:text-slate-900">
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="ml-4 flex items-center justify-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800 transition hover:bg-slate-200"
          >
            {t.langToggle}
          </button>
        </nav>
      </div>
    </header>
  )
}

function HeroSection({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].hero
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t.tag}
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.desc}
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToSection('simulator-lab')} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              {t.btnSim}
            </button>
            <button type="button" onClick={() => scrollToSection('teaching-portfolio')} className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50">
              {t.btnCourse}
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-slate-900/10 via-emerald-500/5 to-sky-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
              <img src="https://pub-cdn.sider.ai/u/U08XHONVVR/web-coder/6a247852614ae89139df7deb/resource/e47a96c9-49af-4fa6-aa4a-c81ba0cf1936.png" alt="Innovation numérique universitaire" className="h-56 w-full object-cover sm:h-64" />
              <div className="space-y-3 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Dr. Malloum
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {t.profTag}
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  {t.profDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionShell({ id, title, description, children }: { id: string, title: string, description: string, children: React.ReactNode }): JSX.Element {
  return (
    <section id={id} className="border-t border-slate-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function TotalCoursePortfolio({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].portfolio
  return (
    <SectionShell id="teaching-portfolio" title={t.title} description={t.desc}>
      <div className="mb-10">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">{t.ugTitle}</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">POL 2508</span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">Pensée politique moderne I</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.pol2508Desc}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">POL 2108</span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">Modern Political Thought I</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.pol2108Desc}</p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="grid gap-5 sm:grid-cols-1">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-600">INTE 3026</span>
            <h4 className="mt-3 text-base font-semibold text-slate-900">{t.inte3026Title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.inte3026Desc}</p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">{t.gradTitle}</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-900 p-5 text-white shadow-sm">
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">EPE 6709</span>
            <h4 className="mt-3 text-base font-semibold text-white">{t.epe6709Title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{t.epe6709Desc}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-900 p-5 text-white shadow-sm">
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">EPE 6720</span>
            <h4 className="mt-3 text-base font-semibold text-white">{t.epe6720Title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{t.epe6720Desc}</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <h4 className="text-sm font-semibold text-slate-900">{t.govTitle}</h4>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.govDesc}</p>
      </div>
    </SectionShell>
  )
}

function SimulationLab({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].sim
  const [course, setCourse] = useState<'modern' | 'public' | 'tech'>('modern')
  const [paramA, setParamA] = useState<number>(50)
  const [paramB, setParamB] = useState<number>(50)

  const libertyScore = course === 'modern' ? Math.max(10, 100 - paramA) : Math.min(95, paramA + 20)
  const equityScore = course === 'public' ? Math.min(100, (paramA + paramB) / 1.5) : Math.max(15, (paramB * 0.9))
  const stabilityScore = Math.min(100, (paramA * 0.5) + (paramB * 0.6))

  return (
    <SectionShell id="simulator-lab" title={t.title} description={t.desc}>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{t.selectText}</label>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => { setCourse('modern'); setParamA(40); setParamB(60); }} className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'modern' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
              {t.btn1}
            </button>
            <button onClick={() => { setCourse('public'); setParamA(70); setParamB(40); }} className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'public' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
              {t.btn2}
            </button>
            <button onClick={() => { setCourse('tech'); setParamA(30); setParamB(80); }} className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${course === 'tech' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
              {t.btn3}
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-6">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900">{t.vars}</h4>
            <div>
              <label className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{course === 'modern' ? t.labels.modA : course === 'public' ? t.labels.pubA : t.labels.techA}</span>
                <span className="font-mono">{paramA}%</span>
              </label>
              <input type="range" min="0" max="100" value={paramA} onChange={(e) => setParamA(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900" />
            </div>
            <div>
              <label className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{course === 'modern' ? t.labels.modB : course === 'public' ? t.labels.pubB : t.labels.techB}</span>
                <span className="font-mono">{paramB}%</span>
              </label>
              <input type="range" min="0" max="100" value={paramB} onChange={(e) => setParamB(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900" />
            </div>
          </div>
          <div className="space-y-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h4 className="text-sm font-semibold text-slate-900">{t.impacts}</h4>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t.scores.lib}</span><span className="font-mono font-semibold">{Math.round(libertyScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${libertyScore}%` }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t.scores.eq}</span><span className="font-mono font-semibold">{Math.round(equityScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-purple-600 h-full transition-all duration-300" style={{ width: `${equityScore}%` }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t.scores.stab}</span><span className="font-mono font-semibold">{Math.round(stabilityScore)}/100</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-emerald-600 h-full transition-all duration-300" style={{ width: `${stabilityScore}%` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function WorkshopsSection({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].workshops
  return (
    <SectionShell id="workshops" title={t.title} description={t.desc}>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{t.c1Title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.c1Desc}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{t.c2Title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.c2Desc}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{t.c3Title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.c3Desc}</p>
        </div>
      </div>
    </SectionShell>
  )
}

function ResearchSection({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].research
  return (
    <SectionShell id="research" title={t.title} description={t.desc}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{t.c1Title}</h3>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li>• {t.c1L1}</li><li>• {t.c1L2}</li><li>• {t.c1L3}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{t.c2Title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{t.c2Desc}</p>
        </div>
      </div>
    </SectionShell>
  )
}

function Footer({ lang }: { lang: 'fr'|'en' }): JSX.Element {
  const t = dict[lang].footer
  return (
    <footer id="contact" className="border-t border-slate-100 bg-slate-900 py-8 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {dict[lang].hero.title}
          </div>
          <div className="mt-1 text-sm font-semibold text-white sm:text-base">
            Abakar Malloum
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
            {t.desc}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs text-slate-300 sm:items-end sm:text-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>
          <p className="text-[11px] text-slate-500 sm:text-xs">
            &copy; {new Date().getFullYear()} — {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

// ==========================================
// 4. LE POINT D'ENTRÉE PRINCIPAL
// ==========================================
export default function HomePage(): JSX.Element {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')

  useEffect(() => {
    document.title = lang === 'fr' 
      ? "Prof. Abakar Malloum — Plateforme Académique d'Innovation Numérique"
      : "Prof. Abakar Malloum — Academic Platform for Digital Innovation"
  }, [lang])

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <TotalCoursePortfolio lang={lang} />
        <SimulationLab lang={lang} />
        <WorkshopsSection lang={lang} />
        <ResearchSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
