//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//Hide hints
$("form span").hide();

fuction isUsernamePresent(){

  return $username.val().length > 1;
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {

/*Because if canSubmit returns true then disabled would be added, so only when is not true
we will need it to be added */

  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
// we dont really need focus.(confirmPasswordEvent) only keyup(confirmPasswordEvent)
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// will only work on submitting if password works
enableSubmitEvent();
