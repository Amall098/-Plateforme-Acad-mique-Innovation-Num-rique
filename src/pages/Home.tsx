export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, sans-serif', color: '#333' }}>
      
      {/* 1. BLOC D'ACCUEIL (Votre présentation) */}
      <div style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <h1 style={{ color: '#2563eb', fontSize: '2.5rem', marginBottom: '10px' }}>
            Plateforme Académique d'Innovation Numérique
          </h1>
          <h2 style={{ color: '#4b5563', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '30px' }}>
            Prof. Abakar Malloum
          </h2>
          <div style={{ height: '4px', width: '60px', backgroundColor: '#3b82f6', margin: '0 auto 30px auto', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '0' }}>
            Un carrefour entre technologie et sciences humaines dédié à l'enseignement et à la recherche. J'y analyse l'impact de l'intelligence artificielle, des données et de la mondialisation technologique sous l'angle de la philosophie politique, de l'éthique appliquée et des nouveaux enjeux de la citoyenneté numérique.
          </p>
        </div>
      </div>

      {/* 2. NOUVEAU BLOC : PORTFOLIOS DE COURS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '2.2rem', marginBottom: '15px' }}>
              Portfolios de Cours & Transparence Pédagogique
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Une gouvernance de cours claire et accessible est le fondement d'un apprentissage réussi. 
              Ces portfolios présentent l'architecture de mes enseignements, les objectifs rigoureux de la pensée politique 
              et la structure d'évaluation multipartite qui garantit l'équité académique.
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
                Ce cours explore les fondements conceptuels de la modernité politique à travers l'analyse critique des textes majeurs. L'accent est mis sur l'émergence de l'État, les théories du contrat social, de la souveraineté et des droits individuels, permettant de contextualiser les débats contemporains sur la citoyenneté.
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
                Conducted in English, this course examines the canonical texts that shaped the modern political landscape. Students engage with complex theoretical frameworks to develop critical analytical skills, mapping the evolution of power, liberty, and institutional legitimacy from the Renaissance to the Enlightenment.
              </p>
            </div>

          </div>

          <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '40px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ color: '#1e3a8a', fontSize: '1.6rem', marginBottom: '20px' }}>
              Architecture Évaluative et Équité
            </h3>
            <p style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Pour garantir une évaluation juste et stimulante de la pensée critique, les cours POL 2108 et POL 2508 reposent sur une approche d'évaluation continue, structurée autour de jalons clairs et transparents :
            </p>
            <ul style={{ paddingLeft: '20px', color: '#374151', lineHeight: '1.8', fontSize: '1rem', marginBottom: '30px' }}>
              <li><strong>Évaluations Formatives et Sommatives :</strong> L'articulation entre les présentations orales, les quiz de lecture réguliers et les examens de synthèse est pensée pour valider progressivement l'assimilation des concepts philosophiques complexes.</li>
              <li><strong>Critères de Correction Explicites :</strong> Chaque travail fait l'objet d'une grille d'évaluation (rubric) détaillée, distribuée en amont, spécifiant les attentes en matière d'analyse textuelle et de rigueur argumentative.</li>
            </ul>
            <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '20px', marginTop: '20px' }}>
              <h4 style={{ color: '#111827', fontSize: '1.15rem', marginBottom: '10px', fontWeight: 'bold' }}>
                Gouvernance Collégiale du Cours
              </h4>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Le processus de notation est une démarche rigoureuse et collégiale. Toutes les évaluations, examens et travaux écrits sont gérés et révisés en coordination directe avec une équipe d'assistants d'enseignement (TAs) et de correcteurs universitaires qualifiés. Cette structure multipartite assure une objectivité absolue, une standardisation stricte des notes et une double vérification systématique.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
