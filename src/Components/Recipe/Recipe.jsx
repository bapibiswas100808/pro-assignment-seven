import { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const Recipe = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [cookingItem, setCookingItem] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const HandleSelectFood = (food) => {
    const isExists = selectedFood.find(
      (everyFood) => everyFood.recipe_id === food.recipe_id
    );
    if (!isExists) {
      setSelectedFood([...selectedFood, food]);
    } else {
      alert("Already selected");
    }
  };
  const HandleSelectCook = (cookItem) => {
    const totalCookItem = [...cookingItem, cookItem];
    setCookingItem(totalCookItem);
    const addedTime = parseInt(cookItem.preparing_time.split(" ")[0]);
    const addedCalories = parseInt(cookItem.calories.split(" ")[0]);
    setTotalTime(totalTime + addedTime);
    setTotalCalories(totalCalories + addedCalories);
  };

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
            <SingleFood
              HandleSelectFood={HandleSelectFood}
              item={item}
              key={idx}
            ></SingleFood>
          ))}
        </div>
        <div className="w-[87%] lg:w-2/5 p-6 rounded-3xl card">
          <h4 className="font-roboto text-xl font-bold text-center pb-3 border-b-4">
            Cooking now : {selectedFood?.length}
          </h4>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-roboto text-sm">Name</th>
                  <th className="font-roboto text-sm">Time</th>
                  <th className="font-roboto text-sm">Calories</th>
                  <th className="font-roboto text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedFood?.map((eachFood, idx) => (
                  <tr key={idx}>
                    <th className="font-roboto text-lg">{idx + 1}</th>
                    <td className="font-poppins text-lg">
                      {eachFood?.recipe_name}
                    </td>
                    <td className="font-poppins text-lg">
                      {eachFood?.preparing_time}
                    </td>
                    <td className="font-poppins text-lg">
                      {eachFood.calories}
                    </td>
                    <td>
                      <button
                        onClick={() => HandleSelectCook(eachFood)}
                        className="py-2 px-3 cursor-pointer font-roboto font-semibold rounded-3xl bg-[#0BE58A] border-0"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h4 className="font-roboto text-xl font-bold text-center pb-3 border-b-4">
            Cooking Finished : {cookingItem?.length}
          </h4>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-roboto text-sm">Name</th>
                  <th className="font-roboto text-sm">Time</th>
                  <th className="font-roboto text-sm">Calories</th>
                </tr>
              </thead>
              <tbody>
                {cookingItem?.map((eachItem, idx) => (
                  <tr key={idx}>
                    <th className="font-roboto text-lg">{idx + 1}</th>
                    <td className="font-poppins text-lg">
                      {eachItem?.recipe_name}
                    </td>
                    <td className="font-poppins text-lg">
                      {eachItem?.preparing_time}
                    </td>
                    <td className="font-poppins text-lg">
                      {eachItem?.calories}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th></th>
                  <td></td>
                  <td className="font-poppins text-sm">
                    Total Time:{totalTime}
                  </td>
                  <td className="font-poppins text-sm">
                    Total Calories:{totalCalories}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
