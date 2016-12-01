$(document).ready(function() {
  // console.log(window.location);
  if(window.location.pathname === '/jquery_examples') {
  function getName() {
    var name = prompt('What is your name?').trim();
    if(name === null || name === '') {
      getName();
    }else{
      // set the main header tet
      $('#main-header').text('Welcome ' + name);
      }
    }

    var $userInput = $('#user-input');
    var $addUserButton = $('#add-user');
    var $usersList = $('#users-list');
    var $toggleUserListButton = $('#toggle-user-list');

    function addUser() {
      $userInput.removeClass('red-border');
      // grab value out of input
      var userInputValue = $userInput.val().trim();
      if(userInputValue === '') {
        alert('You need to input a User name!');
        $userInput.addClass('red-border').focus();
      }else{
        //append a new li inside of the users list ul
        $usersList.append('<li>' + userInputValue + '</li>')
        $userInput.val('').focus();
      }
    }

    $toggleUserListButton.click(function() {
      $usersList.slideToggle();
    });

    $userInput.keyup(function(e) {
      if(e.keyCode === 13) {
        // add the new li to the ul
        addUser();
      }
    });

    $addUserButton.click(function() {
      addUser();
    });

  getName();
  }
});


// jakes

// $(document).ready(function() {
// 	if(window.location.pathname === '/jquery_examples') {
//
// 		function getName() {
// 		  var name = prompt('What is your name?').trim();
// 		  if(name === null || name === '') {
// 		  	getName();
// 		  } else {
// 		  	// set the main header text
// 		  	$('#main-header').text('Welcome ' + name);
// 		  }
// 		}
//
// 		var $userInput = $('#user-input');
// 		var $addUserButton = $('#add-user');
// 		var $usersList = $('#users-list');
//
// 		function addUser() {
// 			$userInput.removeClass('red-border');
// 			// grab value out of input
// 			var userInputValue = $userInput.val().trim();
// 			if(userInputValue === '') {
// 				alert('You need to input a user name!');
// 				$userInput.addClass('red-border').focus();
// 			} else {
// 				// append a new li inside of the users list ul
// 				$usersList.append('<li>' +  userInputValue + '</li>');
// 				$userInput.val('').focus();
// 			}
// 		}
//
// 		$userInput.keyup(function(e) {
// 			if(e.keyCode === 13) {
// 				addUser();
// 			}
// 		});
//
// 		$addUserButton.click(function() {
// 			addUser();
// 		});
//
// 		getName();
// 	}
// });
