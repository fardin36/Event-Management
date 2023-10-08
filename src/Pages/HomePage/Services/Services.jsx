import PropTypes from 'prop-types';
import Service from './Service';

const Services = ({ services }) => {
    return (
        <div>
            <h1 className='font-bold text-center text-4xl mt-10'>Sit back and relax - we will do everything for you</h1>
            <div className='flex justify-center items-center flex-wrap gap-5 py-10'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array
}

export default Services;