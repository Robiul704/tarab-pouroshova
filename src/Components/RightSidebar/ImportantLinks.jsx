import { Link } from "react-router-dom";


const ImportantLinks = () => {
    return (
        <div>
             <div>
            <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">গুরুত্বপূর্ণ লিঙ্ক</h1>
           <div className="bg-gray-200 text-black">
           <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">রাষ্ট্রপতির কার্যালয়</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">প্রধানমন্ত্রীর কার্যালয়</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">মন্ত্রীপরিষদ বিভাগ</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">বাংলাদেশ জাতীয় তথ্য বাতায়ন</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">জনপ্রশাসন মন্ত্রণালয়</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) - মন্ত্রিপরিষদ বিভাগ</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">কর্মী পরিচলন তথ্য সিস্টেম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">জন্ম নিবন্ধন যাচাই</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">পৌরসভার ওয়েব-পোর্টাল</Link>
           </div>
            </div>
        </div>
    );
};

export default ImportantLinks;