# Vision Mobile Studio — Site Web Vitrine

> **Agence créative spécialisée en Audiovisuel, Design et Édition** — Yaoundé, Cameroun

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6600?style=for-the-badge&logo=mail.ru&logoColor=white)

---

## À propos

Site web vitrine de **Vision Mobile Studio (VMS)**, une entreprise située à Yaoundé (Cameroun), immeuble BOKAM face marché central. VMS offre une gamme complète de services créatifs allant du design graphique à la production vidéo.

## Pages du site

| Page                           | Description                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- |
| **Accueil** (`index.html`)     | Page d'accueil avec hero section, carrousel d'images et aperçu des services |
| **À Propos** (`about.html`)    | Présentation de l'entreprise et de l'équipe                                 |
| **Services** (`services.html`) | Catalogue complet des services avec portfolio de réalisations               |
| **Contact** (`contact.html`)   | Formulaire de contact fonctionnel + coordonnées                             |

## Services proposés

- **Design** — Carte de visite, Flyers, Dépliants, Retouche Photo, Photo Montage, Banderoles, Roll-up, Magazines, Livres Photos
- **Montage Vidéo** — Documentaires, Magazines, Spots d'entreprises, Mariages, Obsèques
- **Édition** — Magazines, Rapports de travail/stage, Mémoires & Thèses, Formatage de texte, Livres
- **Impression** — Couleur/N&B (A6 à A3), Agrandissement photos, Programme Obsèques, Billets mariages, Livres

## Structure du projet

```
Projet 2 (VMS)/
├── index.html          # Page d'accueil
├── about.html          # À propos
├── services.html       # Services & portfolio
├── contact.html        # Formulaire de contact
├── CSS/
│   ├── global.css          # Variables, reset & styles globaux
│   ├── nav.css             # Barre de navigation responsive
│   ├── footer.css          # Pied de page
│   ├── home.css            # Styles page accueil
│   ├── about.css           # Styles page à propos
│   ├── services.css        # Styles page services
│   ├── contact.css         # Styles page contact
│   ├── forms.css           # Styles formulaires
│   └── carousel-modern.css # Carrousel d'images
├── JAVASCRIPT/
│   ├── navigation.js       # Menu hamburger & navigation mobile
│   ├── carousel.js         # Logique du carrousel d'images
│   └── forms.js            # Validation & envoi du formulaire (EmailJS)
├── IMAGES/                 # Logos, portfolio, visuels (40 fichiers)
└── README.md
```

## Technologies

- **HTML5** — Structure sémantique avec balises `<nav>`, `<main>`, `<section>`, `<footer>`
- **CSS3** — Architecture modulaire, design responsive, animations au scroll
- **JavaScript Vanilla** — Carrousel, navigation mobile, validation de formulaires
- **EmailJS** — Envoi d'emails directement depuis le formulaire de contact (sans backend)
- **SVG** — Icônes vectorielles intégrées (réseaux sociaux, coordonnées)

## Formulaire de contact

Le formulaire de contact envoie les messages directement par email via **[EmailJS](https://www.emailjs.com/)**. Les champs collectés sont :

| Champ          | Description                 | Requis |
| -------------- | --------------------------- | ------ |
| Nom            | Nom du client               |        |
| Commande       | Description de la commande  |        |
| Téléphone      | Numéro de téléphone         |        |
| E-mail         | Adresse email du client     |        |
| Date souhaitée | Date de livraison souhaitée |        |
| Localisation   | Quartier du client          |        |

## Installation & Utilisation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/damso667/site-presentation.git
   ```

2. **Ouvrir le site**
   Ouvrir `index.html` dans un navigateur web.

   > Pour un meilleur rendu, utiliser un serveur local comme **Live Server** (extension VS Code).

3. **Configuration EmailJS** (si modification nécessaire)
   Les identifiants EmailJS se trouvent dans `JAVASCRIPT/forms.js` :
   - `Service ID`
   - `Template ID`
   - `Public Key`

## Responsive

Le site est entièrement responsive avec :

- Navigation hamburger pour mobile
- Grilles adaptatives pour le portfolio
- Carrousels tactiles
- Formulaire adapté aux écrans de toutes tailles

## Contact

- **Adresse** : Cameroun, Yaoundé — Immeuble BOKAM face marché central
- **Téléphone** : +237 677 859 821 / 690 133 973
- **Horaires** : Lundi - Samedi : 8h00 - 18h00

---

<p align="center">© 2024 <strong>Vision Mobile Studio</strong> — Tous droits réservés</p>
