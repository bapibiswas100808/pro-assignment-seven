import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

const SingleFood = ({ item, HandleSelectFood }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <div className=" bg-white p-5 rounded-xl card">
      <img className="max-h-48 rounded-xl w-full" src={recipe_image} alt="" />
      <h3 className="font-roboto text-xl font-semibold mb-0">{recipe_name}</h3>
      <p className="font-poppins mb-0 pb-4">{short_description}</p>
      <h4 className="mb-0 font-roboto">Ingredients: {ingredients.length}</h4>
      <ul className="mb-0 pb-4 space-y-2">
        {ingredients?.map((ingredient, idx) => (
          <li className="font-poppins" key={idx}>
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <IoMdTime className="" />
          <h5 className="font-poppins text-[15px] ">{preparing_time}</h5>
        </div>
        <div className="flex items-center gap-2">
          <FaFire className="" />
          <h5 className="font-poppins text-[15px] ">{calories}</h5>
        </div>
      </div>
      <button
        onClick={() => HandleSelectFood(item)}
        className="btn border-0 rounded-3xl bg-[#0BE58A] font-roboto text-md font-semibold cursor-pointer hover:bg-gray-300 w-full lg:w-2/3"
      >
        Ready To Cook?
      </button>
    </div>
  );
};
SingleFood.propTypes = {
  item: PropTypes.object.isRequired,
  HandleSelectFood: PropTypes.func,
};
export default SingleFood;
