export type Product = {
  id: number
  name: string
  category: string
  price: number
  emoji: string
  badge?: "Promo" | "Nouveau"
  description: string
}

export const traderProducts: Product[] = [
  {
    id: 3,
    name: "Baguette tradition",
    category: "Boulangerie",
    price: 1.1,
    emoji: "🥖",
    description:
      "Farine de blé Label Rouge, sans additif. La vraie baguette comme chez le boulanger.",
  },
  {
    id: 19,
    name: "Thé vert Sencha bio",
    category: "Boissons",
    price: 9.5,
    emoji: "🍵",
    badge: "Nouveau",
    description:
      "Feuilles entières certifiées bio, origine Japon. Végétal et frais, infusion 70°C 2 min.",
  },
  {
    id: 28,
    name: "Batterie externe 20000mAh",
    category: "Électronique",
    price: 39.99,
    emoji: "🔋",
    description:
      "Recharge 3 appareils simultanément. Compatible charge rapide 18W, indicateur LED précis.",
  },
  {
    id: 51,
    name: "Atomic Habits – J. Clear",
    category: "Librairie",
    price: 18.9,
    emoji: "📗",
    badge: "Promo",
    description:
      "Le guide de référence sur les petites habitudes à fort impact. Plus d'1M d'exemplaires vendus.",
  },
]

export const products: Product[] = [
  // --- Boulangerie ---
  {
    id: 1,
    name: "Croissant beurre artisanal",
    category: "Boulangerie",
    price: 1.2,
    emoji: "🥐",
    badge: "Promo",
    description:
      "Feuilletage pur beurre, cuit chaque matin. Croustillant dehors, fondant dedans.",
  },
  {
    id: 2,
    name: "Pain de campagne au levain",
    category: "Boulangerie",
    price: 4.5,
    emoji: "🍞",
    description:
      "Fermentation lente 24h au levain naturel. Mie alvéolée, croûte épaisse et dorée.",
  },
  {
    id: 3,
    name: "Baguette tradition",
    category: "Boulangerie",
    price: 1.1,
    emoji: "🥖",
    description:
      "Farine de blé Label Rouge, sans additif. La vraie baguette comme chez le boulanger.",
  },
  {
    id: 4,
    name: "Pain aux céréales bio",
    category: "Boulangerie",
    price: 3.8,
    emoji: "🍞",
    badge: "Nouveau",
    description:
      "Mélange de 6 céréales certifiées bio. Riche en fibres, idéal au petit-déjeuner.",
  },
  {
    id: 5,
    name: "Brioche maison",
    category: "Boulangerie",
    price: 5.5,
    emoji: "🧁",
    description:
      "Recette traditionnelle au beurre et aux œufs frais. Moelleuse et légèrement sucrée.",
  },

  // --- Épicerie ---
  {
    id: 6,
    name: "Confiture maison framboise",
    category: "Épicerie",
    price: 5.9,
    emoji: "🫙",
    description:
      "Framboises ramassées localement, cuisson courte pour garder tout le fruité.",
  },
  {
    id: 7,
    name: "Miel de lavande artisanal",
    category: "Épicerie",
    price: 8.5,
    emoji: "🍯",
    description:
      "Récolté en Provence par un apiculteur indépendant. Doux, floral et non filtré.",
  },
  {
    id: 8,
    name: "Huile d'olive extra vierge",
    category: "Épicerie",
    price: 12.0,
    emoji: "🫒",
    badge: "Promo",
    description:
      "Première pression à froid, olives récoltées à la main. Fruité vert, légèrement poivré.",
  },
  {
    id: 9,
    name: "Pâtes fraîches aux œufs",
    category: "Épicerie",
    price: 4.2,
    emoji: "🍝",
    description:
      "Fabriquées le jour même avec des œufs de poules élevées en plein air. Cuisson 3 min.",
  },
  {
    id: 10,
    name: "Riz basmati 1kg",
    category: "Épicerie",
    price: 3.6,
    emoji: "🍚",
    description:
      "Origine Himalaya, grains longs et parfumés. Idéal pour les plats mijotés et les currys.",
  },

  // --- Fromagerie ---
  {
    id: 11,
    name: "Comté 18 mois AOP",
    category: "Fromagerie",
    price: 3.8,
    emoji: "🧀",
    badge: "Promo",
    description:
      "Affiné 18 mois en cave. Notes de noisette et de beurre, texture légèrement cristallisée.",
  },
  {
    id: 12,
    name: "Brie de Meaux AOP",
    category: "Fromagerie",
    price: 4.5,
    emoji: "🧀",
    description:
      "Pâte molle à croûte fleurie, cœur coulant à maturité. Le roi des fromages français.",
  },
  {
    id: 13,
    name: "Roquefort AOP",
    category: "Fromagerie",
    price: 5.2,
    emoji: "🧀",
    badge: "Nouveau",
    description:
      "Affiné dans les caves de Combalou. Persillé puissant, crémeux et légèrement salé.",
  },
  {
    id: 14,
    name: "Camembert de Normandie",
    category: "Fromagerie",
    price: 3.9,
    emoji: "🧀",
    description:
      "Lait cru moulé à la louche, croûte duvetée. Caractère affirmé, cœur onctueux.",
  },
  {
    id: 15,
    name: "Chèvre frais aux herbes",
    category: "Fromagerie",
    price: 2.8,
    emoji: "🧀",
    description:
      "Faisselle de chèvre locale agrémentée de ciboulette et persil frais. Doux et printanier.",
  },

  // --- Boissons ---
  {
    id: 16,
    name: "Café single origin Éthiopie",
    category: "Boissons",
    price: 14.5,
    emoji: "☕",
    badge: "Nouveau",
    description:
      "Torréfaction légère, notes de bergamote et fruits rouges. Cultivé en altitude, récolté à la main.",
  },
  {
    id: 17,
    name: "Bordeaux rouge Château Blanc",
    category: "Boissons",
    price: 12.0,
    emoji: "🍷",
    description:
      "Assemblage Merlot-Cabernet, millésime 2021. Tanins soyeux, arômes de cassis et de cèdre.",
  },
  {
    id: 18,
    name: "Jus de pomme pressé maison",
    category: "Boissons",
    price: 4.8,
    emoji: "🍎",
    description:
      "Pressé à froid le matin même, sans sucre ajouté. Pommes issues de vergers locaux.",
  },
  {
    id: 19,
    name: "Thé vert Sencha bio",
    category: "Boissons",
    price: 9.5,
    emoji: "🍵",
    badge: "Nouveau",
    description:
      "Feuilles entières certifiées bio, origine Japon. Végétal et frais, infusion 70°C 2 min.",
  },
  {
    id: 20,
    name: "Bière artisanale IPA locale",
    category: "Boissons",
    price: 3.5,
    emoji: "🍺",
    badge: "Promo",
    description:
      "Brassée à 10km d'ici avec du houblon français. Amère et fruitée, 6,5° alc.",
  },

  // --- Électronique ---
  {
    id: 21,
    name: "Casque audio sans fil",
    category: "Électronique",
    price: 79.99,
    emoji: "🎧",
    badge: "Promo",
    description:
      "Réduction de bruit active, 30h d'autonomie. Son large et détaillé, confort toute la journée.",
  },
  {
    id: 22,
    name: "Chargeur USB-C 65W",
    category: "Électronique",
    price: 29.99,
    emoji: "🔌",
    description:
      "Compatible laptop, tablette et smartphone. Charge rapide GaN, format compact pour le voyage.",
  },
  {
    id: 23,
    name: "Enceinte Bluetooth portable",
    category: "Électronique",
    price: 49.99,
    emoji: "🔊",
    badge: "Nouveau",
    description:
      "Étanche IPX6, 12h d'autonomie. Son 360° puissant et équilibré, même en extérieur.",
  },
  {
    id: 24,
    name: "Clé USB 64Go USB 3.0",
    category: "Électronique",
    price: 12.99,
    emoji: "💾",
    description:
      "Lecture 120 Mo/s, format ultra-compact. Idéale pour transférer fichiers lourds rapidement.",
  },
  {
    id: 25,
    name: "Câble HDMI 2m 4K",
    category: "Électronique",
    price: 9.99,
    emoji: "📺",
    description:
      "Compatible 4K 60Hz et HDR. Gaine tressée renforcée, connecteurs plaqués or.",
  },
  {
    id: 26,
    name: "Souris sans fil ergonomique",
    category: "Électronique",
    price: 34.99,
    emoji: "🖱️",
    badge: "Promo",
    description:
      "Forme sculptée pour la main droite, 18 mois de pile. Précision 1600 DPI, silencieuse.",
  },
  {
    id: 27,
    name: "Lampe de bureau LED",
    category: "Électronique",
    price: 24.99,
    emoji: "💡",
    badge: "Nouveau",
    description:
      "5 niveaux de luminosité, port USB intégré. Lumière froide à chaude sans scintillement.",
  },
  {
    id: 28,
    name: "Batterie externe 20000mAh",
    category: "Électronique",
    price: 39.99,
    emoji: "🔋",
    description:
      "Recharge 3 appareils simultanément. Compatible charge rapide 18W, indicateur LED précis.",
  },
  {
    id: 29,
    name: "Webcam Full HD 1080p",
    category: "Électronique",
    price: 59.99,
    emoji: "📷",
    description:
      "Autofocus rapide, micro stéréo intégré. Plug & play, compatible toutes plateformes visio.",
  },
  {
    id: 30,
    name: "Hub USB 7 ports",
    category: "Électronique",
    price: 19.99,
    emoji: "🔌",
    badge: "Nouveau",
    description:
      "4x USB-A + 2x USB-C + 1x SD. Alim. externe incluse pour ports haute puissance.",
  },

  // --- Musique ---
  {
    id: 31,
    name: "Médiators guitare (pack 12)",
    category: "Musique",
    price: 4.99,
    emoji: "🎸",
    description:
      "3 épaisseurs incluses : thin, medium, heavy. Grip antidérapant, bords biseautés.",
  },
  {
    id: 32,
    name: "Cordes guitare acoustique",
    category: "Musique",
    price: 8.5,
    emoji: "🎸",
    badge: "Promo",
    description:
      "Phosphore bronze 12-53, son brillant et chaleureux. Traitement anti-oxydation longue durée.",
  },
  {
    id: 33,
    name: "Métronome numérique",
    category: "Musique",
    price: 14.99,
    emoji: "🎵",
    description:
      "40 à 208 BPM, 9 patterns rythmiques. Écran LCD, batterie ou pile, clip ceinture inclus.",
  },
  {
    id: 34,
    name: "Pupitre de partition pliable",
    category: "Musique",
    price: 19.99,
    emoji: "🎼",
    description:
      "Hauteur réglable de 75 à 130cm. Structure acier légère, livré avec sac de transport.",
  },
  {
    id: 35,
    name: "Câble Jack 6.35mm 3m",
    category: "Musique",
    price: 7.99,
    emoji: "🎚️",
    description:
      "Mono asymétrique, blindage tressé anti-bruit. Connecteurs métal, prise droite/coudée.",
  },
  {
    id: 36,
    name: "Housse piano clavier 61 touches",
    category: "Musique",
    price: 22.0,
    emoji: "🎹",
    badge: "Nouveau",
    description:
      "Tissu Oxford imperméable, mousse intérieure 5mm. Fermeture éclair, bandoulière incluse.",
  },
  {
    id: 37,
    name: "Capo guitare aluminium",
    category: "Musique",
    price: 9.99,
    emoji: "🎸",
    description:
      "Tension réglable, pose en une main. Compatible guitare folk, classique et électrique.",
  },
  {
    id: 38,
    name: "Sangle guitare réglable",
    category: "Musique",
    price: 11.5,
    emoji: "🎸",
    badge: "Promo",
    description:
      "Cuir végétalien, largeur 6cm pour répartir le poids. Longueur 90 à 165cm.",
  },
  {
    id: 39,
    name: "Accordeur chromatique clip",
    category: "Musique",
    price: 6.99,
    emoji: "🎵",
    description:
      "Détection par vibration, affichage 360°. Précision ±1 cent, tous instruments.",
  },
  {
    id: 40,
    name: "Cahier de partitions vierge",
    category: "Musique",
    price: 3.5,
    emoji: "🎼",
    description:
      "12 portées par page, papier 90g/m². Format A4, 48 pages, couverture rigide.",
  },

  // --- Mobilier ---
  {
    id: 41,
    name: "Chaise de bureau ergonomique",
    category: "Mobilier",
    price: 189.0,
    emoji: "🪑",
    badge: "Promo",
    description:
      "Dossier lombaire réglable, accoudoirs 4D. Assise maillée respirante, jusqu'à 120kg.",
  },
  {
    id: 42,
    name: "Étagère murale en bois 80cm",
    category: "Mobilier",
    price: 45.0,
    emoji: "🪵",
    badge: "Nouveau",
    description:
      "Pin massif huilé, fixation invisible. Charge max 15kg, disponible en 3 teintes.",
  },
  {
    id: 43,
    name: "Lampadaire scandinave",
    category: "Mobilier",
    price: 69.0,
    emoji: "💡",
    description:
      "Pied chêne massif, abat-jour lin naturel. Hauteur 155cm, ampoule E27 compatible.",
  },
  {
    id: 44,
    name: "Bureau en L 120x80cm",
    category: "Mobilier",
    price: 249.0,
    emoji: "🪑",
    badge: "Promo",
    description:
      "Plateau MDF 25mm, pieds acier noir mat. Gestion câbles intégrée, montage en 20 min.",
  },
  {
    id: 45,
    name: "Miroir rond 60cm",
    category: "Mobilier",
    price: 39.0,
    emoji: "🪞",
    description:
      "Cadre bambou naturel, verre sans tain. Fixation murale ou pose sur meuble.",
  },
  {
    id: 46,
    name: "Table basse bois et métal",
    category: "Mobilier",
    price: 129.0,
    emoji: "🪵",
    badge: "Nouveau",
    description:
      "Plateau chêne massif, pieds épingle acier noir. Style industriel, 90x50cm.",
  },
  {
    id: 47,
    name: "Tabouret bar industriel",
    category: "Mobilier",
    price: 55.0,
    emoji: "🪑",
    description:
      "Assise bois massif, pied central acier réglable 60-80cm. Robuste et minimaliste.",
  },
  {
    id: 48,
    name: "Cintre mural 5 crochets",
    category: "Mobilier",
    price: 18.0,
    emoji: "🪝",
    description:
      "Planche pin + crochets laiton brossé. Longueur 60cm, installation chevilles fournies.",
  },
  {
    id: 49,
    name: "Pouf rond velours gris",
    category: "Mobilier",
    price: 49.0,
    emoji: "🛋️",
    badge: "Promo",
    description:
      "Velours côtelé doux, garnissage billes EPS. Diamètre 50cm, lavable en machine.",
  },
  {
    id: 50,
    name: "Cadre photo galerie 30x40",
    category: "Mobilier",
    price: 14.0,
    emoji: "🖼️",
    description:
      "Bois laqué blanc ou noir, verre anti-reflet. Pose portrait ou paysage, crochet inclus.",
  },

  // --- Librairie ---
  {
    id: 51,
    name: "Atomic Habits – J. Clear",
    category: "Librairie",
    price: 18.9,
    emoji: "📗",
    badge: "Promo",
    description:
      "Le guide de référence sur les petites habitudes à fort impact. Plus d'1M d'exemplaires vendus.",
  },
  {
    id: 52,
    name: "Le Monde selon Garp",
    category: "Librairie",
    price: 9.5,
    emoji: "📘",
    description:
      "Le roman culte de John Irving. Drôle, tragique et humain, une fresque familiale inoubliable.",
  },
  {
    id: 53,
    name: "Clean Code – R. Martin",
    category: "Librairie",
    price: 35.0,
    emoji: "📙",
    badge: "Nouveau",
    description:
      "La bible du développeur : écrire du code lisible, maintenable et élégant. Incontournable.",
  },
  {
    id: 54,
    name: "Petit Prince – illustré",
    category: "Librairie",
    price: 7.9,
    emoji: "📕",
    description:
      "Édition illustrée des aquarelles originales de Saint-Exupéry. Pour petits et grands.",
  },
  {
    id: 55,
    name: "Carnet de notes A5 toilé",
    category: "Librairie",
    price: 11.0,
    emoji: "📓",
    description:
      "Couverture toilée rigide, papier ivoire 100g. 192 pages lignées, marque-page intégré.",
  },
  {
    id: 56,
    name: "Stylos gel noir (lot 5)",
    category: "Librairie",
    price: 6.5,
    emoji: "✒️",
    badge: "Promo",
    description:
      "Pointe 0,5mm, encre gel ultra-fluide. Séchage rapide, écriture précise et agréable.",
  },
  {
    id: 57,
    name: "Agenda 2026 semainier",
    category: "Librairie",
    price: 14.0,
    emoji: "📅",
    badge: "Nouveau",
    description:
      "Vue semaine sur double page, onglets mensuels. Format A5, couverture souple, élastique.",
  },
  {
    id: 58,
    name: "Post-it multicolores (pack)",
    category: "Librairie",
    price: 5.2,
    emoji: "🗒️",
    description:
      "200 feuilles en 4 coloris, format 76x76mm. Adhésif repositionnable, sans laisser de trace.",
  },
  {
    id: 59,
    name: "Dictionnaire Larousse 2025",
    category: "Librairie",
    price: 28.0,
    emoji: "📚",
    description:
      "65 000 mots, 5 000 noms propres. Mise à jour 2025 avec les nouveaux mots de la langue.",
  },
  {
    id: 60,
    name: "Marqueurs fluo (lot 6)",
    category: "Librairie",
    price: 4.8,
    emoji: "✏️",
    description:
      "6 coloris pastel, pointe biseautée double usage. Encre à base d'eau, compatible imprimé.",
  },

  // --- Sport ---
  {
    id: 61,
    name: "Gourde inox 750ml",
    category: "Sport",
    price: 19.99,
    emoji: "🫗",
    badge: "Promo",
    description:
      "Double paroi isotherme, garde froid 24h / chaud 12h. Sans BPA, bouchon anti-fuite.",
  },
  {
    id: 62,
    name: "Tapis de yoga antidérapant",
    category: "Sport",
    price: 29.99,
    emoji: "🧘",
    badge: "Nouveau",
    description:
      "TPE écologique 6mm d'épaisseur, surface grip intense. Livré avec sangle de transport.",
  },
  {
    id: 63,
    name: "Corde à sauter pro",
    category: "Sport",
    price: 12.0,
    emoji: "🪢",
    description:
      "Câble acier gainé PVC, poignées ergonomiques roulements à billes. Longueur réglable.",
  },
  {
    id: 64,
    name: "Bandes de résistance (lot 3)",
    category: "Sport",
    price: 16.5,
    emoji: "💪",
    description:
      "3 niveaux de résistance : léger, moyen, fort. Latex naturel, largeur 7cm.",
  },
  {
    id: 65,
    name: "Chaussettes running anti-ampoules",
    category: "Sport",
    price: 9.9,
    emoji: "🧦",
    badge: "Promo",
    description:
      "Rembourrage ciblé plante/talon, fibre Coolmax evacuant l'humidité. Coutures plates.",
  },
  {
    id: 66,
    name: "Roller massage foam",
    category: "Sport",
    price: 22.0,
    emoji: "🔵",
    description:
      "Mousse haute densité 33cm, surface striée. Idéal récupération musculaire et fasciathérapie.",
  },
  {
    id: 67,
    name: "Bidon vélo 500ml",
    category: "Sport",
    price: 7.5,
    emoji: "🚴",
    description:
      "Compatible cages standard, bec verseur auto-scellant. Sans BPA, lavage machine.",
  },
  {
    id: 68,
    name: "Poignées de traction",
    category: "Sport",
    price: 18.0,
    emoji: "💪",
    badge: "Nouveau",
    description:
      "Rotatif 360°, charge max 100kg. Réduit la pression sur les poignets, antidérapant.",
  },
  {
    id: 69,
    name: "Protège-poignets skate",
    category: "Sport",
    price: 14.0,
    emoji: "🛹",
    description:
      "Coque plastique rigide + doublure mousse. Sangle réglable, taille S/M/L, certifié CE.",
  },
  {
    id: 70,
    name: "Sac à dos sport 20L",
    category: "Sport",
    price: 34.99,
    emoji: "🎒",
    badge: "Promo",
    description:
      "Polyester ripstop imperméable, dos aéré maillé. Poche chaussures séparée, bretelles rembourrées.",
  },

  // --- Cuisine ---
  {
    id: 71,
    name: "Planche à découper bambou",
    category: "Cuisine",
    price: 19.9,
    emoji: "🍽️",
    description:
      "Bambou certifié FSC, naturellement antibactérien. 38x28cm, rainure jus de viande.",
  },
  {
    id: 72,
    name: "Couteau chef 20cm japonais",
    category: "Cuisine",
    price: 44.0,
    emoji: "🔪",
    badge: "Nouveau",
    description:
      "Acier inox 440C 58 HRC, lame damas 67 couches. Manche pakkawood, équilibre parfait.",
  },
  {
    id: 73,
    name: "Cafetière à piston 1L",
    category: "Cuisine",
    price: 24.99,
    emoji: "☕",
    badge: "Promo",
    description:
      "Double paroi isotherme inox, piston en acier inoxydable. Garde le café chaud 1h.",
  },
  {
    id: 74,
    name: "Bol en céramique artisanal",
    category: "Cuisine",
    price: 12.5,
    emoji: "🥣",
    description:
      "Tourné à la main, glaçure unique sur chaque pièce. Micro-ondes et lave-vaisselle OK.",
  },
  {
    id: 75,
    name: "Épices du monde (coffret 6)",
    category: "Cuisine",
    price: 22.0,
    emoji: "🌶️",
    badge: "Nouveau",
    description:
      "Cumin, paprika fumé, ras el-hanout, curcuma, zaatar, sumac. Conditionnées sous vide.",
  },

  // --- Maison ---
  {
    id: 76,
    name: "Bougie parfumée soja vanille",
    category: "Maison",
    price: 14.0,
    emoji: "🕯️",
    description:
      "Cire de soja naturelle, mèche en coton. 45h de combustion, sans paraffine ni phtalates.",
  },
  {
    id: 77,
    name: "Savon artisanal lavande 100g",
    category: "Maison",
    price: 6.5,
    emoji: "🧼",
    badge: "Promo",
    description:
      "Saponification à froid, huile d'olive et lavande AOP. Surgras 7%, peaux sensibles.",
  },
  {
    id: 78,
    name: "Plante grasse en pot céramique",
    category: "Maison",
    price: 9.9,
    emoji: "🌵",
    badge: "Nouveau",
    description:
      "Cactus ou succulente selon arrivage, pot céramique 9cm. Un arrosage par semaine suffit.",
  },
  {
    id: 79,
    name: "Diffuseur huiles essentielles",
    category: "Maison",
    price: 34.0,
    emoji: "🌿",
    description:
      "Diffusion par ultrasons, réservoir 300ml. 8h continu, lumière d'ambiance intégrée.",
  },
  {
    id: 80,
    name: "Panier tressé rangement",
    category: "Maison",
    price: 21.0,
    emoji: "🧺",
    badge: "Promo",
    description:
      "Jonc de mer naturel, poignées cuir véritable. Dimensions 35x25x20cm, très résistant.",
  },

  // --- Jeux ---
  {
    id: 81,
    name: "Jeu de cartes Blink",
    category: "Jeux",
    price: 8.9,
    emoji: "🃏",
    badge: "Promo",
    description:
      "Le jeu de cartes le plus rapide du monde. 2 joueurs, 2 min par partie, réflexes garantis.",
  },
  {
    id: 82,
    name: "Rubik's Cube 3x3",
    category: "Jeux",
    price: 11.0,
    emoji: "🧊",
    description:
      "Mécanisme fluide et silencieux, autocollants résistants. Le classique indétrônable.",
  },
  {
    id: 83,
    name: "Jeu d'échecs bois",
    category: "Jeux",
    price: 29.0,
    emoji: "♟️",
    badge: "Nouveau",
    description:
      "Plateau bois de hêtre 40x40cm, pièces lestées feutrage. Coffret rangement intégré.",
  },
  {
    id: 84,
    name: "Puzzle 1000 pièces paysage",
    category: "Jeux",
    price: 17.5,
    emoji: "🧩",
    description:
      "Pièces découpées précision, papier mat anti-reflet. Dimensions finales 68x48cm.",
  },
  {
    id: 85,
    name: "Dés de jeu (lot 10)",
    category: "Jeux",
    price: 4.5,
    emoji: "🎲",
    badge: "Promo",
    description:
      "Acrylique translucide, coins chanfreinés pour un lancer équilibré. 5 couleurs assorties.",
  },
  {
    id: 86,
    name: "Jeu de société Dobble",
    category: "Jeux",
    price: 13.0,
    emoji: "🎯",
    description:
      "55 cartes, 5 mini-jeux différents. Observation et rapidité, dès 6 ans, 2 à 8 joueurs.",
  },
  {
    id: 87,
    name: "Figurine collector manga",
    category: "Jeux",
    price: 24.0,
    emoji: "🗿",
    badge: "Nouveau",
    description:
      "Résine peinte à la main, détails haute fidélité. Édition limitée, socle inclus, 15cm.",
  },
  {
    id: 88,
    name: "Cartes Pokémon booster",
    category: "Jeux",
    price: 5.0,
    emoji: "🃏",
    badge: "Promo",
    description:
      "10 cartes par booster, série récente. Inclut potentiellement holographique ou rare EX.",
  },
  {
    id: 89,
    name: "Jeu de dominos classique",
    category: "Jeux",
    price: 12.0,
    emoji: "🀄",
    description:
      "28 pièces en bakélite lestées, points incrustés. Boîte bois coulissante, dès 6 ans.",
  },
  {
    id: 90,
    name: "Toupie métal anti-stress",
    category: "Jeux",
    price: 7.9,
    emoji: "🌀",
    description:
      "Acier inox usiné CNC, équilibre parfait. Tourne plus de 4 minutes, finition miroir.",
  },

  // --- Mode ---
  {
    id: 91,
    name: "Bonnet laine mérinos",
    category: "Mode",
    price: 22.0,
    emoji: "🧢",
    badge: "Nouveau",
    description:
      "Laine mérinos 100% naturelle, doux contre la peau. Coupe unisexe, 6 coloris disponibles.",
  },
  {
    id: 92,
    name: "Tote bag coton bio",
    category: "Mode",
    price: 9.9,
    emoji: "👜",
    badge: "Promo",
    description:
      "Coton bio certifié GOTS, sérigraphie à l'encre végétale. Charge max 10kg, anses longues.",
  },
  {
    id: 93,
    name: "Ceinture cuir véritable",
    category: "Mode",
    price: 35.0,
    emoji: "👔",
    description:
      "Cuir pleine fleur tanné végétal, boucle laiton brossé. Largeur 3cm, tailles 80 à 110.",
  },
  {
    id: 94,
    name: "Chaussettes fantaisie (lot 3)",
    category: "Mode",
    price: 12.0,
    emoji: "🧦",
    badge: "Nouveau",
    description:
      "Coton peigné doux, motifs originaux exclusifs. Taille unique 36-42, lavage 40°.",
  },
  {
    id: 95,
    name: "Lunettes de soleil UV400",
    category: "Mode",
    price: 19.0,
    emoji: "😎",
    badge: "Promo",
    description:
      "Monture acétate légère, verres polarisés catégorie 3. Protection UV400 certifiée CE.",
  },
  {
    id: 96,
    name: "Écharpe laine douce",
    category: "Mode",
    price: 28.0,
    emoji: "🧣",
    description:
      "Laine lambswool mélangée, tissage souple et chaud. 180x30cm, effilochée aux extrémités.",
  },
  {
    id: 97,
    name: "Porte-monnaie cuir zippé",
    category: "Mode",
    price: 18.0,
    emoji: "👛",
    badge: "Nouveau",
    description:
      "Cuir grainé souple, 6 porte-cartes + compartiment billets. Fermeture YKK dorée.",
  },
  {
    id: 98,
    name: "Montre analogique minimaliste",
    category: "Mode",
    price: 59.0,
    emoji: "⌚",
    badge: "Promo",
    description:
      "Boîtier acier 38mm, bracelet cuir interchangeable. Mouvement quartz japonais Miyota.",
  },
  {
    id: 99,
    name: "Broche émaillée fleur",
    category: "Mode",
    price: 8.5,
    emoji: "💐",
    description:
      "Émail froid sur métal doré, motif floral artisanal. Fermeture sécurisée, diamètre 4cm.",
  },
  {
    id: 100,
    name: "Bracelet perles naturelles",
    category: "Mode",
    price: 14.0,
    emoji: "📿",
    badge: "Nouveau",
    description:
      "Perles de pierre naturelle (agate, quartz ou lapis selon stock). Élastique résistant, ajustable.",
  },
]
