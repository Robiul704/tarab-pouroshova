

const Prokoushol = () => {
    const list = [
        {
          "name": "জনাব জেড এম আনোয়ার",
          "designation": "নির্বাহী প্রকৌশলী",
          "mobile": "০১৭১১২৬৭২৩০"
        },
       
      ]
    return (
        <div>
             <h1 className="text-4xl font-bold p-2 text-cyan-600 bg-orange-400">Engineering Department</h1>
               <img className="w-56 mx-auto h-72" src="https://i.ibb.co/5RNGPLC/Md-Tajul-Islam.jpg" alt="" />
               <div className="text-center my-5 items-center text-black">
                <h1 className="text-3xl ">Md. Tajul Islam</h1>
                <p> Secretary</p>
                <p>Tarabo Paurashava</p>
                <p>Phone:+88-0961773503</p>
                <p>Cell:+88-01717316390</p>
               </div>
               <div className="border-t-2">
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">
              <th>কর্মকর্তা/কর্মচারীগনের নাম</th>
              <th>	চাকুরীতে পদবী</th>
              <th>মোবাইল নম্বর</th>
            </tr>
          </thead>
          <tbody >
            {list.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td>
                  <h1 className="font-bold">{list.name}</h1>
                  </td>
                <td ><h1>{list.designation}</h1></td>
                <td><h1>{list.mobile}</h1></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        </div>
    );
};

export default Prokoushol;