// import React from "react";

// const Aboutus = () => {
//   return (
//     <>
//       <div
//         className="shoe border"
//         style={{
//           display: "flex",
//           justifyContent: "space-evenly",
//           width: "80%",
//         }}
//       >
//         <div className="imagetext border">
//        <h1 style={{fontSize:''}}>hello</h1>
//         </div>

//         <div className="aboutimage">
//           <img style={{ borderRadius:'50%'}}
//             className="h-[90vh] object-cover"
//             src="https://static.vecteezy.com/system/resources/thumbnails/027/686/714/small_2x/a-person-in-running-shoes-on-the-background-of-an-electronic-signal-free-photo.jpg"
//           />
//         </div>
//       </div>

//       {/* <p className="legend">Mobiles</p> */}
//     </>
//   );
// };

// export default Aboutus;
import React from "react";
import "./Aboutus.css"; // Importing the CSS file

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-image">
        <img
          src="https://media.istockphoto.com/id/1464043502/photo/happy-woman-looking-for-new-sneakers-while-shopping-at-the-mall.jpg?s=612x612&w=0&k=20&c=6nDbvUibLn5uJJtma__dehdF7alNBeigYN5HN2cctqA="
          alt="Shopping Sneakers"
        />
      </div>
      <div className="aboutus-text">
        <h1>About Us</h1>
        <p>
          Welcome to <b>Shoe-World</b>, your ultimate destination for stylish and
          comfortable footwear! Established in 2024, we take immense pride in
          providing top-notch service and offering a diverse collection of shoes
          that cater to every need and occasion. At <b>Shoe-World</b>, we believe in
          combining style, quality, and comfort to elevate your every step. We
          are deeply grateful for the opportunity to serve our valued customers
          and be a part of your journey, one step at a time. Explore our world
          and discover the perfect fit for you!
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
