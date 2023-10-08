import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Details = () => {

    const { id } = useParams();

    const services = useLoaderData();
    const service = services.find(service => service.id == id);


    const { name, image, price, short_description } = service;

    return (
        <section className="bg-black min-h-screen flex justify-center items-center">

            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-wide text-[#FF1E56] lg:text-5xl">
                            {name}
                        </h1>
                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[0]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[1]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[2]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[3]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[4]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[5]}</span>
                            </p>
                            <p className="flex items-center -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="mx-2">{service.details[6]}</span>
                            </p>
                        </div>
                        <Link to={'/'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFAC41] hover:bg-[#ffad41b2] mt-3"><FaLongArrowAltLeft></FaLongArrowAltLeft><span className="pl-3">Go Back</span></Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={image} alt="glasses photo" />
                </div>
            </div>
        </section>
    );
};

export default Details;