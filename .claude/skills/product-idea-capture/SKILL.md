---
name: product-idea-capture
description: >
  Capturer, structurer et publier des idées produit dans Notion selon un flow
  hypothesis-driven. Utilise ce skill dès que l'utilisateur décrit une idée de feature,
  une friction UX, une amélioration produit, ou toute formulation comme "j'ai une idée",
  "et si on faisait", "je veux tester", "ça manque dans le produit". Déclenche aussi
  pour les commandes "résultat" (mise à jour post-test) et "exporte en [format]"
  (génération d'extrait pour démo, brief discovery ou Slack).
---

# Product Idea Capture — Hypothesis-Driven Flow

## Contexte du système

Cet outil structure les idées produit **avant** qu'elles soient présentées à l'équipe, au PM ou au manager. L'objectif est de produire un **artefact de communication interne** : crédible, lisible sans contexte, et orienté vers une décision ou une action.

Le template final doit pouvoir être envoyé en Notion ou Slack avant une réunion et tenir seul, sans explication verbale supplémentaire.

**Langue** : Français systématiquement.
**Ton** : Product Designer senior — factuel, orienté valeur, sans jargon creux.

**Notion database cible :**
- Nom : `Idea → Test L`
- ID : `2ef5d104f3c9808eaaf1c607dd3060b4`
- Source ID (parent) : `2ef5d104-f3c9-8007-8ef1-000b10b30445`
- Colonne d'intake : `Ideas`
- Propriétés : `Name`, `Status`, `Type`, `Effort`, `Impact`, `Confidence`, `Metric / Signal`, `Success criteria`, `Next action`

---

## Flow complet

### ÉTAPE 0 — DEDUPLICATE

Avant tout, recherche dans la database Notion si une idée similaire existe déjà.

Chercher par : titre proche, friction similaire, ou même cluster thématique. Une correspondance partielle suffit — mieux vaut signaler un faux positif que rater un doublon.

- Si oui → signale le titre de la page existante, propose d'enrichir plutôt que de créer.
- Si non → continue vers ÉTAPE 1.

---

### ÉTAPE 1 — THINK (silencieux)

Analyser l'idée pour identifier :
- La situation / tension observée
- Le profil utilisateur concerné
- Le blocage ou friction sous-jacent
- La valeur attendue (utilisateur / produit / business)
- Le type d'idée parmi :
  - `UX fix` → test rapide avec utilisateurs ou analytics
  - `Feature exploration` → prototype ou spike technique
  - `Workflow / agent` → test sur cas réel avec golden set
  - `Copy / communication` → A/B ou interview
- Une hypothèse testable réaliste
- Un test concret faisable en 1-3 jours
- Le signal de succès le plus simple

> Si l'idée est trop vague, poser **UNE SEULE question ciblée** avant de continuer.

---

### ÉTAPE 2 — WRITE

Remplir le template intégralement. Aucun champ vide — proposer une valeur par défaut si nécessaire.

```
**Titre :** [titre court, orienté action, 5-8 mots max]
**Type :** [UX fix / Feature exploration / Workflow-agent / Copy-communication]

**🔎 Contexte**
- Situation observée : [ce qui se passe concrètement]
- Pour qui : [profil utilisateur précis]
- Où ça coince : [la friction ou le manque]
- Valeur attendue : [pour l'utilisateur / le produit / le business — 1 ligne]

**💡 Hypothèse**
Je pense que si [action/changement] alors [résultat attendu] parce que [raisonnement]

**🧪 Test (timebox)**
- Durée : [ex: 2 jours]
- Ce que je fais : [action concrète et minimale]
- Ce que je mesure : [signal ou KPI observable]
- Critère de succès : [seuil simple et binaire, observable sans dev supplémentaire]
- Si ça échoue, j'apprends : [apprentissage attendu]

**⚠️ Risque + garde-fou**
- Risque principal : [1 seul risque]
- Garde-fou : [comment le limiter]

**🙋 Ask**
[Rôle] → [décision ou action attendue] → [avant quand / dans quel contexte]
```

---

### ÉTAPE 3 — CONFIRM

Afficher le template rempli, puis poser les deux questions suivantes en une seule fois :

> "Critère de succès OK ? Et scoring rapide : Impact / Effort / Confidence (chacun 1-3) ?"

→ Si le critère n'est pas observable sans dev supplémentaire, proposer une reformulation avant de continuer.
→ Une fois les scores reçus, demander : **"Je publie dans Notion colonne Ideas ?"**

**Mode rapide** : si l'utilisateur dit "publie directement" ou "vas-y", sauter la validation du critère et demander uniquement les scores I/E/C avant de publier.

---

### ÉTAPE 4 — PUBLISH

Une fois confirmé, créer une page Notion avec :
- `Name` : titre de l'idée
- `Status` : `Ideas`
- `Type` : type d'idée
- `Effort` / `Impact` / `Confidence` : scores saisis
- `Metric / Signal` : ce qu'on mesure
- `Success criteria` : critère de succès
- `Next action` : l'Ask reformulé en action
- Corps de page : contenu complet du template en markdown

**Séquence fiable :** toujours fetch le schéma de la database avant de créer la page.

---

## Commandes disponibles

### `résultat`
Quand l'utilisateur décrit ce qu'il a appris après un test :
1. Identifier la page Notion correspondante
2. Mettre à jour le statut : `Validated` / `Killed` / `Pivot`
3. Ajouter un bloc "Résultat" en bas de page avec la date, l'apprentissage et la décision

### `exporte en [format]`
Générer un extrait adapté au contexte de communication :

| Format | Contenu |
|---|---|
| `démo` | Contexte + Hypothèse + Test (structure slide) |
| `brief discovery` | Hypothèse + Critère de succès + Ask |
| `slack` | Contexte + Ask uniquement, ton direct, max 5 lignes |

---

## Principes de qualité

**Le template doit tenir seul** — lisible par quelqu'un qui n'a pas assisté à la conversation.

**Le critère de succès doit être binaire** — on peut répondre oui/non à la fin du test.

**L'Ask est une demande d'alignement, pas une ouverture de discussion** :
- Format : `[Rôle] → [action attendue] → [avant quand / dans quel contexte]`
- Exemples corrects :
  - `PM → Go/No-go pour intégrer en discovery sprint 42`
  - `Eng → Évaluation faisabilité, 30 min avant jeudi`
  - `Manager → Validation de l'angle avant démo vendredi`

**La valeur attendue ancre l'idée dans le réel** — une ligne qui répond à "pourquoi maintenant ?" avant même que la question soit posée.
