import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out!');
            })
            .catch(() => {

            });
    }

    const navList = <>
        <li className="text-xl font-semibold border-b-4 border-transparent hover:border-white">
            <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active border-b-4 border-[#FF1E56]" : ""
                }
            >Home</NavLink>
        </li>
        <li className="text-xl font-semibold border-b-4 border-transparent hover:border-white">
            <NavLink
                to={'/projects'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active border-b-4 border-[#FF1E56]" : ""
                }
            >Projects</NavLink>
        </li>
        <li className="text-xl font-semibold border-b-4 border-transparent hover:border-white">
            <NavLink
                to={'/blog'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active border-b-4 border-[#FF1E56]" : ""
                }
            >Blog</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-black lg:bg-opacity-70 text-white lg:fixed z-10">
            <div className="navbar-start">
                <a className="normal-case text-2xl md:text-3xl font-extrabold font-blackops" href="/"><span className="text-[#FF1E56] normal-case text-2xl md:text-3xl font-extrabold font-blackops">Arena</span>Sync</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-3">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-sm text-white border-none bg-[#FF1E56] hover:text-[#FF1E56] hover:bg-white normal-case rounded-none text-lg">Logout</button>
                        :
                        <Link className="btn btn-sm text-white border-none bg-[#FF1E56] hover:text-[#FF1E56] hover:bg-white normal-case rounded-none text-lg" to={'/login'}>Login</Link>
                }
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col justify-center items-start gap-3 dropdown-content mt-3 z-[100] p-2 shadow bg-black w-52 right-0">
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;