import React, { useState } from "react";

const AddCar = ({ handleAddCar }) => {
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [year, setYear] = useState("");
    const [volume, setVolume] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCar = {
            id: Date.now(),
            name,
            manufacturer,
            year,
            volume,
            price,
            color,
            description,
        };
        handleAddCar(newCar);
        setName("");
        setManufacturer("");
        setYear("");
        setVolume("");
        setPrice("");
        setColor("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Додати автомобіль</h2>
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
                    onChange={(event) =>setPrice(parseInt(event.target.value))}
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
            <button type="submit">Додати автомобіль</button>
        </form>
    );
};

export default AddCar;
