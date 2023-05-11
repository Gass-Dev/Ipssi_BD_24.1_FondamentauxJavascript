/* Exercice 1 /4pts
Création d’un générateur de mot de passe complexe.
(chiffres + alphabet en min + maj et caractères spéciaux)
*/
const passwordLengthInput = document.getElementById("passwordLength");
const passwordOutputInput = document.getElementById("passwordOutput");
const generateButtonMtp = document.getElementById("generateButtonMtp");

// Function pour générer un password
const generatePassword = () => {
    const length = passwordLengthInput.value;
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    const charsetLength = charset.length;
    let password = "";

    //générer le mot de passe caractère par caractère en utilisant la longueur choisi
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        password += charset[randomIndex];
    }

    passwordOutputInput.value = password; // mot de passe proposé
}

// ---------------------------------------------------------------------------------------------------------------------------
/* Exercice 2
Création d’un convertisseur qui transforme les degrés Celsius en Fahrenheit et inversement.
*/
let celsiusInput = document.getElementById('celsius');
let fahrenheitInput = document.getElementById('fahrenheit');
let convertCelButton = document.getElementById('buttonConvertCel');
let convertFahrButton = document.getElementById('buttonConvertFahr');

// Function convertir en Celcius
// Formule de conversion Celsius en Fahrenheit 1°C = (33.8°F - 32) x 5/9
const convertToCelsius = () => {
    let fahrenheitInput = document.getElementById('fahrenheit');
    let celsiusInput = document.getElementById('celsius');

    let fahrenheit = parseFloat(fahrenheitInput.value);
    let celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
}

// Function convertir en Fahrenheit
// Formule de conversion Fahrenheit Celsius 33.8°F = 1°C x 9/5 + 32
const convertToFahrenheit = () => {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = celsius * 9 / 5 + 32;
    fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
}


// ---------------------------------------------------------------------------------------------------------------------------
/* Exercice 3
Création d’un générateur de citations dans une Pop-up/Modal.
(pop-up activante et désactivable au click)
*/
let generateButtonCitation = document.getElementById("generateButtonCitation");
let modal = document.querySelector(".modal");

// Function pour générer une citation aléatoire
const generateRandomQuote = () => {
    const quotes = [
        "La vie est un combat!",
        "Il faut travailler pour obtenir ce que l'on désire.",
        "Le plus important c'est d'être heureux !",
        "Il faut sortir de sa zone de confort.",
        "Fais de tes rêves une réalité."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

// Function pour afficher la pop-up
const showPopupWithQuote = (quote) => {
    let overlay = document.querySelector(".overlay");
    let popup = document.querySelector(".popup");
    let quoteText = document.querySelector(".text");

    quoteText.textContent = quote;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Fermer";
    closeButton.addEventListener("click", hidePopup);

    // Ajout des éléments à la pop-up
    popup.appendChild(quoteText);
    popup.appendChild(closeButton);

    // Ajout de la pop-up à la page
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
};

// Function pour fermer la popup
const hidePopup = () => {
    const overlay = document.querySelector(".overlay");
    overlay.parentNode.removeChild(overlay);
    location.reload(); // Actualiser la page
};

// Function utilisant la fonction generateRandomQuote() et showPopupWithQuote(quote)
const getNotify = () => {
    const quote = generateRandomQuote();
    showPopupWithQuote(quote);
};


// ---------------------------------------------------------------------------------------------------------------------------
/* Exercice 4
Création d’un DarkMode, qui varie en mode jour ou nuit l’ensemble du style sur votre page.
*/

// Function qui passe le bgd en darkmode
const toggleDarkMode = () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
}

// ---------------------------------------------------------------------------------------------------------------------------
/* Exercice 5
Crée un burger menu, qui au click de son icon s’ouvre et se referme.
*/
let burgerMenu = document.getElementById('burger-menu');
let menu = document.getElementById('menu');

// Function ouvre le menu
const showBurger = () => {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    burgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
}
