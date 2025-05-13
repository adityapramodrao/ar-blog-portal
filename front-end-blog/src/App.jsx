
import './index.css'
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from './helper/Loader';


// Lazy-loaded components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Hero = lazy(() => import("./Pages/Extra/Hero"));
const HeroDetail = lazy(() => import("./Pages/Extra/HeroDetail"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));

//
const Dashboard = lazy(() => import("./component/Dashboard"));
const BlogDetails = lazy(() => import("./component/Blogs/BlogsDetail"))

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {/* Public Blog Site */}
        <Route path="/blog" element={<LandingPage />}>
          <Route index element={<Hero />} />
          <Route path=":id" element={<HeroDetail />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Dashboard Section */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="blogList" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App
