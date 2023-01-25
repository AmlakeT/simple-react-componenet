import React from "react";

 
function MianContent(props) {
    //  const data = data.map(  ) 

   return(
    <>
        <div className="flex items-center  m-10  shadow-lg ">
        <img src={props.ImageUrl} alt ="ww" />
        <div className=" ml-4" >
        <div className="flex flex-row items-center">
        <img className="object-cover pr-1" src={props.img} alt="" />
            <p>{props.location}</p>
        </div>
            <p className="text-3xl font-bold">{props.title}</p>
            <div className="flex font-semibold mt-6 mb-2">
            <p className="pr-3">{props.startDate}</p>
            <p> {props.endDate}</p>
            </div>
            <p className="w-1/2">{props.discription}</p>
        </div>
        </div>
    </>
   )
   }
   export default MianContent;

   