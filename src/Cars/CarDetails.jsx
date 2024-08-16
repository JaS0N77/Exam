import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/cars/${id}`).then((response) => {
            setCar(response.data);
        });
    }, [id]);

    if (!car) return <div>Завантаження...</div>;

    const handleDelete = () => {
        axios.delete(`/api/cars/${id}`).then(() => {
            navigate("/");
        });
    };

    return (
        <Container>
            <h2 className="my-4">{car.name}</h2>
            <p>Виробник: {car.manufacturer}</p>
            <p>Рік випуску: {car.year}</p>
            <p>Об'єм: {car.volume}</p>
            <p>Ціна: {car.price}</p>
            <p>Колір: {car.color}</p>
            <p>Опис: {car.description}</p>
            <Button
                variant="primary"
                className="px-3 py-2"
                onClick={() => navigate(`/edit-car/${car.id}`)}
            >
                Редагувати
            </Button>
            <Button
                variant="danger"
                className="ml-2 px-3 py-2"
                onClick={handleDelete}
            >
                Видалити
            </Button>
        </Container>
    );
}

export default CarDetails;
