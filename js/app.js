function getProducts() {

    const products = [];

    storeData.categories.forEach(function(category) {

        category.subcategories.forEach(function(subcategory) {

            subcategory.products.forEach(function(product) {

                products.push(product);

            });

        });

    });

    return products;
}


const allProducts = getProducts();


function findProductById(productId) {

    return allProducts.find(function(product) {

        return String(getProductId(product)) ===
               String(productId);

    });

}


function openProduct(productId) {

    const product =
        findProductById(productId);


    if (!product) {
        return;
    }


    addToRecentlyViewed(productId);


    showProductDetails(product);

}


clearHistoryBtn.addEventListener(
    "click",
    function() {

        clearRecentlyViewed();

    }
);


closeModalBtn.addEventListener(
    "click",
    function() {

        closeProductModal();

    }
);


productModal.addEventListener(
    "click",
    function(event) {

        if (event.target === productModal) {

            closeProductModal();

        }

    }
);


displayProducts(allProducts);

displayRecentlyViewed();