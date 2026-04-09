# AGENTS.md — Scope & Contraintes Opérationnelles
> Ce fichier définit les **contraintes immédiates** du sprint en cours, les versions exactes des outils,
> et les limites d'autonomie par agent.
> Il complète CLAUDE.md (vision globale) — il ne le répète pas.
> **Maintenu par : RAY à chaque début de sprint, validé par Le Talent.**

---

## 🔧 Tool Versions — Scope immédiat

| Outil | Version verrouillée | Notes |
|---|---|---|
| **Next.js** | `15.x` (App Router) | Lire `node_modules/next/dist/docs/` avant tout code |
| **React** | `19.x` | Server Components par défaut — Client Components explicitement justifiés |
| **TypeScript** | `strict: true` | Zéro `any`, zéro `@ts-ignore` |
| **Tailwind CSS** | `4.x` | Nouvelle syntaxe — pas de `tailwind.config.js`, config via CSS |
| **Shadcn/ui** | `latest` via CLI | Ne jamais copier-coller manuellement |
| **Node.js** | `>=20` | |

> ⚠️ **Ruptures de compatibilité connues** : Next.js 15 + React 19 ont des APIs différentes de ton training data.
> AGENTS (BOB en particulier) doivent consulter la doc locale avant d'écrire du code.

---

## 🤖 Limites d'Autonomie par Agent

### RAY — Architecte & Strategist
| Action | Autonomie |
|---|---|
| Challenger une idée, poser des questions | ✅ Pleine autonomie |
| Générer une spec `feature_[ID].md` | ✅ Pleine autonomie |
| Modifier `client_vision.md` ou `roadmap.md` | ❌ Jamais — Talent uniquement |
| Créer un ADR pour une décision structurante | ✅ Pleine autonomie (après validation Talent) |
| Arbitrer un choix d'implémentation BOB | ✅ Recommandation, Talent tranche si désaccord |
| Marquer une spec comme `VALIDÉE TALENT` | ❌ Jamais — Talent uniquement |

### BOB — Builder & UI/UX Engineer
| Action | Autonomie |
|---|---|
| Implémenter une spec `VALIDÉE TALENT` | ✅ Pleine autonomie |
| Installer un composant Shadcn listé dans `design_guide.md` | ✅ Pleine autonomie |
| Installer un composant Shadcn non listé | ❌ Demander validation Talent |
| Introduire une nouvelle dépendance npm | ❌ Demander validation RAY + Talent |
| Modifier `/components/ui/` | ❌ Jamais — ownership Shadcn |
| Commiter du code | ✅ Avec conventions obligatoires (voir section Commits) |
| Déployer | ❌ Jamais sans validation Talent |

### ANALYZER — Product QA & CX
| Action | Autonomie |
|---|---|
| Évaluer le code de BOB (score /20) | ✅ Pleine autonomie |
| Rendre un verdict VALIDÉ / Réserves / REJETÉ | ✅ Pleine autonomie |
| Inventer des critères d'évaluation non présents dans la spec | ❌ Jamais |
| Modifier du code directement | ❌ Jamais — feedback uniquement |

---

## 📝 Conventions de Commits — Obligatoires pour BOB

### Format
```
type(scope): description courte en impératif présent

[corps optionnel — contexte, trade-offs, why not autre chose]

Réf: feature_[ID] | adr-[ID] | spec:[critère d'acceptation]
```

### Types valides
| Type | Quand l'utiliser |
|---|---|
| `feat` | Nouvelle fonctionnalité (correspond à une spec) |
| `fix` | Correction de bug |
| `refactor` | Réécriture sans changement de comportement |
| `style` | Changements CSS/Tailwind purs, sans logique |
| `chore` | Config, dépendances, tooling |
| `docs` | Documentation uniquement |
| `test` | Ajout ou modification de tests |

### Scope = feature ID ou domaine
```
feat(feature_001): add sticky navigation with mobile sheet
feat(feature_002): implement hero section with Geist typography
fix(feature_003): correct contrast ratio on muted-foreground links
refactor(layout): extract Header into standalone server component
chore(deps): install shadcn button and badge components
```

### Règle de référence obligatoire
Chaque commit BOB **doit** inclure une référence à la spec ou au critère qui le déclenche :
```
feat(feature_002): add hero tagline with responsive type scale

Implémente critère d'acceptation #3 de la spec hero.
Choix responsive : text-4xl → text-6xl (md) aligné sur design_guide §Typographie.

Réf: feature_002_hero | spec:CA-3
```

---

## 🔍 Règles de Lecture — Ce que chaque agent lit en priorité

```
RAY    → client_vision.md + roadmap.md + ADR_INDEX.md
BOB    → specs/feature_[ID].md + design_guide.md + ADR pertinents
ANALYZER → specs/feature_[ID].md + code livré par BOB
```

---

## 📅 Sprint en cours

> **Maintenir cette section à jour à chaque début de sprint.**

| Champ | Valeur |
|---|---|
| Sprint | MVP — Portfolio produit |
| Phase active | SHIP (BOB) |
| Features en cours | feature_001 → feature_005 |
| Blockers connus | — |
| Prochaine milestone | Déploiement MVP |

---

## 🚫 Règles transversales (rappel condensé)

- Ne jamais coder sans spec `statut: VALIDÉE TALENT`
- Ne jamais modifier `/components/ui/`
- TypeScript strict : zéro `any`, zéro `@ts-ignore`
- Composants < 150 lignes — découper si dépassement
- Données jamais hardcodées dans les composants
- Consulter `agent-system/adr/ADR_INDEX.md` avant toute décision d'architecture
