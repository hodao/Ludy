import React from "react";

export default function Welcome() {
    return (
        <div className="welcome">
            <section class="pt-24 pb-28 bg-white overflow-hidden">
                <div class="container px-4 mx-auto">
                    <div class="text-center max-w-lg mx-auto">
                        <h2 class="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">Welcome</h2>
                        <p class="mb-8 text-lg text-gray-800 font-medium px-5 py-24 mx-auto">Welcome to All Dolled Up. A place where you will leave feeling luxurious. A place of enhancement. A place of comfort. A place for you!</p>
                        <p class="mb-8 text-md text-gray-600 font-medium">Check out our services by clicking the button below!</p>
                        <div class="mb-7 md:inline-block">
                            <button class="py-2 px-4 w-full text-white font-semibold border border-pink-300 rounded-xl shadow-4xl focus:ring focus:ring-pink-300 bg-pink-300 hover:bg-pink-300 transition ease-in-out duration-200" type="button">Services</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}