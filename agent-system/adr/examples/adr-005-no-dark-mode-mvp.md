# ADR-005 — Pas de dark mode en MVP

**Date :** 2026-03-18
**Statut :** ✅ ACCEPTED
**Décideurs :** Le Talent
**Agents concernés :** BOB

---

## Contexte

Le dark mode est une feature couramment attendue sur un portfolio technique. Shadcn/ui supporte nativement
le dark mode via des classes CSS et des tokens CSS variables définis dans les deux modes (`:root` et `.dark`).
La question est de savoir si l'implémenter en MVP apporte une valeur suffisante par rapport au coût
en complexité de développement et de QA (double surface à tester, gestion du `prefers-color-scheme`,
persistance du choix utilisateur, etc.).

---

## Décision

**Le dark mode n'est pas implémenté en MVP.**

Les tokens `.dark` sont documentés dans `globals.css` et `design_guide.md` pour référence future,
mais la classe `.dark` n'est jamais appliquée — ni manuellement, ni via un provider de thème.
BOB ne crée pas de toggle, pas de `ThemeProvider`, pas de `next-themes`.

---

## Alternatives considérées

| Alternative | Raison de rejet |
|---|---|
| **Dark mode système uniquement (`prefers-color-scheme`)** | Complexité de QA similaire sans contrôle utilisateur — pire expérience pour un coût identique |
| **Dark mode avec toggle (next-themes)** | Dépendance supplémentaire, surface de bug doublée, impact non mesuré sur la perception de sobriété du portfolio |
| **Dark mode uniquement, pas de light** | Non retenu — le portfolio cible des contextes professionnels variés, le light mode est le plus lisible universellement |

---

## Conséquences

### ✅ Bénéfices attendus
- Surface de développement réduite — BOB ne gère qu'un seul mode
- QA ANALYZER plus rapide et plus fiable — une seule surface à évaluer
- Tokens `.dark` déjà documentés — le travail de préparation est fait

### ⚠️ Contraintes acceptées
- Les utilisateurs préférant le dark mode verront le light mode — acceptable en MVP, pas à long terme
- Toute couleur custom ajoutée par BOB doit être pensée light-first pour faciliter la migration future

### 🔗 Impact sur les agents
- **RAY** : Ne pas spécer de comportement dark mode dans les features MVP — le mentionner comme `[LATER]` si demandé par Le Talent
- **BOB** : Jamais d'import `next-themes`, jamais de `ThemeProvider` wrapping, jamais de classe `.dark` appliquée dynamiquement
- **ANALYZER** : La présence d'un toggle de thème ou d'un import `next-themes` est un comportement non spécifié → signaler comme dépassement de scope

---

## ADRs liés

- Dépend de : [ADR-002](adr-002-zinc-theme.md) — les tokens `.dark` qui rendront la migration possible sont définis dans le thème Zinc ; si ADR-002 est SUPERSEDED, cette décision doit être réévaluée
- Dépend de : [ADR-001](adr-001-shadcn-only.md) — indirectement, via la chaîne ADR-001 → ADR-002

---

## Révision

Cette décision doit être réexaminée si : Le Talent décide d'activer le dark mode post-MVP.
La migration sera facilitée par : tokens déjà définis dans `globals.css`, absence de couleurs hardcodées imposée par ADR-002.
Date de révision suggérée : sprint post-MVP V1.1.
