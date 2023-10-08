import PropTypes from 'prop-types';
import Service from './Service';

const Services = ({ services }) => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-5 bg-[#323232] py-20'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array
}

export default Services;