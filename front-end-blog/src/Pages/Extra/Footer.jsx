import React from "react";
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-800 fixed bottom-0 w-full shadow-sm">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-row items-center justify-center text-center space-x-6 flex-wrap">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <li>
                        <Link to="/login" className="hover:underline">Login/Registration</Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:underline">Privacy Policy</Link>
                    </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;