import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, image, name, price, short_description, } = service;

    return (
        <div className="max-w-sm md:min-h-96 shadow bg-[#FF1E56]">
            <div>
                <img className="h-56" src={image} alt="" />
            </div>
            <div className="p-5 flex flex-col">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
                <p className="mb-3 font-normal flex-grow">{short_description}</p>
                <div className='flex justify-between items-center'>
                    <span className='font-bold text-xl'>{price}</span>
                    <Link to={`/detail/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFAC41] hover:bg-[#ffad41b2]">
                        Details
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}


export default Service;