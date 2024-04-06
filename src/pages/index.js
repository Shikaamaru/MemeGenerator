"use client"

import Image from "next/image";
import { useState } from "react";
import MemeImage from "../../components/meme";
const url = "https://i.redd.it/4hmap4oxflv71.jpg";

export default function Home() {
  const [memeurl,seturl]=useState(url)
  const handlereq = async (e)=>{
    try {
      
      const response = await fetch('http://localhost:3000/api/meme');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      seturl(responseData.message);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
   <div>
   <button onClick={handlereq }>get new meme</button>
    <MemeImage url={memeurl}/>
   </div>
    
  );
}
