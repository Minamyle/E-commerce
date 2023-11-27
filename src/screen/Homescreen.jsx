import React, { useEffect, useState } from "react";
import { categories } from "../data";
import CategoryCard from "../components/categoryCard";
import FoodItem from "../components/FoodItem";
import CartItem from "../components/CartItem";
const Homescreen = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Appetizer & Snacks");
  const [category, setCategory] = useState();
  const [selectedFood, setSelectedFood] = useState('')
  const [showCart, setShowCart] = useState(false)
  // const categories = [
  //     {
  //         id: 1,
  //         name: 'Appetizers & Snacks',
  //         img: ''
  //     },
  //     {
  //         id: 2,
  //         name: 'Baking Recipes',
  //         img: ''
  //     },
  //     {
  //         id: 3,
  //         name: 'Breakfast & Brunch',
  //         img: ''
  //     },
  //     {
  //         id: 4,
  //         name: 'Chicken Republic',
  //         img: ''
  //     },
  //     {
  //         id: 5,
  //         name: 'Holiday Recipe',
  //         img: ''
  //     },
  //     {
  //         id: 6,
  //         name: 'Quick & Easy',
  //         img: ''
  //     },
  // ]

  const fetchCategory = async () => {
    const url = "https://yummly2.p.rapidapi.com/categories/list";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4dace60f82msh08a03dbd32f400fp14522djsna13e09b3e598",
        "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setCategory(JSON.parse(result));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //     fetchCategory()
  // })

  console.log(categories);

  // useEffect(() => {
  //     if(category) {
  //         // console.log(category.browse-categories)
  //         console.log(category['browse-categories']);
  //         console.log(category)

  //     }

  // }, [category])
  // console.log(category)


  useEffect(() => {
    setSelectedCategory(categories[0]?.display.displayName)
  }, [])


  useEffect(() => {
    
  }, [selectedFood])
  return (
    <div className="flex flex-col px-[10%] py-6 border">
      <div className="flex flex-row justify-between items-end">
        <div>
          <p className="text-gray-400 text-[14px]">Hello Brian,</p>
          <h1 className="mt-7 text-3xl font-[500] text-slate-800">
            Discover Recipes
          </h1>
        </div>
        <div>
          <div className="flex justify-end items-end mb-4">
            <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" className="w-7 h-7" onClick={() => setShowCart(!showCart)}/>
          </div>
          
           <input
          placeholder="Search for Recipes, Ingredients and Tags"
          className="border w-[25rem] px-3 py-2 text-[14px]"
        />
        </div>
       
      </div>

      <div
        className="mt-[4rem] p-8"
        //    style={{
        //     backgroundImage: 'url("https://epicureandculture.com/wp-content/uploads/2016/10/Nice_food.jpg")',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     width: '80vw',
        //     height: '300px', // Adjust the height as needed
        //     color: 'white',  // For text color or other styles
        //   }}

        style={{
          position: "relative",
          width: "80vw",
          height: "300px",
          overflow: "hidden",
        }}
      >

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              'url("https://epicureandculture.com/wp-content/uploads/2016/10/Nice_food.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 0.5 opacity
          }}
          className="p-8"
        >
          <div>
            <p className="bg-white text-black text-[12px] w-fit px-2 py-1 rounded-sm">
              Popular
            </p>
            <h1 className="mt-8 text-3xl text-white font-mono font-[500]">
              Vegan: Chicken & Chips <br /> with Pancakes
            </h1>
            <div className="flex flex-row mt-6 bg-white w-fit gap-5 items-center px-4 py-1 rounded-xl">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6834/6834351.png"
                className="w-5 h-5"
              />
              <p>25 min</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-[4rem]">
        <p>Categories</p>

        <div className="flex flex-row w-[100%] flex-wrap gap-4">
          {
            categories.map((item) => <CategoryCard key={item.display.displayName} setShowCart={setShowCart} setSelectedFood={setSelectedFood} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} item={item}/>)
          }
        </div>
      </div>

      {
        selectedFood !== "" && <div>
          <FoodItem food={selectedFood}/>
        </div>
      }

      <div>
        <p>Suggested Recipes for you</p>

        <div></div>
      </div>

      {
        showCart && <CartItem setShowCart={setShowCart}/>
      }
    </div>
  );
};

export default Homescreen;
