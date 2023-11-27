// import React, { useEffect, useState } from 'react';

// const CartItem = () => {
//     const [cartItems, setCartItems] = useState()
//     const getAllItemsFromCart = () => {
//         // Retrieve the existing cart from sessionStorage or set an empty array
//         const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
//         setCartItems(existingCart)
//         return existingCart;
//       };
// console.log(cartItems)
//       useEffect(() => {
//         getAllItemsFromCart()
//       }, [])
//   return (
//     <div className='fixed right-0 top-0 w-[40vw] h-[100vh] py-40 pl-4 bg-white'>
//      {
//         !cartItems[0]?.name ? <div>no item</div> : <div>{
//             cartItems?.map((item) => (
//             <div key={item.name}>
//                 <p>{item.name}</p>

//                 <ul>
//                     {
//                         item.ingredients.map((ingre) => (
//                             <div>
//                                 <li>{ingre.name}</li>
//                                 <li>${ingre.price}</li>
//                                 <li>{ingre.quantity}</li>
//                             </div>
//                         ))
//                     }
//                 </ul>
//             </div>
//         ))
//         }</div>
//      }
//     </div>
//   );
// }

// export default CartItem;













import React, { useEffect, useState } from 'react';

const getAllItemsFromCart = () => {
  // Retrieve the existing cart from sessionStorage or set an empty array
  return JSON.parse(sessionStorage.getItem('cart')) || [];
};

const CartItem = ({setShowCart}) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items when the component mounts
    const items = getAllItemsFromCart();
    setCartItems(items);
  }, []); // Empty dependency array ensures this effect runs once on mount


  const clearSessionStorage = () => {
    sessionStorage.clear();
    window.alert('Your order is on the way');
  };
  return (
    <div className='fixed right-0 top-0 w-[40vw] h-[100vh] py-40 px-[5%] bg-white'>
      {cartItems.length === 0 ? (
        <div>No items in the cart</div>
      ) : (
        <div className='flex flex-col gap-8 bg-green-50 px-[10%] rounded-lg py-5'>
          {cartItems.map((item) => (
            <div key={item.name} className='text-center'>
              <p className='text-xl text-green-600 font-mono'>{item.name}</p>
              <ul>
                {item.ingredients.map((ingre) => (
                  <div key={ingre.name} className='font-mono'>
                    <li className='text-green-400'>{ingre.name}</li>
                    <li>${ingre.price}</li>
                    <li>{ingre.quantity}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <button className='mt-20 border w-[100%] py-3 bg-green-600 rounded-xl font-mono text-white' onClick={() => (setCartItems(false), clearSessionStorage())}>Checkout</button>
      <button className='mt-6 border w-[100%] py-3 bg-red-600 rounded-xl font-mono text-white' onClick={() => (setCartItems(false))}>Close cart</button>
    </div>
  );
};

export default CartItem;
