# roadmap.md
> **Usage** : Ce fichier est la source de vérité sur les priorités produit, l'état d'avancement des features et les KPIs associés.
> RAY le lit pour cadrer ses specs. ANALYZER s'y réfère pour évaluer la conformance.
> Mettre à jour après chaque sprint ou décision de pivot.

---

## 📌 Méta

**Projet :** Portfolio personnel — Amine Lamine
**Dernière mise à jour :** 2026-03-20
**Horizon actuel :** MVP Public — < 1 mois

---

## 🗺️ Vue d'ensemble — Phases

```
Phase 0 — Fondations (setup Next.js + design system)   ██████████  [Terminé]
Phase 1 — MVP Core (Hero + About + Contact)             ████░░░░░░  [En cours — 2/5]
Phase 2 — Case Studies (1–2 projets)                    ░░░░░░░░░░  [Post-MVP]
Phase 3 — IA Work / Contenu étendu                      ░░░░░░░░░░  [Non planifié]
```

---

## 🔴 NOW — MVP Core (Phase 1)

> Ce sur quoi BOB doit travailler en priorité absolue. Livrable : un site déployable sur Vercel.

| # | Feature | Spec | Statut | Critère de done |
|---|---|---|---|---|
| F-001 | Layout global + Navigation | `specs/feature_001_layout-navigation.md` | ✅ LIVRÉE (16/20 ANALYZER) | Header sticky, routing Next.js fonctionnel, responsive mobile/desktop |
| F-002 | Hero / Positionnement | `specs/feature_002_hero.md` | ⚠️ LIVRÉE — ANALYZER PENDING | Tagline + positionnement Design × IA lisible en < 5s, CTA visible |
| F-003 | About / Manifeste | `specs/feature_003_about-manifeste.md` | ✅ LIVRÉE — ANALYZER PENDING | Section narrative qui démontre la réflexion IA + leadership, sans ressembler à un CV |
| F-004 | Contact | `specs/feature_004_contact.md` | ✅ LIVRÉE — ANALYZER PENDING | CTA clair, lien email mailto fonctionnel, pas de stockage serveur |
| F-005 | Intégration Obsolet | `specs/feature_005_obsolet-cta.md` | ✅ LIVRÉE — ANALYZER PENDING | Section dédiée entre About et Contact, CTA outline vers newsletter |

---

## 🟡 NEXT — Post-MVP (Phase 2)

> Features à builder après le lancement MVP. Ne pas spécer avant que le MVP soit VALIDÉ en production.

| # | Feature | Valeur attendue | Effort estimé | Dépendances |
|---|---|---|---|---|
| F-006 | Case Study #1 | Démontrer la profondeur sur un projet réel | M | F-001 |
| F-007 | Case Study #2 | Diversifier les contextes montrés | M | F-006 |
| F-008 | Animations / Transitions | Renforcer le sentiment d'expertise et de soin | S | F-001, F-002 |
| F-009 | Analytics (Plausible) | Mesurer les KPIs définis dans client_vision.md | XS | F-001 |

---

## 🔵 LATER — Idées non priorisées

> Capturées, non évaluées. Ne pas passer en specs sans validation.

- Section "IA Work" dédiée — si le contenu Obsolet devient trop riche pour un simple lien
- Mode sombre — si l'identité visuelle le justifie post-MVP
- Open Graph / SEO avancé — meta tags, sitemap, structured data
- CMS headless (Sanity ou Contentlayer) — si la mise à jour du contenu devient fréquente

---

## ❌ OUT OF SCOPE (décisions actées)

> RAY doit refuser toute spec allant à l'encontre de ces décisions sans escalade au Talent.

| Feature écartée | Raison | Date |
|---|---|---|
| Blog intégré | Obsolet joue ce rôle — duplication contre-productive | 2026-03-18 |
| Authentification / espace privé | Hors scope MVP, complexité non justifiée | 2026-03-18 |
| Galerie type Dribbble | Contredit le positionnement — écrans sans contexte = anti-pattern | 2026-03-18 |
| Google Analytics | Contrainte RGPD + philosophie produit | 2026-03-18 |
| Liste de compétences / outils | Contredit la vision "expertise démontrée, pas revendiquée" | 2026-03-18 |

---

## ⚠️ Point de vigilance stratégique

> **Le MVP ne contient pas de case studies.**
> C'est une décision volontaire (contenu non encore prêt), mais elle crée un risque : un portfolio sans projets montrés peut affaiblir la conversion côté recruteur et client prescripteur.
>
> **Mitigants à intégrer dans F-002 et F-003 :**
> Le Hero et le About/Manifeste doivent compenser en densité de signal — démontrer la valeur via le raisonnement et la voix, pas via des livrables visuels.
> RAY doit en tenir compte dans les specs F-002 et F-003.

---

## 📊 KPIs Produit

| KPI | Baseline | Cible | Méthode de mesure |
|---|---|---|---|
| Positionnement compris en < 10s | Non mesuré | > 70% des visiteurs scrollent après le hero | Plausible (scroll depth) |
| Pages vues / session | Non mesuré | > 2.5 pages en moyenne | Plausible |
| Taux de clic vers Obsolet | Non mesuré | > 15% des visiteurs | Plausible (outbound clicks) |
| Prises de contact qualifiées | 0 | > 2/mois au lancement | Comptage manuel |

---

## 🗓️ Changelog Roadmap

| Date | Changement | Décidé par |
|---|---|---|
| 2026-03-18 | Initialisation roadmap — MVP défini (F-001 à F-005) | Le Talent |
| 2026-03-18 | Case studies reportés en Phase 2 — contenu non prêt | Le Talent |
| 2026-03-20 | F-001 livrée — ANALYZER 16/20 ⚠️ (1 bug mineur ouvert : justify-center) | BOB + ANALYZER |
| 2026-03-20 | F-002 livrée — validée visuellement, ANALYZER en attente | BOB |
| 2026-03-20 | Figma MCP connecté (figma-console-mcp + Bridge DS /design-workflow) | Le Talent |
