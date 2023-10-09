import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <div className="bg-gradient-to-t lg:bg-gradient-to-r from-[#FF1E56] from-10% via-[#FFAC41] via-50% to-[#FF1E56] to-900% ...">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#FF1E56',
                        color: '#fff',
                        padding: '0.5rem',
                        fontSize: '1.5rem'
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                        },
                    },
                }}
            />
        </>
    );
};

export default Root;