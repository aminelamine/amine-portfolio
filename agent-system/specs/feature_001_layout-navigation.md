# Feature Spec — F-001 : Layout Global + Navigation
> **Generé par** : RAY
> **Statut** : `[ ] DRAFT  [x] VALIDÉE TALENT  [ ] EN DEV  [ ] EN REVIEW  [ ] LIVRÉE`
> **Dernière mise à jour** : `2026-03-18`
> **Lien Roadmap** : `roadmap.md#F-001`

---

## Contexte & Problème

### Problème à résoudre
> Le portfolio n'a aucune structure navigable. Sans layout global (header, main, footer), les features suivantes (Hero, About, Contact) n'ont pas de conteneur cohérent pour s'intégrer. Le visiteur — qu'il soit recruteur, designer ou client — doit pouvoir naviguer entre les sections en moins de 2 clics depuis n'importe quel point du site.

### JTBD ciblé
> Extraits depuis `context/client_vision.md`

**JTBD Recruteur :**
*"Quand j'arrive sur le portfolio, je veux accéder immédiatement aux informations clés (qui est cette personne, comment le contacter), pour décider en < 30 secondes si ça vaut un appel."*

**JTBD Client prescripteur :**
*"Quand j'évalue ce profil, je veux que le CTA de contact soit toujours accessible, pour ne pas perdre ma motivation au moment où je décide de le contacter."*

### Impact attendu
| KPI | Avant | Cible après feature | Méthode de mesure |
|---|---|---|---|
| Pages vues / session | Non mesuré | > 2.5 pages | Plausible (scroll depth + navigation) |
| Positionnement compris en < 10s | Non mesuré | > 70% scrollent après le hero | Plausible (scroll depth) |

---

## Scope

### In Scope
- Header sticky avec nom "Amine Lamine" (Geist Bold) et navigation desktop
- Navigation desktop : 3 items — About (ancre) · Contact (ancre) · Obsolet (lien externe)
- Menu mobile hamburger via `Sheet` (Shadcn)
- Zone `<main>` avec contraintes de layout (`max-w-5xl`, padding)
- Footer minimal : copyright + lien Obsolet + lien LinkedIn
- `layout.tsx` racine avec Geist font, metadata de base, et structure HTML sémantique

### Out of Scope
- Dark mode (LATER dans la roadmap)
- Lien "Work" / case studies (Phase 2)
- Logo / logotype custom (pas de MVP)
- Animations de transition entre pages
- SEO avancé (Open Graph, structured data — LATER)

### Dépendances
| Feature | Relation | Statut |
|---|---|---|
| Aucune | F-001 est la fondation — zéro dépendance | - |
| F-002 à F-005 | Dépendent de F-001 | TODO |

---

## User Stories (Format Gherkin)

### Story 1 — Navigation desktop
```gherkin
GIVEN un visiteur sur desktop (viewport >= 768px)
WHEN il arrive sur n'importe quelle page du portfolio
THEN il voit un header sticky en haut avec "Amine Lamine" à gauche et 3 liens de navigation à droite (About · Contact · ↗ Obsolet)
  AND le header reste visible au scroll
```

### Story 2 — Navigation mobile
```gherkin
GIVEN un visiteur sur mobile (viewport < 768px)
WHEN il arrive sur le portfolio
THEN il voit un header sticky avec "Amine Lamine" à gauche et une icône hamburger à droite
  AND en cliquant sur l'icône, un panneau latéral (Sheet) s'ouvre avec les 3 liens de navigation empilés verticalement
  AND en cliquant sur un lien, le Sheet se ferme et la page scrolle vers la section
```

### Story 3 — Lien externe Obsolet
```gherkin
GIVEN un visiteur sur le portfolio (mobile ou desktop)
WHEN il clique sur le lien "Obsolet" dans le header ou le footer
THEN un nouvel onglet s'ouvre vers l'URL de la newsletter Obsolet
  AND le lien est visuellement distingué comme externe (icône ↗ ou indicateur)
```

### Story 4 — Footer
```gherkin
GIVEN un visiteur qui scrolle jusqu'en bas de la page
WHEN il atteint le footer
THEN il voit : "© 2026 Amine Lamine" · un lien vers Obsolet · un lien vers LinkedIn
  AND les liens ouvrent dans un nouvel onglet
```

### Story 5 — Edge Case : navigation au clavier
```gherkin
GIVEN un visiteur naviguant au clavier (Tab + Enter)
WHEN il parcourt le header avec Tab
THEN chaque lien reçoit un outline de focus visible
  AND il peut activer chaque lien avec Enter
  AND l'ordre de tabulation suit l'ordre visuel (nom → About → Contact → Obsolet)
```

---

## Critères d'Acceptation Binaires

### Fonctionnels
- [ ] Le header est `position: sticky` et reste visible au scroll sur toutes les pages
- [ ] Le header affiche "Amine Lamine" en Geist Bold à gauche
- [ ] La navigation desktop affiche 3 liens : About · Contact · Obsolet
- [ ] Le lien Obsolet porte un indicateur visuel de lien externe (icône `ExternalLink` de Lucide ou texte `↗`)
- [ ] Le lien Obsolet ouvre dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] Sur mobile (< 768px), la navigation desktop est remplacée par une icône hamburger
- [ ] Le clic sur l'icône hamburger ouvre un `Sheet` avec les 3 liens empilés verticalement
- [ ] Le clic sur un lien dans le Sheet ferme le Sheet
- [ ] La zone `<main>` applique `max-w-5xl mx-auto px-6 md:px-8`
- [ ] Le footer affiche : `© 2026 Amine Lamine` · lien Obsolet · lien LinkedIn
- [ ] Les liens footer ouvrent dans un nouvel onglet
- [ ] Le footer a un `border-t` et utilise `text-muted-foreground`

### Design System
- [ ] Les composants utilisés sont exclusivement ceux listés dans `design_guide.md`
- [ ] La hiérarchie des actions est respectée : liens de navigation en `variant="ghost"`, lien externe en `variant="link"` ou `<a>` stylé
- [ ] Le contraste WCAG AA est respecté sur tous les éléments texte
- [ ] L'interface est navigable au clavier avec un outline de focus visible
- [ ] Le header a une hauteur de `h-14` et un `border-b` conformément au design guide

### Performance
- [ ] Le layout se charge sans layout shift visible (CLS < 0.1)
- [ ] Aucun Client Component n'est utilisé sauf pour le Sheet mobile (interactivité requise)

---

## Interface & Comportements

### Composants Shadcn/ui requis

```bash
npx shadcn@latest add button
npx shadcn@latest add sheet
npx shadcn@latest add separator
```

> `button` est déjà installé. `sheet` pour le menu mobile. `separator` pour le footer si nécessaire.

### Wireframe — Desktop

```
┌─────────────────────────────────────────────────────────────┐
│ [sticky header · h-14 · border-b · bg-background/95 blur]  │
│                                                             │
│  Amine Lamine              About  Contact  ↗ Obsolet       │
│  (Geist Bold)              (ghost links)   (external)       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  <main class="max-w-5xl mx-auto px-6 md:px-8">             │
│                                                             │
│    [F-002 Hero]                                             │
│    [F-003 About/Manifeste]                                  │
│    [F-004 Contact]                                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [footer · border-t · py-8]                                  │
│                                                             │
│  © 2026 Amine Lamine     Obsolet ↗  ·  LinkedIn ↗          │
│  (text-muted-foreground)  (text-muted-foreground)           │
└─────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌──────────────────────────┐
│ Amine Lamine       [☰]  │  ← sticky h-14
├──────────────────────────┤
│                          │
│  <main>                  │
│  px-6                    │
│                          │
├──────────────────────────┤
│ © 2026 Amine Lamine      │
│ Obsolet ↗ · LinkedIn ↗   │
└──────────────────────────┘

Sheet ouvert :
┌──────────────────────────┐
│                    [✕]   │
│                          │
│  About                   │
│  Contact                 │
│  ↗ Obsolet               │
│                          │
└──────────────────────────┘
```

### Interactions clés
| Action utilisateur | Comportement attendu |
|---|---|
| Clic "About" (header) | Scroll smooth vers la section `#about` |
| Clic "Contact" (header) | Scroll smooth vers la section `#contact` |
| Clic "Obsolet" (header/footer) | Ouvre `https://obsolet.substack.com/` dans un nouvel onglet |
| Clic "LinkedIn" (footer) | Ouvre `https://www.linkedin.com/in/lamineamine/` dans un nouvel onglet |
| Clic hamburger (mobile) | Ouvre Sheet depuis la droite |
| Clic lien dans Sheet | Ferme le Sheet + scroll vers la section |
| Redimensionnement viewport | Navigation bascule entre desktop et mobile à `md (768px)` |

---

## Données & API

### Données nécessaires
| Donnée | Source | Type | Requis |
|---|---|---|---|
| Liens de navigation | `lib/data.ts` | `Array<{ label: string; href: string; external?: boolean }>` | Oui |
| Liens footer | `lib/data.ts` | `Array<{ label: string; href: string; external: boolean }>` | Oui |
| URL Obsolet | `lib/data.ts` | `string` | Oui |
| URL LinkedIn | `lib/data.ts` | `string` | Oui |

> Aucune API, aucun fetch. Données statiques centralisées dans `lib/data.ts`.

### Gestion des erreurs
| Cas d'erreur | Comportement |
|---|---|
| Ancre inexistante (#about) | Le lien ne scrolle nulle part — pas bloquant, les sections seront ajoutées par F-002/F-003 |
| JavaScript désactivé | Le header et footer sont en Server Components — le contenu reste visible. Seul le Sheet mobile ne fonctionne pas (dégradation acceptable) |

---

## Notes Techniques pour BOB

- **`app/layout.tsx`** — Contient le `<Header />`, `<main>`, `<Footer />`. Le layout est un Server Component.
- **`components/header.tsx`** — Server Component pour la structure. Extraire le menu mobile dans `components/mobile-nav.tsx` en Client Component (`"use client"`) car le Sheet nécessite un état ouvert/fermé.
- **`components/footer.tsx`** — Server Component pur.
- **`lib/data.ts`** — Centraliser les URLs (Obsolet, LinkedIn) et les items de navigation. Zéro donnée hardcodée dans les composants.
- **Header backdrop** — `bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60` pour un effet subtle au scroll.
- **Smooth scroll** — Ajouter `scroll-behavior: smooth` dans `globals.css` sur `html` plutôt que du JS.
- **About/Contact** — Les liens pointent vers `#about` et `#contact`. Ces sections n'existent pas encore — c'est normal, F-002 et F-003 les créeront.

---

## Notes pour ANALYZER

- Vérifier que le header ne recouvre pas le contenu au scroll (z-index + sticky)
- Tester le flow mobile complet : hamburger → Sheet → clic lien → fermeture Sheet → scroll
- Vérifier que tous les liens externes ont `target="_blank"` et `rel="noopener noreferrer"`
- Simuler la navigation au clavier sur desktop et mobile
- Vérifier qu'aucun layout shift ne se produit au chargement

---

## Historique de la Spec

| Date | Version | Changement | Par |
|---|---|---|---|
| 2026-03-18 | v0.1 | Création initiale | RAY |
