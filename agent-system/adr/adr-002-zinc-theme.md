# ADR-002 — Thème Zinc pour la sobriété éditoriale

**Date :** 2026-03-18
**Statut :** ✅ ACCEPTED
**Décideurs :** Le Talent
**Agents concernés :** BOB

---

## Contexte

Shadcn/ui propose plusieurs thèmes de base (Default, New York, Zinc, Slate, Stone, Gray, Neutral, Rose, Orange…).
Le projet est un portfolio éditorial centré sur le raisonnement produit et le travail — le design doit s'effacer
au profit du contenu. Le choix du thème définit la palette de tokens CSS qui s'applique à l'ensemble du projet.

---

## Décision

**Nous adoptons le thème Zinc, configuré via `npx shadcn@latest init` avec style Default et CSS variables activées.**

Les tokens Zinc sont définis dans `globals.css` et référencés dans `design_guide.md`.
Le dark mode est défini dans les variables CSS mais **non activé en MVP** (voir ADR-005).

---

## Alternatives considérées

| Alternative | Raison de rejet |
|---|---|
| **Default (blue accent)** | Accent bleu trop générique, trop "SaaS" — éloigné de l'esthétique éditoriale |
| **New York** | Style plus opinioné, moins sobre — border-radius et shadows plus marqués |
| **Slate / Stone / Neutral** | Trop proches de Zinc en pratique, mais avec des légères teintes qui parasitent le contenu |
| **Thème personnalisé from scratch** | Complexité non justifiée en MVP — les tokens Zinc couvrent tous les besoins |

---

## Conséquences

### ✅ Bénéfices attendus
- Gris neutres froids, zéro teinte colorée parasite — le contenu prime
- Contraste WCAG AA garanti par défaut sur les combinaisons bg/fg définies
- Cohérence garantie entre tous les composants Shadcn sans customisation token-par-token

### ⚠️ Contraintes acceptées
- Palette limitée en couleurs d'accent — toute couleur "forte" est un écart délibéré qui doit être justifié
- Toute modification des tokens CSS doit être tracée dans `design_guide.md §Décisions de design`

### 🔗 Impact sur les agents
- **RAY** : Les specs UI peuvent référencer les tokens (`text-muted-foreground`, `border`, etc.) sans les définir — ils sont implicitement disponibles via Zinc
- **BOB** : Utiliser exclusivement les tokens CSS Shadcn pour les couleurs — jamais de valeurs Tailwind brutes (`gray-500`, `zinc-800`) sauf exception documentée
- **ANALYZER** : Toute couleur hard-codée hors tokens est un point de déduction

---

## ADRs liés

- Dépend de : [ADR-001](adr-001-shadcn-only.md) — Zinc est une config Shadcn, sans ADR-001 cette décision tombe
- Conditionne : [ADR-005](adr-005-no-dark-mode-mvp.md) — les tokens `.dark` de Zinc sont la base du futur dark mode ; changer de thème invalide ADR-005

---

## Révision

Cette décision doit être réexaminée si : une évolution de brand ou une refonte visuelle majeure est demandée.
Date de révision suggérée : post-MVP.
