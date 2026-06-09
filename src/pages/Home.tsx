export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '60px 20px', fontFamily: 'system-ui, sans-serif', color: '#333' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        
        <h1 style={{ color: '#2563eb', fontSize: '2.5rem', marginBottom: '10px' }}>
          Plateforme Académique d'Innovation Numérique
        </h1>
        
        <h2 style={{ color: '#4b5563', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '30px' }}>
          Prof. Abakar Malloum
        </h2>
        
        <div style={{ height: '4px', width: '60px', backgroundColor: '#3b82f6', margin: '0 auto 30px auto', borderRadius: '2px' }}></div>
        
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '20px' }}>
          L'infrastructure technique est désormais <strong>100 % opérationnelle</strong> ! Le moteur React, le système de routage et l'hébergement Vercel communiquent à la perfection.
        </p>
        
        <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
          Vous pouvez maintenant intégrer le véritable design de votre interface ou demander à votre IA de générer les composants de cette page. La voie est totalement libre !
        </p>

      </div>
    </div>
  )
}
