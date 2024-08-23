import React, { useState } from "react";

const EditCar = ({ car, handleEditCar, handleToggleEdit }) => {
    const [name, setName] = useState(car.name);
    const [manufacturer, setManufacturer] = useState(car.manufacturer);
    const [year, setYear] = useState(car.year);
    const [volume, setVolume] = useState(car.volume);
    const [price, setPrice] = useState(car.price);
    const [color, setColor] = useState(car.color);
    const [description, setDescription] = useState(car.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedCar = {
            id: car.id,
            name,
            manufacturer,
            year,
            volume,
            price,
            color,
            description,
        };
        handleEditCar(car.id,updatedCar);
        handleToggleEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Редагувати автомобіль</h2>
            <label>
                Назва:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Виробник:
                <input
                    type="text"
                    value={manufacturer}
                    onChange={(event) => setManufacturer(event.target.value)}
                />
            </label>
            <br />
            <label>
                Рік випуску:
                <input
                    type="number"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </label>
            <br />
            <label>
                Об'єм:
                <input
                    type="number"
                    value={volume}
                    onChange={(event) => setVolume(parseFloat(event.target.value))}
                />
            </label>
            <br />
            <label>
                Ціна:
                <input
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(parseInt(event.target.value))}
                />
            </label>
            <br />
            <label>
                Колір:
                <input
                    type="text"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                />
            </label>
            <br />
            <label>
                Опис:
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Зберегти зміни</button>
            <button onClick={handleToggleEdit}>Скасувати</button>
        </form>
    );
};

export default EditCar;
