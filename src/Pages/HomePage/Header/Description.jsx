import DemoVideo from '../../../assets/demo-video.mp4'


const Description = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-7 items-center p-5 md:p-28 min-h-screen'>
            <div className='w-full lg:w-1/2'>
                <h3 className='text-3xl md:text-5xl text-center md:text-left'>Life is Gaming!</h3>
                <p className='text-base md:text-lg text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui ducimus assumenda molestias maiores nisi quae totam! Alias odit laborum obcaecati quasi quibusdam inventore aliquid reprehenderit nemo magni maiores rerum ex eius iusto quas provident mollitia nobis laudantium natus eos assumenda cumque, quis, et, maxime porro. Cupiditate eum reiciendis consequuntur.</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <video className="w-full" src={DemoVideo} autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Description;