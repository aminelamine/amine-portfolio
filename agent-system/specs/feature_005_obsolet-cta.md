# Feature Spec — F-005 : Integration Obsolet
> **Genere par** : RAY
> **Statut** : `[ ] DRAFT  [x] VALIDEE TALENT  [ ] EN DEV  [ ] EN REVIEW  [ ] LIVREE`
> **Derniere mise a jour** : `2026-03-19`
> **Lien Roadmap** : `roadmap.md#F-005`

---

## Contexte & Probleme

### Probleme a resoudre
> Obsolet (la newsletter) est le principal asset de credibilite en l'absence de case studies. Elle prouve qu'Amine pense publiquement sur les sujets Design x IA. Actuellement, Obsolet est mentionnee dans le header, le footer et le hero — mais de maniere generique. Il manque une section dediee qui contextualise la newsletter, donne envie de s'abonner, et sert de pont entre le portfolio et le contenu editorial. Sans cette section, le taux de clic vers Obsolet risque de rester faible car le visiteur ne comprend pas ce qu'il y trouvera.

### JTBD cible

**JTBD Designer / PM curieux :**
*"Quand je cherche a comprendre comment l'IA reshape le travail de design, je veux voir comment un praticien de haut niveau reflechit et structure sa pratique, pour benchmarker et m'inspirer."*

**JTBD Recruteur :**
*"Quand j'evalue un candidat, je veux des preuves de pensee structuree au-dela du portfolio, pour valider que ce n'est pas juste un bon executant."*

### Impact attendu
| KPI | Avant | Cible apres feature | Methode de mesure |
|---|---|---|---|
| Taux de clic vers Obsolet | Non mesure | > 15% des visiteurs | Plausible (outbound clicks) |
| Credibilite percue | Non mesure | Qualitative — la newsletter sert de preuve sociale | Feedback recruteurs/clients |

---

## Scope

### In Scope
- Section dediee entre About et Contact avec presentation editoriale d'Obsolet
- Titre + description courte (2-3 phrases) qui explique ce qu'est Obsolet et pourquoi le lire
- CTA principal vers Obsolet (lien externe)
- Optionnel : 1 a 3 titres d'articles recents (hardcodes en MVP, pas de fetch RSS)
- Responsive mobile/desktop

### Out of Scope
- Embed de la newsletter ou du contenu Substack
- Fetch RSS / API Substack pour les articles recents
- Formulaire d'inscription a la newsletter (Substack gere ca)
- Dark mode

### Dependances
| Feature | Relation | Statut |
|---|---|---|
| F-001 | Layout global | LIVREE |
| F-003 | About au-dessus | TODO |
| F-004 | Contact en-dessous | TODO |

---

## User Stories (Format Gherkin)

### Story 1 — Decouverte d'Obsolet (desktop)
```gherkin
GIVEN un visiteur sur desktop qui scrolle apres la section About
WHEN il atteint la section Obsolet
THEN il voit un titre, une description de la newsletter, et un CTA vers Obsolet
  AND il comprend en 5 secondes ce qu'il y trouvera (reflexions Design x IA)
```

### Story 2 — Decouverte d'Obsolet (mobile)
```gherkin
GIVEN un visiteur sur mobile
WHEN il atteint la section Obsolet
THEN le contenu est lisible et le CTA est accessible
  AND le CTA occupe la largeur disponible sous md
```

### Story 3 — Clic vers Obsolet
```gherkin
GIVEN un visiteur interesse par la newsletter
WHEN il clique sur le CTA "Lire Obsolet"
THEN un nouvel onglet s'ouvre vers https://obsolet.substack.com/
```

### Story 4 — Articles recents (optionnel)
```gherkin
GIVEN un visiteur qui veut un apercu du contenu
WHEN il regarde la section Obsolet
THEN il voit 1 a 3 titres d'articles recents sous la description
  AND chaque titre est un lien cliquable vers l'article sur Substack
  AND les liens ouvrent dans un nouvel onglet
```

---

## Criteres d'Acceptation Binaires

### Fonctionnels
- [ ] La section est positionnee entre #about et #contact dans le flux de page
- [ ] La section porte un id (`#obsolet` ou integree dans le flux sans ancre dediee — a decider par BOB)
- [ ] Le titre de section est visible et utilise l'echelle Heading 1 ou Heading 2
- [ ] Une description de 2-3 phrases explique ce qu'est Obsolet et son lien avec le positionnement Design x IA
- [ ] Le CTA principal pointe vers `https://obsolet.substack.com/`
- [ ] Le CTA ouvre dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] Le CTA porte un indicateur visuel de lien externe
- [ ] Si des articles recents sont affiches, ils sont hardcodes dans `lib/data.ts` (pas de fetch)
- [ ] Le contenu est centralise dans `lib/data.ts`

### Design System
- [ ] Le CTA utilise `Button variant="outline"` (pas default — pour ne pas concurrencer le CTA Contact)
- [ ] Le spacing de section respecte `py-16 md:py-24`
- [ ] Le contenu respecte `max-w-3xl`
- [ ] Un `border-t` ou un `Separator` delimite visuellement cette section de la precedente
- [ ] Le contraste WCAG AA est respecte
- [ ] L'interface est navigable au clavier

### Performance
- [ ] La section est un Server Component pur
- [ ] Aucun layout shift au chargement
- [ ] Zero fetch externe — contenu 100% statique

---

## Interface & Comportements

### Composants Shadcn/ui requis

```bash
# Deja installes
# Button (F-001), Separator (F-001)
```

### Wireframe — Desktop

```
├─────────────────────────────────────────────────────────────┤
│ [About F-003]                                               │
├─ border-t ou Separator ────────────────────────────────────-┤
│                                                             │
│  py-16 md:py-24                                             │
│                                                             │
│  Obsolet — la newsletter                                    │
│  (text-xl font-semibold ou text-3xl font-bold)              │
│                                                             │
│  ┌─── max-w-3xl ──────────────────────────────────┐         │
│  │                                                 │         │
│  │  Chaque semaine, j'explore comment l'IA         │         │
│  │  transforme le travail de design — pas les      │         │
│  │  outils, mais la facon de penser.               │         │
│  │  (text-base text-muted-foreground)              │         │
│  │                                                 │         │
│  │  Articles recents :                             │         │
│  │  · Titre article 1 ↗                            │         │
│  │  · Titre article 2 ↗                            │         │
│  │  · Titre article 3 ↗                            │         │
│  │  (text-sm, liens)                               │         │
│  │                                                 │         │
│  │  [ Lire Obsolet ↗ ]  ← Button outline           │         │
│  │                                                 │         │
│  └─────────────────────────────────────────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [Contact F-004]                                             │
```

### Wireframe — Mobile

```
┌──────────────────────────┐
│ [About F-003]            │
├──────────────────────────┤
│                          │
│ Obsolet — la newsletter  │
│                          │
│ Chaque semaine,...       │
│                          │
│ · Titre article 1 ↗     │
│ · Titre article 2 ↗     │
│ · Titre article 3 ↗     │
│                          │
│ [ Lire Obsolet ↗    ]   │
│ (w-full sous md)         │
│                          │
├──────────────────────────┤
│ [Contact F-004]          │
```

### Interactions cles
| Action utilisateur | Comportement attendu |
|---|---|
| Clic "Lire Obsolet" (CTA) | Ouvre `https://obsolet.substack.com/` dans un nouvel onglet |
| Clic sur un titre d'article | Ouvre l'article sur Substack dans un nouvel onglet |
| Navigation clavier (Tab) | Focus sur le CTA puis les liens d'articles avec outline visible |

---

## Donnees & API

### Donnees necessaires
| Donnee | Source | Type | Requis |
|---|---|---|---|
| Titre de section | `lib/data.ts` | `string` | Oui |
| Description de la newsletter | `lib/data.ts` | `string` | Oui |
| Texte du CTA | `lib/data.ts` | `string` | Oui |
| URL Obsolet | `lib/data.ts` (deja present) | `string` | Oui |
| Articles recents | `lib/data.ts` | `Array<{ title: string; href: string }>` | Optionnel |

> Aucune API. Les articles recents sont hardcodes et mis a jour manuellement.

### Gestion des erreurs
| Cas d'erreur | Comportement |
|---|---|
| Aucun cas d'erreur | Contenu statique, Server Component, zero fetch |

---

## Notes Techniques pour BOB

- **`components/obsolet-section.tsx`** — Server Component pur.
- **Donnees** — Ajouter `OBSOLET_SECTION` dans `lib/data.ts` avec `title`, `description`, `ctaText`, et optionnellement `recentArticles: Array<{ title: string; href: string }>`.
- **Position dans page.tsx** — Inserer entre `<About />` et `<Contact />`.
- **Separateur** — Utiliser un `<Separator />` ou un `border-t` sur la section pour marquer visuellement la transition depuis About.
- **CTA** — `Button variant="outline"` avec `asChild` pour un `<a>` externe. Ajouter l'icone `ExternalLink` de Lucide.
- **Articles recents** — Si inclus, les afficher en liste simple (`<ul>`) avec des `<a>` styles. Chaque lien ouvre dans un nouvel onglet. Les titres et URLs sont hardcodes dans `lib/data.ts` — le Talent les met a jour manuellement.
- **Pas d'ancre header** — Obsolet n'a pas de lien dans la navigation header. La section se decouvre naturellement au scroll entre About et Contact.

---

## Notes pour ANALYZER

- Verifier que la description de la newsletter donne envie de cliquer — elle doit etre concrete, pas generique
- Verifier que le CTA outline ne concurrence pas visuellement le CTA Contact (default) qui suit
- Verifier que les liens d'articles (si presents) sont fonctionnels et ouvrent dans un nouvel onglet
- Evaluer si la section apporte une reelle valeur dans le flux ou si elle cree une friction avant le Contact
- Simuler le parcours complet : Hero → About → Obsolet → Contact — le flow est-il naturel ?

---

## Historique de la Spec

| Date | Version | Changement | Par |
|---|---|---|---|
| 2026-03-19 | v0.1 | Creation initiale | RAY |
