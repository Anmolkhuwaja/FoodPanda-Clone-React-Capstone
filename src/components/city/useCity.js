import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import citiesData from "../../components/data/Cities.json";
import restaurantsData from "../../components/data/RestaurantsData.json";

const useCity = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [city, setCity] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [closeRestaurants, setCloseRestaurants] = useState([]);
  
    useEffect(() => {
      // Find city data from imported JSON
      const cityData = citiesData.find((city) => city.id === id);
      setCity(cityData);
      window.scrollTo(0, 0);
    }, [id]);
  
    useEffect(() => {
      setRestaurants(restaurantsData.restaurants);
    }, []);
  
    useEffect(() => {
      setCloseRestaurants(restaurantsData.closed_restaurants);
    }, []);
  return {city, restaurants, navigate, closeRestaurants}
}

export default useCity