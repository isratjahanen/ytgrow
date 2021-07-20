 var config = {
    apiKey: "AIzaSyAqlUskzmjinKAQ7kpA1eJFLNJ1fEXgYkM",
    authDomain: "browsersmart-5f450.firebaseapp.com",
    databaseURL: "https://browsersmart-5f450-default-rtdb.firebaseio.com",
    projectId: "browsersmart-5f450",
    storageBucket: "browsersmart-5f450.appspot.com",
    messagingSenderId: "600801488042",
    appId: "1:600801488042:web:72df635247b5c1ee77f4d3"};
firebase.initializeApp(config);




function Logins(){

var userEmail = document.getElementById("email").value;
var userPass = document.getElementById("psw").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;

window.alert("Error : " + errorMessage);

// ...
});
}
var frb = firebase.auth();

frb.onAuthStateChanged(user => {
  if (user) {

            var Fuid = user.uid;
            Duid = "User/"+(Fuid);
            document.getElementById("user").style.display = "block";
            document.getElementById("main").style.display = "none";
            location.replace("index.html")
            ////

   }
            
        else {
    // No user is signed in.

    document.getElementById("main").style.display = "block";
    document.getElementById("user").style.display = "none";
	

  }    
            
            
            });

function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
