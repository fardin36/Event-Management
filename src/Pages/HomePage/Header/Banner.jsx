import BannerImg from '../../../assets/banner-img-1.jpg'
import GamePad from '../../../assets/game-pad.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex flex-col justify-center items-center">
                    <img className='w-64' src={GamePad} alt="" />
                    <span className='text-[#FF1E56] text-lg font-bold'>ESPORTS & GAMING</span>
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">eSports Event Management</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;