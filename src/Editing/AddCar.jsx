import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function AddCar() {
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

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingCars = JSON.parse(localStorage.getItem("cars")) || [];
        existingCars.push(car);
        localStorage.setItem("cars", JSON.stringify(existingCars));
        navigate("/");
    };

    return (
        <Container>
            <h2 className="my-4">Додати автомобіль</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Назва</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Назва"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formManufacturer">
                    <Form.Label>Виробник</Form.Label>
                    <Form.Control
                        type="text"
                        name="manufacturer"
                        placeholder="Виробник"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formYear">
                    <Form.Label>Рік випуску</Form.Label>
                    <Form.Control
                        type="number"
                        name="year"
                        placeholder="Рік випуску"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formVolume">
                    <Form.Label>Об'єм</Form.Label>
                    <Form.Control
                        type="text"
                        name="volume"
                        placeholder="Об'єм"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Ціна</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        placeholder="Ціна"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formColor">
                    <Form.Label>Колір</Form.Label>
                    <Form.Control
                        type="text"
                        name="color"
                        placeholder="Колір"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Опис</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Опис"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" className="px-3 py-2" type="submit">
                    Додати автомобіль
                </Button>
                <Button
                    variant="secondary"
                    className="ml-2 px-3 py-2"
                    onClick={() => navigate("/")}
                >
                    Скасувати
                </Button>
            </Form>
        </Container>
    );
}

export default AddCar;
