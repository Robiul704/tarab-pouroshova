

const Shastho = () => {
    const list = [
        {
          "male": "81,088",
          "lastname": "69,621",
          "total": "1,50,709",
          "department": "30%"
        },	
      ]
    return (
        <div>
             <h1 className="text-4xl font-bold p-2 text-cyan-600 bg-orange-400">Health Department</h1>
             <h1 className="text-4xl font-bold my-2 p-2 text-cyan-600 bg-orange-400">Birth & Death Information</h1>
             <h1 className="text-4xl font-bold p-2 text-cyan-600 bg-orange-400">Conservency Information</h1>
             <h1 className="text-4xl font-bold my-2 p-2 text-cyan-600 bg-orange-400">Population</h1>

             <div className="border-t-2">
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">	
              <th> Male</th>
              <th>	Lastname</th>
              <th>Total</th>
              <th>% of Health Department</th>
            </tr>
          </thead>
          <tbody >
            {list.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td>
                  <h1 className="font-bold">{list.male}</h1>
                  </td>
                <td ><h1>{list.lastname}</h1></td>
                <td><h1>{list.total}</h1></td>
                <td><h1>{list.department}</h1></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        <h1 className="text-4xl font-bold my-2 p-2 text-cyan-600 bg-orange-400">Others</h1>

        </div>
    );
};

export default Shastho;