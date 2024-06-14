import React from "react";
import { observer } from "mobx-react-lite";
import { Car } from "../../graphql/generated";
import CarStore from "../../Store/CarStore";

import "./carCard.styles.css";
interface CarCardProps {
  car: Car;
}

const CarCard = observer(({ car }: CarCardProps) => {
  const isFavorite = CarStore.favorites.some((favCar) => favCar.id === car.id);

  return (
    <div className="car-card">
      {car.availability ? (
        <div className="image_container">
          <img src={car.img_src} alt={car.brand} />
        </div>
      ) : (
        <div className="image_container image_disable">
          <img src={car.img_src} alt={car.brand} />
        </div>
      )}
      <div className="car-info">
        <h3>
          {car.brand} {car.model}
        </h3>
        <div className="car-info_details">
          <p>Год: {car.model_year}</p>
          <p>Цвет: {car.color}</p>
        </div>
        <div className="car-info_price">
          <strong>от {car.price}</strong>
        </div>
      </div>
      <div className="car-card-buttons">
        {car.availability ? (
          <button className="car-card-buttons_buy">Купить</button>
        ) : (
          <button className="car-card-buttons_buy_disable">Купить</button>
        )}
        {isFavorite ? (
          <>
            <button
              className="car-card-buttons_favorite"
              onClick={() => CarStore.removeFavorite(car)}
            >
              <svg
                width="27"
                height="22"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24Z"
                  fill="#4F2CD9"
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            className="car-card-buttons_favorite"
            onClick={() => CarStore.addFavorite(car)}
          >
            <svg
              width="27"
              height="22"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24ZM7.5 3C5.019 3 3 5.019 3 7.5C3 12.5445 9.9645 18.3105 13.5 20.709C17.0355 18.3105 24 12.546 24 7.5C24 5.019 21.981 3 19.5 3C16.9665 3 15 5.4195 15 7.5C15 8.328 14.328 9 13.5 9C12.672 9 12 8.328 12 7.5C12 5.4195 10.0335 3 7.5 3Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});
export default CarCard;
