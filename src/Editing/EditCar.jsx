import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditCar() {
    const { id } = useParams();
    const [car, setCar] = useState({
        name: "",
        manufacturer: "",
        year: "",
        volume: "",
        price: "",
        color: "",
        description: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/cars/${id}`).then((response) => {
            setCar(response.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/cars/${id}`, car).then(() => {
            navigate(`/car/${id}`);
        });
    };

    return (
        <div>
            <h2>Редагувати автомобіль</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={car.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="manufacturer"
                    value={car.manufacturer}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="year"
                    value={car.year}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="volume"
                    value={car.volume}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={car.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="color"
                    value={car.color}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    value={car.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Зберегти зміни</button>
                <button type="button" onClick={() => navigate(`/car/${id}`)}>
                    Скасувати
                </button>
            </form>
        </div>
    );
}

export default EditCar;
