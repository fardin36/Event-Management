import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-gradient-to-t lg:bg-gradient-to-r from-[#FF1E56] from-10% via-[#FFAC41] via-50% to-[#FF1E56] to-900% ...">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;