import Marquee from "react-fast-marquee";
import CentralEServices from "./CentralEServices";
import ImportantLinks from "./ImportantLinks";


const RightSidebar = () => {
    const marque=[
        {
            "title":"২৭-১১-২০১৯ তারাব পৌরসভায় স্মার্ট জাতীয় পরিচয়পত্র বিতরন সময়সূচীসূচী"
        },
        {
            "title":"২৭-১১-২০১৯ পৌরসভার সকল নাগরিক সুবিধা অনলাইনে পেতে Digital Paurashava.gov.bd তে নিবন্ধন করুন"
        },
        {
            "title":"০৬-১২-২০১৯ তারাব পৌরসভার স্যানিটেশন সংক্রান্ত নোটিশ"
        },
        {
            "title":"২৩-১২-২০১৯ জনাব মোঃ নজরুল ইসলাম এর আন্তর্জাতিক পাসপোর্ট নবায়ন এর অনাপত্তি পত্র"
        },
        {
            "title":"১৬-০২-২০২০ তারাব পৌরসভার নিয়োগ বিজ্ঞপ্তি"
        },
        {
            "title":"০২-০৭-২০২০ তারাব পৌরসভার পুনঃ নিয়োগ বিজ্ঞপ্তি"
        },
        {
            "title":"২৭-০৮-২০২০ Job Advertisement for Field Supervisor of GOB-UNICEF supported WASH project of Tarabo Municipality"
        },
        {
            "title":"২৫-০৯-২২ শহর সমন্বয় কমিটি সভায় অংশগ্রহন সম্পর্কিত নোটিশ ০৭ নভেম্বর"
        },
        {
            "title":"১১-০২-২০২৪ চাকুরির আবেদন ফরম"
        },
    ]
    return (
        <div className="px-3">
              <img  className="w-full bg-white h-[200px]" src="https://i.ibb.co/2ZM4jWz/Mujib-100-Logo-svg.png" alt="" />
              <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">আপডেট নোটিশ</h1>
            <div className="border-2 border-black m-1">
               <Marquee className="text-black text-start" >
                  {
                   marque.map(m=>  <h1 key={m.title}>{m.title}</h1>)
                  }   
              </Marquee>
            </div>
           <ImportantLinks></ImportantLinks>
           <CentralEServices></CentralEServices>
            <div className="pt-5">
               <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">ডিজিটাল বাংলাদেশ দিবস ২০১৯</h1>
                 <div className="bg-gray-200 text-black">
                   <img  className="w-full h-[500px]" src="https://i.ibb.co/wY5cGZS/19cb4cb3a31aa03da11d66ce8224e4a4.jpg" alt="" />
                 </div>
            </div>
            <div className="pt-5">
                <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">ডেঙ্গু প্রতিরোধে করণীয়</h1>
                <div className="bg-gray-200 text-black">
                    <img  className="w-full h-[300px]" src="https://i.ibb.co/D7ydqnY/dengu.jpg" alt="" />
                 </div>
            </div>

        </div>
    );
};

export default RightSidebar;