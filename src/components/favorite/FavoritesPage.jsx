import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../slices/favoriteSlice";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <Box className="p-6 bg-gray-50 min-h-screen lg:!mt-14 md:!mt-24 mt-14 px-6 md:px-20">
      {/* Page Title */}
      <Typography
        variant="h3"
        className="text-4xl md:text-5xl font-medium mb-6 text-pink-600"
      >
        My Favorites
      </Typography>

      {/* Check if there are no favorite items */}
      {favoriteItems.length === 0 ? (
        <Box className="flex flex-col items-center  justify-center h-96 text-center">
          <img
            src="https://micro-assets.foodora.com/img/no-favorites-fp.svg"
            alt="No Favorites"
            className="w-60 mb-6 mt-6"
          />
          <Typography
            variant="h4"
            className="text-2xl md:text-3xl font-medium text-gray-700 mb-4"
          >
            No Favourites Saved
          </Typography>
          <Typography className="text-gray-600 mb-6 !mt-2">
            You’ll see all your favorites here, to make ordering even faster.
            Just look for the <span className="text-pink-600">❤️</span> icon.
          </Typography>
          <Link to="/">
            <Button
              variant="outlined"
              className="!text-gray-600 !mt-2 !border-gray-600 hover:!border-pink-600 hover:!text-pink-600 px-4 py-2"
            >
              Let’s find some favorites
            </Button>
          </Link>
        </Box>
      ) : (
        <Box className="grid grid-cols-1 gap-6 mt-6">
          {favoriteItems.map((item) => (
            <Box
              key={item.id}
              className="flex items-center border rounded-lg shadow-md bg-white p-4 justify-between"
            >
              {/* Image Section */}
              <Box className="w-1/5 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-20 !mt-6 h-20 object-cover"
                />
              </Box>

              {/* Description Section */}
              <Box className="w-2/5 px-4 text-center">
                <Typography
                  variant="h6"
                  className="font-semibold text-gray-800"
                >
                  {item.name}
                </Typography>
              </Box>

              {/* Price Section */}
              <Box className="w-1/5 text-center">
                <Typography className="text-gray-600 font-medium">
                  Rs. {item.price}
                </Typography>
              </Box>

              {/* Remove Button Section */}
              <Box className="w-1/5 flex justify-center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(removeFromFavorites(item))}
                  className="!bg-pink-600 !capitalize !rounded-3xl hover:!bg-pink-700 !text-white"
                >
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FavoritesPage;
