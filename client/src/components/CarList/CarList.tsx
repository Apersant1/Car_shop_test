import React, { useState, useCallback, useEffect } from "react";

import CarCard from "../CarCard/CarCard";
import { Car } from "../../graphql/generated";
import CarStore from "../../Store/CarStore";

import "./carList.styles.css";
interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [sortBy, setSortBy] = useState<string>("availability");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.target.value.toLowerCase();
      setSearchTerm(searchTerm);
      const filteredCars = cars.filter((car) =>
        car.model.toLowerCase().includes(searchTerm)
      );
      setFilteredCars(filteredCars);
    },
    [cars]
  );

  const handleSort = useCallback(
    (sortBy: string) => {
      setSortBy(sortBy);
      let sortedCars = [...cars];
      switch (sortBy) {
        case "availability":
          sortedCars.sort((a, b) =>
            a.availability === b.availability ? 0 : a.availability ? -1 : 1
          );
          break;
        case "name":
          sortedCars.sort((a, b) => b.model.localeCompare(a.model));
          break;
        case "name_back":
          sortedCars.sort((a, b) => a.model.localeCompare(b.model));
          break;
        case "price_down":
          sortedCars.sort(
            (a, b) =>
              parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
          );
          break;
        case "price_up":
          sortedCars.sort(
            (a, b) =>
              parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
          );
          break;
        case "year_newest":
          sortedCars.sort((a, b) => b.model_year - a.model_year);
          break;
        case "year_oldest":
          sortedCars.sort((a, b) => a.model_year - b.model_year);
          break;
        default:
          break;
      }
      setFilteredCars(sortedCars);
    },
    [cars]
  );

  useEffect(() => {
    const fetchCars = () => {
      const cars = CarStore.cars;
      setCars(cars);
      handleSort("availability");
    };
    fetchCars();
  }, [cars]);
  return (
    <div className="car-list">
      <div className="search-sort">
        <div className="car-list-filter">
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.7379 5.20162L7.92877 4L3.96438 0L0 4L1.19087 5.20162L3.12215 3.25303V13.0988H4.80662V3.25303L6.7379 5.20162Z"
              fill="black"
            />
            <path
              d="M13.4758 10.7984L11.5445 12.747V2.90126H9.86006V12.747L7.92879 10.7984L6.73792 12L10.7023 16L14.6667 12L13.4758 10.7984Z"
              fill="black"
            />
          </svg>

          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="availability">Сначала в наличии</option>
            <option value="name">По имени (A-Z)</option>
            <option value="name_back">По имени (Z-A)</option>
            <option value="price_down">Сначала дешевле</option>
            <option value="price_up">Сначала дороже</option>
            <option value="year_newest">Сначала новее</option>
            <option value="year_oldest">Сначала старше</option>
          </select>
        </div>
        <div className="car-list_search">
          <input
            type="text"
            placeholder="Найти авто"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="3" fill="#4F2CD9" />
            <path
              d="M18 17.139L14.7167 13.8551C15.3792 13.005 15.7427 11.9668 15.7427 10.8714C15.7427 9.5701 15.2361 8.34678 14.3154 7.42731C13.3953 6.50662 12.1726 6 10.8714 6C9.5701 6 8.34739 6.50662 7.42731 7.42731C6.50723 8.34678 6 9.5701 6 10.8714C6 12.1726 6.50723 13.396 7.42731 14.3154C8.34739 15.2361 9.5701 15.7427 10.8714 15.7427C11.9668 15.7427 13.005 15.3798 13.8551 14.7161L17.139 17.9994L18 17.139ZM10.8714 14.5249C9.89587 14.5249 8.97823 14.1449 8.28832 13.455C7.59781 12.7651 7.21784 11.8469 7.21784 10.8714C7.21784 9.89587 7.59781 8.97823 8.28832 8.28832C8.97823 7.59781 9.89587 7.21784 10.8714 7.21784C11.8469 7.21784 12.7645 7.59781 13.4544 8.28832C14.1449 8.97823 14.5249 9.89587 14.5249 10.8714C14.5249 11.8469 14.1449 12.7651 13.4544 13.455C12.7645 14.1449 11.8469 14.5249 10.8714 14.5249Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
