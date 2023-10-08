
const Survey = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-black">
            <h1 className="text-center font-bold text-4xl mb-2">eSports & Gaming</h1>
            <h4 className="text-center text-xl md:text-2xl text-[#FF1E56] mb-10 lg:mb-28">Overview of this world in numbers</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-7 lg:gap-20">
                <div>
                    <h5 className="text-6xl md:text-5xl lg:text-7xl font-extrabold font-blackops flex items-start text-[#FF1E56]">3.24<sup className="text-2xl lg:text-3xl font-bold font-blackops text-[#FFAC41]">bln</sup></h5>
                    <p className="font-semibold text-lg lg:text-xl">Daily gamers globally</p>
                </div>
                <div>
                    <h5 className="text-6xl md:text-5xl lg:text-7xl font-extrabold font-blackops flex items-start text-[#FF1E56]">18.22<sup className="text-2xl lg:text-3xl font-bold font-blackops text-[#FFAC41]">mln</sup></h5>
                    <p className="font-semibold text-lg lg:text-xl">Daily stream viewers</p>
                </div>
                <div>
                    <h5 className="text-6xl md:text-5xl lg:text-7xl font-extrabold font-blackops flex items-start text-[#FF1E56]">1.48<sup className="text-2xl lg:text-3xl font-bold font-blackops text-[#FFAC41]">bln USD</sup></h5>
                    <p className="font-semibold text-lg lg:text-xl">Global esports market</p>
                </div>
            </div>
        </div>
    );
};

export default Survey;