document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchIcon = document.getElementById("search-icon");

    // Afficher la barre de recherche quand on clique sur l'icône de recherche
    searchIcon.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
        searchInput.focus();
    });

    // Lancer la recherche quand on appuie sur "Entrée"
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Lancer la recherche quand on clique sur l'icône de validation
    searchBtn.addEventListener("click", function () {
        performSearch();
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query !== "") {
            window.location.href = "/recherche?query=" + encodeURIComponent(query);
        }
    }
});