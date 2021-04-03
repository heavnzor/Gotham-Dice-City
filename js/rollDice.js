
$(function () {



  let dice = $('#dice');
  console.log(dice)
  let roll = $('#roll');
  let add = $(`#add`);
  
  roll.on('click',  function entierAleatoire(min, max) {
    var max = 6;
    var min = 1;
    let entier;
    entier = Math.floor(Math.random() * (max - min + 1)) + min;
    currentDiceHTML = $('#dice').html();
    let roundId = $('#roundId')
    roundId += roundId.text(entier)
    console.log(currentDiceHTML)
    console.log(entier)

    if (entier === 1) {
      return dice.fadeIn(1000).html("<img id='dice' src='dices/1.svg' height='300px' width='300px'>", currentDiceHTML);
    } else if (entier === 2) {
      return dice.fadeIn(1000).html("<img id='dice' src='dices/2.svg' height='300px' width='300px'>", currentDiceHTML);
    } else if (entier === 3) {
      return dice.fadeIn(1000).html("<img id='dice' src='dices/3.svg' height='300px' width='300px'>", currentDiceHTML);
    } else if (entier === 4) {
      return dice.fadeIn(1000).html("<img id='dice' src='dices/4.svg' height='300px' width='300px'>", currentDiceHTML);
    } else if (entier === 5) {
      return dice.fadeIn(1000).html("<img id='dice'src='dices/5.svg' height='300px' width='300px'>", currentDiceHTML);
    } else if (entier === 6) {
      return dice.fadeIn(1000).html("<img id='dice'src='dices/6.svg' height='300px' width='300px'>", currentDiceHTML);
    }
  }

  )









})