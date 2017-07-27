function checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user){
        if ( user ) {
            console.log( 'User signed in' )
            console.log(user)
            // var photoURL = user.photoURL
            // // do logged in stuff
            // document.getElementById('google-pic')
            // .setAttribute('src', photoURL)
            document.getElementById('google-signin')
            .setAttribute('style', 'display: none; visibility: hidden') 
            document.getElementById('create-user')
            .setAttribute('style', 'display: inline-block; visibility: visible') 
            document.getElementById('signout')
            .setAttribute('style', 'display: inline-block; visibility: visible')                
        } else {
            console.log( 'User not signed in.' )
            // do not logged in stuff
            document.getElementById('google-signin')
            .setAttribute('style', 'display: inline-block; visibility: visible')

            document.getElementById('signout')
            .setAttribute('style', 'display: none; visibility: hidden')                
        }
    })

}
window.onload = function(){
    checkIfLoggedIn()
}


function signOut(){
    firebase.auth().signOut()
    // document.getElementById('google-pic')
    // .setAttribute('src', '')
    
    checkIfLoggedIn()
}

function signInWithGoogle(){
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider

    
    firebase.auth().signInWithPopup(googleAuthProvider)
            .then( function(data) {
                console.log(data)
                var photoURL = data.additionalUserInfo.profile.picture
                
                var idToken = data.credential.idToken
                // localStorage.setItem('firebase_idToken', idToken)
                // localStorage.setItem('google_photo', photoURL)
                
                // document.getElementById('google-pic')
                //         .setAttribute('src', photoURL)
                        
                checkIfLoggedIn()
            })
            .catch( function(error) {
                console.log(error)
            })
}