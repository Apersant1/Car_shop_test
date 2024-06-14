import React from "react";
import { observable, action, computed, makeAutoObservable } from 'mobx';

import { Car } from "../graphql/generated";



class CarStore {
	cars : [Car]= [];
	favorites : [Car]= [];

	constructor() {
		makeAutoObservable(this);
	}

	loadCars(cars: [Car]) {
		this.cars = cars;
	}

	addFavorite(car: Car) {
		this.favorites.push(car);
	}

	removeFavorite(car: Car) {
		this.favorites = this.favorites.filter(favCar => favCar.id !== car.id);
	}

	get filteredCars() {
		// Implement your filter logic here based on search terms
		return this.cars;
	}

	get sortedCars() {
		// Implement your sorting logic here based on selected criteria
		return this.filteredCars;
	}
}

export default new CarStore();