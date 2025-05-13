import React from "react";
import Header from "./customPage/Header";
import Footer from "./customPage/Footer";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
     <>
          <div className="m-0 min-h-screen flex flex-col" style={{ backgroundColor: "#ececec" }}>

               {/* Header (optional) */}
               <Header />

               {/* Main content */}
               <main className="flex-grow">
                   <Outlet/>
               </main>

               {/* Fixed footer at bottom */}
               <Footer />
          </div>

     </>
  );
}
