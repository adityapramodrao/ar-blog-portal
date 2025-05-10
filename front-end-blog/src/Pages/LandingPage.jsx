import React from "react"
import Header from "./Extra/Header"
import Footer from "./Extra/Footer"
import Hero from "./Extra/Hero"

export const LandingPage = () => {
    return (
        <>
            <Header />
                <main className="pt-16 pb-16"> {/* Adjust pt/pb based on header/footer heights */}
                    <Hero />
                </main>
            <Footer />
        </>

    )
}

export default LandingPage;