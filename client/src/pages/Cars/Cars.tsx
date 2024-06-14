import { FC, useEffect } from "react";
import CarStore from "../../Store/CarStore";
import CarList from "../../components/CarList/CarList";

import { Query, Car } from "../../graphql/generated";
import carsJSON from "../../fake_cars.json";
import Header from "../../components/Header/Header";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;
  useEffect(() => {
    CarStore.loadCars(cars);
  }, [cars]);
  return (
    <div>
      <Header/>
      <CarList cars={CarStore.cars} />
    </div>
  );
};

export default Cars;
