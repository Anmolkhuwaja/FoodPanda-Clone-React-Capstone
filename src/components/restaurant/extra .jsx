

<div class="w-full lg:w-3/4 bg-white h-full rounded-lg p-4">
<Typography class="text-2xl font-bold mb-4">
  <FontAwesomeIcon
    className="text-yellow-400 pr-2 !text-2xl"
    icon={faFireFlameCurved}
  />
  Popular
</Typography>
<Typography className="!text-lg text-[#707070]">
  Most ordered right now.
</Typography>

{/* Cards Popular*/}
<Box className="flex flex-wrap gap-4 mt-8">
  {restaurant.details.menu.popular.map((item, index) => (
    <Box
      key={index}
      className="relative border flex items-start justify-start w-full rounded-xl sm:w-[48%] lg:w-[49%] h-[24vh] px-3 py-2 overflow-hidden transition-transform transform hover:scale-105 hover:translate-y-2"
    >
      <Box>
        <Typography className="!font-bold !text-[16px] !mt-1">
          {item.name}
        </Typography>
        <Typography className="text-pink-600">
          {item.price}
          <span className="text-[#707070] ps-2 line-through !text-[14px]">
            {item.originalPrice}
          </span>
        </Typography>
        <Typography className="text-[#707070]">
          {item.description}
        </Typography>
      </Box>
      <Box className="overflow-hidden ms-10 mt-1">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover ms-3 rounded-lg w-[90%] transition-transform"
        />
      </Box>
      {/* Add to Cart Button */}
      <Typography className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full">
        <FontAwesomeIcon
          icon={faPlus} // Plus Icon for Add to Cart
        />
      </Typography>
    </Box>
  ))}
</Box>

<Typography class="text-2xl font-bold mb-4 mt-5">
  Strong Pepsi Deals
</Typography>

{/* Card Strong pepsi*/}
<Box className="flex gap-4 mt-8">
  {restaurant.details.menu.deals.map((deal, index) => (
    <Box
      key={index}
      className="relative border flex w-full rounded-xl sm:w-[48%] lg:w-[49%] h-[24vh] px-3 py-2 overflow-hidden transition-transform transform hover:scale-105 hover:translate-y-2"
    >
      {deal.items.map((item, idx) => (
        <Box key={idx} className="flex">
          <Box>
            <Typography className="!font-bold !text-[16px] !mt-1">
              {item.name}
            </Typography>
            <Typography className="text-pink-600">
              {item.price}
              <span className="text-[#707070] ps-2 line-through !text-[14px]">
                {item.originalPrice}
              </span>
            </Typography>
            <Typography className="text-[#707070] !text-[14px]">
              {item.description}
            </Typography>
          </Box>
          <Box className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover ms-3 w-[90%] rounded-lg"
            />
          </Box>
        </Box>
      ))}
      {/* Add to Cart Button */}
      <Typography className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full">
        <FontAwesomeIcon
          icon={faPlus} // Plus Icon for Add to Cart
        />
      </Typography>
    </Box>
  ))}
</Box>

<Typography class="text-2xl font-bold mb-4 mt-5">Rice</Typography>
<Typography className="!text-lg text-[#707070]">
  Served fresh.
</Typography>

{/* Cards Rice */}
<Box className="flex flex-wrap gap-4 mt-8">
  {/* Fetch the "Rice" category from the categories array */}
  {restaurant.details.menu.categories
    .find((category) => category.name === "Rice")
    ?.items.map((item, index) => (
      <Box
        key={index}
        className="relative border flex w-full justify-between items-start rounded-xl sm:w-[48%] lg:w-[49%] h-[24vh] px-3 py-2 overflow-hidden transition-transform transform hover:scale-105 hover:translate-y-2"
      >
        <Box>
          <Typography className="!font-bold !text-[16px] !mt-1">
            {item.name}
          </Typography>
          <Typography className="text-pink-600">
            {item.price}
            <span className="text-[#707070] ps-2 line-through !text-[14px]">
              {item.originalPrice}
            </span>
          </Typography>
          <Typography className="text-[#707070]">
            {item.description}
          </Typography>
        </Box>
        <Box className="overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-lg ms-3 w-[90%]"
          />
        </Box>
        {/* Add to Cart Button */}
        <Typography className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full">
          <FontAwesomeIcon
            icon={faPlus} // Plus Icon for Add to Cart
          />
        </Typography>
      </Box>
    ))}
</Box>

<Typography class="text-2xl font-bold mb-4 mt-5">Sides</Typography>
<Typography className="!text-lg text-[#707070]">
  Single serving. Served fresh
</Typography>

{/* Cards Sides */}
<Box className="flex flex-wrap gap-4 mt-8">
  {/* Fetch the "Sides" category from the categories array */}
  {restaurant.details.menu.categories
    .find((category) => category.name === "Sides")
    ?.items.map((item, index) => (
      <Box
        key={index}
        className="relative border flex items-start justify-between w-full rounded-xl sm:w-[48%] lg:w-[49%] h-[24vh] px-3 py-2 overflow-hidden transition-transform transform hover:scale-105 hover:translate-y-2"
      >
        <Box>
          <Typography className="!font-bold !text-[16px] !mt-1">
            {item.name}
          </Typography>
          <Typography className="text-pink-600">
            {item.price}
            <span className="text-[#707070] ps-2 line-through !text-[14px]">
              {item.originalPrice}
            </span>
          </Typography>
          <Typography className="text-[#707070]">
            {item.description}
          </Typography>
        </Box>
        <Box className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-[90%] ms-3 rounded-lg"
          />
        </Box>
        {/* Add to Cart Button */}
        <Typography className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full">
          <FontAwesomeIcon
            icon={faPlus} // Replace with the Plus Icon
          />
        </Typography>
      </Box>
    ))}
</Box>
</div>