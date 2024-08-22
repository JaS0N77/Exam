import React from "react";
import Car from "./Car";

const CarList = ({ cars, handleEditCar, handleDeleteCar }) => {
    return (
        <ul>
            {cars.map((car) => (
                <Car
                    key={car.id}
                    car={car}
                    handleEditCar={handleEditCar}
                    handleDeleteCar={handleDeleteCar}
                />
            ))}
        </ul>
    );
};

export default CarList;
