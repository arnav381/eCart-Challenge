const MAX_HISTORY = 5;

let recentlyViewed = [];
let recentlyViewedSet = new Set();


function addToRecentlyViewed(productId) {

    const id = String(productId);

    if (recentlyViewedSet.has(id)) {

        const index = recentlyViewed.indexOf(id);

        if (index !== -1) {
            recentlyViewed.splice(index, 1);
        }

    } else {

        recentlyViewedSet.add(id);
    }

    recentlyViewed.unshift(id);

    if (recentlyViewed.length > MAX_HISTORY) {

        const removedId = recentlyViewed.pop();

        recentlyViewedSet.delete(removedId);
    }

    displayRecentlyViewed();
}


function getRecentlyViewed() {

    return recentlyViewed;
}


function clearRecentlyViewed() {

    recentlyViewed = [];

    recentlyViewedSet.clear();

    displayRecentlyViewed();
}