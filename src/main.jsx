
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import AkNojore from "./Pages/AkNojore/AkNojore";
import PouroshovaShortDes from "./Pages/PouroshovaShortDescription/PouroshovaShortDes";
import KormokortaKormochari from "./Pages/KormokortaKormochari/KormokortaKormochari";
import MeyorList from "./Pages/PourashovaTottho/MeyorList";
import ShangothonikKathamo from "./Pages/PourashovaTottho/ShangothonicKathamo";
import Proshashon from "./Pages/Bivag/Proshashon";
import Prokoushol from "./Pages/Bivag/Prokoushol";
import Shastho from "./Pages/Bivag/Shastho";
import Manchittro from "./Pages/PourashovaTottho/Manchittro";
import EducationalInfo from "./Pages/PourashovaTottho/EducationalInfo";
import ProdhanNirbahi from "./Pages/Jogajog/ProdhanNirbahi";
import CouncilorsProfile from "./Pages/Jogajog/CouncilorsProfile";
import Jogajog from "./Pages/Jogajog/Jogajog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/akNojore',
      element:<AkNojore></AkNojore>
     },
     {
      path:'/pouroshovaShortDes',
      element:<PouroshovaShortDes></PouroshovaShortDes>
     },
     {
      path:'/kormokortaKormochari',
      element:<KormokortaKormochari></KormokortaKormochari>
     },
     {
      path:'/meyorList',
      element:<MeyorList></MeyorList>
     },
     {
      path:'/shangothonicKathamo',
      element:<ShangothonikKathamo></ShangothonikKathamo>
     },
     {
      path:'/proshashon',
      element:<Proshashon></Proshashon>
     },
     {
      path:'/prokoushol',
      element:<Prokoushol></Prokoushol>
     },
     {
      path:'/shastho',
      element:<Shastho></Shastho>
     },
     {
      path:'/manchittro',
      element:<Manchittro></Manchittro>
     },
     {
      path:'/educationalInfo',
      element:<EducationalInfo></EducationalInfo>
     },
     {
      path:'/prodhanNirbahi',
      element:<ProdhanNirbahi></ProdhanNirbahi>
     },
     {
      path:'/councilorsProfile',
      element:<CouncilorsProfile></CouncilorsProfile>
     },
     {
      path:'/jogajog',
      element:<Jogajog></Jogajog>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);