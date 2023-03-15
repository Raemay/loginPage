
const error = document.getElementById('erreur');
const submitButton = document.getElementById('submit')
const authentication = {
        email: "melaniebelliard@outlook.fr",
        password: "wildcodeschool1234"
    }
    
submitButton.addEventListener("click", (e) => {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (username === "" && password === "") {
        e.preventDefault();
        error.innerHTML = "Veuillez renseigner tous les champs";
    } else if (username === authentication.email && password === authentication.password){
        e.preventDefault();
        error.innerHTML = "";
        alert("Vous êtes connecté");
    } else {
        e.preventDefault();
        error.innerHTML = "";
        alert("email ou mot de passe incorrect");
    }
})



