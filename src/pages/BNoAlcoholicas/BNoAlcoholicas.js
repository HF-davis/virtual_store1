import React from "react";
import { Gaseosas } from "../../data/data";
const BNoAlcoholicas=()=>{

    //const [gas,setGas]=useState(Gaseosas);
    return(
        <div className="flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Bebidas No Alcohólicas</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Gaseosas</li>
                    <li className="my-5 ml-20">Agua</li>
                    <li className="my-5 ml-20">Energizante</li>
                    <li className="my-5 ml-20">Rehidratantes</li>
                    <li className="my-5 ml-20">Jugo</li>

                </ul>
            </section>
            <section className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ml-10">
                
                {Gaseosas.map((item,index)=>(
                   <div key={index} className="border shadow-lg  border-neutral-300 rounded-lg hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name} className="w-[300px] h-[300px]"/>
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>
                   </div> 
                ))}
            </section>


        </div>
    );
};

export default BNoAlcoholicas;