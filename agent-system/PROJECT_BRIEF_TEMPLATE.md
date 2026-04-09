# Project Brief — [Nom du Projet]
> **Ce document est le point d'entrée unique du système multi-agents.**
> Il doit être rempli AVANT la première session `/jo`.
> Une fois validé, il alimente directement `client_vision.md`, `roadmap.md` et `design_guide.md`.
>
> **Temps de remplissage estimé : 45–90 minutes.**
> Un brief incomplet produit des specs correctes mais mal dirigées. Investi ici, récupéré partout.

---

## 🗂️ Méta

| Champ | Valeur |
|---|---|
| **Nom du projet** | `[ex : Portfolio personnel / App SaaS de suivi / Dashboard ops]` |
| **Date de création** | `[YYYY-MM-DD]` |
| **Auteur du brief** | `[Ton prénom — tu es le Talent, décideur final]` |
| **Type de projet** | `[ ] Produit interne  [ ] Produit client  [ ] Projet perso  [ ] Prototype/POC` |
| **Horizon MVP** | `[ex : 3 semaines / 1 mois / indéfini]` |
| **Statut** | `[ ] DRAFT  [ ] VALIDÉ — prêt pour /jo` |

---

## 1 · Vision

> ⚡ **Remplir cette section en priorité absolue.** C'est la boussole de JO pour chaque spec et de DO pour chaque évaluation.

### 1.1 — La proposition de valeur en une phrase
> Format : "En arrivant sur [produit], le visiteur/utilisateur comprend immédiatement [différenciation] — il est face à [positionnement unique]."
> Contrainte : pas de virgule. Une seule idée. Si tu ne peux pas la formuler, le projet n'est pas encore assez cadré.

```
[À COMPLÉTER]
```

### 1.2 — Pourquoi maintenant ?
> Quel contexte, tension ou opportunité rend ce projet pertinent en ce moment précis ?
> (Ex : "les case studies Dribbble ne montrent plus la valeur, le marché cherche du raisonnement" / "la migration legacy crée une fenêtre de 6 mois")

```
[À COMPLÉTER]
```

### 1.3 — Définition du succès à 3 mois
> Si le projet est un succès dans 3 mois, qu'est-ce qui s'est passé concrètement ? (Pas de métriques ici — des situations réelles.)
> Ex : "Un recruteur m'a contacté sans que j'aie eu à lui envoyer le lien" / "L'équipe a arrêté d'utiliser Notion pour ça"

```
[À COMPLÉTER]
```

---

## 2 · Utilisateurs

> **Règle : 1 à 3 personas maximum.** Au-delà, le produit ne sait plus pour qui il est.
> Pour chaque persona, remplir les 4 champs. Pas de "user type générique".

### Persona 1 — [Nom ou archétype]

| Champ | Valeur |
|---|---|
| **Profil** | `[Rôle, contexte, séniorité]` |
| **Comportement clé** | `[Ce qu'il fait dans le monde réel avant d'arriver sur ton produit]` |
| **Stack mentale** | `[Ce qu'il cherche vraiment — pas ce qu'il dit chercher]` |
| **Risque d'échec** | `[Ce qui le fait partir sans convertir]` |

**JTBD :** *"Quand [situation déclenchante], je veux [action/motivation], pour [résultat attendu]."*
```
[À COMPLÉTER]
```

---

### Persona 2 — [Nom ou archétype]  *(supprimer si non applicable)*

| Champ | Valeur |
|---|---|
| **Profil** | `[...]` |
| **Comportement clé** | `[...]` |
| **Stack mentale** | `[...]` |
| **Risque d'échec** | `[...]` |

**JTBD :** *"Quand [...], je veux [...], pour [...]."*
```
[À COMPLÉTER]
```

---

### Persona 3 — [Nom ou archétype]  *(supprimer si non applicable)*

| Champ | Valeur |
|---|---|
| **Profil** | `[...]` |
| **Comportement clé** | `[...]` |
| **Stack mentale** | `[...]` |
| **Risque d'échec** | `[...]` |

**JTBD :** *"Quand [...], je veux [...], pour [...]."*
```
[À COMPLÉTER]
```

---

## 3 · Registre émotionnel & esthétique

> Cette section alimente directement `design_guide.md` et cadre la posture de BOB.
> **Ne pas écrire de specs fonctionnelles ici — uniquement le ressenti cible.**

### 3.1 — Ce que l'utilisateur doit ressentir

| Moment | Émotion cible |
|---|---|
| **Arrivée (0–5 secondes)** | `[Ex : "Je suis au bon endroit — ce profil est différent"]` |
| **Exploration (5–60 secondes)** | `[Ex : "Il sait ce qu'il fait et peut l'expliquer"]` |
| **Départ** | `[Ex : "Je veux garder ce contact" / "Je vais revenir"]` |

### 3.2 — 3 mots qui définissent l'esthétique
> Ces mots guident les choix de BOB quand la spec est ambiguë. Sois précis : "minimal" n'est pas un mot.

```
[Mot 1] · [Mot 2] · [Mot 3]
Ex : Sobre · Éditorial · Systémique
Ex : Dense · Tactile · Autoritaire
Ex : Fluide · Ouvert · Généreux
```

### 3.3 — Références visuelles (optionnel mais recommandé)
> 2–3 produits/sites/interfaces dont l'esthétique t'inspire. + Ce que tu en retiens spécifiquement.

| Référence | Ce que j'en retiens |
|---|---|
| `[URL ou nom]` | `[Ex : "La densité d'info de leur dashboard — pas le style"]` |
| `[URL ou nom]` | `[...]` |
| `[URL ou nom]` | `[...]` |

---

## 4 · Périmètre

> **C'est la section la plus sous-estimée.** Les "out of scope" explicites sont aussi importants que les features.
> JO refusera toute spec qui contredit les décisions de non-périmètre — sauf escalade explicite.

### 4.1 — Features MVP (ce qui doit exister au lancement)

| # | Feature | Valeur pour qui | Priorité |
|---|---|---|---|
| F-001 | `[Nom]` | `[Persona cible]` | `[ ] P0  [ ] P1  [ ] P2` |
| F-002 | `[Nom]` | `[...]` | `[ ] P0  [ ] P1  [ ] P2` |
| F-003 | `[Nom]` | `[...]` | `[ ] P0  [ ] P1  [ ] P2` |

> **P0** = bloquant pour le lancement · **P1** = important mais contournable · **P2** = nice-to-have

### 4.2 — Post-MVP (capturé mais pas committé)

```
[Liste libre de features envisagées pour après le MVP]
[Ex : "Système de filtrage avancé", "Mode sombre", "Export PDF"]
```

### 4.3 — Décisions de non-périmètre (❌ Out of Scope — actées)

> Ce que le produit NE SERA PAS. Formuler en positif : "ce produit n'est pas X, parce que Y."

| Ce qui est écarté | Raison |
|---|---|
| `[Feature ou direction]` | `[Ex : "Contredit le positionnement / Hors contrainte technique / Post-MVP uniquement"]` |
| `[...]` | `[...]` |

---

## 5 · Contraintes

> Ces contraintes sont des données non-négociables pour JO. Elles bornent chaque spec.

### 5.1 — Contraintes techniques

```
[ ] Solo builder — architecture conservatrice, zéro over-engineering
[ ] Contrainte d'infra : [Ex : Vercel free / AWS existing / pas de BDD]
[ ] Pas d'auth en MVP
[ ] Stack imposée : [Ex : Next.js 15 / Vue / Django]
[ ] Autre : [...]
```

### 5.2 — Contraintes de temps & organisation

```
Délai MVP : [Ex : 4 semaines]
Équipe : [Ex : solo / 2 devs + 1 PD]
Disponibilité : [Ex : 2 jours/semaine]
Deadline externe : [Ex : démo client le [date] / lancement produit le [date]]
```

### 5.3 — Contraintes légales & compliance

```
[ ] RGPD — pas de tracking publicitaire, analytics minimaliste
[ ] Données sensibles : [Ex : santé / finance — préciser les contraintes]
[ ] Accessibilité : niveau cible [WCAG A / AA / AAA]
[ ] Autre : [...]
```

---

## 6 · Stack & Design System

> Remplir ce que tu sais déjà. Laisser vide ce que JO doit décider.
> Ce qui est rempli ici devient une règle invariante pour BOB.

### 6.1 — Stack technique

| Couche | Technologie | Statut |
|---|---|---|
| Framework | `[Ex : Next.js 15 App Router]` | `[ ] Décidé  [ ] À évaluer` |
| Styling | `[Ex : Tailwind CSS 4.x]` | `[ ] Décidé  [ ] À évaluer` |
| Composants UI | `[Ex : Shadcn/ui — thème Zinc]` | `[ ] Décidé  [ ] À évaluer` |
| Typo | `[Ex : Geist / Syne / à décider]` | `[ ] Décidé  [ ] À évaluer` |
| Auth | `[Ex : Aucune en MVP / NextAuth]` | `[ ] Décidé  [ ] À évaluer` |
| BDD | `[Ex : Aucune / Supabase / PlanetScale]` | `[ ] Décidé  [ ] À évaluer` |
| Déploiement | `[Ex : Vercel free]` | `[ ] Décidé  [ ] À évaluer` |

### 6.2 — Règles de code invariantes

```
[ ] TypeScript strict — zéro any, zéro @ts-ignore
[ ] Composants < 150 lignes — découper si dépassement
[ ] Jamais modifier /components/ui/ (Shadcn ownership)
[ ] Aucune lib UI non validée sans escalade
[ ] Autre : [...]
```

---

## 7 · KPIs

> Sans KPIs, DO ne peut pas évaluer si une feature sert les objectifs.
> Format : une métrique mesurable + une cible + une méthode de mesure.

| KPI | Baseline | Cible | Comment mesurer |
|---|---|---|---|
| `[Ex : Positionnement compris en < 10s]` | `[Non mesuré]` | `[> 70% scroll après hero]` | `[Scroll depth Plausible]` |
| `[Ex : Taux de conversion contact]` | `[0]` | `[> 2/mois]` | `[Comptage manuel]` |
| `[Ex : Pages vues / session]` | `[Non mesuré]` | `[> 2.5]` | `[Analytics]` |

---

## 8 · Ce que ce produit N'EST PAS

> Section souvent oubliée — la plus utile pour éviter les dérives de JO et les mauvaises specs.
> Formuler ce que le produit refuse d'être, avec la raison.

```
❌ [Ce que ce produit n'est pas] — parce que [raison stratégique]
❌ [...]
❌ [...]
Ex :
❌ Un CV en ligne — les recruteurs avancés n'en veulent pas, ça signale "exécutant"
❌ Un blog — la newsletter joue ce rôle, dupliquer divise l'attention
❌ Un outil de gestion — hors périmètre, complexité non justifiée pour le MVP
```

---

## 9 · Questions ouvertes

> Ce qui n'est pas encore décidé et qui devra être arbitré par JO ou par toi pendant le projet.

| Question | Urgence | Décideur | Date limite |
|---|---|---|---|
| `[Ex : Faut-il un CMS dès le MVP ?]` | `[ ] Bloquante  [ ] Importante  [ ] Nice-to-have` | `[Talent / JO]` | `[YYYY-MM-DD ou "avant F-XXX"]` |
| `[...]` | `[...]` | `[...]` | `[...]` |

---

## ✅ Checklist de validation avant `/jo`

> Ce brief est prêt si toutes les cases suivantes sont cochées.

```
[ ] La vision (§1.1) tient en une phrase sans virgule
[ ] Chaque persona a un JTBD formulé à la première personne
[ ] Les features MVP sont priorisées (P0 / P1 / P2)
[ ] Au moins 3 décisions de non-périmètre sont actées (§4.3)
[ ] Les contraintes techniques bloquantes sont documentées (§5)
[ ] Au moins 2 KPIs mesurables sont définis (§7)
[ ] La section "Ce que ce produit N'EST PAS" (§8) contient au moins 3 items
[ ] Le statut du brief est passé à "VALIDÉ — prêt pour /jo"
```

---

## 📝 Changelog

| Date | Changement | Par |
|---|---|---|
| `[YYYY-MM-DD]` | Création initiale | `[Talent]` |
| `[YYYY-MM-DD]` | `[Description]` | `[...]` |
