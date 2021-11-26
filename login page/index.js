
document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("../redirect/welcome.html")
        var uid = user.uid;
    } else {
        // User is signed out
    }
});

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

function SignUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}

function forgotpass() {
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}