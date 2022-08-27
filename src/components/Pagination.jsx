import React,{useState} from "react";

const Pagination=()=>{

    const cl1="rounded-md px-2 mx-2 border-2 border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500";
    const cl2="rounded-md px-2 mx-2 border-2 border-orange-500 text-white bg-orange-500";
    const [cli,setCli]=useState(false);
    const [nocli,setNocli]=useState(true);

    const pagClick=()=>{
        setCli(!cli);
        setNocli(!nocli);
        
    }
     
    return(
    <div className="flex justify-center">
       <ul className="flex">
        <li>&laquo;</li>
        <li onClick={pagClick} className={cl2}>1</li>
        <li onClick={pagClick} className={cl1}>2</li>
        <li onClick={pagClick} className={cl1}>3</li>
        <li >&raquo;</li>
       </ul>
    </div>
    )
}

export default Pagination;