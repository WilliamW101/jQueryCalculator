// IMPORTANT TO DO FIRST LINE(grab document when the whole thing is loaded(.ready))
// SUPER IMPORTANT
$(document).ready(function() {
// no $ because not wrapped in jQuery variable
  var leftHand, op, rightHand;       // makes all 3 variable undefined in 1 line
  var result = 0;
  var equationString = '';
// have $ becuase wrapped in jQuery variable
  var $numButtons = $('.num-btn');
  var $opButtons = $('.op-btn');
  var $equalButton = $('#equal-btn');
  var $calcScreen = $('#calculator-screen');

  function setCalcScreen(result) {
    if(result === undefined) {
      $calcScreen.text(leftHand + ' ' + op + ' ' + rightHand);
    }else{
      $calcScreen.text(result);
    }
  }

  $numButtons.click(function() {
    $numButtons.removeClass('red-border');
    var buttonText = $(this).text();

    if (!leftHand) {
      if(buttonText === '.') {
        leftHand = '0.'
      }else{
        leftHand = buttonText;
      }
    }else if(leftHand && !op) {
      leftHand += buttonText;
    }else if(leftHand && op && !rightHand) {
      if(op === '/' && buttonText === '0') {
        alert('You can not devide by 0');
      }else{
        if(buttonText === '.') {
          rightHand = '0.'
        }else{
        rightHand = buttonText;
        }
      }
    }else if(leftHand && op && rightHand) {
      rightHand += buttonText;
    }
    setCalcScreen();
  });

  $opButtons.click(function() {
    $opButtons.removeClass('red-border');
    if(!leftHand){
      alert('Choose a number first!');
      $numButtons.addClass('red-border');
    }else{
      op = $(this).text();
    }
    setCalcScreen();
  });

  $equalButton.click(function() {
    if(leftHand && op && rightHand) {

      leftHand = parseFloat(leftHand.trim());
      rightHand = parseFloat(rightHand.trim());

      switch (op) {
        case '+':
          result = leftHand + rightHand;
          break;
        case '-':
          result = leftHand - rightHand;
          break;
        case 'x':
          result = leftHand * rightHand;
          break;
        case '/':
          result = leftHand / rightHand;
          break;
      }
      setCalcScreen(result);
    }else{
      alert('Equation Not Complete!');
      if(!leftHand) {
        // input.classNames = 'btn red background'
        $numButtons.addClass('red-border');
      }else if(leftHand && !op) {
        $opButtons.addClass('red-border');
      }else if(leftHand && op && !rightHand){
        $numButtons.addClass('red-border');
      }
    }
  });

});

// Never do antyhing outside of the $(document).ready because if you dont it will load before the page is done
