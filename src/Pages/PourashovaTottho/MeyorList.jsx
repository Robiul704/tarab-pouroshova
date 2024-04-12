import { FaLink } from "react-icons/fa";

const MeyorList = () => {
    const list = [
        {
          "name": "জনাব হাছিনা গাজী",
          "image": "https://i.ibb.co/5jyxjD5/Mayor-Hasina-Gazi.jpg",
          "time": "২য় মেয়াদে নির্বাচিত ও বর্তমান মেয়র, তারাব পৌরসভা (০৭/০২/১৬-বর্তমান)"
        },
        {
          "name": "জনাব মোহাম্মদ শফিকুল ইসলাম চৌধুরী",
          "image": "https://i.ibb.co/nbVJjXx/Shafiqul-Islam-Chowdhury.jpg",
          "time": "মেয়র, তারাব পৌরসভা (১৫/০২/১১-০৭/০২/১৬)"
        }
      ]

    return (
        <div>
            <div>
          <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">সম্মানিত মেয়রদের তালিকা</h1>
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">
              <th>নাম</th>
              <th>	ছবি</th>
              <th>	সময়</th>
            </tr>
          </thead>
          <tbody >
            {list.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td>
                  <h1 className="font-bold">{list.name}</h1>
                  <h1>{list.time}</h1>
                  </td>
                <td ><img className="h-32 w-24" src={list.image} alt="" /></td>
                <td><h1>-</h1></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        </div>
    );
};

export default MeyorList;