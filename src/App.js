import React from "react";
import {  motion } from "framer-motion";
import { useState } from "react";


function App() {
  const [proj1,setproj1]=useState(false)
  const [proj2,setproj2]=useState(false)
  const [proj3,setproj3]=useState(false)
  const [proj4,setproj4]=useState(false)
  const handleClick =()=>{
    setproj1(!proj1);
    
  }
  const handle2=()=>{
    setproj2(!proj2);
   
  }
  const handle3=()=>{
    setproj3(!proj3);
    
  }
 const handle4=()=> {
    setproj4(!proj4);
    
  }

  return (
    <>
    <div className='flex items-center justify-center h-full md:h-[100vh] gap-8 flex-wrap bg-[#0a192f] text-gray-200'>
     
      <motion.div 
       onClick={handleClick}
       transition={{layout:{duration:1,type:"spring" }}}
       layout
         className='bg-[#0a192f] p-3 '
         style={{borderRadius:'2rem',boxShadow:'0px 0px 8px 0 rgb(219,39,119)'}}>
        <motion.h2 
        layout='position'  
         className="font-bold text-3xl my-4 mx-2">Weather Genie</motion.h2>
         <img  className="w-[250px] h-[200px] object-cover rounded-2xl" src='../weather-app.png' alt='/'/>
         

     {proj1 && <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       className="p-3 w-[18rem]">
          <p >
            A Weather application that tracks the current weather conditions in any city in thw world.
          </p>
          <p > with the help of weather api</p>
          <div className="flex justify-between mt-8">
           <a href='/' target='_blank' rel='noreferrer'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600  bg-pink-600">Demo</button></a> 
           <a href='/'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600 bg-pink-600">Code</button></a> 
           
          </div>
        </motion.div>} 
        
      </motion.div>

      <motion.div 
       onClick={handle2}
       transition={{layout:{duration:1,type:"spring" }}}
       layout
         className='bg-[#0a192f] p-3 '
         style={{borderRadius:'2rem',boxShadow:'0px 0px 8px 0 rgb(219,39,119)'}}>
        <motion.h2 
        layout='position'  
         className="font-bold text-3xl my-4 mx-2">CryptoZen</motion.h2>
         <img  className="w-[250px] h-[200px]  object-cover  rounded-2xl" src='../Screenshot_1.png' alt='/'/>
         

     {proj2 && <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       className="p-3 w-[18rem]">
          <p >
            A Cryptocurrency application that tracks the current price of the crypto in the market
          </p>
          <p > User can create a account and save cryptocurrency of his choice to track keep of those currencies market</p>
          <div className="flex justify-between mt-8">
           <a href='/' target='_blank' rel='noreferrer'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600  bg-pink-600">Demo</button></a> 
           <a href='/'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600 bg-pink-600">Code</button></a> 
           
          </div>
        </motion.div>} 
        
      </motion.div>

      <motion.div 
       onClick={handle3}
       transition={{layout:{duration:1,type:"spring" }}}
       layout
         className='bg-[#0a192f] p-3 '
         style={{borderRadius:'2rem',boxShadow:'0px 0px 8px 0 rgb(219,39,119)'}}>
        <motion.h2 
        layout='position'  
         className="font-bold text-3xl my-4 mx-2">Sneakers</motion.h2>
         <img  className="w-[250px] h-[200px] object-cover  rounded-2xl" src='../sneaker-product.png' alt='/'/>
         

     {proj3 && <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       className="p-3 w-[18rem]">
          <p >
            A Sneaker product page
          </p>
          <p > User can add and remove  the product to and from the cart </p>
          <div className="flex justify-between mt-8">
           <a href='/' target='_blank' rel='noreferrer'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600  bg-pink-600">Demo</button></a> 
           <a href='/'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600 bg-pink-600">Code</button></a> 
           
          </div>
        </motion.div>} 
        
      </motion.div>

      <motion.div 
       onClick={handle4}
       transition={{layout:{duration:1,type:"spring" }}}
       layout
         className='bg-[#0a192f] p-3 '
         style={{borderRadius:'2rem',boxShadow:'0px 0px 8px 0 rgb(219,39,119)'}}>
        <motion.h2 
        layout='position'  
         className="font-bold text-3xl my-4 mx-2">Movie-box</motion.h2>
         <img  className="w-[250px] h-[200px] object-cover rounded-2xl" src='../movie-box.png' alt='/'/>
         

     {proj4 && <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       className="p-3 w-[18rem]">
          <p >
            A MovieBox application that features the latest movies
          </p>
          <p > User can search for any movie and get the review and overview of the movie with the help of movie API</p>
          <div className="flex justify-between mt-8">
           <a href='/' target='_blank' rel='noreferrer'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600  bg-pink-600">Demo</button></a> 
           <a href='/'><button className="px-6 py-2 rounded-2xl shadow-xl hover:bg-transparent hover:text-pink-600 bg-pink-600">Code</button></a> 
           
          </div>
        </motion.div>} 
        
      </motion.div>
    </div>
    </>
  );
}

export default App;
