# ADR-003 — Geist comme unique famille typographique

**Date :** 2026-03-18
**Statut :** ✅ ACCEPTED
**Décideurs :** Le Talent
**Agents concernés :** BOB

---

## Contexte

Le choix typographique est la décision de design la plus visible d'un portfolio éditorial.
Next.js 15 intègre nativement Geist (font Vercel) — sans requête réseau externe, sans FOUT (Flash of Unstyled Text).
La question est de savoir si une font custom supplémentaire (serif éditoriale, display expressif…) apporte
une valeur justifiant la complexité d'un chargement externe.

---

## Décision

**Nous utilisons exclusivement Geist (GeistSans + GeistMono), intégré via le package Next.js natif.**

```tsx
// layout.tsx — configuration attendue
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
```

Aucune autre font ne doit être importée depuis Google Fonts, Fontsource ou tout autre CDN externe.

---

## Alternatives considérées

| Alternative | Raison de rejet |
|---|---|
| **Google Fonts (ex: Playfair + Inter)** | Requête réseau externe, risque de FOUT, complexité de loading strategy |
| **Fontsource (auto-hébergé)** | Viable techniquement, mais bénéfice incrémental vs. Geist natif ne justifie pas l'ajout en MVP |
| **Font system locale (system-ui)** | Rendu incohérent entre OS — inacceptable pour un portfolio de designer |
| **Custom variable font** | Complexité, poids, et impact sur Core Web Vitals non justifiés en MVP |

---

## Conséquences

### ✅ Bénéfices attendus
- Zéro requête font externe — CLS et LCP optimaux sans configuration
- Cohérence absolue du rendu entre navigateurs et OS
- GeistMono disponible pour les extraits de code techniques dans le portfolio

### ⚠️ Contraintes acceptées
- L'expressivité typographique est limitée à une seule famille (deux coupes : sans + mono)
- La hiérarchie visuelle repose entièrement sur la taille, le poids et l'espacement — pas sur le contraste de familles
- Si une direction créative forte (serif éditorial, display expressif) est souhaitée en V2, un ADR de remplacement sera nécessaire

### 🔗 Impact sur les agents
- **RAY** : Ne pas spécer de font custom dans les feature specs — référencer les classes Tailwind de l'échelle typo définie dans `design_guide.md §Typographie`
- **BOB** : Jamais d'import `@import url('...')` ou de `next/font/google` — Geist uniquement via `geist/font/sans`
- **ANALYZER** : Toute import de font externe est un critère de rejet

---

## ADRs liés

- Indépendant des autres ADRs de stack UI.
- Note : l'intégration native Geist repose sur Next.js 15 — si le framework change, cette décision doit être réévaluée.

---

## Révision

Cette décision doit être réexaminée si : une évolution vers un registre visuel plus expressif est validée par Le Talent (ex : ajout d'une font serif pour les titres de case studies).
Date de révision suggérée : post-MVP, lors de la phase case studies.
