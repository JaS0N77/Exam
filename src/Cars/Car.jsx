import React, { useState } from "react";
import EditCar from "./EditCar";

const Car = ({ car, handleEditCar, handleDeleteCar }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <li>
            {isEditing ? (
                <EditCar
                    car={car}
                    handleEditCar={handleEditCar}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : (
                <div>
                    <h2>{car.name}</h2>
                    <p>Виробник: {car.manufacturer}</p>
                    <p>Рік випуску: {car.year}</p>
                    <p>Об'єм: {car.volume} л</p>
                    <p>Ціна: {car.price} грн</p>
                    <p>Колір: {car.color}</p>
                    <p>Опис: {car.description}</p>
                    <button onClick={handleToggleEdit}>Редагувати</button>
                    <button onClick={() => handleDeleteCar(car.id)}>
                        Видалити
                    </button>
                </div>
            )}
        </li>
    );
};

export default Car;
