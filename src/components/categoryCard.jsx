import React, { useEffect } from 'react';

const CategoryCard = ({item, selectedCategory, setSelectedCategory, setSelectedFood, setShowCart}) => {

    useEffect(() => {

    }, [])
    // console.log(item)
  return (
    <div  className="border relative w-[15rem] rounded-xl overflow-hidden h-[12rem] cursor-pointer" onClick={() => (setSelectedCategory(item.display.displayName), setSelectedFood(item), setShowCart(false))}>
{selectedCategory === item.display.displayName ? (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 0.5 opacity
  }} />
) : (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black overlay with 0.5 opacity
    }} />
  )}
    <img src={item.display.iconImage} alt={item.display.categoryImage} className="w-[100%] h-[100%]"/>
    <p style={{ position: 'absolute', textAlign: 'center', color: 'white', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', margin: 0 }}>
{item.display.displayName}
</p>
</div>
  );
}

export default CategoryCard;
