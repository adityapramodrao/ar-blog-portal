import React from "react"
import Poster_one from '../../assets/posters/Poster_one.jpg'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroDetail = () => {
    return (
        <>
           <div className="flex flex-col items-center space-y-1 p-6">
                <div className="max-w-5xl bg-red rounded-lg dark:bg-gray-800">
                    <Link to="/blog/1" className="block relative">
                        <img
                        src={Poster_one}
                        alt="Poster"
                        className="w-[1000px] h-[400px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg z-5 relative"
                        />
                    </Link>
                    <div className="max-w-3xl flex flex-col justify-center p-8 mt-4 mx-auto">
                        <Link to="/blog/1">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Exploring the World's Natural Wonders: A Nature Lover's Journey
                            </h5>
                        </Link>

                        {/* Author Info */}
                        <div className="flex items-center justify-between w-full mt-2 mb-3 space-x-6 text-sm text-gray-600">
                            <div className="flex flex-row justify-left items-center">
                                <img
                                src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
                                alt="Author"
                                className="w-6 h-6 border rounded-full object-cover"
                                />
                                <span className="flex ml-2 flex-row">
                                    by{" "}
                                        <span className="text-green-600 mr-1 ml-1 font-medium hover:underline cursor-pointer">
                                            John Doe
                                        </span>{" "}
                                    on May 30, 2023
                                </span>
                            </div>
                            <div className="justify-right items-right space-x-2">
                                <span className="px-3 py-1 text-sm text-green-600 border border-gray-200 rounded-full hover:border-gray-400">
                                    ENVIRONMENT
                                </span>
                                <span className="px-3 py-1 text-sm text-green-600 border border-gray-200 rounded-full hover:border-gray-400">
                                    CLIMATE
                                </span>
                            </div>
                        </div>
 
                        <hr/>

                        {/* Description */}
                        <p className="mt-4 text-sm w-[700px] font-normal text-left text-gray-700 dark:text-gray-300">
                            As someone who loves nature, there's nothing quite like the thrill of exploring the world's
                            most beautiful landscapes. From snow-capped mountains to crystal-clear waters, there's no
                            shortage of natural wonders to discover. So pack your bags, grab your hiking boots, and
                            let's take a journey around the globe to explore some of the most breathtaking natural
                            sights on earth.
                        </p>


                        {/* Action and Tags */}
                        <div className="flex items-center justify-between w-full mt-4">
                            {/* Read Article Link */}
                            <Link to="/blog/1" className="inline-flex items-center text-green-600 text-sm cursor-pointer">
                            Read article <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>

                            {/* Tags */}
                            
                        </div>
                        
                        <hr className="mt-8 mb-8"/>
                        <section className="max-w-6xl mx-auto px-6 mt-10">
                            <h2 className="text-2xl font-bold mb-6">Suggested Posts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                
                                <div className="flex flex-col">
                                    <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                    alt="hdds"
                                    className="rounded-2xl h-25 w-full object-cover"
                                    />
                                    <h3 className="text-sm font-bold mt-4">Exploring the Wonders of Planet Earth</h3>
                                    <div className="flex items-center mt-2 space-x-2 text-xs">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
                                        alt="hello"
                                        className="w-4 h-4 rounded-full border object-cover"
                                    />
                                    <span>
                                        by{" "}
                                        <span className="text-green-600 font-semibold hover:underline">
                                        Devi Jone
                                        </span>{" "}
                                        on Apr 27, 2023
                                    </span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                    alt="hdds"
                                    className="rounded-2xl h-25 w-full object-cover"
                                    />
                                    <h3 className="text-sm font-bold mt-4">Exploring the Wonders of Planet Earth</h3>
                                    <div className="flex items-center mt-2 space-x-2 text-xs">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
                                        alt="hello"
                                        className="w-4 h-4 rounded-full border object-cover"
                                    />
                                    <span>
                                        by{" "}
                                        <span className="text-green-600 font-semibold hover:underline">
                                        Devi Jone
                                        </span>{" "}
                                        on Apr 27, 2023
                                    </span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                    alt="hdds"
                                    className="rounded-2xl h-25 w-full object-cover"
                                    />
                                    <h3 className="text-sm font-bold mt-4">Exploring the Wonders of Planet Earth</h3>
                                    <div className="flex items-center mt-2 space-x-2 text-xs">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
                                        alt="hello"
                                        className="w-4 h-4 rounded-full border object-cover"
                                    />
                                    <span>
                                        by{" "}
                                        <span className="text-green-600 font-semibold hover:underline">
                                        Devi Jone
                                        </span>{" "}
                                        on Apr 27, 2023
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroDetail;