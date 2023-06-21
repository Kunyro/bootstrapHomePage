// Switch between light theme and dark theme css

document.getElementById("light").addEventListener("click", function() {
    document.getElementById("theme").href = "stylesLight.css";
});

document.getElementById("dark").addEventListener("click", function() {
    document.getElementById("theme").href = "stylesDark.css";
});
