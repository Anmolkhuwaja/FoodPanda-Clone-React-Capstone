import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logoo from "../../assets/Logo image.png";
import Delivery from "../../assets/delivery hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-6 mt-10">
        <Box
          borderTop="1px solid #F0F0F0"
          borderBottom="1px solid #F0F0F0"
          py={4}
        >
          <Typography
            variant="body2"
            className="!text-[14px] md:!text-[20px] lg:!ms-28 md:!ms-10 ms-2 md:px-0 lg:px-0 px-2"
            color="textSecondary"
            align="start"
          >
            <span className="underline text-[#39434d] !font-medium !mr-4 relative group">
              Laos
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Cambodia
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Myanmar
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Thailand
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Hong Kong
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Taiwan
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Malaysia
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !font-medium !mr-4 !ms-4 relative group">
              Philippines
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
            |
            <span className="underline text-[#39434d] !mr-4 !ms-4 !font-medium relative group">
              Singapore
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </span>
          </Typography>
        </Box>

        <section className="my-6">
          <Box className="flex md:flex-row flex-col gap-3 md:justify-between md:text-start text-center justify-center space-x-6">
            <Typography
              variant="body2"
              color="textSecondary"
              className=" lg:px-24 !font-bold text-center md:ps-4"
            >
              © foodpanda
            </Typography>
            {/* First column */}
            <ul className="space-y-2 flex-1 max-w-xs lg:max-w-full">
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Press
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  pandapay Terms and Conditions
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Security
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Careers
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Cashback Terms and Conditions
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Partner with Us
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  All cities
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16" 
                >
                  pandapro - Monthly Subscription Programme
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Ramzan deals Areas delivered in Lahore
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Areas delivered in Lahore
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Second column */}
            <ul className="space-y-2 flex-1 max-w-xs lg:max-w-full">
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Help Center
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Terms and Conditions
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Download foodpanda Apps
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Suggest a Restaurant
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  All cuisines
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  pandago - Request a Rider
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Update on COVID-19 in Pakistan
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  foodpanda Home Chef
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Areas delivered in Karachi
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Areas delivered in Islamabad
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Third column */}
            <ul className="space-y-2 flex-1 max-w-xs lg:max-w-full">
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Refunds with pandapay
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Privacy policy
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Human rights policy
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Corporate Customer
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  foodpanda Magazine
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  foodpanda Vouchers & Coupons
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  pandamart Grocery Delivery
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Become an Affiliate Areas delivered in Gujranwala
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Areas delivered in Gujranwala
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  variant="body2"
                  color="inherit"
                  className="underline text-[#39434d] !font-medium relative group md:ms-0 ms-16"
                >
                  Areas delivered in Peshawar
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-400 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </Box>
        </section>

       <Box borderTop="1px solid #F0F0F0" py={0}>
  <Box className="flex flex-col md:flex-row justify-between gap-6 px-14">
    {/* Left Side */}
    <div className="flex justify-start gap-2 items-center w-1/2">
      <img
        src={Logoo}
        alt="logo"
        className="w-36 object-contain"
      />
      <Divider
        orientation="vertical"
        flexItem
        className="!mx-1 !mt-8"
        sx={{ height: "50px" }}
      />
      <img
        src={Delivery}
        alt="delivery"
        className="w-36 object-contain"
      />
    </div>

    {/* Right Side */}
    <Box className="flex gap-4 w-1/2 md:justify-end justify-center md:ms-0 ms-20 md:mt-10">
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-[24px] text-[#575a5d] border border-[#91969b] p-2 bg-white rounded-full 
          transition-transform duration-200 ease-in-out 
          hover:scale-110 hover:bg-[#f4f8ff]"
      />
      <FontAwesomeIcon
        icon={faFacebookF}
        className="text-[22px] text-[#575a5d] border border-[#91969b] px-3 py-2 bg-white rounded-full 
        transition-transform duration-200 ease-in-out 
        hover:scale-110 hover:bg-[#f4f8ff]"
      />
    </Box>
  </Box>
</Box>

      </footer>
    </>
  );
};

export default Footer;
