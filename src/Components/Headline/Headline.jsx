import Marquee from "react-fast-marquee";

const Headline = () => {
    return (
        <div className="flex justify-start items-center px-3">
            <h1 className="bg-cyan-600 text-white py-3 px-2 tex-4xl font-bold">স্বাগতম</h1>
            <Marquee className="space-x-10 text-cyan-600 bg-sky-100 py-3">
            <p className="mx-5">আপনার পৌর কর নিয়মিত পরিশোধ করুন</p> 
            <p className="mx-5"> মাদক মুক্ত সমাজ গঠন করুন </p> 
            <p className="mx-5">যে কোন স্থাপনা নির্মাণের জন্য পৌরসভার অনুনুমোদন গ্রহন করুন এবং পরিকল্পিত নগরায়ণে সহায়তা করুন </p> 
            <p className="mx-5">আবর্জনা সঠিক স্থানে ফেলুন  </p> 
            <p className="mx-5">
                  আপনার সন্তানের জন্ম নিবন্ধন সম্পন্ন করুন  </p> 
            <p className="mx-5"> সময়মতো পানির বিল পরিশোধ করুন </p> 
            <p className="mx-5">  আপনার পৌরসভাকে পরিচ্ছন্ন রাখুন </p> 
          </Marquee>
        </div>
    );
};

export default Headline;