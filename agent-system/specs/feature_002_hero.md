# Feature Spec — F-002 : Hero / Positionnement
> **Genere par** : RAY
> **Statut** : `[ ] DRAFT  [x] VALIDEE TALENT  [ ] EN DEV  [ ] EN REVIEW  [ ] LIVREE`
> **Derniere mise a jour** : `2026-03-18`
> **Lien Roadmap** : `roadmap.md#F-002`

---

## Contexte & Probleme

### Probleme a resoudre
> Le visiteur arrive sur le portfolio sans aucun contexte. Il doit comprendre en moins de 10 secondes que ce profil est rare : un designer qui pense avec l'IA, pas un executant qui utilise des outils IA. Sans case studies en MVP, le Hero porte 100% du signal de positionnement — il doit etre tranchant, pas descriptif.

### JTBD cible

**JTBD Recruteur :**
*"Quand j'evalue un candidat senior, je veux comprendre sa valeur differenciante en moins d'une minute, pour decider si ca vaut un entretien — sans avoir a lire une bio de 3 paragraphes."*

**JTBD Client prescripteur :**
*"Quand j'ai un projet complexe a l'intersection du design et de l'IA, je veux avoir la preuve que ce profil comprend mes enjeux specifiques, pour lui faire confiance avec mon brief."*

### Impact attendu
| KPI | Avant | Cible apres feature | Methode de mesure |
|---|---|---|---|
| Positionnement compris en < 10s | Non mesure | > 70% des visiteurs scrollent apres le hero | Plausible (scroll depth) |
| Taux de conversion vers contact | 0 | > 2 contacts/mois | Comptage manuel |
| Taux de clic vers Obsolet | Non mesure | > 15% des visiteurs | Plausible (outbound clicks) |

---

## Scope

### In Scope
- Section hero pleine hauteur (viewport height) avec tagline, sous-titre et 2 CTA
- Tagline : "Je ne fais pas de l'IA. Je pense avec."
- Sous-titre : "Product Designer – AI & Product Systems"
- CTA primaire : "Me contacter" → ancre vers `#contact`
- CTA secondaire : "Lire Obsolet" → lien externe vers `https://obsolet.substack.com/`
- Responsive mobile/desktop
- Hierarchie typographique conforme au design guide

### Out of Scope
- Animations d'entree ou de scroll (Phase 2 — F-008)
- Image, illustration ou avatar
- Ligne de credentials / social proof
- Dark mode

### Dependances
| Feature | Relation | Statut |
|---|---|---|
| F-001 | Layout global (header/main/footer) | LIVREE |
| F-004 | La section #contact doit exister pour que le CTA fonctionne | TODO — degradation acceptable (ancre sans cible) |

---

## User Stories (Format Gherkin)

### Story 1 — Positionnement immediat (desktop)
```gherkin
GIVEN un visiteur sur desktop (viewport >= 768px)
WHEN il arrive sur la page d'accueil
THEN il voit la tagline "Je ne fais pas de l'IA. Je pense avec." en grand (display)
  AND le sous-titre "Product Designer – AI & Product Systems" en dessous
  AND deux boutons CTA : "Me contacter" (primaire) et "Lire Obsolet" (secondaire, avec indicateur externe)
  AND le contenu est visible sans scroll (above the fold)
```

### Story 2 — Positionnement immediat (mobile)
```gherkin
GIVEN un visiteur sur mobile (viewport < 768px)
WHEN il arrive sur la page d'accueil
THEN il voit la meme hierarchie de contenu (tagline → sous-titre → CTA)
  AND la tagline est lisible sans troncature
  AND les CTA sont empiles verticalement et occupent la largeur disponible
```

### Story 3 — CTA Me contacter
```gherkin
GIVEN un visiteur sur la page d'accueil
WHEN il clique sur "Me contacter"
THEN la page scrolle smooth vers la section #contact
```

### Story 4 — CTA Lire Obsolet
```gherkin
GIVEN un visiteur sur la page d'accueil
WHEN il clique sur "Lire Obsolet"
THEN un nouvel onglet s'ouvre vers https://obsolet.substack.com/
  AND le bouton porte un indicateur visuel de lien externe
```

### Story 5 — Edge Case : viewport tres petit
```gherkin
GIVEN un visiteur sur un ecran < 375px de large
WHEN il voit le hero
THEN la tagline reste lisible (pas de troncature, pas de depassement horizontal)
  AND les CTA restent cliquables (hauteur de touch target >= 44px)
```

---

## Criteres d'Acceptation Binaires

### Fonctionnels
- [ ] La tagline affiche exactement "Je ne fais pas de l'IA. Je pense avec."
- [ ] Le sous-titre affiche exactement "Product Designer – AI & Product Systems"
- [ ] Le CTA primaire "Me contacter" est un `Button` variant="default" qui pointe vers `#contact`
- [ ] Le CTA secondaire "Lire Obsolet" est un `Button` variant="outline" qui ouvre `https://obsolet.substack.com/` dans un nouvel onglet
- [ ] Le CTA "Lire Obsolet" porte un indicateur visuel de lien externe (icone ExternalLink ou ↗)
- [ ] Le hero occupe au minimum la hauteur du viewport moins le header (`min-h-[calc(100svh-3.5rem)]`)
- [ ] Le contenu du hero est centre verticalement dans cet espace
- [ ] Sur mobile, les CTA sont empiles verticalement
- [ ] Sur mobile, les CTA occupent la largeur disponible (`w-full`)

### Design System
- [ ] La tagline utilise l'echelle Display : `text-4xl md:text-6xl font-bold tracking-tight`
- [ ] Le sous-titre utilise Body : `text-lg md:text-xl text-muted-foreground leading-relaxed`
- [ ] 1 seul `Button` variant="default" visible dans la section (le primaire)
- [ ] Le secondaire utilise `Button` variant="outline"
- [ ] Le contraste WCAG AA est respecte sur tous les textes
- [ ] L'interface est navigable au clavier
- [ ] Aucun anti-pattern du design guide n'est present

### Performance
- [ ] Le hero se charge sans layout shift (CLS < 0.1)
- [ ] Aucune image, donc pas de chargement asynchrone — le hero est 100% statique

---

## Interface & Comportements

### Composants Shadcn/ui requis

```bash
# Deja installes via F-001
npx shadcn@latest add button
```

> Aucune nouvelle installation necessaire.

### Wireframe — Desktop

```
┌─────────────────────────────────────────────────────────────┐
│ [Header F-001 — sticky]                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│                                                             │
│  Je ne fais pas de l'IA.                                    │
│  Je pense avec.                                             │
│                                                             │
│  Product Designer – AI & Product Systems                    │
│                                                             │
│  [ Me contacter ]  [ Lire Obsolet ↗ ]                       │
│   (primary)         (outline)                               │
│                                                             │
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [Suite : #about — F-003]                                    │
```

### Wireframe — Mobile

```
┌──────────────────────────┐
│ [Header F-001]           │
├──────────────────────────┤
│                          │
│                          │
│ Je ne fais pas           │
│ de l'IA.                 │
│ Je pense avec.           │
│                          │
│ Product Designer –       │
│ AI & Product Systems     │
│                          │
│ [ Me contacter       ]   │
│ [ Lire Obsolet ↗     ]   │
│                          │
│                          │
├──────────────────────────┤
```

### Interactions cles
| Action utilisateur | Comportement attendu |
|---|---|
| Clic "Me contacter" | Scroll smooth vers `#contact` |
| Clic "Lire Obsolet" | Ouvre `https://obsolet.substack.com/` dans un nouvel onglet |
| Tab clavier | Focus suit l'ordre : tagline (skip) → Me contacter → Lire Obsolet |

---

## Donnees & API

### Donnees necessaires
| Donnee | Source | Type | Requis |
|---|---|---|---|
| Tagline | `lib/data.ts` | `string` | Oui |
| Sous-titre | `lib/data.ts` | `string` | Oui |
| URL Obsolet | `lib/data.ts` (deja present) | `string` | Oui |

> Aucune API. Contenu 100% statique.

### Gestion des erreurs
| Cas d'erreur | Comportement |
|---|---|
| Ancre #contact inexistante | Le clic ne scrolle nulle part — acceptable car F-004 n'est pas encore livree |

---

## Notes Techniques pour BOB

- **`components/hero.tsx`** — Server Component pur (zero interactivite). Le contenu est statique.
- **Donnees** — Ajouter `HERO` dans `lib/data.ts` avec `tagline`, `subtitle`. Les URLs sont deja presentes.
- **Hauteur** — `min-h-[calc(100svh-3.5rem)]` pour occuper le viewport moins le header h-14 (3.5rem). Utiliser `svh` pour gerer correctement les barres d'adresse mobiles.
- **Centrage vertical** — `flex items-center` sur le conteneur hero.
- **CTA** — Le primaire est un `<a href="#contact">` stylise avec `buttonVariants({ variant: "default" })`. Le secondaire est un `<a href="..." target="_blank">` avec `buttonVariants({ variant: "outline" })`.
- **page.tsx** — Remplacer le placeholder hero actuel par `<Hero />`. Garder les sections #about et #contact placeholder.

---

## Notes pour ANALYZER

- Verifier que le hero est above the fold sur desktop 1440px ET mobile 375px
- Verifier que la tagline est exactement "Je ne fais pas de l'IA. Je pense avec." (pas de modification)
- Verifier que le CTA primaire est le seul `Button` default visible dans le viewport
- Simuler le JTBD recruteur : en 10 secondes, le positionnement est-il clair ?
- Verifier les touch targets sur mobile (>= 44px)

---

## Historique de la Spec

| Date | Version | Changement | Par |
|---|---|---|---|
| 2026-03-18 | v0.1 | Creation initiale | RAY |
