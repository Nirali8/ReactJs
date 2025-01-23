import React,{useRef} from 'react'

const ScrollImage = () => {
 const imageRef = useRef(null);

 const scrollToImage = () => {
   imageRef.current.scrollIntoView({ behavior: "smooth" });
 };

 return (
   <div>
     <button onClick={scrollToImage}>Scroll to Image</button>
     <div style={{ height: "100vh" }}>Scroll down...</div>
     <img
       ref={imageRef}
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomIlBQiPCZwc43gvkkzFRzul-rbq9fC13pg&s"
       alt="Example"
       style={{ display: "block", margin: "auto" }}
     />
   </div>
 );
}

export default ScrollImage
