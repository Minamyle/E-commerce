// // // FoodItem.js
// // import React, { useState } from 'react';

// // const FoodItem = ({ food }) => {
// //   const { display, ingredients } = food;
// //   const [quantities, setQuantities] = useState(Array(ingredients.length).fill(0));

// //   const handleQuantityChange = (index, value) => {
// //     const newQuantities = [...quantities];
// //     newQuantities[index] = value;
// //     setQuantities(newQuantities);
// //   };

// //   const calculateTotal = () => {
// //     let total = 0;
// //     ingredients.forEach((ingredient, index) => {
// //       total += quantities[index] * ingredient.price;
// //     });
// //     return total.toFixed(2);
// //   };

// //   return (
// //     <div className='fixed  top-0 left-0 h-[100svh] flex flex-col items-center justify-center w-[100vw] backdrop-blur-sm bg-black/30'>
// //       <h2 className='text-white text-2xl'>{display.displayName}</h2>
// //       <img src={display.iconImage} alt={display.displayName} className='w-[20rem] h-[20rem] rounded-xl mt-5' />
// //       <h3 className='mt-8 text-white text-xl'>Ingredients:</h3>
// //       <ul className='border flex flex-col justify-normal items-start text-white'>
// //         {ingredients.map((ingredient, index) => (
// //           <li key={index} className='mt-8 '>
// //             {ingredient.name}: {ingredient.unit} - ${ingredient.price} per {ingredient.unit}
// //             <input
// //               type="number"
// //               value={quantities[index]}
// //               onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
// //               min="0"
// //               className='text-black'
// //             />
// //           </li>
// //         ))}
// //       </ul>
// //       <h3 className='mt-5 text-white text-xl'>Total: ${calculateTotal()}</h3>

// //       <button className=''>
// //         Add to cart
// //       </button>
// //     </div>
// //   );
// // };

// // export default FoodItem;




















// // FoodItem.js
// import React, { useState } from 'react';

// const FoodItem = ({ food, onAddToCart }) => {
//   const { display, ingredients } = food;
//   const [quantities, setQuantities] = useState(Array(ingredients.length).fill(0));

//   const handleQuantityChange = (index, value) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = value;
//     setQuantities(newQuantities);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     ingredients.forEach((ingredient, index) => {
//       total += quantities[index] * ingredient.price;
//     });
//     return total.toFixed(2);
//   };

//   const handleAddToCart = () => {
//     const item = {
//       name: display.displayName,
//       ingredients: ingredients.map((ingredient, index) => ({
//         name: ingredient.name,
//         unit: ingredient.unit,
//         quantity: quantities[index],
//         price: ingredient.price,
//       })),
//       total: parseFloat(calculateTotal()),
//       // Add your logic for calculating cooking price
//     };

//     // Call the onAddToCart prop to add the item to the cart
//     onAddToCart(item);
//   };

//   return (
//     <div className='fixed  top-0 left-0 h-[100svh] flex flex-col items-center justify-center w-[100vw] backdrop-blur-sm bg-black/30'>
//       <h2 className='text-white text-2xl'>{display.displayName}</h2>
//       <img src={display.iconImage} alt={display.displayName} className='w-[20rem] h-[20rem] rounded-xl mt-5' />
//       <h3 className='mt-8 text-white text-xl'>Ingredients:</h3>
//       <ul className='border flex flex-col justify-normal items-start text-white'>
//         {ingredients.map((ingredient, index) => (
//           <li key={index} className='mt-8 '>
//             {ingredient.name}: {ingredient.unit} - ${ingredient.price} per {ingredient.unit}
//             <input
//               type="number"
//               value={quantities[index]}
//               onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
//               min="0"
//               className='text-black'
//             />
//           </li>
//         ))}
//       </ul>
//       <h3 className='mt-5 text-white text-xl'>Total: ${calculateTotal()}</h3>

//       <button className='' onClick={handleAddToCart}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default FoodItem;








// FoodItem.js
import React, { useState } from 'react';

const FoodItem = ({ food, onAddToCart }) => {
  const { display, ingredients } = food;
  const [quantities, setQuantities] = useState(Array(ingredients.length).fill(0));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateTotal = () => {
    let total = 0;
    ingredients.forEach((ingredient, index) => {
      total += quantities[index] * ingredient.price;
    });
    return total.toFixed(2);
  };

  const handleAddToCart = () => {
    const item = {
      name: display.displayName,
      ingredients: ingredients.map((ingredient, index) => ({
        name: ingredient.name,
        unit: ingredient.unit,
        quantity: quantities[index],
        price: ingredient.price,
      })),
      total: parseFloat(calculateTotal()),
      // Add your logic for calculating cooking price
    };

    // Retrieve existing cart data from session storage
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Add the new item to the cart
    const updatedCart = [...existingCart, item];

    // Update session storage with the updated cart data
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    // Call the onAddToCart prop to update the cart in the parent component
    // onAddToCart(updatedCart);
  };

  return (
    <div className='fixed  top-0 left-0 h-[100svh] flex flex-col items-center justify-center w-[100vw] backdrop-blur-sm bg-black/30'>
      <h2 className='text-white text-2xl'>{display.displayName}</h2>
      <img src={display.iconImage} alt={display.displayName} className='w-[20rem] h-[10rem] rounded-xl mt-5' />
      <h3 className='mt-8 text-white text-xl'>Ingredients:</h3>
      <ul className='flex flex-col justify-normal items-start text-white'>
        {ingredients.map((ingredient, index) => (
          <li key={index} className='mt-8 '>
            {ingredient.name}: {ingredient.unit} - ${ingredient.price} per {ingredient.unit}
            <input
              type="number"
              value={quantities[index]}
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
              min="0"
              className='text-black'
            />
          </li>
        ))}
      </ul>
      <h3 className='mt-5 text-white text-xl'>Total: ${calculateTotal()}</h3>

      <button className='border px-4 py-2 text-white mt-6' onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
