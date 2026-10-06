let users = [
    {
        name: "User A",
        viewed: ["Laptop", "Mouse", "Keyboard", "Headphones"]
    },
    {
        name: "User B",
        viewed: ["Laptop", "Mouse", "Monitor", "Keyboard"]
    },
    {
        name: "User C",
        viewed: ["Laptop", "Headphones", "Monitor", "Mouse"]
    },
    {
        name: "User D",
        viewed: ["Laptop", "Mouse", "Monitor", "Webcam"]
    },
    {
        name: "User E",
        viewed: ["Laptop", "Keyboard", "Headphones", "Webcam"]
    },
    {
        name: "User F",
        viewed: ["Mouse", "Keyboard", "Monitor", "Webcam"]
    }
];


function getRecommendations(userIndex) {

    let currentUser = users[userIndex];

    let score = new Map();

    for (let product of currentUser.viewed) {

        for (let i = 0; i < users.length; i++) {

            if (i == userIndex) {
                continue;
            }

            if (users[i].viewed.includes(product)) {

                for (let otherProduct of users[i].viewed) {

                    if (currentUser.viewed.includes(otherProduct)) {
                        continue;
                    }

                    if (!score.has(otherProduct)) {
                        score.set(otherProduct, 0);
                    }

                    score.set(
                        otherProduct,
                        score.get(otherProduct) + 1
                    );
                }
            }
        }
    }

    let result = [];

    for (let [product, count] of score) {

        result.push({
            name: product,
            score: count
        });
    }

    result.sort(function(a, b) {
        return b.score - a.score;
    });

    return result;
}