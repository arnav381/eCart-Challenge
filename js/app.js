function getProducts() {

    if (typeof products !== "undefined" &&
        Array.isArray(products)) {

        return products;
    }


    if (typeof productData !== "undefined" &&
        Array.isArray(productData)) {

        return productData;
    }


    if (typeof productsData !== "undefined" &&
        Array.isArray(productsData)) {

        return productsData;
    }


    if (typeof data !== "undefined" &&
        Array.isArray(data)) {

        return data;
    }


    return [];
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