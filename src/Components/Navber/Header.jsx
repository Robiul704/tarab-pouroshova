import { FaUsers } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";

const Header = () => {

    const list=[
        {
            'title':'সিটি কর্পোরেশন'
        },
        {
            'title':'সিটি কর্পোরেশন'
        },
        {
            'title':'সিটি কর্পোরেশন'
        },
        {
            'title':'সিটি কর্পোরেশন'
        },
    ]
    return (
        <div className="overflow-hidden">
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 bg-orange-400 p-2 justify-start items-center">
        <h1 className="text-cyan-600 font-bold text-xl">অনলাইন সার্টিফিকেট সিস্টেম</h1>
        <div className="text-right space-x-4">
            <button className="rounded-lg px-3 py-2 border border-cyan-600 text-cyan-600 font-bold text-xl">
                <svg className="inline-block mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fillRule="evenodd" d="M7.293 8.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 11.414V15a1 1 0 01-2 0v-3.586L5.707 12.707a1 1 0 01-1.414-1.414l3-3zM13 6a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1h3a1 1 0 010 2H4a3 3 0 01-3-3V6a3 3 0 013-3h8a3 3 0 013 3v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path></svg> ফ্রি একাউন্ট
            </button>
            <button className="rounded-lg px-3 py-2 bg-cyan-600 text-white font-bold text-xl">
                <svg className="inline-block mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fillRule="evenodd" d="M15 4a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h10zM7 10a1 1 0 112 0v1a1 1 0 11-2 0v-1zm5-4a1 1 0 100-2H8a1 1 0 100 2h4zM7 6a1 1 0 112 0v1a1 1 0 11-2 0V6zm-3 9a1 1 0 100-2h2a1 1 0 100 2H4zm5-4a1 1 0 112 0v1a1 1 0 11-2 0v-1zm5 4a1 1 0 100-2h2a1 1 0 100 2h-2z" clipRule="evenodd"></path></svg> লগইন
            </button>
        </div>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="h-32 flex lg:grid-cols-2 text-center justify-start items-center gap-3">
            <img className="h-28 w-28" src="https://i.ibb.co/FVDJBG3/image.png" alt="" />
            <h1 className="text-4xl font-bold text-cyan-600">তারাব পৌরসভা</h1>
        </div>
        <div className="h-auto rounded-lg md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-4 shadow ">
                {
                    list.map(l=>  <div key={l.title} className="flex justify-center hover:bg-orange-400 items-center gap-2 border-b border-r border-white text-white bg-cyan-600 py-3 px-3">
                    <h1 className="text-xl font-bold">১০২</h1>
                    <h1 className="text-xl">{l.title} </h1>
                </div>)
                }
            </div>
        </div>
    </div>
</div>

    );
};

export default Header;