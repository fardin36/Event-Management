import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";
import Services from "./Services/Services";


const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;