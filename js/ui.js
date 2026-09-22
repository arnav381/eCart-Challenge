const productContainer =
    document.getElementById("productContainer");

const recentContainer =
    document.getElementById("recentContainer");

const productModal =
    document.getElementById("productModal");

const productDetails =
    document.getElementById("productDetails");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");


function getProductId(product) {

    return product.id ??
           product.productId ??
           product._id;
}


function getProductName(product) {

    return product.name ??
           product.productName ??
           product.title ??
           "Unnamed Product";
}


function getProductBrand(product) {

    return product.brand ??
           product.brandName ??
           "Unknown Brand";
}


function getProductPrice(product) {

    return product.price ??
           product.productPrice ??
           0;
}


function getProductRating(product) {

    return product.rating ??
           product.ratings ??
           0;
}


function getProductImage(product) {

    return product.image ??
           product.imageUrl ??
           product.thumbnail ??
           "";
}


function formatPrice(price) {

    if (typeof price !== "number") {
        return price;
    }

    return "₹" + price.toLocaleString("en-IN");
}


function displayProducts(products) {

    productContainer.innerHTML = "";

    if (!products || products.length === 0) {

        productContainer.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>No products are available.</p>
            </div>
        `;

        return;
    }


    products.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";


        const image = getProductImage(product);


        card.innerHTML = `

            ${
                image
                ?
                `
                <img
                    src="${image}"
                    alt="${getProductName(product)}"
                    class="product-image"
                >
                `
                :
                ""
            }


            <h3>
                ${getProductName(product)}
            </h3>


            <p class="product-brand">
                ${getProductBrand(product)}
            </p>


            <p class="product-price">
                ${formatPrice(getProductPrice(product))}
            </p>


            <p class="product-rating">
                ⭐ ${getProductRating(product)}
            </p>


            <button
                class="view-btn"
                data-id="${getProductId(product)}">

                View Product

            </button>
        `;


        const viewButton =
            card.querySelector(".view-btn");


        viewButton.addEventListener("click", function() {

            openProduct(
                getProductId(product)
            );

        });


        productContainer.appendChild(card);
    });
}


function displayRecentlyViewed() {

    recentContainer.innerHTML = "";


    const history = getRecentlyViewed();


    if (history.length === 0) {

        recentContainer.innerHTML = `
            <div class="empty-state">

                <h3>No recently viewed products</h3>

                <p>
                    Open a product to see it here.
                </p>

            </div>
        `;

        return;
    }


    history.forEach(function(id) {

        const product = findProductById(id);


        if (!product) {
            return;
        }


        const card =
            createRecentProductCard(product);


        recentContainer.appendChild(card);

    });
}


function createRecentProductCard(product) {

    const card =
        document.createElement("div");

    card.className = "product-card";


    const image =
        getProductImage(product);


    card.innerHTML = `

        ${
            image
            ?
            `
            <img
                src="${image}"
                alt="${getProductName(product)}"
                class="product-image"
            >
            `
            :
            ""
        }


        <h3>
            ${getProductName(product)}
        </h3>


        <p class="product-brand">
            ${getProductBrand(product)}
        </p>


        <p class="product-price">
            ${formatPrice(getProductPrice(product))}
        </p>


        <button class="view-btn">
            View Product
        </button>
    `;


    card.querySelector(".view-btn")
        .addEventListener("click", function() {

            openProduct(
                getProductId(product)
            );

        });


    return card;
}


function showProductDetails(product) {

    const image =
        getProductImage(product);


    productDetails.innerHTML = `

        ${
            image
            ?
            `
            <img
                src="${image}"
                alt="${getProductName(product)}"
                class="modal-image"
            >
            `
            :
            ""
        }


        <h2>
            ${getProductName(product)}
        </h2>


        <p>
            <strong>Brand:</strong>
            ${getProductBrand(product)}
        </p>


        <p>
            <strong>Price:</strong>
            ${formatPrice(getProductPrice(product))}
        </p>


        <p>
            <strong>Rating:</strong>
            ⭐ ${getProductRating(product)}
        </p>

    `;


    productModal.style.display = "flex";
}


function closeProductModal() {

    productModal.style.display = "none";
}