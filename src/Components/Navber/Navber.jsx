

import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import Headline from "../Headline/Headline";
import { FaHome } from "react-icons/fa";
const NavBar = () => {

  const links=<>
            <li className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  }>
              <details className="dropdown">
                    <summary className="m-1  z-50">পৌরসভা তথ্য</summary>
              <ul className="p-2  z-[50] bg-zinc-100 rounded-box w-52">
                     
                      <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/meyorList'}>
                      <li><a>সম্মানিত মেয়রদের তালিকা</a></li>
                       </Link>
                        <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/pouroshovaShortDes'}>
                        <li><a>পৌরসভার সংক্ষিপ্ত বিবরন</a></li>
                       </Link>
                        <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/shangothonicKathamo'}>
                        <li><a>পৌরসভার সাংগঠনিক কাঠামো</a></li>
                       </Link>
                       <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/kormokortaKormochari'}>
                       <li><a>পৌরসভার কর্মকর্তা ও কর্মচারী</a></li>
                       </Link>
                       <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/manchittro'}>
                       <li><a>পৌরসভার মানচিত্র</a></li>
                       </Link>
                       <Link className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={'/educationalInfo'}>
                       <li><a>শিক্ষা বিষয়ক তথ্য</a></li>
                       </Link>
                        
               </ul>
             </details>
            </li>
            <li className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  }>
               <NavLink to={"/akNojore"}> এক নজরে </NavLink>
            </li>

                <li className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  }>
              <details className="dropdown">
                    <summary className="m-1 "> বিভাগ</summary>
              <ul className="p-2  z-[50] bg-zinc-100  w-52">
                        
                        <Link className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                              } to={'/proshashon'}>
                             <li><a>প্রশাসন বিভাগ</a></li>
                       </Link>

                        <Link className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                              } to={'/prokoushol'}>
                             <li><a>প্রকৌশল বিভাগ</a></li>
                       </Link>

                        <Link className={({ isActive, isPending }) =>
                               isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                               } to={'/shastho'}>
                               <li><a>স্বাস্থ্য বিভাগ</a></li>
                       </Link>
                       
                </ul>
                   </details>
                        </li>

                         <li className={({ isActive, isPending }) =>
                               isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                                }>
         <details className="dropdown">
              <summary className="m-1 "> যোগাযোগ</summary>
                  <ul className="p-2   z-[50] bg-zinc-100  w-52">
                     
                        <Link className={({ isActive, isPending }) =>
                               isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                               } to={'/jogajog'}>
                               <li><a>যোগাযোগ</a></li>
                       </Link>

                        <Link className={({ isActive, isPending }) =>
                               isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                               } to={'/councilorsProfile'}>
                               <li><a>মেয়রের প্রোফাইল এবং সংযোগ</a></li>
                       </Link>

                        <Link className={({ isActive, isPending }) =>
                               isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                               } to={'/councilorsProfile'}>
                               <li><a>কাউন্সিলরদের প্রোফাইল এবং সংযোগ</a></li>
                       </Link>

                        <Link className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
                              } to={'/prodhanNirbahi'}>
                              <li><a>প্রধান নির্বাহী কর্মকর্তার প্রোফাইল এবং সংযোগ</a></li>
                       </Link>
               </ul>
             </details>
            </li>

            <li>
               <NavLink className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-orange-400" : ""
                  } to={"/akNojore"}> সিটিজেন চার্টার 
                  </NavLink>
            </li>
            <li >
               <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : ""
  } to={"/akNojore"}> নোটিশ </NavLink>
            </li>
            <li >
               <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  }  to={"/akNojore"}> সামাজিক সুরক্ষা </NavLink>
            </li>
            <li >
               <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-orange-400" : "bg-orange-400"
  } to={"http://digitalmunicipality.gov.bd"}> ডিজিটাল সেবা </NavLink>
            </li>
            </>

  return (
   <div>
                   <div>
                    <Header></Header>
                   </div>
    <div className="navbar bg-zinc-100 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[50] p-2 shadow  rounded-box w-52">

       {links}
      </ul>


    </div>
    <div className="navbar-start text-3xl ">
<Link to={'/'}>
<FaHome></FaHome>
</Link>
</div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
<div className="navbar-end text-3xl lg:hidden">
<Link to={'/'}>
<FaHome></FaHome>
</Link>
</div>
  
</div>
    <Headline></Headline>
   </div>
  );
};
export default NavBar;