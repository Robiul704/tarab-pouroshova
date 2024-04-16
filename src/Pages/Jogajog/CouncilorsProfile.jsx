

const CouncilorsProfile = () => {
    const Councilors=[
        {
          "_id": 1,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"1",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 2,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"2",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 3,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"3",
          "mobile":"০১৭১২২৪৬০৫১"
        },
       
      ]
    const reservedCouncilor=[
        {
          "_id": 1,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"1",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 2,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"2",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 3,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"3",
          "mobile":"০১৭১২২৪৬০৫১"
        },
       
      ]
    const mayorPannel=[
        {
          "_id": 1,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"1",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 2,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"2",
          "mobile":"০১৭১২২৪৬০৫১"
        },
        {
          "_id": 3,
          "name": "সুলতানা কামাল",
          "image": "https://i.ibb.co/YPRwfNP/images.jpg",
          "word":"3",
          "mobile":"০১৭১২২৪৬০৫১"
        },
       
      ]
    return (
        <div className="my-3">
           <h1 className="text-2xl font-bold p-2 text-cyan-600 bg-orange-400">Councillors of Tarabo Paurashava</h1>
           {Councilors.map(c=> <div className="my-3 border-2 hover:bg-slate-200" key={c._id}>
            <div className="grid text-black lg:grid-cols-4 justify-center items-start gap-3">
            <img className="ml-3 my-1" src={c.image} alt="" />
                <h1 className="text-xl">{c.name}</h1>
                <h1 className="text-xl">Counselor Word No.:{c.word}</h1>
                <h1 className="text-xl">{c.mobile}</h1>
            </div>
               
            </div>)}

            {/* reserved councilor */}

           <h1 className="text-2xl font-bold p-2 text-cyan-600 bg-orange-400">Reserve Seat Councillor</h1>
           {reservedCouncilor.map(c=> <div className="my-3 border-2 hover:bg-slate-200" key={c._id}>
            <div className="grid text-black lg:grid-cols-4 justify-center items-start gap-3">
            <img className="ml-3 my-1" src={c.image} alt="" />
                <h1 className="text-xl">{c.name}</h1>
                <h1 className="text-xl">Counselor Word No.:{c.word}</h1>
                <h1 className="text-xl">{c.mobile}</h1>
            </div>
               
            </div>)}

            {/* Panel Mayor */}

           <h1 className="text-2xl font-bold p-2 text-cyan-600 bg-orange-400">Panel Mayor</h1>
           {mayorPannel.map(c=> <div className="my-3 border-2 hover:bg-slate-200" key={c._id}>
            <div className="grid text-black lg:grid-cols-4 justify-center items-start gap-3">
            <img className="ml-3 my-1" src={c.image} alt="" />
                <h1 className="text-xl">{c.name}</h1>
                <h1 className="text-xl">Counselor Word No.:{c.word}</h1>
                <h1 className="text-xl">{c.mobile}</h1>
            </div>
               
            </div>)}

        </div>
    );
};

export default CouncilorsProfile;