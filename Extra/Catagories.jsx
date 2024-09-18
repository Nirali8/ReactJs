import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import productDemoImage1 from "../assets/asset30.jpeg";
import productDemoImage2 from "../assets/asset31.jpeg";
import productDemoImage3 from "../assets/asset32.jpeg";
import productDemoImage4 from "../assets/asset33.png";
import productDemoImage5 from "../assets/asset34.jpeg";
import CatagoryCard from "../components/CatagoryCard";

// const Catagories = () => {
//   //   const [isBeginning, setIsBeginning] = useState(true);
//   //   const [isEnd, setIsEnd] = useState(false);
//   //   const slider = useRef(null);

//   //   // handle buttons of changing slides
//   //   const handleBeforeChange = (oldIndex, newIndex) => {
//   //     if (newIndex === 0) {
//   //       setIsBeginning(true);
//   //       setIsEnd(false);
//   //     } else if (
//   //       newIndex >=
//   //       slider.current.innerSlider.state.slideCount -
//   //         slider.current.innerSlider.props.slidesToShow
//   //     ) {
//   //       setIsEnd(true);
//   //       setIsBeginning(false);
//   //     } else {
//   //       setIsBeginning(false);
//   //       setIsEnd(false);
//   //     }
//   //   };

//   return (
//     // <div className="">
//     //   {/* <div className={`${styles.Categories} Categories`}> */}
//     //   <div className="">
//     //     {/* <div className={styles.arrows}> */}
//     //     <div>
//     //       <span
//     //         className=""
//     //         // className={isBeginning ? styles.disable : ""}
//     //         onClick={() => {
//     //           slider?.current?.slickPrev();
//     //         }}
//     //       >
//     //         <IoIosArrowBack />
//     //       </span>
//     //       <span
//     //         className=""
//     //         // className={isEnd ? styles.disable : ""}
//     //         onClick={() => {
//     //           slider?.current?.slickNext();
//     //         }}
//     //       >
//     //         <IoIosArrowForward />
//     //       </span>
//     //     </div>
//     //     <p className="Albert-normal">SHOP BY CATEGORIES</p>
//     //   </div>

//     <div className="">
//       {/* <div className={`slider-container ${styles.SliderContainer}`}> */}
//       {/* <Slider
//         className=""
//         //   className={styles.productSlider}
//         infinite={false}
//         speed={800}
//         slidesToShow={3}
//         slidesToScroll={2}
//         dots={false}
//         arrows={false}
//         cssEase="ease-in-out"
//         responsive={[
//           {
//             breakpoint: 1100,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//         ]} */}
//       {/* // ref={slider}
//         // beforeChange={handleBeforeChange}
//       > */}
//       <div>
//         <Catagories image={productDemoImage1} Text="Screen Protection" />
//       </div>
//       <div>
//         <Catagories image={productDemoImage2} Text="HeadPhone" />
//       </div>
//       <div>
//         <Catagories image={productDemoImage3} Text="Cables" />
//       </div>
//       <div>
//         <Catagories image={productDemoImage4} Text="Adaptor" />
//       </div>
//       <div>
//         <Catagories image={productDemoImage5} Text="Docks And Hubs" />
//       </div>
//       {/* </Slider> */}
//     </div>
//     // </div>
//   );
// };
const Catagories = () => {
  return (
    <div>
      <h1>Catagory</h1>
    </div>
  );
};
export default Catagories;
