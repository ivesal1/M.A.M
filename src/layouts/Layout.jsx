import { Outlet } from "react-router-dom";
import Nav from './../components/Navbar/Nav'
const Layout = () => {
    return (
        <>
            <div>
                <Nav/>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
