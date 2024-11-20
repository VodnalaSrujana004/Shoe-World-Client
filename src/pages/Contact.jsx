// import React from 'react'
// import { Mail, Phone, Pin } from 'lucide-react'
// const Contact = () => {
//   return (
//     <>
//       <div className='w-screen h-full flex flex-col justify-center items-center'>

//         <div className='w-full h-40 flex justify-center items-center text-3xl text-purple-500 font-semibold'>
//           Contact Us
//         </div>
//         <div className='w-[75%] h-[45rem] shadow-lg flex flex-row justify-center items-center'>
//           <div className='h-[90%] w-1/2 flex flex-col justify-center items-center gap-4'>
//             <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
//               <Mail className='h-8 w-8 text-purple-600' />
//               <h1>abc@gamil.com</h1>
//             </div>
//             <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
//               <Phone className='h-8 w-8 text-purple-600' />
//               <h1>9876543210</h1>
//             </div>
//             <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
//               <Pin className='h-8 w-8 text-purple-600' />
//               <h1 className='text-center'>1/11 ,asd,dfg <br /> wert</h1>
//             </div>
//           </div>
//           <div className='h-[95%] w-1/2 flex flex-col justify-center items-center'>
//             <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
//               <h1 className='w-[80%] text-left my-6 font-bold text-purple-500'>Get in touch</h1>
//               <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8'>
//                 <input type="text" name="" id="" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
//                 <input type="email" name="" id="" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
//                 <input type="tel" name="" id="" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' />
//                 <textarea name="" id="address" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm ' cols='8' rows='10' placeholder='Message' />
//               </form>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Contact

import React from "react";
import {
  Mail,
  PhoneCall,
  Facebook,
  Instagram,
  MapPin,
  Linkedin,
  Github,
  Gitlab,
} from "lucide-react";
import backgroundImage from "../assets/img/df2.jpeg"; // Adjust the path if necessary
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div
      className="w-screen h-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Fixed: Correctly use template literal
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="w-full h-20 flex justify-end items-center pr-64 text-5xl text-white font-bold">
        Contact Us
      </div>
      <div className="w-screen h-full flex justify-end items-center">
        <div className="w-[60%] h-[35rem] bg-opacity-70 margin-left pr-8 rounded-lg justify-end shadow-lg flex flex-row items-end">
          <div className="h-full w-full flex flex-col justify-center items-center text-xl bg-white font-semibold">
            <h1 className="w-[80%] text-left justify-start my-3 text-3xl font-bold text-[#502323]">
              KNOW US MORE?
            </h1>
            <form className="h-[70%] w-[80%] flex flex-col justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full shadow-sm outline-none bg-[#371100] opacity-70 border-b-4 border-transparent p-4 focus:shadow-lg focus:border-b-4 focus:border-[#070000] text-black rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full shadow-sm outline-none bg-[#371100] opacity-70 border-b-4 border-transparent p-4 focus:shadow-lg focus:border-b-4 focus:border-[#070000] text-black rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full shadow-sm outline-none bg-[#371100] opacity-70 border-b-4 border-transparent p-4 focus:shadow-lg focus:border-b-4 focus:border-[#070000] text-black rounded-md"
              />
              <textarea
                placeholder="Message"
                className="w-full shadow-sm outline-none bg-[#371100] opacity-70 border-b-4 border-transparent p-4 focus:shadow-lg focus:border-b-4 focus:border-[#070000] text-black rounded-sm"
                cols="8"
                rows="10"
              ></textarea>
              <button>
                <div className="container">
                  <a href="#" className="button type--C">
                    <div className="button__line" />
                    <div className="button__line" />
                    <span className="button__text">SUBMIT</span>
                    <div className="button__drow1" />
                    <div className="button__drow2" />
                  </a>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-[#4c0519] scroll-left w-full bg-white opacity-80 text-center font-serif text-1xl mt-8">
        <p>
          ...........OUR PAGE HAS COME TO END,BUT OUR RELATIONSHIP WITH YOU HAS
          NOT........
        </p>
      </div>
      <div className="social-wrapper bg-[#f1ecee] h-[20%] w-[100%] opacity-80 text-white">
        <div className="bg-white social flex justify-center items-center space-x-2">
          <div>
            <link
              rel="stylesheet"
              href="ttps://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
              integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <div className="social-wrapper">
              <div className="social text-black text-left justify-center">
                <a href="#" target="_blank">
                <i class="bi bi-github"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
              <div className="social">
                <a href="#" target="_blank">
                <i className="bi bi-gitlab"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
              <div className="social">
                <a href="#" target="_blank">
                 <i className="bi bi-linkedin"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                 <i className="bi bi-instagram"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                 <i className="bi bi-geo-alt-fill"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                 <i className="bi bi-envelope-fill"></i>
                  <span className="icon-shadow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
