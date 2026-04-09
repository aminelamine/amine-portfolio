# design_guide.md
> **Usage** : Ce fichier définit la philosophie UI/UX et les règles de design system.
> BOB le lit avant tout travail d'interface. RAY s'y réfère pour évaluer la faisabilité technique des specs UI.
> Ce n'est pas une documentation Shadcn/ui — c'est son **interprétation opinionée** pour ce projet.

---

## 🎨 Philosophie de Design

### Principe directeur
> Un portfolio est lui-même un livrable de design. Sobre, lisible, sans ornement superflu — le design s'efface pour laisser le travail et le raisonnement parler.

### Les 3 mots qui définissent l'UI
**Sobre** · **Editorial** · **Systémique**

### Ce que ça signifie concrètement pour BOB
- Pas d'animations pour "impressionner" — uniquement pour guider l'attention
- Pas de dégradés, ombres lourdes, ou effets glassmorphism
- La typographie fait tout le travail hiérarchique — pas les couleurs
- Chaque élément de l'interface justifie sa présence

---

## 🏗️ Stack UI

| Outil | Rôle | Version |
|---|---|---|
| **Next.js** | Framework React (App Router) | `15.x` |
| **Tailwind CSS** | Utility-first styling | `4.x` |
| **Shadcn/ui** | Composants accessibles, ownership total | `latest` |
| **Lucide React** | Iconographie (sparingly) | `latest` |
| **Geist** | Typographie (intégrée Next.js 15) | `latest` |
| **motion** | Animations React (L1–L2) — installé par défaut | `latest` |
| **gsap** | Animations cinématiques (L3 uniquement) — opt-in, validation JO requise | `latest` |

> ⚠️ BOB ne doit **pas** introduire de librairie UI non listée ici sans validation du Talent.

---

## 🎭 Motion Design — Système de Niveaux

> Le niveau motion est une décision de spec, pas une décision de code.
> **JO le définit dans la spec. BOB l'exécute. BOB ne choisit jamais le niveau lui-même.**
> En l'absence de `motion_level` dans une spec → BOB applique **L0** sans exception.

---

### Les 4 niveaux

#### L0 — Fonctionnel *(défaut)*
**Librairie :** aucune. Tailwind + CSS natif uniquement.
**Usage :** tout ce qui est fonctionnel — navigation, boutons, inputs, toasts.
**Ce qui est autorisé :**
- `transition-colors duration-150` sur les hover states
- `transition-opacity` sur les états de chargement
- `focus-visible:ring` sur les éléments interactifs
- `hover:` et `active:` Tailwind

**Règle :** si une animation peut être faite en CSS pur sans librairie, elle doit l'être.

---

#### L1 — Éditorial
**Librairie :** `motion` (`npm install motion`)
**Usage :** portfolios, dashboards, pages de contenu. Le niveau "sobre" enrichi.
**Ce qui est autorisé :**
- Une séquence d'entrée orchestrée par page (hero stagger au load)
- `useInView` + `motion.div` pour scroll reveals (fade-up discret)
- Maximum **3 `motion.div`** par page complète
- Durées : 300–500ms, easing `ease-out`

**Ce qui est interdit à ce niveau :**
- `AnimatePresence` (réservé L2+)
- Parallax
- Animations en boucle (`repeat: Infinity`)

---

#### L2 — Expressif
**Librairie :** `motion`
**Usage :** landing pages, case studies, features à fort impact visuel.
**Ce qui est autorisé :**
- Page transitions via `AnimatePresence`
- Layout animations (`layoutId` pour les éléments partagés)
- Orchestration de sections (groupes de stagger)
- Hover states enrichis (`whileHover`, `whileTap`)
- Durées : jusqu'à 700ms pour les séquences orchestrées

**Ce qui est interdit à ce niveau :**
- ScrollTrigger (réservé L3)
- Canvas ou WebGL
- Animations > 700ms sur des éléments isolés

---

#### L3 — Cinématique
**Librairie :** `motion` + `gsap` + `@gsap/react` *(opt-in — validation JO obligatoire dans la spec)*
**Usage :** "wow moments" — onboarding flows, product demos, présentations.
**Ce qui est autorisé :**
- ScrollTrigger, timelines GSAP, sections épinglées
- Animations pilotées par scroll (`useScroll`, `useTransform`)
- Canvas/WebGL si justifié
- Durées : dictées par la narration, pas par une contrainte fixe

**Condition d'activation :** la spec doit contenir `motion_level: L3` ET une justification en 1 ligne rédigée par JO.

---

### Règle universelle (tous niveaux)

```tsx
// Non négociable — à intégrer dans tous les composants animés
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Ou via hook motion :
import { useReducedMotion } from 'motion/react'
const shouldReduce = useReducedMotion()
```

Si `prefers-reduced-motion` est activé → toutes les animations se réduisent à de simples transitions d'opacité (150ms max) ou sont désactivées.

---

### Patterns autorisés par niveau (référence rapide)

| Pattern | L0 | L1 | L2 | L3 |
|---|---|---|---|---|
| CSS hover transitions | ✅ | ✅ | ✅ | ✅ |
| Scroll reveal (fade-up) | ❌ | ✅ | ✅ | ✅ |
| Hero stagger au load | ❌ | ✅ | ✅ | ✅ |
| Page transitions | ❌ | ❌ | ✅ | ✅ |
| Layout animations | ❌ | ❌ | ✅ | ✅ |
| Hover enrichi (whileHover) | ❌ | ❌ | ✅ | ✅ |
| ScrollTrigger / pinning | ❌ | ❌ | ❌ | ✅ |
| Canvas / WebGL | ❌ | ❌ | ❌ | ✅ |
| Animations en boucle | ❌ | ❌ | ❌ | ⚠️ justification requise |

---

## 🎛️ Design Tokens — Thème Shadcn/ui "Zinc"

Le thème Zinc est le plus sobre et le plus éditorial de la palette Shadcn. Il utilise des gris neutres froids, sans teinte colorée, ce qui laisse l'espace au contenu.

### Installation du thème

```bash
npx shadcn@latest init
# Choisir : Zinc / Default style / CSS variables: yes
```

### Variables CSS — `globals.css`

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;

    --radius: 0.375rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}
```

> **Pas de dark mode en MVP.** Le dark mode est en LATER dans la roadmap. BOB n'implémente pas `.dark` pour l'instant — les variables sont documentées ici pour future référence uniquement.

### Sémantique des tokens (règles d'usage pour BOB)

| Token | Usage |
|---|---|
| `background` / `foreground` | Fond de page et texte principal |
| `muted` / `muted-foreground` | Zones secondaires, métadonnées, labels |
| `border` | Séparateurs, contours — utilisé avec parcimonie |
| `primary` | Actions principales, liens actifs |
| `secondary` | Chips, badges, surfaces secondaires |
| `accent` | Hover states, sélections — jamais en couleur de fond plein |
| `destructive` | Uniquement pour les actions irréversibles |

---

## 🔤 Typographie

Geist est la font par défaut de Next.js 15 — sobre, lisible, optimisée pour le web. Pas de font supplémentaire en MVP.

```tsx
// layout.tsx — déjà configuré par Next.js 15
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
```

### Échelle typographique (Tailwind)

| Usage | Classes Tailwind | Exemple d'élément |
|---|---|---|
| Display / Hero | `text-4xl md:text-6xl font-bold tracking-tight` | Tagline principale |
| Heading 1 | `text-3xl font-bold tracking-tight` | Titre de section |
| Heading 2 | `text-xl font-semibold` | Titre de carte / sous-section |
| Heading 3 | `text-base font-semibold` | Label, titre de groupe |
| Body | `text-base font-normal leading-relaxed` | Texte courant |
| Body small | `text-sm font-normal leading-relaxed` | Descriptions, secondary content |
| Caption / Meta | `text-xs text-muted-foreground` | Dates, tags, metadata |
| Code / Mono | `font-mono text-sm` | Extraits techniques |

### Règle lettre / espacement
- `tracking-tight` sur les titres (headings)
- `leading-relaxed` sur le body (lisibilité)
- Jamais de `uppercase` sur le body — uniquement sur les labels très courts si nécessaire

---

## 📐 Spacing & Layout

- **Grille de base :** 8px (multiples de `2` en Tailwind → `p-2`, `p-4`, `p-8`, `p-16`)
- **Max-width contenu :** `max-w-3xl` (768px) — portfolio éditorial, pas un dashboard
- **Max-width layout :** `max-w-5xl` (1024px) — avec padding horizontal `px-6 md:px-8`
- **Sections :** padding vertical `py-16 md:py-24` pour aérer
- **Breakpoints actifs :** `md (768px)` et `lg (1024px)` — mobile-first

---

## 🧱 Composants Shadcn/ui — Liste validée pour ce projet

BOB installe **uniquement** les composants de cette liste. Toute addition doit être validée par le Talent.

```bash
# Navigation & Layout
npx shadcn@latest add navigation-menu
npx shadcn@latest add separator
npx shadcn@latest add sheet           # menu mobile

# Actions
npx shadcn@latest add button
npx shadcn@latest add badge

# Contenu
npx shadcn@latest add card

# Formulaire Contact
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label

# Feedback
npx shadcn@latest add sonner          # toasts (remplace toast legacy)
npx shadcn@latest add skeleton        # loading states
```

### Règles d'utilisation

1. **Jamais modifier `/components/ui/`** — ces fichiers appartiennent à Shadcn. Étendre uniquement via `className`.
2. **Variantes custom** → utiliser `cva` (class-variance-authority, déjà inclus dans Shadcn).
3. **`asChild`** → utiliser pour composer des composants Radix sans wrapper superflu (ex : `Button asChild` pour les liens).

---

## 🖥️ Patterns de Layout

### Structure de page type

```
┌─────────────────────────────────────────────────┐
│ <Header />  sticky · h-14 · border-b            │
│  Logo/nom          Nav (About · Contact · ↗ Obs)│
├─────────────────────────────────────────────────┤
│                                                  │
│  <main>                                          │
│    max-w-5xl mx-auto px-6                        │
│    [sections avec py-16 md:py-24]                │
│                                                  │
├─────────────────────────────────────────────────┤
│ <Footer />  border-t · text-muted-foreground    │
└─────────────────────────────────────────────────┘
```

### États obligatoires

Pour tout composant impliquant du chargement ou des données :

- `[ ]` **Loading** — `<Skeleton />` avec les mêmes dimensions que le contenu final
- `[ ]` **Empty** — message contextuel + CTA si applicable
- `[ ]` **Error** — message actionnable (pas "Une erreur s'est produite")
- `[ ]` **Success** — feedback via `<Sonner />` toast

### Hiérarchie des actions

| Niveau | Composant | Contrainte |
|---|---|---|
| Primaire | `Button` (default) | 1 seul par section visible |
| Secondaire | `Button variant="outline"` | 2 max par vue |
| Tertiaire / Navigation | `Button variant="ghost"` | Navigation, liens contextuels |
| Lien externe | `Button variant="link"` ou `<a>` stylé | Toujours avec `↗` ou icône externe |

---

## ♿ Accessibilité (non négociable)

- Contraste WCAG AA minimum (4.5:1 texte, 3:1 UI) — le thème Zinc le garantit par défaut
- `outline` de focus jamais supprimé sans alternative visible
- Tous les éléments interactifs accessibles au clavier
- Images décoratives : `alt=""`  — images de contenu : `alt` descriptif
- Les composants Shadcn/Radix sont ARIA-compliant — ne pas bypasser leur structure

---

## 🚫 Anti-patterns (BOB ne fait jamais ça)

- ❌ Inline styles `style={{...}}` — Tailwind uniquement
- ❌ Animations sans `motion_level` défini dans la spec (→ fallback L0 obligatoire)
- ❌ Animations > 200ms sur des éléments fonctionnels (boutons, inputs, feedback states)
- ❌ `motion.div` ou tout composant animé sans vérification `prefers-reduced-motion`
- ❌ Niveau L3 sans validation explicite de JO dans la spec
- ❌ Plus d'un `Button` variant="default" visible simultanément dans une section
- ❌ Texte sur fond coloré non validé en contrast ratio
- ❌ Images sans dimensions explicites (layout shift)
- ❌ `useEffect` pour de la logique qui peut vivre en Server Component
- ❌ Données hardcodées dans les composants — toujours via props ou `lib/data.ts`

---

## 📝 Décisions de design

| Date | Décision | Raison |
|---|---|---|
| 2026-03-18 | Thème Zinc (pas New York, pas Default) | Le plus sobre, zéro teinte colorée parasite |
| 2026-03-18 | Geist uniquement — pas de font custom | Cohérence Next.js 15, 0 requête font externe |
| 2026-03-18 | `max-w-3xl` sur le contenu éditorial | Portfolio ≠ dashboard — la colonne étroite force la lisibilité |
| 2026-03-18 | Pas de dark mode en MVP | Complexité non justifiée — à évaluer post-MVP |
| 2026-03-18 | Sonner pour les toasts (pas Toast legacy) | API plus simple, meilleure UX par défaut |
| 2026-04-09 | Système de niveaux motion L0–L3 (`motion` par défaut, GSAP opt-in L3) | Flexibilité par projet sans risque de sur-animation par défaut — voir ADR-007 |
