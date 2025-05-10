import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Extra/Header"
import Footer from "./Extra/Footer"


export const LandingPage = () => {
    return (
        <>
            <Header />
                <main className="pt-16 pb-16"> {/* Adjust pt/pb based on header/footer heights */}
                    <Outlet />
                </main>
            <Footer />
        </>

    )
}

export default LandingPage;