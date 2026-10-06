document.addEventListener("DOMContentLoaded", function () {

    createGraph();

    loadLocations();


    let fromLocation =
        document.getElementById("fromLocation");

    let toLocation =
        document.getElementById("toLocation");

    let findRouteBtn =
        document.getElementById("findRouteBtn");


    findRouteBtn.addEventListener("click", function () {

        let start = fromLocation.value;
        let end = toLocation.value;


        if (start === "" || end === "") {

            showMessage("Please select both locations.");

            return;
        }


        if (start === end) {

            showMessage(
                "Starting location and destination cannot be the same."
            );

            return;
        }


        let result = getRouteDetails(start, end);


        if (result === null) {

            showMessage(
                "No route is available between these locations."
            );

            return;
        }


        displayRoute(result);
    });

});