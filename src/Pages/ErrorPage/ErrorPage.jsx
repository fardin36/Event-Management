import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-t lg:bg-gradient-to-r from-[#FF1E56] from-10% via-[#FFAC41] via-50% to-[#FF1E56] to-900% ...">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <Link to="/" className="relative block px-8 py-3 border border-white mt-5 hover:shadow-lg">Go Home</Link>
            </main>
        </div>
    );
};

export default ErrorPage;