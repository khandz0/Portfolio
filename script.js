/* document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my portfolio!");
}); */
function changeBackground() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
} 
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
