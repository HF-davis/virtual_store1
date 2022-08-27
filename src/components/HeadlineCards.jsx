import React from "react";

const HeadlineCards=()=>{
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/**Card */}
            <div className="rounded-xl relative">
                {/**Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" 
                src='https://resize.img.allw.mn/thumbs/q1/uj/lxwsbrwk5ea64281c469d763074045_1080x1080.jpg?width=1200&height=630' alt='simple image3'/>
            </div>
            {/**Card */}
            <div className="rounded-xl relative">
                {/**Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" 
                src='https://cdn.healthversed.com/healthversed/wp-content/uploads/2018/01/Feature-5.jpg' alt='simple image1'/>
            </div>
            {/**Card */}
            <div className="rounded-xl relative">
                {/**Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
                    <p className="px-2">Tasty Treads</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" 
                src='https://urmfoodservice.com/core/files/urmfoodservice/uploads/images/cheeses.jpg' alt='simple image2'/>
            </div>
        </div>
    );
};

export default HeadlineCards;