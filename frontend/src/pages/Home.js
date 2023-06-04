import CardFeature from "../components/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";
import { useSelector } from "react-redux";
import { useRef } from "react";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  const homeProductCardList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (e1) => e1.category === "vegetable",
    []
  );
  console.log(homeProductCartListVegetables);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="md:flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img src="" className="h-7" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Delivery in
            <span className="text-red-700 text">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum at
            nesciunt tenetur harum blanditiis voluptas eius velit cumque ipsam
            labore minima quo amet magni
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md ">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((e1) => {
                return (
                  <HomeCard
                    key={e1._id}
                    image={e1.image}
                    name={e1.name}
                    price={e1.price}
                    category={e1.category}
                    id={e1._id}
                  />
                );
              })
            : loadingArray.map((e1, index) => {
                return (
                  <HomeCard
                    key={index + "cart Loading"}
                    loading={"Loading ..."}
                  />
                );
              })}
        </div>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((e1) => {
                return (
                  <CardFeature
                    key={e1._id}
                    name={e1.name}
                    category={e1.category}
                    price={e1.price}
                    image={e1.image}
                  />
                );
              })
            : loadingArrayFeature.map((e1, index) => (
                <CardFeature loading="Loading..." key={index + "All Product"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
