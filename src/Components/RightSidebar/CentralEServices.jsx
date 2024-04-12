import { Link } from "react-router-dom";


const CentralEServices = () => {
    return (
        <div>
             <div className="pt-5">
            <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">কেন্দ্রীয় ই-সেবা</h1>
           <div className="bg-gray-200 text-black">
           <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">  Birth and Death Registration</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">Online Invoice Verification</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">Verify Visa</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">e-Tax Payment</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">Updating national identity card information</Link>
           </div>
            </div>
        </div>
    );
};

export default CentralEServices;