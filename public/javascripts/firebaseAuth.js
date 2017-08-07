
// window.onload = function(){
//     checkIfLoggedIn()
// }


// function signOut(){
//     firebase.auth().signOut()
//     // document.getElementById('google-pic')
//     // .setAttribute('src', '')
    
//     checkIfLoggedIn()
// }

// function signInWithGoogle(){
//     var googleAuthProvider = new firebase.auth.GoogleAuthProvider

    
//     firebase.auth().signInWithPopup(googleAuthProvider)
//             .then( function(data) {
//                 console.log(data)
//                 var photoURL = data.additionalUserInfo.profile.picture
                
//                 var idToken = data.credential.idToken
//                 // localStorage.setItem('firebase_idToken', idToken)
//                 // localStorage.setItem('google_photo', photoURL)
                
//                 // document.getElementById('google-pic')
//                 //         .setAttribute('src', photoURL)
                        
//                 checkIfLoggedIn()
//             })
//             .catch( function(error) {
//                 console.log(error)
//             })
// }


function createUser(){
    var username = document.getElementById('usernamer').value
    var fullname = document.getElementById('namer').value
    var email = document.getElementById('emailr').value
    var password = document.getElementById('passwordr').value
    var confirmpassword = document.getElementById('confirm-passwordr').value
    checkIfCanRegister(username, fullname, email, password, confirmpassword)
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    console.log('user has been created and is signed in')
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        var userId = user.uid
        console.log(userId)
        var database = firebase.database()
        var usersRef = database.ref('/users').child(userId)
        
        usersRef.push({
          userid: userId,
          username: username,
          fullname: fullname,
          email: email,
          password: password
          
        })
        .then(function(){
          // var newUrl = "/setup"
          // document.location.href = newUrl
        })
        .catch(function(error){
          console.log(error)
        })
      } else {
        console.log('no user yet')
      }
    });
    
}

function checkUsername(){
    var username = document.getElementById('usernamer').value
    if (username == ''){
      document.getElementById('displaynameerror')
      .setAttribute('style', 'display: inline-block; visibility: visible')
    }   
}

function checkUsernameWhenThere(){
  var username = document.getElementById('usernamer').value
  document.getElementById('displaynameerror')
  .setAttribute('style', 'display: none; visibility: hidden')  
}

function checkFullname(){
  var fullname = document.getElementById('namer').value
  if (fullname == ''){
    document.getElementById('fullnameerror')
    .setAttribute('style', 'display: inline-block; visibility: visible')
  }
  checkUsername()
  
}

function checkFullnameWhenThere(){
  var fullname = document.getElementById('namer').value  
  document.getElementById('fullnameerror')
  .setAttribute('style', 'display: none; visibility: hidden')
}

function checkEmail(){
  var email = document.getElementById('emailr').value
  if (email == ''|| email.indexOf('@') == -1){
    document.getElementById('emailerror')
    .setAttribute('style', 'display: inline-block; visibility: visible')
  }
  checkUsername()
  checkFullname()
  
}

function checkEmailWhenThere(){
  var email = document.getElementById('emailr')
  document.getElementById('emailerror')
  .setAttribute('style', 'display: none; visibility: hidden')
}

function checkPassword(){
  var password = document.getElementById('passwordr').value
  if (password.length < 6){
    document.getElementById('passworderror')
    .setAttribute('style', 'display: inline-block; visibility: visible')
  }
  checkEmail()
  checkUsername()
  checkFullname()
}

function checkPasswordWhenThere(){
  var password = document.getElementById('passwordr').value
  console.log(password)
  if (password.length < 6){
    document.getElementById('passworderror')
    .setAttribute('style', 'display: inline-block; visibility: visible')
  } else{
    document.getElementById('passworderror')
    .setAttribute('style', 'display: none; visibility: hidden')
  }
}

function checkConfirmPassword(){
  var password = document.getElementById('passwordr').value
  var confirmpassword = document.getElementById('confirm-passwordr').value
  if (confirmpassword !== password){
    document.getElementById('confirmpassworderror')
    .setAttribute('style', 'display: inline-block; visibility: visible')
  } else {
    document.getElementById('confirmpassworderror')
    .setAttribute('style', 'display: none; visibility: hidden')
  }
}

function signInUser(){
    var email = document.getElementById('username')
    var password = document.getElementById('password')
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

}

function checkIfCanRegister(username, fullname, email, password, confirmpassword){
  var nameerror = document.getElementById('displaynameerror')
  var emailerror = document.getElementById('emailerror')
  var fullnameerror = document.getElementById('fullnameerror')
  var passworderror = document.getElementById('passworderror')
  var confirmpassworderror = document.getElementById('confirmpassworderror')
  if (nameerror.style.display == 'inline-block' || emailerror.style.display == 'inline-block' || fullnameerror.style.display == 'inline-block' || passworderror.style.display == 'inline-block' || confirmpassworderror.style.display == 'inline-block'){
    throw new Error ('One of the errors is still existant')
  }
  if (username == '' | fullname == '' | email == '' | password == '' | confirmpassword == ''){
    var nameerror = document.getElementById('displaynameerror').setAttribute('style', 'display: inline-block; visibility: visible')
    var emailerror = document.getElementById('emailerror').setAttribute('style', 'display: inline-block; visibility: visible')
    var fullnameerror = document.getElementById('fullnameerror').setAttribute('style', 'display: inline-block; visibility: visible')
    var passworderror = document.getElementById('passworderror').setAttribute('style', 'display: inline-block; visibility: visible')

    throw new Error ('All of the errors are existant')
  }
}




// function signInUser(){
    
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// }


// function checkIfLoggedIn(){
//     firebase.auth().onAuthStateChanged(function(user){
//         if ( user ) {
//             console.log( 'User signed in' )
//             console.log(user)
            
              
//         } else {
//             console.log( 'User not signed in.' )
//             // do not logged in stuff
             
//         }
//     })

// }

