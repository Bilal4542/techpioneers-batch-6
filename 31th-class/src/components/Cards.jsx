import React from "react";

const Cards = ({ productsData}) => {
  return (
    <>
      {productsData.map((item) => (
        <div className="">
          <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
            <img src={item.image} alt="" />
          </div>
          <div className="">
            <p className="uppercase p-1 text-[14px] font-semibold">
              {item.description}
            </p>
          </div>
          <div className="flex items-center justify-between px-1">
            <p className="font-semibold">
              <span className="text-gray-400 decoration-red-500 decoration-2 line-through">
                {item.oldPrice}
              </span>
              <span className="font-bold ml-2">{item.salePrice}</span>
            </p>
            <p>
              <span className="font-bold mr-1">⭐ {item.rating}</span>
              <span className="text-sm">{item.ratingNumber}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
