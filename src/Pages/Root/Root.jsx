import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <div className="bg-gradient-to-t lg:bg-gradient-to-r from-[#FF1E56] from-10% via-[#FFAC41] via-50% to-[#FF1E56] to-900% ...">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Root;