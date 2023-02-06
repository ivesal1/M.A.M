import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from './../components/Navbar/Nav'
import Section from "../components/movie/Section";
const section = [
    {id : 1, text: '', buttonText: '' ,des:'' ,img: ''},
    {id : 1, text: '', buttonText: '' ,des:'' ,img: ''},
    {id : 1, text: '', buttonText: '' ,des:'' ,img: ''},
]
const Layout = () => {
    return (
        <>
            <div>
                <Nav/>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
