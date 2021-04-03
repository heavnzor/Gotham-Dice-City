

$(function () {



    let language;
    let languageAttr;
    languageAttr = $('html').attr('lang');
    language = prompt('Quel langue parlez vous ? Répondez "fr" pour français ou "en" pour anglais / What language do you speak ? answer "fr" for french or "en" for engligh ');

    switch (language) {
        case 'fr':
            languageAttr += $('html').attr('lang', 'fr');
            let pageTitle = $('title');
            pageTitle += pageTitle.text('Le 100ème Jeu');
            let rulesTitle = $('#rulesTitle');
            rulesTitle += rulesTitle.text('Le 100ème Jeu');
            let rulesDescription = $('#rulesDescription');
            rulesDescription += rulesDescription.text(`Le jeu comprend 2 joueurs sur un seul et même écran. Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
    À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.  Lors de son tour,
     le joueur peut décider à tout moment de:-Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors letour de l’autre joueur.-Lancer le dé.
      S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.Le premier joueur qui atteint les 100 points sur global gagne le jeu.`);
            let playerOne = $('#playerOne');
            playerOne += playerOne.text('Joueur #1');
            let playerTwo = $('#playerTwo');
            playerOne += playerTwo.text('Joueur #2');
            let title = $('#title');
            title += title.html(`<h3> <span id="round">Round : </span><span id='roundId'>0</span></h3>`, `<h3> <span id="round">Round : </span><span id='roundId'>0</span> / Entertainment</h3><br>`);
            let add = $('#add');
            add += add.text('HOLD');
            let roll = $('#roll');
            roll += roll.text('Lancer le dé');
            
            break;
        default:
            if (language === '' || language !== 'fr' || language !== 'en') {

                alert("Le language par défaut est l'anglais. / The default language is english");

            }
            break;


    }
});




