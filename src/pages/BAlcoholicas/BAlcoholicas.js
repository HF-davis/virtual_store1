import React from "react";
import { Cervezas } from "../../data/data";

const BAlcoholicas=()=>{

    //const [cerveza,setCerveza]=useState(Cervezas);

    return(
        <div className=" max-w-[1640px] flex">

            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Bebidas Alcohólicas</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Cerveza</li>
                    <li className="my-5 ml-20">Vinos</li>
                    <li className="my-5 ml-20">Whisky</li>
                    <li className="my-5 ml-20">Ron</li>
                    <li className="my-5 ml-20">Pisco</li>

                </ul>
            </section>

            <section className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ml-10">
                
                {Cervezas.map((item,index)=>(
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
}

export default BAlcoholicas;