import React from "react";
import Poster_one from '../../assets/posters/Poster_one.jpg'
import Poster_two from "../../assets/posters/Poster_two.jpg"
import Poster_three from "../../assets/posters/Poster_three.jpg"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-6 p-6">
                
                <div className="max-w-2xl bg-white rounded-lg dark:bg-gray-800">
                    <Link to="/blog/1" className="block relative">
                        <img
                        src={Poster_one}
                        alt="Poster"
                        className="w-[700px] h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg z-5 relative"
                        />
                    </Link>
                    <div className="p-2 mt-4">
                        <Link to="/blog/1">
                            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            Exploring the World's Natural Wonders: A Nature Lover's Journey
                            </h5>
                        </Link>
                        <div className="flex mt-3 mb-3 items-center space-x-2 text-xs text-gray-600">
                            <img
                                src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
                                alt="Author"
                                className="w-7 h-7 border rounded-full object-cover"
                            />
                            <span>
                                by{" "}
                                <span className="text-green-600 font-medium hover:underline cursor-pointer">
                                John Doe
                                </span>{" "}
                                on May 30, 2023
                            </span>
                        </div>
                        <p className="mb-3 text-xs font-normal text-gray-500 dark:text-gray-400">
                        As someone who loves nature, there's nothing quite like the thrill of exploring the world's most beautiful landscapes. From snow-capped mountains to crystal-clear waters, there's no shortage of natural wonders to discover. So pack your bags, grab your hiking boots, and let's take a journey around the globe to explore some of the most breathtaking natural sights on earth.
                        </p>
                        <div className="flex items-center justify-between w-full mt-4">
                            {/* Read article */}
                            <Link
                                to="/blog/1"
                                className="inline-flex items-center text-green-600 text-xs cursor-pointer"
                            >
                                Read article <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>

                            {/* Tags */}
                            <div className="flex space-x-2 ">
                                <span className="px-2 py-1 text-xs text-green-600 border border-gray-100 rounded-full hover:border-gray-400">
                                ENVIRONMENT
                                </span>
                                <span className="px-4 py-1 text-xs text-green-600 border border-gray-100 rounded-full hover:border-gray-400">
                                CLIMATE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

               
                
            </div>

        </>
    )
}

export default Hero;