import React from "react";

export default function Gallery() {
    return (
        <div className="Images">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="mb-5 text-6xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight">Gallery</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center mb-3 leading-relaxed" src="./Images/p1.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="./Images/p2.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="./Images/p3.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="./Images/p4.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="./Images/p5.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="./Images/p6.jpg"/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}