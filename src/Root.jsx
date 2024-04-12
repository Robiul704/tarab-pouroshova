import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import LeftSide from "./Components/LeftSideBar/LeftSide";


const Root = () => {
    return (
        <div className="bg-white min-w-7xl  mx-auto">
            <NavBar></NavBar>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-2">
    <div className="rounded-lg px-3 bg-white  sm:order-1 lg:order-2 lg:col-span-2">
        <Outlet ></Outlet>
    </div>
    <div className="rounded-lg bg-white sm:order-2 lg:order-1 lg:col-span-1">
        <LeftSide></LeftSide>
    </div>
    <div className="rounded-lg bg-white sm:order-3  lg:order-3">
        <RightSidebar></RightSidebar>
    </div>
</div>


            <Footer className='overflow-hidden'></Footer>
        </div>
    );
};

export default Root;