import { Link } from "react-router-dom";


const ImportantApply = () => {
    return (
        <div>
             <div>
            <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">গুরুত্বপূর্ণ আবেদনপত্র</h1>
           <div className="bg-gray-200 text-black">
           <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">      জন্ম নিবন্ধন ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">মৃত্যু নিবন্ধন ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">মৃত্যু সনদ ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">জন্ম/মৃত্যু সনদ বাতিল/সংশোধনের আবেদনপত্র</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">বিদ্যুৎ প্রত্যয়ন ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">পরিবেশগত ছারপত্র ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">পরিবেশগত অনাপত্তি ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">ইমারত নকশা অনুমোদন ফরম-১</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">ইমারত নকশা অনুমোদন ফরম-২</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">হোল্ডিং নাম্বার ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">অবস্থানগত অনাপত্তি (এন.ও.সি)ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">প্রিমেসি লাইসেন্স ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">উত্তরাধিকার সনদ ফরম</Link>
            <Link className="border hover:bg-gray-200 border-gray-300 bg-white inline-block w-full py-2 px-1 ">ট্রেড লাইসেন্স অ্যাপ্লিকেশান ফরম</Link>
           </div>
            </div>
        </div>
    );
};

export default ImportantApply;