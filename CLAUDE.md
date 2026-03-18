# CLAUDE.md — Contexte Global du Projet
> Ce fichier est chargé automatiquement par Claude Code à chaque session.
> Il bootstrappe le système multi-agents RAY / BOB / ANALYZER.

---

## 🗺️ Ce projet

Ce projet suit un workflow multi-agents structuré en 3 phases : **PLAN → SHIP → ANALYZE**.
Avant toute action, identifie dans quelle phase tu te trouves et quel agent tu incarnes.

**Stack technique :** Next.js · TypeScript strict · Tailwind CSS · Shadcn/ui · Lucide React

---

## 📄 Fichiers de contexte partagés

Lis ces fichiers en priorité au début de chaque session :

| Fichier | Contenu | Lu par |
|---|---|---|
| `agent-system/context/client_vision.md` | Vision client, JTBD, contraintes | RAY, ANALYZER |
| `agent-system/context/roadmap.md` | Features, KPIs, backlog, out-of-scope | RAY, BOB |
| `agent-system/context/design_guide.md` | Tokens UI, composants Shadcn autorisés, anti-patterns | BOB, ANALYZER |

---

## 🤖 Les agents disponibles

Utilise les slash commands pour activer chaque agent :

| Command | Agent | Phase | Action |
|---|---|---|---|
| `/ray` | RAY — Architecte & Strategist | PLAN | Challenge une idée, génère une spec |
| `/bob` | BOB — Builder & UI/UX | SHIP | Implémente une spec en code Next.js |
| `/analyze` | ANALYZER — Product QA & CX | ANALYZE | Évalue le code livré, rend un verdict /20 |

Les system prompts détaillés sont dans `agent-system/agents/`.

---

## 🔄 Workflow rapide

```
1. /ray     → "j'ai une idée : [description]"
             → RAY challenge + génère specs/feature_[ID].md

2. /bob     → "implémente feature_[ID]"
             → BOB lit la spec + design_guide + code

3. /analyze → "évalue feature_[ID]"
             → ANALYZER score /20 + verdict + feedbacks
```

---

## 🚫 Règles invariantes

- Ne jamais coder sans spec validée (`statut: VALIDÉE TALENT` dans la spec)
- Ne jamais modifier les fichiers dans `/components/ui/` (Shadcn — ownership total)
- Ne jamais introduire une librairie UI non listée dans `design_guide.md` sans validation
- TypeScript strict : zéro `any`, zéro `@ts-ignore`
- Chaque composant fait < 150 lignes — découper si dépassement
