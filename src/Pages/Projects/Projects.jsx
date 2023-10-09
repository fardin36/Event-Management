import lol from '../../assets/leage-of-legend.jpg'
import intelEM from '../../assets/intel-extreme-master.jpg'
import fontnite from '../../assets/fortnite-world-cup.jpg'
import ff from '../../assets/free-fire-world-series.jpg'
import overwatch from '../../assets/overwatch.jpg'
import midSeason from '../../assets/mid-season.jpg'

const Projects = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-black">
                <div className="container px-5 py-10 lg:py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-5xl font-medium title-font mb-4 text-[#FF1E56] font-blackops">PROJECTS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">WE MADE POSSIBLE</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={lol} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">League of Legends World Cup</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={intelEM} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">Intel Extreme Masters</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={fontnite} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">Fortnite World Cup</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ff} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">Free Fire</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={overwatch} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">OverWatch world cup</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={midSeason} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#FF1E56] bg-black opacity-0 hover:opacity-90">
                                    <h1 className="title-font text-lg font-semibold text-[#FF1E56] mb-3">Mid-Season Invitational</h1>
                                    <p className="leading-relaxed text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;