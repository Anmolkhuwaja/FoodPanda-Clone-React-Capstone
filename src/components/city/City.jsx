import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import citiesData from "../../components/data/Cities.json"; // Import JSON data directly
import { Box, Button, Typography } from "@mui/material";
import Panda from "../../assets/Hero home page.webp";
import Card from "@mui/material/Card";
import AA from "../../assets/aa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const City = () => {
  const { id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Find city data from imported JSON
    const cityData = citiesData.find((city) => city.id === id);
    setCity(cityData);
  }, [id]);

  return (
    <>
      <div className="lg:mt-[72px] lg:h-[41vh] md:h-[25vh] h-[20vh] md:mt-[112px] mt-[85px] bg-[#f7f7f7] ">
        {city ? (
          <Box className="flex items-center lg:px-10 md:px-1">
            <Typography className="text-[#333333] lg:!text-[40px] md:!text-[25px] ps-5 !text-[12px] lg:ps-10 md:ps-1 !font-bold">
              {city.title}
            </Typography>
            <img
              src={Panda}
              className="lg:w-[36%] lg:ps-0 md:ps-36 ps-20 md:w-[67%] w-[70%] md:-mt-10"
              alt=""
            />
          </Box>
        ) : (
          <p>City not found</p>
        )}

        <Box className="lg:px-20 mt-6 md:px-1 flex">
          <Link
            to="/"
            variant="body2"
            color="inherit"
            className="relative group md:ms-1 ms-2 underline font-medium text-[#39434d]"
          >
            Homepage
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-[3px]"></span>
          </Link>

          {city && (
            <Typography className="text-[#39434d] !font-medium !ms-4">
              {city.name}
            </Typography>
          )}
        </Box>
      </div>

      <Box className="mt-16">
        <Typography className="text-[#333333] !font-medium lg:px-20  lg:!text-[35px] md:!text-[25px]">
          All restaurants
        </Typography>

        <Box className="d-flex gap-5 lg:px-20 md:px-8 px-4">
          {/* {filteredProducts.length > 0 ? ( */}
          {/* // filteredProducts.map((product, index) => ( */}
          <Card sx={{ maxWidth: 360, cursor: "pointer" }}>
            <img src={AA} className="img-fluid" alt={``} />
            <Box className="flex justify-between items-center">
              <Typography
                gutterBottom
                className="pt-2 ps-2 text-[20px] text-[#333333] !font-bold"
                component="div"
              >
                {/* {product.name} */}
                  Karachi Chaman Biryani
              </Typography>

              <Box className='flex items-center justify-center'>
                <FontAwesomeIcon
                  sx={{ color: "#9d0a48" }}
                  className="text-gray-700 cursor-pointer text-sm"
                  icon={faStar}
                />
                <Typography
                gutterBottom
                className="ps-1 !text-sm pt-1"
                component="div"
              >
                {/* {product.name} */} 47
              </Typography><span className="!text-sm ps-1 pr-2">(100+)</span>
              </Box>
            </Box>

            <Typography
              variant="body2"
              className="ps-2"
              sx={{ color: "text.secondary" }}
            >
              {/* {product.desc} */} Anmol
            </Typography>
            <Box className="d-flex my-3 justify-content-between px-2 align-content-center">
              {/* <Button size="small" sx={{ backgroundColor: "#ffde21" }} className="py-0 px-3 fw-bold text-black">
                  BUY NOW
                </Button> */}
              {/* <Button
                  onClick={() => cartHandler(product)}
                  size="small"
                  className="px-3 fw-bold text-white bg-black"
                >
                  Add to cart
                </Button> */}
            </Box>
          </Card>
          {/* ))
        ) : (
          <Typography variant="h6" className="p-5">
            No products found.
          </Typography>
        )} */}
        </Box>
      </Box>
    </>
  );
};

export default City;
