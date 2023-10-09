import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

    const [registerEerror, setRegisterError] = useState(null);

    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('');


        // regular expressions to validate password
        const lowerCase = /[a-z]/g;
        const upperCase = /[A-Z]/g;
        if (!password.match(lowerCase)) {
            setRegisterError("Password should contains lowercase letters!");
            return;
        }
        else if (!password.match(upperCase)) {
            setRegisterError("Password should contain uppercase letters!");
            return;
        }
        else if (password.length < 6) {
            setRegisterError("Password length should be more than 5.");
            return;
        }
        else {
            setRegisterError("Password is strong!");
        }


        // create user using email & pass
        createUser(email, password)
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setRegisterError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('failed to log in!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('failed to log in!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }


    return (
        <div className="w-full md:w-8/12 lg:w-4/12 px-4 mx-auto pt-6 min-h-screen flex justify-center items-center lg:pt-10">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                        <h6 className="text-sm font-bold">
                            Register with
                        </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                        <button onClick={handleGithubSignIn} className="bg-white text-black px-4 py-2 outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button"><img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github</button>

                        <button onClick={handleGoogleSignIn} className="bg-white text-black px-4 py-2 outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button"><img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google </button>

                    </div>
                    <hr className="mt-6 border-b-1" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-center mb-3 font-bold">
                        <small>Or register using email & password</small>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-xs font-bold mb-2">Name</label><input type="text" name="name" className="border-0 px-3 py-3 text-black bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name" required />
                        </div>
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-xs font-bold mb-2">Email</label><input type="email" name="email" className="border-0 px-3 py-3 text-black bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" required />
                        </div>
                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-xs font-bold mb-2">Password</label><input type="password" name="password" className="border-0 px-3 py-3 text-black bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" required />
                        </div>
                        <div className="text-center font-bold text-lg text-red-600">
                            <small>
                                {
                                    registerEerror
                                }
                            </small>
                        </div>
                        <div className="text-center mt-6">
                            <button className="bg-white bg-opacity-5 text-white text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Register </button>
                        </div>
                    </form>
                    <hr className="my-3 border-b-1 border-blueGray-300" />
                    <div className="text-center mb-3 font-bold text-lg">
                        <small>already have an account? <Link className="text-blue-700 hover:link" to={'/login'}>login</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;