import React from "react";
import { useParams } from "react-router-dom";
import AllProduct from "../components/AllProduct";
import { addCartItem } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((e1) => e1._id === filterby);
  console.log(productDisplay);

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };

  return (
    <div className=" p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5 ">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-text-slate-500 font-md text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">NRs</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="">
            <button className="bg-yellow-500 mt-2 rounded hover:bg-yellow-600 px-5 py-2 min-w-[100px]">
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-500 mt-2 rounded hover:bg-yellow-600 px-5 py-2 min-w-[100px]"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
