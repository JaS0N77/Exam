import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Grid,
} from "@mui/material";


const Filter = ({
    onFilterChange,
    manufacturerFilter,
    yearFilter,
    colorFilter,
    engineVolumeFilter,
    priceRangeFilter,
}) => {

    const [manufacturer, setManufacturer] = useState(manufacturerFilter);
    const [year, setYear] = useState(yearFilter);
    const [color, setColor] = useState(colorFilter);
    const [engineVolume, setEngineVolume] = useState(engineVolumeFilter);
    const [priceRange, setPriceRange] = useState(priceRangeFilter);

    const handleManufacturerChange = (event) => {
            event.preventDefault();
            console.log(event.target.value);
            setManufacturer(event.target.value);
            onFilterChange("manufacturer", event.target.value);
    };

    const handleYearChange = (event) => {
            setYear(event.target.value);
            onFilterChange("year", event.target.value);
    };

    const handleColorChange = (event) => {
            setColor(event.target.value);
            onFilterChange("color", event.target.value);
    };

    const handleEngineVolumeChange = (event) => {
            setEngineVolume(event.target.value);
            onFilterChange("engineVolume", event.target.value);
    };

    const handlePriceRangeChange = (event) => {
            const { name, value } = event.target;
            setPriceRange((prevPriceRange) => ({
                ...prevPriceRange,
                [name]: value,
            }));
            onFilterChange("priceRange", { ...priceRange, [name]: value });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <InputLabel id="manufacturer-label">
                        Manufacturer
                    </InputLabel>
                    <Select
                        labelId="manufacturer-label"
                        value={manufacturer}
                        onChange={handleManufacturerChange}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Toyota">Toyota</MenuItem>
                        <MenuItem value="Ford">Ford</MenuItem>
                        <MenuItem value="Honda">Honda</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <InputLabel id="year-label">Year</InputLabel>
                    <Select
                        labelId="year-label"
                        value={year}
                        onChange={handleYearChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="2020">2020</MenuItem>
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2022">2022</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <InputLabel id="color-label">Color</InputLabel>
                    <Select
                        labelId="color-label"
                        value={color}
                        onChange={handleColorChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        <MenuItem value="White">White</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <InputLabel id="engine-volume-label">
                        Engine Volume
                    </InputLabel>
                    <Select
                        labelId="engine-volume-label"
                        value={engineVolume}
                        onChange={handleEngineVolumeChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="1.5">1.5L</MenuItem>
                        <MenuItem value="2.0">2.0L</MenuItem>
                        <MenuItem value="2.5">2.5L</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Min"
                                type="number"
                                value={priceRange.min}
                                onChange={handlePriceRangeChange}
                                name="min"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Max"
                                type="number"
                                value={priceRange.max}
                                onChange={handlePriceRangeChange}
                                name="max"
                            />
                        </Grid>
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Filter;
