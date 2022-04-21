
$(() => {
    /* 
       Règle du jeu
    
         - Le jeu comprend 2 joueurs sur un seul et même écran.
         - Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
         - À chaque tour, le joueur a son ROUND initialisé à 1 et peut lancer un dé autant de fois qu'il le souhaite. 
         - Le résultat d’un lancer est ajouté au ROUND.
         - Lors de son tour, le joueur peut décider à tout moment de:-Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. 
         - Ce sera alors le tour de l’autre joueur. -Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour. 
         - Le premier joueur qui atteint les 100 points sur global gagne le jeu.

    */

    let dice = $('#dice');
    dice.css('display', 'none');
    const roundScore = $('#roundScore');
    let globalFirstPlayer = $('#globalFirstPlayer');
    let globalSecondPlayer = $('#globalSecondPlayer');
    let currentFirstPlayer = $('#currentFirstPlayer');
    let currentSecondPlayer = $('#currentSecondPlayer');
    let hold = $('#hold');
    let roll = $('#roll');
    let int;
    let firstPlayer = $('#firstPlayer');
    let secondPlayer = $('#secondPlayer');
    let players = [firstPlayer, secondPlayer];
    let playing = firstPlayer;
    let tempScoreSecondPlayer = 0;
    let tempScoreFirstPlayer = 0;
    let scoreToWin;

    scoreToWin = 100;

    function randomNumber(max, min) {
      console.log(`Random number : ${int}`);
      return int = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function displayDice(int) {
      dice.css('display', 'block');
      dice.attr('src', `dices/${int}.svg`);
    }

    function hideDice() {
      dice.css('display', 'none');
    }

    function launchBatmanSound() {
      const y = document.getElementById("batman");
      y.play();
    }
    function launchJokerSound() {
      const x = document.getElementById("joker");
      x.play();
    }

    function gameWon(players) {
      currentFirstPlayer.text("0"); // réinitialisation de toutes les variables scores à "0"
      globalFirstPlayer.text("0");
      currentSecondPlayer.text("0");
      globalSecondPlayer.text("0");
      switch (players) {
        case firstPlayer:
          alert('Batman won the game!');
          newRound(1, firstPlayer); // si Batman arrive à 100, le score est réinitialisé et Joker commence
          break;
        case secondPlayer:
          alert('Joker won the game!');
          newRound(1, secondPlayer); // si Joker arrive à 100, le score est réinitialisé et Batman commence
          break;

      }
    }

    function checkWin(playing, globalScore) {
      globalScore = [Number(globalFirstPlayer.text()), Number(globalSecondPlayer.text())];
      console.log(globalScore);
      if (playing === firstPlayer && globalScore[0] >= scoreToWin) {
        return gameWon(firstPlayer);
      } else if (playing === secondPlayer && globalScore[1] >= scoreToWin) {
        return gameWon(secondPlayer);
      }
    }

    function select(players) {
      switch (players) {
        case firstPlayer:
          launchBatmanSound();
          currentSecondPlayer.text("0");
          currentFirstPlayer.text("0");
          firstPlayer.css('opacity', 1);
          secondPlayer.css('opacity', 0.5);
          return playing = firstPlayer;
        case secondPlayer:
          launchJokerSound();
          currentFirstPlayer.text("0");
          currentSecondPlayer.text("0");
          secondPlayer.css('opacity', 1);
          firstPlayer.css('opacity', 0.5);
          return playing = secondPlayer;
      }
    }

    function newRound(int, players) {
      roundScore.text(String(int));
      select(players);
      if (playing === firstPlayer && int !== 1) {
        tempScoreFirstPlayer = currentFirstPlayer.text();
        const resultFirstPlayer = int + Number(tempScoreFirstPlayer);
        currentFirstPlayer.text(String(resultFirstPlayer));
      } else if (playing === firstPlayer && int === 1) {
        roundScore.text("0");
        dice.css('display', 'none');
        tempScoreFirstPlayer = 0;
        select(secondPlayer);
      } else if (playing === secondPlayer && int !== 1) {
        tempScoreSecondPlayer = currentSecondPlayer.text();
        const resultSecondPlayer = int + Number(tempScoreSecondPlayer);
        currentSecondPlayer.text(String(resultSecondPlayer));
      } else if (playing === secondPlayer && int === 1) {
        roundScore.text("0");
        dice.css('display', 'none');
        tempScoreSecondPlayer = 0;
        select(firstPlayer);

      }
    }




    roll.on('click', () => { // event listener sur le bouton roll
      randomNumber(6, 1);
      displayDice(int);
      newRound(int, players);
    })

    hold.on('click', () => { // event listener sur le bouton hold

      hideDice();
      
      if (playing === firstPlayer) {
        tempScoreFirstPlayer = Number(currentFirstPlayer.text());
        let globalScoreFirstPlayer = Number(globalFirstPlayer.text());
        globalScoreFirstPlayer = globalScoreFirstPlayer + tempScoreFirstPlayer;
        globalFirstPlayer.text(globalScoreFirstPlayer);
        currentFirstPlayer.text("0");
        console.log(`globalFirstPlayer = ${globalFirstPlayer}
                    globalSecondPlayer = ${globalSecondPlayer}
        `);
        checkWin(firstPlayer,globalFirstPlayer.text());
      } else if (playing === secondPlayer) {
        tempScoreSecondPlayer = Number(currentSecondPlayer.text());
        let globalScoreSecondPlayer = Number(globalSecondPlayer.text());
        globalScoreSecondPlayer = globalScoreSecondPlayer + tempScoreSecondPlayer;
        globalSecondPlayer.text(globalScoreSecondPlayer);
        currentSecondPlayer.text("0");
        console.log(`globalFirstPlayer = ${globalFirstPlayer.text()}
        globalSecondPlayer = ${globalSecondPlayer.text()}
  `);
        checkWin(secondPlayer, globalSecondPlayer.text());
      }

      roundScore.text("0");

    })
});