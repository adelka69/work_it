/* charger le DOM */

document.addEventListener("DOMContentLoaded", function () {
  const profils = [
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Ipticem D.",
      metier: "Développeur Web",
      localisation: "Lyon",
      experience: 1,
    },

    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Jane S.",
      metier: "Designer UX",
      localisation: "Lyon",
      experience: 5,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Farid B.",
      metier: "Data Analyst",
      localisation: "Bordeaux",
      experience: 2,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "James R.",
      metier: "Chef de projet",
      localisation: "Orléans",
      experience: 5,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Adel K.",
      metier: "Développeur Web",
      localisation: "Strasbourg",
      experience: 4,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Greg D.",
      metier: "Designer UX",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Thib D.",
      metier: "Développeur Web",
      localisation: "Paris",
      experience: 3,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Julien S.",
      metier: "Graphiste",
      localisation: "Bordeaux",
      experience: 5,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Marie H.",
      metier: "Développeur Web",
      localisation: "Lille",
      experience: 2,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Alex R.",
      metier: "Ingénieur système",
      localisation: "Marseille",
      experience: 5,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Mindy M.",
      metier: "Graphiste",
      localisation: "Paris",
      experience: 4,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Bob R.",
      metier: "Développeur Web",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Theo P.",
      metier: "Développeur Web",
      localisation: "Roanne",
      experience: 2,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Christelle E.",
      metier: "Développeur Web",
      localisation: "Brest",
      experience: 3,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Sylvain F.",
      metier: "Développeur Web",
      localisation: "Cannes",
      experience: 1,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Aline S.",
      metier: "Data Analist",
      localisation: "Rennes",
      experience: 1,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Boubaker G.",
      metier: "Développeur Web",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Alycia K.",
      metier: "Data Scientist",
      localisation: "Paris",
      experience: 3,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Sarah A.",
      metier: "Développeur Web",
      localisation: "Can",
      experience: 5,
    },
    {
      photoUrl:
        "https://media.istockphoto.com/id/951281044/ko/%EC%82%AC%EC%A7%84/%EC%96%BC%EA%B5%B4%EC%97%90-%EB%A1%9C%EB%B4%87%EC%9D%98-%EB%A8%B8%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=BBz6YROxoLzSt5mp4vj3KZtIHmb6kKnwC2j791hsBEg=",
      nom: "Ahmed R.",
      metier: "Développeur Web",
      localisation: "Marseille",
      experience: 10,
    },
  ];
  /*  récuperez les input par leur ID */

  const metiersInput = document.getElementById("metiers-input");
  const localiteInput = document.getElementById("localite-input");
  const experienceInput = document.getElementById("experience-input");

  /* afficherer les résultats */
  const resultatsSection = document.querySelector(".resultats");

  /* ecouter les input sur les champs de saisie */
  metiersInput.addEventListener("input", handleSearch);
  localiteInput.addEventListener("input", handleSearch);
  experienceInput.addEventListener("input", handleSearch);

  /* Fonction de recherche et d'affichage des résultats */
  function handleSearch() {
    // Récupérer les valeurs saisies par l'utilisateur
    const metiersValue = metiersInput.value.toLowerCase();
    const localiteValue = localiteInput.value.toLowerCase();
    const experienceValue = experienceInput.value.toLowerCase();

    /* Filtre des profils en fonction des critères de recherche */
    const results = profils.filter((profile) => {
      return (
        profile.metier.toLowerCase().includes(metiersValue) &&
        profile.localisation.toLowerCase().includes(localiteValue) &&
        profile.experience.toString().includes(experienceValue)
      );
    });

    /* Effacer le contenu précédent dans la section des résultats */
    resultatsSection.innerHTML = "";

    /* Afficher les résultats filtrés */
    results.forEach((profile) => {
      createCard(
        profile.photoUrl,
        profile.nom,
        profile.metier,
        profile.localisation,
        profile.experience
      );
    });
  }

  function createCard(photoUrl, nom, metier, localisation, experience) {
    const card = document.createElement("div");
    card.classList.add("card");
    resultatsSection.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    // Création de l'icône d'étoile pour ajouter aux favoris

    const favorisIcon = document.createElement("i");
    favorisIcon.classList.add(
      "fa-sharp",
      "fa-solid",
      "fa-star",
      "favoris-icon"
    );
    favorisIcon.style.color = "#00000b"; // Appliquer la couleur personnalisée initiale
    favorisIcon.style.fontSize = "24px";
    cardHeader.appendChild(favorisIcon);

    // Ajouter un gestionnaire d'événements click pour l'icône d'étoile
    favorisIcon.addEventListener("click", function () {
      if (favorisIcon.style.color === "black") {
        favorisIcon.style.color = "#ea9009"; // Changer la couleur à la couleur initiale
      } else {
        favorisIcon.style.color = "black"; // Changer la couleur à noir
      }
    });

    // ... (le reste du code pour les autres éléments de la carte)

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${photoUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardName = document.createElement("h4");
    cardName.classList.add("card-name");
    cardName.innerHTML = nom;
    cardBody.appendChild(cardName);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    card.appendChild(cardInfo);

    const cardMetier = document.createElement("p");
    cardMetier.classList.add("card-metier");
    cardMetier.innerHTML = `${metier}`;
    cardInfo.appendChild(cardMetier);

    const cardLocalisation = document.createElement("p");
    cardLocalisation.classList.add("card-localisation");
    cardLocalisation.innerHTML = `${localisation}`;
    cardInfo.appendChild(cardLocalisation);

    const cardExperience = document.createElement("p");
    cardExperience.classList.add("card-experience");
    cardExperience.innerHTML = `${experience} ans`;
    cardInfo.appendChild(cardExperience);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Plus d'infos";
    cardBody.appendChild(cardButton);
  }

  // Initialisation de l'affichage avec tous les profils
  profils.forEach((profile) => {
    createCard(
      profile.photoUrl,
      profile.nom,
      profile.metier,
      profile.localisation,
      profile.experience
    );
  });
});
