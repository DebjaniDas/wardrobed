
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
    console.log(username)
    var fullname = document.getElementById('namer').value
    var email = document.getElementById('emailr').value
    var password = document.getElementById('passwordr').value
    giveErrors()
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    
    console.log('user has been created and is signed in')
    var newUrl = "/features"
    document.location.href = newUrl
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log(user)
        // User is signed in.
      } else {
          console.log('error')
        // No user is signed in.
      }
    });
}

function giveErrors(){
	var password = document.getElementById('passwordr').value
	var confirmpassword = document.getElementById('confirm-passwordr').value
	if (password.length < 6){
		document.getElementById('passworderror')
		.setAttribute('style', 'display: inline-block; visibility: visible')
	}
	else{
		
	}
	
	if (password !== confirmpassword){
	    document.getElementById('confirmpassworderror')
		.setAttribute('style', 'display: inline-block; visibility: visible')
		return
	}
	
	
}


function signInUser(){
    var email = document.getElementById('email')
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

