# ADR Index — Architecture Decision Records
> Registre de toutes les décisions d'architecture, design et business du projet.
> **Maintenu par : RAY** — une entrée par décision structurante.
> **Lu par : tous les agents en début de session** avant toute décision d'implémentation.

---

## Pourquoi des ADRs dans un système multi-agents ?

Dans un système où BOB implémente sans nécessairement connaître le contexte des sessions précédentes,
le risque est de reproduire une approche déjà écartée ou de contredire une décision validée.
Les ADRs sont la mémoire longue du projet — ils comblent le gap entre les specs (ce qu'on build)
et le contexte (pourquoi on l'a construit ainsi).

**Règle** : Avant toute décision d'architecture ou de dépendance, consulter cet index.
Si une décision similaire existe déjà en statut ACCEPTED, elle s'applique — pas de contournement sans nouvel ADR.

---

## Index des décisions

| ID | Titre | Domaine | Statut | Date |
|---|---|---|---|---|
| [ADR-001](adr-001-shadcn-only.md) | Shadcn/ui comme seule librairie de composants UI | UI/Stack | ✅ ACCEPTED | 2026-03-18 |
| [ADR-002](adr-002-zinc-theme.md) | Thème Zinc — sobriété éditoriale | Design System | ✅ ACCEPTED | 2026-03-18 |
| [ADR-003](adr-003-geist-font-only.md) | Geist comme unique famille typographique | Typography | ✅ ACCEPTED | 2026-03-18 |
| [ADR-004](adr-004-typescript-strict.md) | TypeScript strict — zéro any, zéro @ts-ignore | DX/Qualité | ✅ ACCEPTED | 2026-03-18 |
| [ADR-005](adr-005-no-dark-mode-mvp.md) | Pas de dark mode en MVP | Scope | ✅ ACCEPTED | 2026-03-18 |
| [ADR-006](adr-006-nextjs-app-router.md) | Next.js App Router + stratégie Server/Client Components | Architecture | ✅ ACCEPTED | 2026-04-02 |
| [ADR-007](adr-007-motion-level-system.md) | Système de niveaux motion L0–L3 (`motion` par défaut, GSAP opt-in) | Motion/Animation | ✅ ACCEPTED | 2026-04-09 |

---

## Statuts possibles

| Statut | Signification |
|---|---|
| `PROPOSED` | En discussion — pas encore actif |
| `ACCEPTED` | Décision validée par Le Talent — s'applique à tous les agents |
| `DEPRECATED` | Remplacée par une décision plus récente |
| `SUPERSEDED` | Voir ADR de remplacement lié |

---

## Comment créer un nouvel ADR

1. Copier `ADR_TEMPLATE.md`
2. Nommer `adr-[NNN]-[titre-kebab-case].md` (NNN = prochain numéro séquentiel)
3. Remplir toutes les sections
4. Ajouter une ligne dans ce fichier
5. Soumettre au Talent pour validation avant de marquer `ACCEPTED`

> RAY est responsable de créer les ADRs. BOB peut en proposer un si un choix d'implémentation
> a des implications structurantes — mais c'est RAY qui le formate et Le Talent qui valide.
