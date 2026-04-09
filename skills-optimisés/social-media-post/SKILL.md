---
name: social-media-post
description: >
  Créer des posts LinkedIn professionnels et à forte valeur éditoriale sur les thèmes
  du design produit, de l'IA appliquée et de l'orchestration agentique. Utilise ce skill
  dès que l'utilisateur demande un post LinkedIn, un carousel, un thread, un "artefact à voler",
  du contenu pour sa série agentic design, ou toute formulation comme "écris-moi un post",
  "crée un carousel", "rédige un thread", "post LinkedIn sur [sujet]". Déclenche aussi
  pour les révisions, reformulations ou déclinaisons de contenu existant.
---

# Social Media Post — LinkedIn Agentic Design Series

## Contexte éditorial

Cette série LinkedIn cible un profil précis de Product Designer / AI Orchestration Designer.
Avant de produire quoi que ce soit, consulte le profil ICP dans `references/icp.md`.

**Langue** : Français systématiquement.
**Ton** : Expert praticien — pas un consultant qui survole, pas un évangéliste IA.
Quelqu'un qui a les mains dans les produits, qui structure sa pensée, qui partage des outils réels.

**Voix éditoriale — principes immuables** :
- Pas de hype. Pas de "révolution IA". Pas de buzzwords vides.
- Des problèmes réels → des frameworks actionnables → de la valeur immédiate.
- La clarté avant la sophistication. La rigueur avant le style.
- Chaque post doit répondre à une friction vécue par l'ICP.
- Le format "artefact à voler" est une mécanique centrale : si le post inclut un template/canvas,
  il doit être utilisable tel quel, sans adaptation.

**Ce qu'on évite absolument** :
- Listes plates sans raisonnement
- Conclusions vagues ("l'IA change tout")
- Questions d'engagement artificielles ("Et vous, qu'en pensez-vous ? 🤔")
- Emojis décoratifs sans fonction structurante
- Titres clickbait déconnectés du contenu

---

## Matrice d'Angles Éditoriaux

La redondance tue l'engagement. Avant de rédiger, il faut choisir un angle — et surtout ne pas
répéter le même angle sur un cluster thématique déjà couvert récemment.

### Les 7 angles disponibles

| Angle | Posture | Mécanique d'accroche typique |
|---|---|---|
| `DIAGNOSTIC` | Nommer un problème invisible que l'audience n'a pas encore formulé | "Ce n'est pas X qui pose problème. C'est Y." |
| `FRAMEWORK` | Outiller la pensée avec un modèle structurant réutilisable | "Voici comment structurer [situation] en 3 dimensions." |
| `CONTRE-PIED` | Renverser une croyance répandue dans le milieu | "Tout le monde fait X. C'est une erreur structurelle." |
| `CAS CONCRET` | Ancrer dans le réel via un récit situé | "J'étais en workshop la semaine dernière..." |
| `DÉCISION` | Cartographier un trade-off avant qu'il ne soit trop tard | "Tu dois choisir entre A et B. Voici la vraie question derrière ce choix." |
| `TERRAIN MINÉ` | Pointer ce qu'on rush collectivement sans le voir | "On parle trop de X. Personne ne parle de Y — et c'est là que ça casse." |
| `CARTOGRAPHIE` | Produire une taxonomie ou une carte d'un espace complexe | "Il y a 4 types de [concept]. La plupart n'en voient que 2." |

### Les 5 clusters thématiques

Chaque post appartient à un cluster. Identifier le cluster permet de détecter les répétitions.

- **Cluster A — Rôle & responsabilité de l'agent** : définition de rôle, mission, scope, guardrails
- **Cluster B — Processus design** : discovery, delivery, POC → prod, scaling agentic systems
- **Cluster C — Interface humain–agent** : escalade, behavioral states, confiance, feedback loops
- **Cluster D — Outils & frameworks praticiens** : canvases, templates, méthodes actionnables
- **Cluster E — Positionnement & contre-pieds** : épistémologie du secteur, croyances à challenger

### Protocole obligatoire avant chaque production

Avant d'écrire une seule ligne, exécuter cette séquence :

```
1. IDENTIFIER le cluster thématique du post demandé
2. DEMANDER (ou inférer depuis le contexte) : quel angle a déjà été utilisé récemment sur ce cluster ?
   → Si l'utilisateur ne sait pas : choisir l'angle le plus orthogonal au FRAMEWORK par défaut
3. SÉLECTIONNER un angle différent du précédent sur ce cluster
4. NOMMER l'angle choisi explicitement avant de commencer la rédaction
   → Format : "Angle retenu : [NOM] — [Justification en 1 phrase]"
5. ADAPTER la mécanique d'accroche en conséquence (voir colonne "Mécanique d'accroche typique")
```

**Règle de priorité** : si l'utilisateur ne précise pas d'angle et ne donne pas d'historique,
ne pas tomber par défaut sur `FRAMEWORK`. C'est l'angle le plus utilisé, donc le plus saturé.
Préférer `DIAGNOSTIC`, `CONTRE-PIED` ou `CAS CONCRET` comme alternative par défaut.

---

## Format 1 — Post LinkedIn (texte seul)

### Structure type

```
[ACCROCHE — 1 à 2 lignes max]
Doit créer une tension, poser un paradoxe, ou nommer une friction vécue.
Pas de question rhétorique molle. Pas de stat sans source.
La mécanique d'accroche doit être cohérente avec l'angle choisi.

[CORPS — 3 à 6 blocs]
Chaque bloc = 1 idée, 2 à 4 lignes.
Espacement visuel entre les blocs (ligne vide).
Progression logique : problème → cadre → solution / nuance.
Peut inclure une liste numérotée si elle structure un raisonnement (pas pour faire du volume).

[ARTEFACT / FRAMEWORK CENTRAL — optionnel mais recommandé]
Si le post présente un outil ou canvas :
→ Le nommer clairement
→ Lister ses composants
→ Dire comment l'utiliser

[CLÔTURE]
1 à 2 lignes. Synthèse + ouverture ou tension à laisser.
Pas de question banale. Peut être une affirmation forte.

[SIGNATURE + CTA]
Bloc obligatoire, présent sur TOUS les formats (post, carousel, thread).
Placé après la clôture, avant les hashtags.

Format fixe :
---
Moi, c'est Amine Lamine, Product Designer & Creative AI-Driven explorer.
[CTA — 1 ligne, adapté au contenu du post]

Règles du CTA :
- 1 seule action demandée, claire et directe
- Adapté au contenu : invitation à sauvegarder, à réagir, à partager, à tagger un collègue
- Exemples de CTA :
  → "Sauvegarde ce post si tu bosses sur des produits IA."
  → "Partage à quelqu'un qui confond feature IA et orchestration."
  → "Dis-moi en commentaire quelle friction tu rencontres le plus souvent."
  → "Suis la série pour les prochains artefacts à voler."
- Ne jamais utiliser de question molle générique ("Et toi, qu'en penses-tu ?")
- Ton : direct, sans fioriture, cohérent avec la voix éditoriale

[HASHTAGS]
3 à 5 max. Pertinents, pas décoratifs.
Exemples de la série : #AgentDesign #AIProduct #OrchestrationDesign #UXAgentic #ProductAI
```

### Règles de longueur
- Post court : 800–1200 caractères. Idéal pour les insights nets, les angles CONTRE-PIED ou DIAGNOSTIC.
- Post long : 1500–2500 caractères. Réservé aux frameworks complets, CAS CONCRET ou CARTOGRAPHIE.
- Ne jamais dépasser 2800 caractères (coupure LinkedIn).

### Checklist avant livraison
- [ ] Angle explicitement nommé et justifié avant la rédaction
- [ ] L'angle est différent du post précédent sur ce cluster thématique
- [ ] L'accroche est cohérente avec la mécanique de l'angle choisi
- [ ] Le corps progresse logiquement (pas une liste plate)
- [ ] S'il y a un artefact, il est utilisable immédiatement
- [ ] Aucun buzzword vide
- [ ] Clôture mémorable et non-banale
- [ ] Signature + CTA présents en fin de post
- [ ] 3 à 5 hashtags cohérents avec la série

---

## Format 2 — Carousel (structure multi-slides)

### Principe
Un carousel LinkedIn = 2 à 10 slides. Chaque slide = une unité visuelle autonome.
L'objectif : que quelqu'un qui scroll vite comprenne la valeur en 3 slides.

### Structure type

```
SLIDE 1 — COUVERTURE
Titre accrocheur (max 8 mots)
Sous-titre optionnel (contexte / promesse)
Numéro de post si série (ex : #03)

SLIDE 2 — PROBLÈME / TENSION
La friction que ce carousel résout.
1 à 3 lignes. Doit résonner immédiatement avec l'ICP.

SLIDES 3 à N-1 — CONTENU
Chaque slide = 1 point clé
Structure recommandée par slide :
  - Titre court (3 à 6 mots)
  - Corps : 2 à 5 lignes max
  - Optionnel : numéro, label de section

SLIDE FINALE — SYNTHÈSE + CTA
Récap en 1 phrase.
CTA : "Sauvegarde ce carousel" ou invitation directe adaptée au contenu.
Hashtags ici ou sur le post d'accompagnement.
```

### Règles de production
- Toujours produire le texte de chaque slide en clair, labelisé `SLIDE N`
- Indiquer la hiérarchie visuelle : TITRE / CORPS / LABEL
- Maximum 10 slides. Idéal : 6 à 8.

### Checklist avant livraison
- [ ] Angle nommé et différent du précédent sur le cluster
- [ ] Slide 1 donne envie de swiper
- [ ] Chaque slide tient seule (compréhensible hors contexte)
- [ ] Progression narrative cohérente
- [ ] Slide finale synthétise + invite à agir
- [ ] Aucune slide surchargée (max 5 lignes de corps)
- [ ] Signature + CTA présents dans le post d'accompagnement

---

## Format 3 — Thread / Mini-série

### Principe
Un thread = séquence de posts liés, publiés sur plusieurs jours ou en un bloc.
Chaque post du thread est autonome ET fait partie d'un arc narratif.

### Structure type

```
POST 0 — ANNONCE DE SÉRIE (optionnel)
Annonce la série, pose le problème central, numérote les épisodes.
Donne envie de suivre la suite.

POST 1 — TENSION / DIAGNOSTIC
Le problème que la série va résoudre.
Doit résonner immédiatement.

POST 2 à N-1 — DÉVELOPPEMENT
Chaque post = 1 angle du problème ou 1 couche du framework.
Référence le post précédent avec une phrase de transition légère.
Peut inclure un artefact par post.

POST FINAL — SYNTHÈSE
Relie tous les fils.
Peut pointer vers une ressource, un canvas complet, ou une invitation à discuter.
```

### Règles de production
- Toujours produire la série complète en une fois (pas poste par poste)
- Labéliser : `POST 1/N`, `POST 2/N`, etc.
- Cohérence des hashtags sur toute la série
- Chaque post doit fonctionner seul si extrait du thread
- Varier les angles entre les posts du thread (ne pas répéter le même registre)

### Checklist avant livraison
- [ ] Arc narratif clair sur toute la série
- [ ] Chaque post est autonome ET lié
- [ ] Angles variés d'un post à l'autre dans le thread
- [ ] Progression du général au spécifique (ou du problème à la solution)
- [ ] Dernier post clôture avec force, pas en queue de poisson
- [ ] Signature + CTA présents sur chaque post du thread

---

## Numérotation & continuité de série

La série LinkedIn agentic design est numérotée. Chaque post = `#0N`.

**Posts produits à ce jour** (à mettre à jour au fil des publications) :
- `#03` — Agent Role Definition Canvas (6 champs : Mission, Scope, Boundary, Guardrails, Persona/Tone, Behavioral States)

> Pour continuer la série : demander à Amine quel numéro suit, ou inférer depuis le contexte. Ne pas assumer `#04` si non confirmé.

**Règles de série** :
- Toujours demander le numéro du post si non précisé
- Référencer les posts précédents si pertinent dans le corps du texte
- Les hashtags récurrents de la série : `#AgentDesign` `#AIProduct` `#OrchestrationDesign`

---

## Workflow de production recommandé

> Le protocole angle/cluster défini plus haut s'applique à tous les formats. Ce qui suit détaille les étapes spécifiques à chaque format.

### Pour un post texte seul
1. Appliquer le protocole obligatoire (cluster → angle → nommer)
2. Rédiger accroche → corps → clôture → signature → hashtags
3. Passer la checklist Format 1

### Pour un carousel
1. Identifier le cluster + choisir l'angle
2. Définir le nombre de slides et l'arc narratif
3. Produire le plan slide par slide (titres uniquement) → valider avec l'utilisateur
4. Rédiger le contenu complet slide par slide
5. Produire le post d'accompagnement (texte LinkedIn qui introduit le carousel)

### Pour un thread / mini-série
1. Identifier le cluster + planifier la variation d'angles entre les posts
2. Définir l'arc : nombre de posts, thème central, progression
3. Produire le plan complet → valider
4. Rédiger tous les posts en séquence
5. Vérifier la cohérence, l'autonomie de chaque post et la diversité des angles
6. Proposer un calendrier de publication si demandé

---

## À lire avant de produire

Consulte `references/icp.md` pour :
- Les frictions spécifiques qui résonnent avec l'ICP
- Les "bullseyes" éditoriaux de la série
- Ce qu'il sauvegarde et réutilise
- La tonalité et le registre attendus

Ne pas embarquer l'ICP complet dans chaque output.
L'utiliser comme filtre de pertinence et de résonance.
