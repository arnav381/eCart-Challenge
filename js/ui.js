function loadLocations() {

    let fromSelect = document.getElementById("fromLocation");
    let toSelect = document.getElementById("toLocation");


    for (let location of deliveryNetwork.locations) {

        let option1 = document.createElement("option");
        option1.value = location.id;
        option1.textContent = location.name;

        fromSelect.appendChild(option1);


        let option2 = document.createElement("option");
        option2.value = location.id;
        option2.textContent = location.name;

        toSelect.appendChild(option2);
    }
}


function displayRoute(result) {

    let routeContainer =
        document.getElementById("routeContainer");

    routeContainer.innerHTML = "";


    let routeBox = document.createElement("div");
    routeBox.className = "route-box";


    for (let i = 0; i < result.path.length; i++) {

        let locationName =
            getLocationName(result.path[i]);


        let locationBox = document.createElement("div");
        locationBox.className = "location-box";

        locationBox.textContent = locationName;

        routeBox.appendChild(locationBox);


        if (i < result.path.length - 1) {

            let arrow = document.createElement("div");
            arrow.className = "arrow";

            arrow.textContent = "↓";

            routeBox.appendChild(arrow);
        }
    }


    routeContainer.appendChild(routeBox);


    document.getElementById("distance").textContent =
        result.distance + " km";


    document.getElementById("stops").textContent =
        result.path.length;


    document.getElementById("time").textContent =
        calculateDeliveryTime(result.distance) + " minutes";
}


function showMessage(message) {

    let routeContainer =
        document.getElementById("routeContainer");

    routeContainer.innerHTML =
        `<p class="empty-message">${message}</p>`;

    document.getElementById("distance").textContent = "-";
    document.getElementById("stops").textContent = "-";
    document.getElementById("time").textContent = "-";
}