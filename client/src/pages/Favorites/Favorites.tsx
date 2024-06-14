import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import CarStore from "../../Store/CarStore";
import Header from "../../components/Header/Header";
import { Car } from "../../graphql/generated";

import "./favorites.styles.css";

const Favorites: React.FC = observer(() => {
  const [cars, setCars] = useState<Car[]>([]);

  const handleRemoveFavorite = (car: Car) => {
    CarStore.removeFavorite(car);
    setCars(cars.filter((c) => c.model!== car.model));
  };

  useEffect(() => {
    const fetchCars = () => {
      const cars = CarStore.favorites;
      setCars(cars);
    };
    fetchCars();
  }, [cars]);

  return (
    <>
      <Header />
      <div className="car-list-favorites">
        <h1 className="title">Избранные товары — {cars.length} позиций</h1>
        <div className="car-grid-favorites">
          {cars.map((car, index) => (
            <>
              <div key={car.model} className="car-item">
                <img src={car.img_src} alt={car.brand} />
                <div className="car-info-favorite">
                  <h2 className="car-name-favorite">
                    {car.brand} {car.model}
                  </h2>
                  <div className="car_details">
                    <p className="car-year">{car.description}</p>
                    <p className="car-year">Год: {car.model_year}</p>
                    <p className="car-color">Цвет: {car.color}</p>
                  </div>
                  <p className="car-price-favorite">от {car.price}</p>
                  <div className="card-favorites-buttons">
                    <button className="select-button">
                      <p>Выбрать комплектацию</p>
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleRemoveFavorite(car)}
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 17.6068C2 18.7098 2.897 19.6068 4 19.6068H14C15.103 19.6068 16 18.7098 16 17.6068V5.60675H2V17.6068ZM4 7.60675H14L14.002 17.6068H4V7.60675Z"
                          fill="#D73737"
                        />
                        <path
                          d="M12 2.60675V0.60675H6V2.60675H0V4.60675H18V2.60675H12Z"
                          fill="#D73737"
                        />
                        <path
                          d="M8 9.60675H6V15.6068H8V9.60675Z"
                          fill="#D73737"
                        />
                        <path
                          d="M12 9.60675H10V15.6068H12V9.60675Z"
                          fill="#D73737"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <hr className="card-separator" />
            </>
          ))}
        </div>
      </div>
    </>
  );
});

export default Favorites;
