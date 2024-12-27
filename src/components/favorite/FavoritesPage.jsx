import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../slices/favoriteSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-14 px-20">
      <h1 className="text-5xl font-medium mb-6 text-black">My Favorites</h1>

      {/* Check if there are no favorite items */}
      {favoriteItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <img
            src="https://micro-assets.foodora.com/img/no-favorites-fp.svg"
            alt="No Favorites"
            className="w-1/3 mb-6"
          />
          <h2 className="text-3xl font-medium text-gray-700 mb-4">
            No Favourites Saved
          </h2>
          <p className="text-gray-600">
            You’ll see all your favorites here, to make ordering even faster.
            Just look for the ❤️ icon.
          </p>
          <Link to="/" className="inline-block">
            <button className="text-gray-600 border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:border-gray-800 hover:w-[12rem]">
              Let's find some favorites
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-lg bg-white flex flex-col items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <p className="text-gray-600">Rs. {item.price}</p>
              <button
                onClick={() => dispatch(removeFromFavorites(item))}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
