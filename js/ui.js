function displayViewedProducts(userIndex) {

    let container = document.getElementById("viewedProducts");

    container.innerHTML = "";

    for (let product of users[userIndex].viewed) {

        let div = document.createElement("div");

        div.className = "viewed-product";
        div.innerText = product;

        container.appendChild(div);
    }
}


function displayRecommendations(userIndex, recommendations) {

    let container = document.getElementById("recommendations");

    container.innerHTML = "";

    if (recommendations.length == 0) {

        container.innerHTML =
            "<p>No recommendations available.</p>";

        return;
    }

    for (let product of recommendations) {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>

            <p class="reason">
                Often viewed with your products
            </p>

            <p>
                Recommendation Score: ${product.score}
            </p>
        `;

        container.appendChild(card);
    }
}