# Feature Spec — F-003 : About / Manifeste
> **Genere par** : RAY
> **Statut** : `[ ] DRAFT  [x] VALIDEE TALENT  [ ] EN DEV  [ ] EN REVIEW  [ ] LIVREE`
> **Derniere mise a jour** : `2026-03-19`
> **Lien Roadmap** : `roadmap.md#F-003`

---

## Contexte & Probleme

### Probleme a resoudre
> Le hero capte l'attention et pose le positionnement en une phrase. Mais une tagline ne suffit pas a convaincre un recruteur senior ou un client prescripteur de passer a l'action. Il manque une section qui demontre la profondeur de reflexion — pas en listant des competences, mais en articulant un point de vue. Sans case studies en MVP, le manifeste est le seul espace ou le visiteur peut evaluer la qualite de pensee derriere le positionnement.

### JTBD cible

**JTBD Recruteur :**
*"Quand j'evalue un candidat senior, je veux comprendre sa valeur differenciante en moins d'une minute, pour decider si ca vaut un entretien — sans avoir a lire une bio de 3 paragraphes."*

**JTBD Designer / PM curieux :**
*"Quand je cherche a comprendre comment l'IA reshape le travail de design, je veux voir comment un praticien de haut niveau reflechit et structure sa pratique, pour benchmarker et m'inspirer."*

**JTBD Client prescripteur :**
*"Quand j'ai un projet complexe a l'intersection du design et de l'IA, je veux avoir la preuve que ce profil comprend mes enjeux specifiques, pour lui faire confiance avec mon brief."*

### Impact attendu
| KPI | Avant | Cible apres feature | Methode de mesure |
|---|---|---|---|
| Positionnement compris en < 10s | Hero seul | Hero + manifeste renforcent le signal | Plausible (scroll depth au-dela du hero) |
| Pages vues / session | Non mesure | > 2.5 pages | Plausible |
| Prises de contact qualifiees | 0 | > 2/mois | Comptage manuel |

---

## Scope

### In Scope
- Section `#about` avec titre "Manifeste" ou accroche editoriale
- 3-4 paragraphes en prose, voix premiere personne, ton direct
- Le contenu articule la conviction centrale : l'IA comme outil de pensee, pas comme outil de production
- Un CTA secondaire vers Obsolet en fin de section (pour ceux qui veulent aller plus loin)
- Responsive mobile/desktop
- Contenu centralise dans `lib/data.ts`

### Out of Scope
- Photo / avatar / illustration
- Liste de competences, outils, ou logos clients
- Timeline / parcours chronologique
- Animations
- Dark mode

### Dependances
| Feature | Relation | Statut |
|---|---|---|
| F-001 | Layout global (header/main/footer) | LIVREE |
| F-002 | Hero au-dessus de la section about | LIVREE |
| F-004 | Contact en-dessous — pas de dependance fonctionnelle | TODO |

---

## User Stories (Format Gherkin)

### Story 1 — Lecture du manifeste (desktop)
```gherkin
GIVEN un visiteur sur desktop qui a scrolle au-dela du hero
WHEN il atteint la section #about
THEN il voit un titre de section suivi de 3-4 paragraphes de prose
  AND le texte est lisible sans effort (max-w-3xl, leading-relaxed)
  AND le ton est direct, en premiere personne, sans jargon
```

### Story 2 — Lecture du manifeste (mobile)
```gherkin
GIVEN un visiteur sur mobile (viewport < 768px)
WHEN il scrolle jusqu'a la section #about
THEN le contenu reste lisible sans scroll horizontal
  AND la taille de texte est confortable (text-base minimum)
  AND le padding horizontal est coherent avec le reste du site (px-6)
```

### Story 3 — CTA vers Obsolet
```gherkin
GIVEN un visiteur qui a lu le manifeste
WHEN il atteint la fin de la section
THEN il voit un lien vers Obsolet avec un texte contextuel (ex: "J'ecris aussi une newsletter sur le sujet")
  AND le lien ouvre dans un nouvel onglet
  AND le lien porte un indicateur visuel de lien externe
```

### Story 4 — Edge Case : visiteur qui scanne sans lire
```gherkin
GIVEN un visiteur presse qui scrolle rapidement
WHEN il survole la section #about
THEN la structure visuelle (titre + blocs de texte aeres) lui donne assez de signal pour ralentir ou continuer
  AND le CTA Obsolet est visuellement distinct du corps de texte
```

---

## Criteres d'Acceptation Binaires

### Fonctionnels
- [ ] La section porte l'id `about` (ancre depuis le header)
- [ ] Le titre de section est visible et utilise l'echelle Heading 1 (`text-3xl font-bold tracking-tight`)
- [ ] Le contenu est compose de 3-4 paragraphes de prose en premiere personne
- [ ] Le contenu articule clairement : (1) le positionnement Design x IA, (2) la difference entre utiliser l'IA et penser avec, (3) ce que ca change pour les projets/clients
- [ ] Un CTA vers Obsolet est present en fin de section
- [ ] Le CTA Obsolet ouvre dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] Le CTA porte un indicateur visuel de lien externe (icone ExternalLink ou ↗)
- [ ] Le contenu textuel est centralise dans `lib/data.ts`, pas hardcode dans le composant

### Design System
- [ ] Le texte courant utilise `text-base leading-relaxed` sur `max-w-3xl`
- [ ] Le spacing de section respecte `py-16 md:py-24`
- [ ] Le CTA utilise `Button variant="link"` ou un `<a>` style avec `text-muted-foreground hover:text-foreground`
- [ ] Pas de `Button variant="default"` dans cette section (le primaire est reserve au hero)
- [ ] Le contraste WCAG AA est respecte sur tous les textes
- [ ] L'interface est navigable au clavier

### Performance
- [ ] La section est un Server Component pur (zero interactivite)
- [ ] Aucun layout shift au chargement

---

## Interface & Comportements

### Composants Shadcn/ui requis

```bash
# Aucune nouvelle installation necessaire
# Button deja installe (F-001)
```

### Wireframe — Desktop

```
├─────────────────────────────────────────────────────────────┤
│ [Hero F-002]                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  py-16 md:py-24                                             │
│                                                             │
│  Manifeste                                                  │
│  (text-3xl font-bold tracking-tight)                        │
│                                                             │
│  ┌─── max-w-3xl ──────────────────────────────────┐         │
│  │                                                 │         │
│  │  Paragraphe 1 — Accroche / conviction centrale  │         │
│  │                                                 │         │
│  │  Paragraphe 2 — Ce que "penser avec l'IA"       │         │
│  │  signifie concretement                          │         │
│  │                                                 │         │
│  │  Paragraphe 3 — Ce que ca change pour un        │         │
│  │  projet / une equipe / un client                │         │
│  │                                                 │         │
│  │  Paragraphe 4 (optionnel) — Transition vers     │         │
│  │  Obsolet                                        │         │
│  │                                                 │         │
│  │  J'ecris aussi sur le sujet → Lire Obsolet ↗    │         │
│  │  (link style, text-muted-foreground)            │         │
│  │                                                 │         │
│  └─────────────────────────────────────────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [Contact F-004]                                             │
```

### Wireframe — Mobile

```
┌──────────────────────────┐
│ [Hero F-002]             │
├──────────────────────────┤
│                          │
│ Manifeste                │
│                          │
│ Paragraphe 1...          │
│                          │
│ Paragraphe 2...          │
│                          │
│ Paragraphe 3...          │
│                          │
│ Lire Obsolet ↗           │
│                          │
├──────────────────────────┤
```

### Interactions cles
| Action utilisateur | Comportement attendu |
|---|---|
| Clic "About" dans le header | Scroll smooth vers `#about` |
| Clic "Lire Obsolet" en fin de section | Ouvre `https://obsolet.substack.com/` dans un nouvel onglet |
| Navigation clavier (Tab) | Le CTA Obsolet recoit le focus avec outline visible |

---

## Donnees & API

### Donnees necessaires
| Donnee | Source | Type | Requis |
|---|---|---|---|
| Titre de section | `lib/data.ts` | `string` | Oui |
| Paragraphes du manifeste | `lib/data.ts` | `string[]` | Oui |
| Texte du CTA Obsolet | `lib/data.ts` | `string` | Oui |
| URL Obsolet | `lib/data.ts` (deja present) | `string` | Oui |

> Aucune API. Contenu 100% statique.

### Gestion des erreurs
| Cas d'erreur | Comportement |
|---|---|
| Aucun cas d'erreur identifie | Contenu statique, Server Component, zero fetch |

---

## Notes Techniques pour BOB

- **`components/about.tsx`** — Server Component pur. Import des donnees depuis `lib/data.ts`.
- **Donnees** — Ajouter `ABOUT` dans `lib/data.ts` avec `title`, `paragraphs: string[]`, `ctaText`. Reutiliser l'URL Obsolet deja presente dans `NAV_ITEMS`.
- **Largeur de texte** — Le conteneur de prose utilise `max-w-3xl` (pas `max-w-5xl` du layout). Cela cree une colonne editoriale etroite, plus confortable a lire.
- **Spacing entre paragraphes** — `space-y-6` sur le conteneur de paragraphes.
- **CTA** — Un simple `<a>` avec les classes `inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors`. Ajouter l'icone `ExternalLink` de Lucide (size 16).
- **page.tsx** — Remplacer le placeholder `#about` par `<About />`.
- **Contenu editorial** — Le texte doit etre ecrit en premiere personne, ton direct. Proposition de contenu a valider par le Talent (voir section donnees).

---

## Notes pour ANALYZER

- Verifier que la section est atteignable via le lien "About" du header (scroll smooth)
- Evaluer si le contenu du manifeste repond aux 3 JTBD : le recruteur comprend-il la valeur en < 1 min ? Le designer curieux trouve-t-il de la profondeur ? Le client sent-il la confiance ?
- Verifier que le ton n'est pas "IA washing" — le manifeste doit prouver, pas revendiquer
- Verifier que la colonne de texte est confortable a lire (pas trop large, pas trop etroite)
- Verifier que le CTA Obsolet ne cannibalise pas le CTA Contact (il doit etre subtil, pas primaire)

---

## Historique de la Spec

| Date | Version | Changement | Par |
|---|---|---|---|
| 2026-03-19 | v0.1 | Creation initiale | RAY |
