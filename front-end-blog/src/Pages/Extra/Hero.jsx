import React from "react";
import Poster_one from '../../assets/posters/Poster_one.jpg'
import Poster_two from "../../assets/posters/Poster_two.jpg"
import Poster_three from "../../assets/posters/Poster_three.jpg"

export const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-6 p-6">
                
            <div className="max-w-2xl bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <a href="#" className="block relative">
                    <img
                    src={Poster_one}
                    alt="Poster"
                    className="w-[700px] h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-t-lg z-10 relative"
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-2xl bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <a href="#" className="block relative">
                    <img
                    src={Poster_two}
                    alt="Poster"
                    className="w-[700px] h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-t-lg z-10 relative"
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
                </div>
            </div>
            <div className="max-w-2xl bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <a href="#" className="block relative">
                    <img
                    src={Poster_three}
                    alt="Poster"
                    className="w-[700px] h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-t-lg z-10 relative"
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
                </div>
            </div>



                
            </div>

        </>
    )
}

export default Hero;