
const $ = require('jquery')



  let language;
  let languageAttr;
  languageAttr = $('html').attr('lang');
  language = prompt('Quel langue parlez vous ? Répondez fr pour français et en pour anglais / What language do you speak ? answer fr for french and en for engligh ');

  switch (language) {
    case 'fr':
      languageAttr += $('html').attr('lang', 'fr');

      let pageTitle = $('title');
      pageTitle = pageTitle.text('Le 100ème Jeu');

      let rulesTitle = $('#rulesTitle');
      rulesTitle = rulesTitle.text('Le 100ème Jeu');
      let rulesDescription = $('#rulesDescription');
      rulesDescription = rulesDescription.text(`Le jeu comprend 2 joueurs sur un seul et même écran. Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
    À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.  Lors de son tour,
     le joueur peut décider à tout moment de:-Cliquer sur l’option “Hold”, qui permetd’envoyer les points du ROUND vers le GLOBAL. Ce sera alors letour de l’autre joueur.-Lancer le dé.
      S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.Le premier joueur qui atteint les 100 points sur global gagne le jeu.`);
      let playerOne = $('#playerOne');
      playerOne = playerOne.text('Joueur #1')
      let playerTwo = $('#playerTwo');
      playerOne = playerTwo.text('Joueur #2')
      let round = $('#round');
      round = round.text('Tour')
      break;
    default:
      if (language === '' && language !== 'fr' && language !== 'en') {

        alert("Vous n'avez pas ou mal répondu. Le language par défaut est l'anglais. / The default language is english");

      }
      break;


  }


  $.getJSON("https://api.imgflip.com/get_memes")
    .done(function (json) {
      for (let i = 0; i < json.data.memes.length - 1; i++) {

        console.log("JSON Data: " + json.data.memes[i].url);

      }
    })
    .fail(function (jqxhr, textStatus, error) {
      const err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    });





