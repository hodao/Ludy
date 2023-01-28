import React from "react";

export default function Hero() {
    return (
        <div classNameName="Hero">
            <div className="w-full bg-center bg-cover h-[30rem]">
                <div className="flex items-center justify-center w-full h-full bg-black">
                    <div className="text-center">
                        <video autoPlay muted loop className="h-10 w-10 object-cover bg-center">
                            <source src={"./Images/vid.mp4"} type="video/mp4" />
                        </video>
                        <h1 className="text-2xl font-semibold text-white lg:text-4xl mb-11">All <span className="text-pink-400">Dolled</span> Up</h1>
                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-pink-300 rounded-md lg:w-auto hover:bg-pink-300 focus:outline-none focus:bg-pink-300">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}