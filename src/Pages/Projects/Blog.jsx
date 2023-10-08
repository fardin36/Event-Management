import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'
import blog4 from '../../assets/blog-4.jpg'
import blog5 from '../../assets/blog-5.jpg'
import blog6 from '../../assets/blog-6.jpg'


const Blog = () => {
    return (
        <section className="min-h-screen">
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog1} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Rainbow Six’s Stage 2 leagues maintain solid foundations laid by predecessorrainbow-6
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 06 October 2023</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog2} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                On the way to 100 million hours of watch time — MPL Indonesia Season 12 viewership forecast
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2023</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog3} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                CS:GO makes way for CS2 — the game’s legacy, most popular events, and watch time dynamics
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2024</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog4} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                TSM viewership legacy and history in North Americalol TSM viewership legacy and history in North America
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2023</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog5} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Substantial changes to the LEC format are mirrored by a rapidly changing live-streaming domain
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog6} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                CS:GO makes way for CS2 — the game’s legacy, most popular events, and watch time dynamics
                            </a>

                            <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;