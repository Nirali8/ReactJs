import React from 'react'
import img1 from "../assets/trending1.png";
import img2 from '../assets/trending2.jpeg'
import img3 from "../assets/trending3.png";
import img4 from '../assets/trending4.png'
import img5 from "../assets/trending5.png";
import img6 from '../assets/trending6.png'
import img7 from "../assets/trending7.png";
import img8 from '../assets/trending8.png'
import TrendingCard from '../components/TrendingCard'

const Trending = () => {
  return (
    <div className='flex gap-3 p-2'>
      <TrendingCard img1={img1} img2={img2} text={"Ultraglass 2 Treated Screen Protector For iphone 15 Pro"} price={"$39.99"}/>
      <TrendingCard img1={img3} img2={img4} text={"Smart Light Switch With Thread"} price={"$49.99"}/>
      <TrendingCard img1={img5} img2={img6} text={"SoundFrom Rise"} price={"$79.99"}/>
      <TrendingCard img1={img7} img2={img8} text={"WireLess on-Ear HeadPhones for Kids"} price={"$24.99"}/>
    </div>
  )
}

export default Trending
