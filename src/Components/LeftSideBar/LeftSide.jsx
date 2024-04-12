import CouncilorList from "./CouncilorList";
import Mayor from "./Mayor";
import ReserveCouncilor from "./ReserveCouncilor";


const LeftSide = () => {
    return (
        <div className="px-3">
             <Mayor lassName="pt-5"></Mayor>
             <CouncilorList className="pt-5"></CouncilorList>
             <ReserveCouncilor className="pt-5"></ReserveCouncilor>
            <div className="pt-5">
              <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">ডেঙ্গু প্রতিরোধে করণীয়</h1>
                <div className="bg-gray-200 text-black">
                    <img className="w-full h-auto md:h-[600px]" src="https://i.ibb.co/kB2nChm/Hotline-BN.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftSide;