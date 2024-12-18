import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import citiesData from "../../components/data/Cities.json";
import { Box, Typography } from "@mui/material";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCities(citiesData);
  }, []);

  return (
   <>
    <Typography className='!text-3xl sm:text-base !mt-[20%] lg:!mt-[23%] md:!mt-[30%] lg:ps-15 !font-bold !md:mt-[22%] lg:pl-24 md:pl-12'>Find us in these cities and many more!</Typography>
    <div className="mt-[3%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 !items-center lg:px-10 lg:ms-10 md:ps-6 ps-4">
  {cities.map((city) => (
    <Box key={city.id} className="w-[94%]">
      <div
        className="bg-white border mb-5 h-[40vh] rounded-[16px] relative cursor-pointer overflow-hidden group"
        onClick={() => navigate(`/city/${city.id}`)}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${city.image})` }}
          alt={`${city.name} image`}
        ></div>
        <button className="absolute bottom-4 left-4 bg-[#fff] text-slate-900 font-bold py-2 px-4 rounded">
          {city.name}
        </button>
      </div>
    </Box>
  ))}
</div>

   </>
  );
};

export default Cities;
