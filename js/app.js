let userSelect = document.getElementById("userSelect");
let refreshBtn = document.getElementById("refreshBtn");

let refreshCount = 0;


function loadRecommendations() {

    let userIndex = Number(userSelect.value);

    displayViewedProducts(userIndex);

    let recommendations = getRecommendations(userIndex);

    if (refreshCount > 0) {

        recommendations.sort(function() {
            return Math.random() - 0.5;
        });
    }

    recommendations = recommendations.slice(0, 3);

    displayRecommendations(userIndex, recommendations);
}


userSelect.addEventListener("change", function() {

    refreshCount = 0;

    loadRecommendations();

});


refreshBtn.addEventListener("click", function() {

    refreshCount++;

    loadRecommendations();

});


loadRecommendations();