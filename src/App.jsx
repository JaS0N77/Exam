import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddCar from "./Cars/AddCar";
import CarList from "./Cars/CarList";
import Footer from "./Navi/Footer";
import Filter from "./Filter/Filter";
import { Container, Grid } from "@mui/material";
import { Navbar, Nav } from "react-bootstrap";
import oauthClient from "./Auth/oauthClient";
import Login from "./Auth/Login";

function App() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [manufacturerFilter, setManufacturerFilter] = useState("All");
    const [yearFilter, setYearFilter] = useState("");
    const [colorFilter, setColorFilter] = useState("");
    const [engineVolumeFilter, setEngineVolumeFilter] = useState("");
    const [priceRangeFilter, setPriceRangeFilter] = useState({
        min: 0,
        max: 100000,
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedCars = localStorage.getItem("cars");
        if (storedCars) {
            setCars(JSON.parse(storedCars));
            console.log(storedCars);
            setFilteredCars(JSON.parse(storedCars));
        }
    }, []);


    const handleAddCar = (newCar) => {
        const updatedCars = [...cars, newCar];
        localStorage.setItem("cars", JSON.stringify(updatedCars));
        setCars(updatedCars);
    };

    const handleEditCar = (id, updatedCar) => {
        const index = cars.findIndex((car) =>
            car.id == id
        );
        const updatedCars = [... cars]
        updatedCars[index] = updatedCar;
        console.log(id)
        localStorage.setItem("cars", JSON.stringify(updatedCars));
        setCars(updatedCars);
    };

    const handleDeleteCar = (id) => {
        const updatedCars = cars.filter((car) => car.id !== id);
        localStorage.setItem("cars", JSON.stringify(updatedCars));
        setCars(updatedCars);
    };

    const handleFilterChange = (filterType, value) => {
        console.log(filterType);
        console.log(value);
        switch (filterType) {
            case "manufacturer":
                setManufacturerFilter(value);
                break;
            case "year":
                setYearFilter(value);
                break;
            case "color":
                setColorFilter(value);
                break;
            case "engineVolume":
                setEngineVolumeFilter(value);
                break;
            case "priceRange":
                setPriceRangeFilter(value);
                break;
            default:
                console.error(`Unknown filter type: ${filterType}`);
        }
        //applyFilters();
    };
    useEffect(() => {
        applyFilters();
        console.log(manufacturerFilter);
    },[manufacturerFilter,yearFilter,colorFilter,priceRangeFilter,engineVolumeFilter,cars] )
    
    const applyFilters = () => {
        let filteredCars = [...cars];
        filteredCars = filteredCars.filter(
            (car) => car.manufacturer.includes(manufacturerFilter) || manufacturerFilter == "All"
        );
        
        filteredCars = filteredCars.filter(
            (car) => car.year.includes(yearFilter)
        );

        filteredCars = filteredCars.filter(
            (car) => car.color.includes(colorFilter)
        );

        filteredCars = filteredCars.filter(
            (car) => 
              engineVolumeFilter.min ? car.engineVolume >= engineVolumeFilter.min : true &&
              engineVolumeFilter.max ? car.engineVolume <= engineVolumeFilter.max : true
          );


        filteredCars = filteredCars.filter(
            (car) =>
                car.price >= priceRangeFilter.min &&
                car.price <= priceRangeFilter.max
        );
    
        setFilteredCars(filteredCars);
    };

    const handleLogin = () => {
        oauthClient.authorize();
    };

    const handleLogout = () => {
        setToken(null);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("oauthToken");
        if (token) {
            setToken(token);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    CarDrive
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cars">
                            Cars
                        </Nav.Link>
                        <Nav.Link as={Link} to="/add-car">
                            Add Car
                        </Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link as={Link} to={handleLogout}>
                                Logout
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <Filter
                            onFilterChange={handleFilterChange}
                            manufacturerFilter={manufacturerFilter}
                            yearFilter={yearFilter}
                            colorFilter={colorFilter}
                            engineVolumeFilter={engineVolumeFilter}
                            priceRangeFilter={priceRangeFilter}
                        /> */}
                        <Routes>
                            <Route exact path="/" element={<h1>CarDrive</h1>} />
                            <Route
                                path="/cars"
                                element={
                                    <>
                                    <Filter
                                    onFilterChange={handleFilterChange}
                                    manufacturerFilter={manufacturerFilter}
                                    yearFilter={yearFilter}
                                    colorFilter={colorFilter}
                                    engineVolumeFilter={engineVolumeFilter}
                                    priceRangeFilter={priceRangeFilter}
                                    />
                                    <CarList
                                        cars={filteredCars}
                                        handleEditCar={handleEditCar}
                                        handleDeleteCar={handleDeleteCar}
                                    />
                                </>
                                    
                                }
                            />
                            <Route
                                path="/add-car"
                                element={<AddCar handleAddCar={handleAddCar} />}
                            />
                            <Route
                                path="/login"
                                element={<Login/>}
                            />
                        </Routes>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
