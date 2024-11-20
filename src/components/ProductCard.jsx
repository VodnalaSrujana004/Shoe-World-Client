// import { IndianRupee, X } from "lucide-react";
// import React, { useRef, useState } from "react";
// import { addOrder } from "../api/api";
// import { toast } from "sonner";

// const ProductCard = ({ img, price, name, auth, uid, pid }) => {
//   const [showPurchase, setShowPurchase] = useState(false);
//   const phoneRef = useRef(0);
//   const addressRef = useRef("");

//   const handleBuy = async (e) => {
//     e.preventDefault();
//     const order = {
//       uid: uid,
//       pid: pid,
//       total: price,
//       phone: phoneRef.current.value,
//       address: addressRef.current.value,
//     };
//     try {
//       const response = await addOrder(order);
//       if (response.status === 200) {
//         toast.success("Order Placed");
//         setShowPurchase(false);
//       }
//     } catch (error) {
//       toast.error("Error while placing order");
//       console.log(error);
//     }
//   };

//   return (
//     <>

//       <div className="product-card">
//         <div className="card-image">
//           <img src={img} alt={name} />
//         </div>
//         <div className="card-content">
//           <h5>{name}</h5>
//           <p>
//             <IndianRupee /> {price}
//           </p>
//         </div>
//         {auth && (
//           <div className="card-actions">
//             <button onClick={() => setShowPurchase(!showPurchase)}>
//               Buy Now
//             </button>
//           </div>
//         )}
//       </div>

//       {showPurchase && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1>Complete Purchase</h1>
//               <X
//                 onClick={() => setShowPurchase(!showPurchase)}
//                 className="cursor-pointer"
//               />
//             </div>
//             <form className="modal-form" onSubmit={handleBuy}>
//               <input
//                 ref={phoneRef}
//                 type="number"
//                 id="phone"
//                 placeholder="Phone"
//                 required
//               />
//               <textarea
//                 ref={addressRef}
//                 id="address"
//                 placeholder="Shipping Address"
//                 rows="6"
//               ></textarea>
//               <button type="submit">Complete</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductCard;

import { IndianRupee, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { addOrder } from "../api/api";
import { toast } from "sonner";
import "../assets/css/product.css";

const ProductCard = ({ img, price, name, auth, uid, pid }) => {
  const [showPurchase, setShowPurchase] = useState(false);
  const phoneRef = useRef();
  const addressRef = useRef();

  const handleBuy = async (e) => {
    e.preventDefault();
    const order = {
      uid,
      pid,
      total: price,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    };
    try {
      const response = await addOrder(order);
      if (response.status === 200) {
        toast.success("Order Placed");
        setShowPurchase(false);
      }
    } catch (error) {
      toast.error("Error while placing order");
      console.log(error);
    }
  };

  return (
    <>
      <div className="product-card">
        <div className="card-image">
          <img src={img} alt={name} />
        </div>
        <div className="card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-price">
            <IndianRupee className="icon" /> {price}
          </p>
        </div>
        {auth && (
          <div className="card-actions">
            <button
              className="btn-buy"
              onClick={() => setShowPurchase(!showPurchase)}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>

      {showPurchase && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h1>Complete Purchase</h1>
              <X
                onClick={() => setShowPurchase(false)}
                className="close-icon"
              />
            </div>
            <form className="modal-form" onSubmit={handleBuy}>
              <input
                ref={phoneRef}
                type="number"
                placeholder="Phone"
                required
                className="input-field"
              />
              <textarea
                ref={addressRef}
                placeholder="Shipping Address"
                rows="5"
                className="textarea-field"
              />
              <button type="submit" className="btn-submit">
                Complete
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
