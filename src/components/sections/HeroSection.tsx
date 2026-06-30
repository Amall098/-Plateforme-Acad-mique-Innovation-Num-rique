import React from 'react';

const VideoHeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* Remplacez ce lien par le chemin de votre vidéo (ex: /videos/background.mp4) */}
        <source src="/chemin-vers-votre-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      {/* Voile sombre pour faire ressortir le texte */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Contenu textuel centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Prof. Abakar Malloum
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
          Théorie politique, Éthique numérique & Intelligence Artificielle.
        </p>
        
        {/* Boutons d'action (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#recherches"
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
          >
            Mes recherches
          </a>
          <a
            href="https://medium.com/@votre-profil" // Lien vers votre future publication Medium
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/20 transition duration-300"
          >
            Lire mes articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoHeroSection;
