
document.addEventListener("DOMContentLoaded", function () {

    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchIcon.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            alert("You searched for: " + query);

        } else {
            alert("Please enter something to search.");
        }
    });

  
    const seeMoreButtons = document.querySelectorAll(".box-content p");

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to product details page...");
         
        });
    });

   
    const backToTop = document.querySelector(".foot-panel");

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

   
    const panelAll = document.querySelector(".panel-all");
    if (panelAll) {
        panelAll.addEventListener("click", function () {
            alert("Navigation menu toggle (for mobile view)");
        });
    }
});
