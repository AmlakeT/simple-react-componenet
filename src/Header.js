import React from "react";

function Header(props){
    return(
      
    <header className='flex bg-red-400 h-10  shadow-md' >
    <div className="ml-52 flex flex-row  items-center">
      <img className="p-2 flex justify-center items-center" src="/image/globe.png"  alt="" />
      <h2 className="text-white text-xl">My travel journal</h2>
    </div>
  </header>
    )
   }

   export default Header;
