import React, { useEffect, useState } from "react";
import { ListGroup, Container } from "react-bootstrap";

function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const existingCars = JSON.parse(localStorage.getItem("cars")) || [];
        setCars(existingCars);
    }, []);

    if (cars.length === 0) {
        return <div>Завантаження...</div>;
    }

    return (
        <Container>
            <h1 className="my-4">Список автомобілів</h1>
            <ListGroup>
                {cars.map((car, index) => (
                    <ListGroup.Item
                        key={index}
                        action
                        onClick={() => (window.location.href = `/car/${index}`)}
                    >
                        {car.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default Home;
