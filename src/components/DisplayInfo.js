import React from 'react'

function DisplayCars() {
    let userInput_type = document.getElementsById("input_type").values;
    let userInput_model = document.getElementById("input_model").values;
    let userInput_mileage = document.getElementById("input_mileage").values;
    let userInput_seats = document.getElementById("input_seats").values;

    var filteredCars = Cars.filter(function (cars) {
        return cars.car_type == userInput_type && cars.car_model == userInput_model && cars.userInput_mileage == userInput_mileage && cars.car_seats == userInput_seats
    });

    
}