const translations = {
  fr: {
    skip: 'Aller au contenu', navVision: 'Le concept', navFeatures: 'Fonctionnalités', navAbout: 'À propos', navContact: 'Nous contacter ↗',
    heroLabel: 'LE FOOT LOCAL. DE VRAIES RENCONTRES.', heroLine1: 'Trouve ton match.', heroLine2: 'Jouez ensemble.', heroDesc: 'Découvre les terrains près de toi, organise des matchs et rencontre des joueurs de ton quartier.', heroCta: 'Parlons football', explore: 'Découvrir le projet', development: 'Application en développement · Lancement public prévu',
    artLocal: 'LE MATCH COMMENCE PRÈS DE TOI', artCard: 'Ton prochain match est tout près.', artCardSub: 'Moins d’organisation. Plus de jeu.', artCaption: 'ILLUSTRATION DU CONCEPT · LE FOOTBALL LOCAL AU CŒUR DU PROJET',
    ribbon1: 'Trouver un terrain', ribbon2: 'Rassembler les joueurs', ribbon3: 'Prendre le temps de jouer',
    problemLabel: '01 / LE PROBLÈME', problemTitle: 'Le plus difficile ne devrait pas être de réunir les joueurs.', problemDesc: 'Tu veux jouer. Mais trouver un terrain, un match et assez de participants peut se transformer en messages sans fin et en projets qui n’aboutissent pas.', solutionLabel: 'NOTRE SOLUTION', solutionTitle: 'Un seul endroit pour transformer « qui joue ? » en rendez-vous.', solutionDesc: 'StreetNow rassemble le football local dans une application mobile : découvre où jouer, organise un match et rencontre des personnes qui partagent ton envie de football.',
    featuresLabel: '02 / L’EXPÉRIENCE', featuresTitle: 'De ton quartier\nà ton prochain match.', featuresIntro: 'Les fonctions principales sont développées dans la version actuelle. L’accès public suivra le lancement ; les ajouts prévus sont indiqués ci-dessous.', currentBuild: 'VERSION ACTUELLE', evolving: 'VERSION + À VENIR',
    f1Title: 'Découvre les terrains proches.', f1Desc: 'Explore les terrains de football sur une carte et retrouve facilement tes lieux de jeu favoris.',
    f2Title: 'Trouve et organise des matchs.', f2Desc: 'Recherche une partie, crée un match et rejoins une place disponible. Donne un point de départ concret à ta prochaine rencontre.',
    f3Title: 'Rencontre des joueurs locaux.', f3Desc: 'Recherche des joueurs par leur pseudo public, ajoute des amis et échange avec tes amis acceptés pour continuer à jouer ensemble.',
    f4Title: 'Crée ton profil de joueur.', f4Desc: 'Construis ton identité football avec un profil de joueur, un avatar et tes terrains favoris.',
    f5Title: 'Suis ta participation et ta progression.', f5Desc: 'Consulte tes participations enregistrées dans ton profil. D’autres fonctions de progression sont prévues au fil du développement.',
    availability: 'StreetNow est en cours de développement. Ce site présente le projet ; il ne propose pas encore de téléchargement public de l’application.',
    madeIn: 'DÉVELOPPÉ EN FRANCE', aboutLabel: '03 / À PROPOS DE STREETNOW', aboutTitle: 'Développé à Bordeaux.\nPensé pour le foot local.', aboutDesc: 'StreetNow, anciennement LetsFoot, est un projet mobile indépendant développé en France. L’ambition est simple : aider les gens à jouer au football ensemble, en commençant localement puis en se développant dans les grandes villes françaises.', aboutNote: 'Un projet inspiré du football quotidien : le terrain au coin de la rue, une soirée libre et des gens prêts à jouer.',
    contactLabel: 'PARLONS DU PROJET', contactTitle: 'La prochaine étape ?\nPrenons contact.', contactDesc: 'Une question sur StreetNow, le projet ou son avenir ? Écrivez-nous.', footerLine: 'Un projet de football indépendant · Bordeaux, France', support: 'Assistance', privacy: 'Confidentialité de l’app', legal: 'Informations légales'
  }
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(nodes.map(node => [node.dataset.i18n, node.innerHTML]));
function setLanguage(lang) {
  document.documentElement.lang = lang;
  for (const node of nodes) {
    if (lang === 'en') node.innerHTML = english[node.dataset.i18n];
    else {
      const value = translations.fr[node.dataset.i18n];
      if (value) { node.textContent = value; node.style.whiteSpace = value.includes('\n') ? 'pre-line' : ''; }
    }
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.title = lang === 'fr' ? 'StreetNow — Trouve ton match. Jouez ensemble.' : 'StreetNow — Find your game. Play together.';
  document.querySelector('nav[aria-label]').setAttribute('aria-label', lang === 'fr' ? 'Navigation principale' : 'Main navigation');
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
