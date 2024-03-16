import { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const Recipe = () => {
  const [foodItem, setFoodItem] = useState([]);
  useEffect(() => {
    fetch("Foods.json")
      .then((res) => res.json())
      .then((data) => setFoodItem(data));
  }, []);
  return (
    <div className="mt-10 lg:mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl lg:text-4xl font-semibold font-roboto">
          Our Recipes
        </h2>
        <p className="text-lg font-poppins">
          Experience Cooking Masters unique recipes; indulge in flavors that
          tantalize taste buds, crafted with expertise and passion for culinary
          excellence.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {foodItem?.map((item, idx) => (
            <SingleFood item={item} key={idx}></SingleFood>
          ))}
        </div>
        <div className="bg-red-200 w-2/5">
          <h2>Sidebar</h2>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
