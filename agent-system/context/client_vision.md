# client_vision.md
> **Usage** : Ce fichier est la source de vérité sur le contexte client et les objectifs produit.
> RAY le lit en priorité pour cadrer chaque spec. À mettre à jour à chaque évolution stratégique significative.

---

## 🗺️ Contexte Projet

**Nom du projet :** Portfolio personnel — Amine Lamine
**Date de dernière mise à jour :** 2026-03-18
**Statut :** `[x] Discovery`

---

## 👤 Les Visiteurs (3 personas, 1 site)

### Persona 1 — Le Recruteur / DRH Tech-Design
| Champ | Valeur |
|---|---|
| Profil | Head of Design, CPO, ou recruteur tech dans une scale-up ou un studio |
| Comportement | Scanne 10+ portfolios par semaine, décide en < 30 secondes si ça vaut un appel |
| Stack mentale | Cherche une différenciation claire, pas une liste de compétences |
| Risque | Rejet silencieux si le site ressemble à tous les autres portfolios Dribbble |

### Persona 2 — Le Designer / Product Person curieux
| Champ | Valeur |
|---|---|
| Profil | Designer senior ou PM qui suit les tendances IA appliquée au produit |
| Comportement | Arrive via LinkedIn ou la newsletter Obsolet, cherche de la profondeur |
| Stack mentale | Veut voir comment quelqu'un *pense* avec l'IA, pas juste ce qu'il produit avec |
| Risque | Départ rapide si le contenu est superficiel ou "IA washing" |

### Persona 3 — Le Client / Prescripteur
| Champ | Valeur |
|---|---|
| Profil | Founder, CPO ou Head of Design avec un besoin en design stratégique ou système IA |
| Comportement | Cherche un prestataire rare, pas un exécutant |
| Stack mentale | Évalue la confiance avant le prix — veut comprendre le raisonnement avant le livrable |
| Risque | Conversion manquée si le CTA n'est pas évident ou si le positionnement est flou |

---

## 🎯 Jobs-to-be-done (JTBD)

**JTBD Recruteur :**
*"Quand j'évalue un candidat senior, je veux comprendre sa valeur différenciante en moins d'une minute, pour décider si ça vaut un entretien — sans avoir à lire une bio de 3 paragraphes."*

**JTBD Designer / PM curieux :**
*"Quand je cherche à comprendre comment l'IA reshape le travail de design, je veux voir comment un praticien de haut niveau réfléchit et structure sa pratique, pour benchmarker et m'inspirer."*

**JTBD Client / Prescripteur :**
*"Quand j'ai un projet complexe à l'intersection du design et de l'IA, je veux avoir la preuve que ce profil comprend mes enjeux spécifiques, pour lui faire confiance avec mon brief — pas juste espérer qu'il comprendra."*

---

## 🏆 Objectifs du Portfolio

### Vision (proposition de valeur en 1 phrase)
> En arrivant sur le portfolio, le visiteur comprend immédiatement qu'il est face à un profil rare : un designer qui ne *fait pas* de l'IA — il *pense* avec l'IA.

### Objectifs par persona

| Objectif | Persona cible | Métriques de succès |
|---|---|---|
| Communiquer le positionnement "Design × IA × Leadership" en < 10 secondes | Recruteur | Temps moyen avant scroll > 5s sur le hero |
| Démontrer la profondeur de réflexion (pas juste les livrables) | Designer curieux | Pages vues / session > 3 |
| Générer des prises de contact qualifiées | Client prescripteur | Taux de conversion vers formulaire / email |
| Alimenter la crédibilité de la newsletter Obsolet | Tous | Clics vers Obsolet / visiteurs uniques |

---

## 🎨 Ce que le visiteur doit ressentir

**En arrivant (0–5 secondes) :** *"Ce profil est différent — il y a quelque chose ici que je ne vois pas partout."*
**En scrollant (5–60 secondes) :** *"Il sait ce qu'il fait. Et il peut l'expliquer."*
**En partant :** *"Je veux garder ce contact."* (recruteur) / *"Je veux suivre ce qu'il produit."* (designer) / *"Je veux lui parler de mon projet."* (client)

### Registre émotionnel & esthétique
- **Expertise visible** — pas revendiquée. Le site *prouve*, il n'annonce pas.
- **IA comme outil de pensée** — pas un argument marketing. La présence de l'IA doit être structurelle, pas cosmétique.
- **Leadership tranquille** — une voix, un point de vue, une direction. Pas d'arrogance, pas de bruit.
- **Esthétique** : sobre, typographiquement forte, avec une tension entre ordre (design system) et pensée (éditorial). Référence : entre Stripe Docs et un article de *Works in Progress*.

---

## 🚫 Contraintes & Limites

### Contraintes techniques
- Solo builder — architecture conservatrice, zéro over-engineering
- Budget infra : Vercel free tier (pas de serveur dédié, pas de BDD pour le MVP)
- MVP en moins d'1 mois
- Pas d'auth, pas de compte utilisateur — site public uniquement

### Contraintes de contenu
- Le contenu (textes, études de cas) doit pouvoir être mis à jour sans redéploiement → solution statique acceptable en MVP, CMS à évaluer post-MVP
- La newsletter Obsolet est externe (ne pas la reproduire ici — linker vers elle)

### RGPD
- Pas de tracking publicitaire
- Analytics minimaliste si utilisé (Plausible ou Fathom — pas Google Analytics)
- Formulaire de contact : pas de stockage serveur en MVP (mailto ou service tiers type Resend)

---

## ❌ Ce que ce portfolio N'EST PAS

- ❌ **Un CV en ligne** — pas de liste chronologique de postes et logos clients
- ❌ **Une galerie Dribbble** — pas d'écrans sans contexte ni raisonnement
- ❌ **Un blog** — Obsolet joue ce rôle. Ce site pointe vers Obsolet, il ne le duplique pas
- ❌ **Un showroom d'outils** — "Je maîtrise Figma, Framer, Notion" n'est pas un argument ici
- ❌ **Un site "IA washing"** — mentionner l'IA sans la démontrer serait contre-productif avec ce public

---

## 📐 Valeurs Produit (arbitrage BOB & RAY)

| Valeur | Définition opérationnelle |
|---|---|
| **Clarté immédiate** | Le positionnement doit être lisible sans scroll sur desktop et mobile |
| **Profondeur accessible** | Chaque case study a une entrée rapide (1 ligne) et une profondeur pour qui veut aller plus loin |
| **Cohérence système** | Le design du site *est* une démonstration de compétence — il doit être irréprochable |
| **Conversion sans friction** | Le CTA de contact est toujours visible, jamais insistant |

---

## 📝 Décisions historiques

| Date | Décision | Raison | Impact |
|---|---|---|---|
| 2026-03-18 | Portfolio personnel, pas client | Amine est le client et le designer | Liberté totale sur le positionnement |
| 2026-03-18 | Pas de CMS en MVP | Contrainte de délai + solo | À réévaluer post-MVP si le contenu évolue fréquemment |
| 2026-03-18 | Newsletter Obsolet externe | Éviter la duplication, Obsolet a sa propre identité | Le site pointe vers Obsolet via CTA dédié |
