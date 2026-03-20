# Feature Spec — F-004 : Contact
> **Genere par** : RAY
> **Statut** : `[ ] DRAFT  [x] VALIDEE TALENT  [ ] EN DEV  [ ] EN REVIEW  [ ] LIVREE`
> **Derniere mise a jour** : `2026-03-19`
> **Lien Roadmap** : `roadmap.md#F-004`

---

## Contexte & Probleme

### Probleme a resoudre
> Le portfolio n'a aucun mecanisme de conversion. Un recruteur convaincu par le hero et le manifeste n'a aucun moyen de passer a l'action sans quitter le site. Le CTA "Me contacter" du hero pointe vers `#contact` — cette ancre doit mener a une section claire, sans friction, qui transforme l'intention en action. En MVP, pas de formulaire avec stockage serveur — un lien mailto ou un service tiers (Resend) suffit, a condition que l'experience soit soignee.

### JTBD cible

**JTBD Recruteur :**
*"Quand j'ai decide que ce profil m'interesse, je veux pouvoir le contacter immediatement sans chercher, pour ne pas perdre ma motivation au moment de la decision."*

**JTBD Client prescripteur :**
*"Quand j'ai un projet a discuter, je veux un moyen direct et professionnel de prendre contact, pour sentir que ce designer est accessible et serieux."*

### Impact attendu
| KPI | Avant | Cible apres feature | Methode de mesure |
|---|---|---|---|
| Prises de contact qualifiees | 0 | > 2/mois | Comptage manuel (inbox) |
| Taux de conversion vers contact | 0% | > 3% des visiteurs uniques | Plausible (event click) |

---

## Scope

### In Scope
- Section `#contact` avec titre et texte d'invitation
- Lien email (`mailto:`) comme action principale — simple, sans friction, zero dependance serveur
- Adresse email affichee en clair (pas de formulaire en MVP)
- Texte d'accompagnement qui cadre le type de demande attendu
- CTA primaire vers le mailto
- Liens secondaires vers LinkedIn et Obsolet (alternatives de contact/decouverte)
- Responsive mobile/desktop

### Out of Scope
- Formulaire de contact avec champs (nom, email, message) — Phase 2 si le volume de contacts le justifie
- Stockage serveur des messages
- Calendly / booking link
- Chatbot ou widget de messagerie
- Captcha ou anti-spam

### Dependances
| Feature | Relation | Statut |
|---|---|---|
| F-001 | Layout global | LIVREE |
| F-002 | Le CTA "Me contacter" du hero pointe vers #contact | LIVREE |
| F-003 | About au-dessus — pas de dependance fonctionnelle | TODO |

---

## User Stories (Format Gherkin)

### Story 1 — Prise de contact (desktop)
```gherkin
GIVEN un visiteur sur desktop qui veut contacter Amine
WHEN il arrive sur la section #contact (via scroll ou CTA hero)
THEN il voit un titre, un texte d'invitation, et un bouton "Envoyer un email"
  AND le clic sur le bouton ouvre son client email avec l'adresse pre-remplie
```

### Story 2 — Prise de contact (mobile)
```gherkin
GIVEN un visiteur sur mobile
WHEN il arrive sur la section #contact
THEN il voit le meme contenu que desktop, adapte au viewport
  AND le bouton CTA occupe la largeur disponible
  AND le clic ouvre l'app email native du telephone
```

### Story 3 — Alternatives de contact
```gherkin
GIVEN un visiteur qui prefere LinkedIn ou veut decouvrir Obsolet
WHEN il regarde la section #contact
THEN il voit des liens secondaires vers LinkedIn et Obsolet sous le CTA principal
  AND ces liens ouvrent dans un nouvel onglet
```

### Story 4 — Edge Case : pas de client email configure
```gherkin
GIVEN un visiteur dont le navigateur n'a pas de handler mailto
WHEN il clique sur "Envoyer un email"
THEN l'adresse email est visible en texte dans la section (copiable)
  AND il peut utiliser LinkedIn comme alternative
```

### Story 5 — Navigation clavier
```gherkin
GIVEN un visiteur naviguant au clavier
WHEN il Tab jusqu'a la section contact
THEN le CTA principal recoit le focus en premier
  AND les liens secondaires suivent dans l'ordre visuel
  AND chaque element a un outline de focus visible
```

---

## Criteres d'Acceptation Binaires

### Fonctionnels
- [ ] La section porte l'id `contact` (ancre depuis le header et le hero CTA)
- [ ] Le titre de section utilise l'echelle Heading 1 (`text-3xl font-bold tracking-tight`)
- [ ] Un texte d'invitation (1-2 phrases) explique quel type de contact est bienvenu
- [ ] Le CTA principal est un `Button variant="default"` qui declenche un `mailto:`
- [ ] L'adresse email est visible en texte dans la section (pas seulement dans le mailto)
- [ ] Des liens secondaires vers LinkedIn et Obsolet sont presents
- [ ] Les liens secondaires ouvrent dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] Les liens secondaires portent un indicateur visuel de lien externe
- [ ] Sur mobile, le CTA principal occupe la largeur disponible (`w-full` sous md)
- [ ] Le contenu est centralise dans `lib/data.ts`

### Design System
- [ ] 1 seul `Button variant="default"` dans la section (le mailto)
- [ ] Les liens secondaires utilisent `variant="outline"` ou un style lien (`text-muted-foreground`)
- [ ] Le spacing de section respecte `py-16 md:py-24`
- [ ] Le contenu textuel respecte `max-w-3xl`
- [ ] Le contraste WCAG AA est respecte
- [ ] L'interface est navigable au clavier avec outline de focus visible

### Performance
- [ ] La section est un Server Component pur
- [ ] Aucun layout shift au chargement
- [ ] Zero JavaScript cote client pour cette section

---

## Interface & Comportements

### Composants Shadcn/ui requis

```bash
# Deja installes
# Button (F-001)
```

> Pas de formulaire en MVP = pas besoin de form, input, textarea, label.

### Wireframe — Desktop

```
├─────────────────────────────────────────────────────────────┤
│ [About F-003]                                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  py-16 md:py-24                                             │
│                                                             │
│  Travaillons ensemble                                       │
│  (text-3xl font-bold tracking-tight)                        │
│                                                             │
│  ┌─── max-w-3xl ──────────────────────────────────┐         │
│  │                                                 │         │
│  │  Un projet a l'intersection du design et de     │         │
│  │  l'IA ? Une question sur ma demarche ?          │         │
│  │  Ecrivez-moi.                                   │         │
│  │  (text-base text-muted-foreground)              │         │
│  │                                                 │         │
│  │  [ Envoyer un email ]   ← Button default        │         │
│  │                                                 │         │
│  │  lamine.amine@gmail.com                          │         │
│  │  (text-sm text-muted-foreground — copiable)     │         │
│  │                                                 │         │
│  │  LinkedIn ↗  ·  Obsolet ↗                       │         │
│  │  (liens secondaires, text-muted-foreground)     │         │
│  │                                                 │         │
│  └─────────────────────────────────────────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [Footer F-001]                                              │
```

### Wireframe — Mobile

```
┌──────────────────────────┐
│ [About F-003]            │
├──────────────────────────┤
│                          │
│ Travaillons ensemble     │
│                          │
│ Un projet a              │
│ l'intersection du        │
│ design et de l'IA ?...   │
│                          │
│ [ Envoyer un email  ]    │
│ (w-full)                 │
│                          │
│ lamine.amine@gmail.com    │
│                          │
│ LinkedIn ↗               │
│ Obsolet ↗                │
│                          │
├──────────────────────────┤
│ [Footer]                 │
```

### Interactions cles
| Action utilisateur | Comportement attendu |
|---|---|
| Clic "Me contacter" (hero) | Scroll smooth vers `#contact` |
| Clic "Contact" (header) | Scroll smooth vers `#contact` |
| Clic "Envoyer un email" | Ouvre le client email avec `mailto:lamine.amine@gmail.com` |
| Clic "LinkedIn ↗" | Ouvre LinkedIn dans un nouvel onglet |
| Clic "Obsolet ↗" | Ouvre Obsolet dans un nouvel onglet |

---

## Donnees & API

### Donnees necessaires
| Donnee | Source | Type | Requis |
|---|---|---|---|
| Titre de section | `lib/data.ts` | `string` | Oui |
| Texte d'invitation | `lib/data.ts` | `string` | Oui |
| Adresse email | `lib/data.ts` | `string` | Oui |
| Texte du CTA | `lib/data.ts` | `string` | Oui |
| URL LinkedIn | `lib/data.ts` (deja present dans FOOTER_LINKS) | `string` | Oui |
| URL Obsolet | `lib/data.ts` (deja present dans NAV_ITEMS) | `string` | Oui |

> Aucune API. Contenu 100% statique. Zero stockage.

### Gestion des erreurs
| Cas d'erreur | Comportement |
|---|---|
| Pas de client email | L'email est affiche en clair — le visiteur peut le copier manuellement |
| Pas d'alternative | LinkedIn est present comme fallback |

---

## Notes Techniques pour BOB

- **`components/contact.tsx`** — Server Component pur. Zero interactivite.
- **Donnees** — Ajouter `CONTACT` dans `lib/data.ts` avec `title`, `description`, `email`, `ctaText`. Reutiliser les URLs deja presentes dans `FOOTER_LINKS`.
- **Mailto** — Le CTA est un `<a href="mailto:lamine.amine@gmail.com">` enveloppe dans `buttonVariants({ variant: "default" })` via `asChild` ou directement style.
- **Email visible** — Afficher l'email en `text-sm text-muted-foreground` sous le CTA pour le cas ou le mailto ne fonctionne pas.
- **Liens secondaires** — Reutiliser `FOOTER_LINKS` de `lib/data.ts`. Les afficher en `inline-flex` avec `gap-4`, style `text-sm text-muted-foreground hover:text-foreground`.
- **page.tsx** — Remplacer le placeholder `#contact` par `<Contact />`.
- **Email** — L'adresse `lamine.amine@gmail.com` est a confirmer par le Talent. Utiliser une constante dans `lib/data.ts`.

---

## Notes pour ANALYZER

- Verifier que le CTA "Me contacter" du hero scrolle bien jusqu'a cette section
- Verifier que le mailto fonctionne sur desktop et mobile
- Evaluer si le texte d'invitation cadre suffisamment le type de contact attendu (pas trop generique)
- Verifier que l'email est copiable en fallback
- Verifier que le CTA principal est le seul Button default visible dans la section
- Tester la section sur un appareil sans client email configure

---

## Historique de la Spec

| Date | Version | Changement | Par |
|---|---|---|---|
| 2026-03-19 | v0.1 | Creation initiale | RAY |
