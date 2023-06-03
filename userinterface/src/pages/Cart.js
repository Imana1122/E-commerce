import React from "react";
import CartProduct from "../components/CartProduct";
import emptyCartImage from "../asset/empty.gif";
import { useSelector } from "react-redux";
const Cart = () => {
  const ProductCartItem = useSelector((state) => state.product.cartItem);
  console.log(ProductCartItem);

  const totalPrice = ProductCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const totalQty = ProductCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>
        {ProductCartItem[0] ? (
          <div className=" my-4 flex gap-3">
            {/* display cart items */}
            <div className="w-full max-w-3xl">
              {ProductCartItem.map((e1) => {
                return (
                  <CartProduct
                    key={e1._id}
                    id={e1._id}
                    name={e1.name}
                    image={e1.image}
                    price={e1.price}
                    category={e1.category}
                    qty={e1.qty}
                    total={e1.total}
                  />
                );
              })}
            </div>

            {/* total cart items  */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Quantity</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>

              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>

                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">NRs</span>
                  {totalPrice}
                </p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white ">
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className=" w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
