import React from "react";
import { categories } from "../data/data";

const Category=()=>{
    return(
        <div className="max-w-[1640px] m-auto px-4 py-12">
                
                    
                

            <h1 className="text-orange-600 font-bold text-4xl text-center my-8">Categorias</h1>
            
            {/**Categories */}

            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                {/**Bebidas Alcoholicas */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/BebidasAlcoholicas">

                    <h2 className="font-bold sm:text-xl text-orange-500">{categories[0].name}</h2>
                    <img src={categories[0].image} alt={categories[0].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </a>
                    
                </div>
                {/**CCigarros */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/Cigarros">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categories[1].name}</h2>
                    <img src={categories[1].image} alt={categories[1].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </a>
                    
                </div>
                {/**Bebidas no Alcoholicas */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/BebidasNoAlcoholicas">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categories[2].name}</h2>
                    <img src={categories[2].image} alt={categories[2].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />

                    </a>
                    
                </div>
                {/**Piqueos y Snack*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/PiqueoySancks">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categories[3].name}</h2>
                    <img src={categories[3].image} alt={categories[3].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </a>
                    
                </div>
                {/**Hielo */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                   <a href="http://localhost:3000/BebidasAlcoholicas">
                   <h2 className="font-bold sm:text-xl text-orange-500">{categories[4].name}</h2>
                    <img src={categories[4].image} alt={categories[4].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                   </a>
                    
                </div>
                {/**Preservativos */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/Preservativos">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categories[5].name}</h2>
                    <img src={categories[5].image} alt={categories[5].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />

                    </a>
                    
                </div>
                {/**Cuidado Personal */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/CuidadoPersonal">
                        <h2 className="font-bold sm:text-xl text-orange-500">{categories[6].name}</h2>
                        <img src={categories[6].image} alt={categories[6].name}
                        className="w-[250px] my-5 h-[150px] rounded-md"
                        />
                    </a>
                    
                </div>
                {/**Confiteria */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <a href="http://localhost:3000/Confiteria">
                        <h2 className="font-bold sm:text-xl text-orange-500">{categories[7].name}</h2>
                        <img src={categories[7].image} alt={categories[7].name}
                        className="w-[250px] my-5 h-[150px] rounded-md"
                        />
                    </a>
                    
                </div>

                
            </div>
        </div>
    )
}

export default Category;