/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

function MainLayout() {
    return (
        <>
              <Navbar/>
              <Outlet/>
        </>
    )
}
export default MainLayout