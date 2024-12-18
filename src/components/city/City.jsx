import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import citiesData from "../../components/data/Cities.json"; // Import JSON data directly

const City = () => {
  const { id } = useParams(); // Get city ID from URL
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Find city data from imported JSON
    const cityData = citiesData.find((city) => city.id === id);
    setCity(cityData);
  }, [id]);

  return (
    <div>
      {city ? (
        <h1>{city.title}</h1> // Display city title
      ) : (
        <p>City not found</p>
      )}
    </div>
  );
};

export default City;
