
import React from "react";
import {
  Gift,
  MessageSquareHeart,
  PiggyBank,
  Trello,
  Undo2,
  ShoppingCart,
} from "lucide-react";

const HomeCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {/* Card 1 */}
      <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
        <div className="z-30 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
          Free Shipping
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <ShoppingCart className="h-8 w-8 mr-2 text-black group-hover:text-white duration-300" />
          Cart
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-600">
        <div className="z-30 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-400 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-400 transition-all duration-500">
          Great Deals
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <Gift className="h-8 w-8 mr-2 text-black group-hover:text-white duration-300" />
          Gifts
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
        <div className="z-30 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
          EMI Offers
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <PiggyBank className="h-8 w-8 mr-2 text-black group-hover:text-white duration-300" />
          Savings
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-600">
        <div className="z-30 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-400 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-400 transition-all duration-500">
          Exchange Options
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <Undo2 className="h-7 w-7 mr-2 text-black group-hover:text-white duration-300" />
          Exchange
        </div>
      </div>

      {/* Card 5 */}
      <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
        <div className="z-30 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
          Awesome Brands
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase">
          <Trello className="h-8 w-8 mr-2 text-black group-hover:text-white duration-300" />
          Fashionable
        </div>
      </div>

     
      {/* Card 6 */}
      
        
        {/* <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-400 transition-all duration-500"></div> */}
        
          <div className="w-full h-full items-center justify-center flex uppercase">
          <div class="card w-60 h-80 items-center justify-center flex uppercase">
          <MessageSquareHeart className="h-7 w-7 mr-2 text-black group-hover:text-white duration-300" />
            <h3>Raise Query ??</h3>
          </div>
          
        </div>
      </div>
    
  );
};

export default HomeCards;
