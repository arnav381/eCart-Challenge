let graph = {};


function createGraph() {

    graph = {};

    for (let location of deliveryNetwork.locations) {
        graph[location.id] = [];
    }

    for (let road of deliveryNetwork.roads) {

        graph[road.from].push({
            node: road.to,
            distance: road.distance
        });

        graph[road.to].push({
            node: road.from,
            distance: road.distance
        });
    }
}


function findShortestPath(start, end) {

    let distance = {};
    let previous = {};
    let visited = {};

    for (let location of deliveryNetwork.locations) {
        distance[location.id] = Infinity;
        previous[location.id] = null;
        visited[location.id] = false;
    }

    distance[start] = 0;


    for (let i = 0; i < deliveryNetwork.locations.length; i++) {

        let current = null;
        let smallestDistance = Infinity;

        for (let location of deliveryNetwork.locations) {

            let id = location.id;

            if (!visited[id] && distance[id] < smallestDistance) {
                smallestDistance = distance[id];
                current = id;
            }
        }


        if (current === null) {
            break;
        }

        visited[current] = true;


        for (let neighbour of graph[current]) {

            let newDistance =
                distance[current] + neighbour.distance;

            if (newDistance < distance[neighbour.node]) {

                distance[neighbour.node] = newDistance;
                previous[neighbour.node] = current;
            }
        }
    }


    if (distance[end] === Infinity) {
        return null;
    }


    let path = [];
    let current = end;

    while (current !== null) {

        path.push(current);
        current = previous[current];
    }

    path.reverse();


    return {
        path: path,
        distance: distance[end]
    };
}


function getLocationName(id) {

    for (let location of deliveryNetwork.locations) {

        if (location.id === id) {
            return location.name;
        }
    }

    return id;
}


function calculateDeliveryTime(distance) {

    /*
        Assumption:
        Average delivery speed = 30 km/hour
    */

    let timeInHours = distance / 30;
    let timeInMinutes = Math.ceil(timeInHours * 60);

    return timeInMinutes;
}


function getRouteDetails(start, end) {

    return findShortestPath(start, end);
}