

const EducationalInfo = () => {
    const governmentEdu = [
        {
          "primary": "8",
          "secondary": "-",
          "university": "-"
        }
      ]
    const privateEdu = [
        {
          "kindergarten": "8",
          "primary": "3",
          "secondary": "4",
          "university": "-",
          "technical": "9"
        }
      ]
    const madrasa = [
        {
          "dakhil": "8",
          "alim": "3",
          "fajil": "4",
          "kamil": "-",
          "hafeji": "9",
          "etimkhana": "9"
        }
      ]
    return (
        <div>
            <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">Educational Information</h1>
           
            <div className="mt-5">
            <p className="text-xl font-medium text-black">Information of government educational institutions</p>
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">
              <th>Primary school</th>
              <th>	Secondary school</th>
              <th>	University</th>
            </tr>
          </thead>
          <tbody >
            {governmentEdu.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td>
                  <h1 className="font-bold">{list.primary}</h1>
                 
                  </td>
                <td > <h1>{list.secondary}</h1></td>
                <td ><h1>{list.university}</h1></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
            <div className="my-5">
            <p className="text-xl font-medium text-black">Information of Private educational institutions</p>
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">
              <th>Kindergarten</th>
              <th>Primary school</th>
              <th>Secondary school</th>
              <th>University</th>
              <th>Technical institution</th>
            </tr>
          </thead>
          <tbody >
            {privateEdu.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td><h1 className="font-bold">{list.kindergarten}</h1></td>
                <td><h1 className="font-bold">{list.primary}</h1></td>
                <td><h1 className="font-bold">{list.secondary}</h1></td>
                <td><h1 className="font-bold">{list.university}</h1></td>
                <td><h1 className="font-bold">{list.technical}</h1></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
            <div >
            <p className="text-xl font-medium text-black">Information of Madrasa</p>
          <div className="overflow-hidden">
        <table className="table  text-black">
          <thead className='text-black'>
            <tr className="hover:bg-slate-100">
              <th>Dakhil</th>
              <th>Alim</th>
              <th>Fajil</th>
              <th>Kamil</th>
              <th>Hafeji Madrasa</th>
              <th>Etim Khana</th>
            </tr>
          </thead>
          <tbody >
            {madrasa.map((list, index) => (
              <tr className="hover:bg-slate-100" key={index}>
                <td><h1 className="font-bold">{list.dakhil}</h1></td>
                <td><h1 className="font-bold">{list.alim}</h1></td>
                <td><h1 className="font-bold">{list.kamil}</h1></td>
                <td><h1 className="font-bold">{list.hafeji}</h1></td>
                <td><h1 className="font-bold">{list.fajil}</h1></td>
                <td><h1 className="font-bold">{list.etimkhana}</h1></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        </div>
    );
};

export default EducationalInfo;