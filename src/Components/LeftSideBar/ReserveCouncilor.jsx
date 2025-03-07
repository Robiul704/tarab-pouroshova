

const ReserveCouncilor = () => {

    const Councilors=[
        {
          "id": 1,
          "Name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg"
        },
        {
          "id": 2,
          "Name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg"
        },
        {
          "id": 3,
          "Name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg"
        }
      ]
    return (
        <div>
             <div>
             <h1 className="text-base font-bold p-2 text-cyan-600 bg-orange-400">সংরক্ষিত আসনের কাউন্সিলরবৃন্দ</h1>
           <div className="grid lg:grid-cols-3 bg-gray-200 border-2 border-black m-1 p-2 justify-center items-center gap-3">
           {
            Councilors.map(councilor=><div key={councilor.id}>
                <img className="h-20 w-26" src={councilor.image} alt="" />
                <h1 className="text-base text-black">{councilor.Name}</h1>
            </div>)
           }
           
           </div>
            </div>
        </div>
    );
};

export default ReserveCouncilor;