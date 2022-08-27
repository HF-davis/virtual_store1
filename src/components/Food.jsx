import React,{useState} from "react";
import {data} from '../data/data.js'
const Food=()=>{

const [foods,setFoods]=useState(data);

    //Filter Type burgers/pizza/etc

    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            })
        );
    };
    //Filter by price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;
            })
        )
    }
    return(
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Productos Destacados</h1>
            {/**Filter Row */}
            <div className="flex flex-col">
                {/*Filter Type*/}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={()=>setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Todo</button>
                        <button onClick={()=>filterType('Energizante')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Bebidas no alcohólicas</button>
                        <button onClick={()=>filterType('Cerveza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Bebidas alcohólicas</button>
                        <button onClick={()=>filterType('Cigarro')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Cigarros</button>
                        <button onClick={()=>filterType('Hielo')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Hielo</button>
                        <button onClick={()=>filterType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Preservativos</button>
                        <button onClick={()=>filterType('Snack')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pickeos y Snacks</button>
                    </div>
                </div>

                {/**Filter Price */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={()=>filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                        <button onClick={()=>filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                        <button onClick={()=>filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
                    </div>
                </div>
            </div>
            {/**Display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item,index)=>(
                    <div key={index} className='border shadow-lg  border-neutral-300 rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className="w-full h-[350px] object-cover rounded-t-lg"/>
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food;